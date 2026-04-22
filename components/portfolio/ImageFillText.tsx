'use client';

import { useRef, useEffect, useCallback } from 'react';
import { useScroll } from 'motion/react';

const CANVAS_W = 700;
const CANVAS_H = Math.round(CANVAS_W * (9 / 16));
const FONT_SIZE = Math.round(CANVAS_W * 0.024);
const LINE_HEIGHT = FONT_SIZE * 1.65;
const PADDING_X = CANVAS_W * 0.08;
const MAX_TEXT_W = CANVAS_W - PADDING_X * 2;
const FONT_STR = `500 ${FONT_SIZE}px Kanit, sans-serif`;
const FALLBACK_FILL = '#FFE0D0';

function clamp(v: number, lo: number, hi: number) {
  return Math.min(hi, Math.max(lo, v));
}

interface CharPos {
  char: string;
  x: number;
  y: number;
  index: number;
}

function buildPositions(ctx: CanvasRenderingContext2D, text: string): CharPos[] {
  ctx.font = FONT_STR;

  const words = text.split(' ');
  const lines: string[] = [];
  let line = '';

  for (const word of words) {
    const test = line ? `${line} ${word}` : word;
    if (ctx.measureText(test).width > MAX_TEXT_W && line) {
      lines.push(line);
      line = word;
    } else {
      line = test;
    }
  }
  if (line) lines.push(line);

  const totalH = lines.length * LINE_HEIGHT;
  let y = (CANVAS_H - totalH) / 2;
  const positions: CharPos[] = [];
  let idx = 0;

  for (const lineText of lines) {
    const lineW = ctx.measureText(lineText).width;
    let x = (CANVAS_W - lineW) / 2;
    for (const char of lineText) {
      positions.push({ char, x, y, index: idx++ });
      x += ctx.measureText(char).width;
    }
    y += LINE_HEIGHT;
  }

  return positions;
}

export function ImageFillText({ text, imageSrc }: { text: string; imageSrc: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainCanvasRef = useRef<HTMLCanvasElement>(null);
  const maskCanvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const scrollRef = useRef(0);
  const charPosRef = useRef<CharPos[]>([]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const drawFrame = useCallback(() => {
    const main = mainCanvasRef.current;
    const mask = maskCanvasRef.current;
    if (!main || !mask) return;

    const mCtx = main.getContext('2d');
    const maskCtx = mask.getContext('2d');
    if (!mCtx || !maskCtx) return;

    if (charPosRef.current.length === 0) {
      charPosRef.current = buildPositions(maskCtx, text);
    }

    const chars = charPosRef.current;
    const total = chars.length;
    const progress = scrollRef.current;

    // Mask canvas: transparent bg, white text at scroll-driven alpha
    maskCtx.clearRect(0, 0, CANVAS_W, CANVAS_H);
    maskCtx.globalCompositeOperation = 'source-over';
    maskCtx.font = FONT_STR;
    maskCtx.textBaseline = 'top';
    maskCtx.fillStyle = 'white';

    for (const { char, x, y, index } of chars) {
      const start = index / total;
      const end = Math.min(start + 2 / total, 1);
      const range = Math.max(end - start, 0.001);
      maskCtx.globalAlpha = clamp((progress - start) / range, 0.15, 1);
      maskCtx.fillText(char, x, y);
    }
    maskCtx.globalAlpha = 1;

    // Main canvas: draw image (or fallback fill), clip to mask
    mCtx.clearRect(0, 0, CANVAS_W, CANVAS_H);
    const img = imageRef.current;
    if (img && img.naturalWidth > 0) {
      mCtx.drawImage(img, 0, 0, CANVAS_W, CANVAS_H);
    } else {
      mCtx.fillStyle = FALLBACK_FILL;
      mCtx.fillRect(0, 0, CANVAS_W, CANVAS_H);
    }
    mCtx.globalCompositeOperation = 'destination-in';
    mCtx.drawImage(mask, 0, 0, CANVAS_W, CANVAS_H);
    mCtx.globalCompositeOperation = 'source-over';
  }, [text]);

  // Preload image and draw once ready
  useEffect(() => {
    const img = new Image();
    const handleLoad = () => {
      imageRef.current = img;
      drawFrame();
    };
    const handleError = () => {
      imageRef.current = null;
      drawFrame();
    };
    img.onload = handleLoad;
    img.onerror = handleError;
    img.src = imageSrc;
    if (img.complete && img.naturalWidth > 0) handleLoad();
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [imageSrc, drawFrame]);

  // Redraw on scroll change instead of continuous rAF
  useEffect(() => {
    const unsub = scrollYProgress.on('change', (v) => {
      scrollRef.current = v;
      drawFrame();
    });
    drawFrame(); // initial render
    return unsub;
  }, [scrollYProgress, drawFrame]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        aspectRatio: '16/9',
        maxWidth: CANVAS_W,
        margin: '0 auto',
        width: '100%',
      }}
    >
      <canvas ref={maskCanvasRef} width={CANVAS_W} height={CANVAS_H} style={{ display: 'none' }} />
      <canvas
        ref={mainCanvasRef}
        width={CANVAS_W}
        height={CANVAS_H}
        style={{ width: '100%', height: '100%', display: 'block' }}
      />
    </div>
  );
}
