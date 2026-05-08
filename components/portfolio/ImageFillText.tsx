'use client';

import { useRef, useEffect, useCallback } from 'react';
import { useScroll } from 'motion/react';

const MAX_W = 700;
const ASPECT = 0.75;
const FONT_RATIO = 0.044;
const LINE_HEIGHT_RATIO = 1.65;
const PADDING_RATIO = 0.08;
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

function buildPositions(
  ctx: CanvasRenderingContext2D,
  text: string,
  w: number,
  h: number,
): CharPos[] {
  const fontSize = Math.round(w * FONT_RATIO);
  const lineHeight = fontSize * LINE_HEIGHT_RATIO;
  const maxTextW = w - w * PADDING_RATIO * 2;
  const fontStr = `500 ${fontSize}px Kanit, sans-serif`;

  ctx.font = fontStr;

  const words = text.split(' ');
  const lines: string[] = [];
  let line = '';

  for (const word of words) {
    const test = line ? `${line} ${word}` : word;
    if (ctx.measureText(test).width > maxTextW && line) {
      lines.push(line);
      line = word;
    } else {
      line = test;
    }
  }
  if (line) lines.push(line);

  const totalH = lines.length * lineHeight;
  let y = (h - totalH) / 2;
  const positions: CharPos[] = [];
  let idx = 0;

  for (const lineText of lines) {
    const lineW = ctx.measureText(lineText).width;
    let x = (w - lineW) / 2;
    for (const char of lineText) {
      positions.push({ char, x, y, index: idx++ });
      x += ctx.measureText(char).width;
    }
    y += lineHeight;
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
  const canvasSizeRef = useRef({ w: 700, h: Math.round(700 * ASPECT) });

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

    const { w, h } = canvasSizeRef.current;
    const fontSize = Math.round(w * FONT_RATIO);
    const fontStr = `500 ${fontSize}px Kanit, sans-serif`;

    if (charPosRef.current.length === 0) {
      charPosRef.current = buildPositions(maskCtx, text, w, h);
    }

    const chars = charPosRef.current;
    const total = chars.length;
    const progress = scrollRef.current;

    maskCtx.clearRect(0, 0, w, h);
    maskCtx.globalCompositeOperation = 'source-over';
    maskCtx.font = fontStr;
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

    mCtx.clearRect(0, 0, w, h);
    const img = imageRef.current;
    if (img && img.naturalWidth > 0) {
      mCtx.drawImage(img, 0, 0, w, h);
    } else {
      mCtx.fillStyle = FALLBACK_FILL;
      mCtx.fillRect(0, 0, w, h);
    }
    mCtx.globalCompositeOperation = 'destination-in';
    mCtx.drawImage(mask, 0, 0, w, h);
    mCtx.globalCompositeOperation = 'source-over';
  }, [text]);

  const resizeCanvases = useCallback((displayW: number) => {
    const w = Math.round(displayW * window.devicePixelRatio);
    const h = Math.round(w * ASPECT);
    const main = mainCanvasRef.current;
    const mask = maskCanvasRef.current;
    if (!main || !mask) return;
    main.width = w;
    main.height = h;
    mask.width = w;
    mask.height = h;
    canvasSizeRef.current = { w, h };
    charPosRef.current = [];
  }, []);

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

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      resizeCanvases(entry.contentRect.width);
      drawFrame();
    });

    observer.observe(container);
    resizeCanvases(container.clientWidth || 700);
    drawFrame();

    return () => observer.disconnect();
  }, [resizeCanvases, drawFrame]);

  useEffect(() => {
    const unsub = scrollYProgress.on('change', (v) => {
      scrollRef.current = v;
      drawFrame();
    });
    drawFrame();
    return unsub;
  }, [scrollYProgress, drawFrame]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        aspectRatio: `1 / ${ASPECT}`,
        maxWidth: MAX_W,
        margin: '0 auto',
        width: '100%',
      }}
    >
      <canvas ref={maskCanvasRef} style={{ display: 'none' }} />
      <canvas
        ref={mainCanvasRef}
        style={{ width: '100%', height: '100%', display: 'block' }}
      />
    </div>
  );
}
