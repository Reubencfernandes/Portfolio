'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { LiveProjectButton } from '../LiveProjectButton';
import { FadeIn } from '../FadeIn';

type Project = {
  id: string;
  title: string;
  description: string;
  image?: string;
  videoId?: string;
  embedUrl?: string;
  liveUrl: string;
};

const projects: Project[] = [
  {
    id: '01',
    title: 'Konkani AI',
    description: 'An AI platform designed to support, translate, and understand the Indian low-resource language called Konkani.',
    videoId: '8K04ylbXh6k',
    liveUrl: 'https://reuben-fernandes.xyz',
  },
  {
    id: '02',
    title: 'Cohere AYA Mobile',
    description: 'A mobile application that uses the Cohere AYA Expanse model via API to translate, chat, and capture info about images.',
    videoId: '3o4iHBwJyGw',
    liveUrl: 'https://play.google.com/store/apps/dev?id=7189799619389857108',
  },
  {
    id: '03',
    title: 'Nano Banana',
    description: 'A powerful node-based image editor inspired by ComfyUI. It allows users to feed in images and build custom visual workflows to manipulate poses, heavily modify lighting, and completely transform image styles.',
    videoId: 'K3Sq1er_tuE', // Add your YouTube/video ID here
    liveUrl: 'https://huggingface.co/spaces/Reubencf/Nano_Banana_Editor', // Add the live URL here if you have one
  },
  {
    id: '04',
    title: 'PowerPoint AI',
    description: 'A service that lets you create PowerPoint presentations from a single AI prompt.',
    image: '/powerpoint.png',
    liveUrl: 'https://huggingface.co/spaces/Reubencf/Powerpoint_AI',
  },
  {
    id: '05',
    title: 'Multi Model Dataset',
    description: 'A comprehensive collection of datasets created across text, images, audio, and video modalities.',
    image: '/HF.png',
    liveUrl: 'https://huggingface.co/spaces/Reubencf/dataset-explorer',
  },
];

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // As the container scrolls (0 = top hits viewport top, 1 = bottom hits
  // viewport bottom), earlier cards shrink slightly so the stack reads as
  // layered. Transforms are written directly to the DOM to avoid re-renders.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let raf = 0;
    const total = projects.length;
    const update = () => {
      raf = 0;
      const rect = container.getBoundingClientRect();
      const denom = rect.height - window.innerHeight;
      const progress = denom > 0 ? Math.min(1, Math.max(0, -rect.top / denom)) : 0;
      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        const targetScale = 1 - (total - 1 - i) * 0.03;
        const start = i / total;
        const t = Math.min(1, Math.max(0, (progress - start) / (1 - start)));
        el.style.transform = `scale(${1 + (targetScale - 1) * t})`;
      });
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="projects" className="dark-section rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-20 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn y={30} duration={0.8} className="text-center">
        <h2 className="font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)] inline-block text-transparent bg-clip-text bg-gradient-to-b from-[#FFE0D0] to-[#FF8C4C] mb-16 sm:mb-20 md:mb-28 mt-4">
          Projects
        </h2>
      </FadeIn>

      <div ref={containerRef} className="relative max-w-6xl mx-auto flex flex-col gap-[30vh] pb-[10vh]">
        {projects.map((proj, i) => (
          <ProjectCard
            key={proj.id}
            project={proj}
            index={i}
            cardRef={(el) => {
              cardRefs.current[i] = el;
            }}
          />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  cardRef,
}: {
  project: Project;
  index: number;
  cardRef: (el: HTMLDivElement | null) => void;
}) {
  const topOffset = `calc(6rem + ${index * 30}px)`;

  return (
    <div className="h-[85vh] flex items-center justify-center sticky" style={{ top: topOffset }}>
      <div
        ref={cardRef}
        className="w-full h-full max-h-[800px] flex flex-col rounded-3xl overflow-hidden relative shadow-2xl origin-top"
      >
        <div className="absolute inset-0 bg-[#1A0F08] -z-10"></div>
        <div className="w-full flex-1 relative bg-black">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          ) : project.embedUrl ? (
            <iframe
              src={project.embedUrl}
              className="w-full h-full absolute inset-0"
              style={{ border: 0 }}
              loading="lazy"
              title={project.title}
            />
          ) : (
            <YouTubeFacade videoId={project.videoId!} title={project.title} />
          )}
        </div>

        <div className="p-6 sm:p-8 md:p-10 bg-[#1A0F08] border-t border-[rgba(215,226,234,0.1)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-[#E63F19] font-mono text-xs sm:text-sm uppercase tracking-widest">{project.id}</span>
            <h3 className="text-[#D7E2EA] font-medium text-lg sm:text-xl md:text-2xl uppercase">{project.title}</h3>
            <p className="text-[rgba(215,226,234,0.7)] text-xs sm:text-sm max-w-md leading-relaxed mt-1">
              {project.description}
            </p>
          </div>
          <div className="shrink-0 mt-2 sm:mt-0">
            <LiveProjectButton href={project.liveUrl} label={project.image || project.embedUrl ? 'View Project' : 'Watch Project'} />
          </div>
        </div>
      </div>
    </div>
  );
}

function YouTubeFacade({ videoId, title }: { videoId: string; title: string }) {
  const [activated, setActivated] = useState(false);
  const [thumbSrc, setThumbSrc] = useState(`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`);

  if (activated) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=1`}
        className="w-full h-full absolute inset-0"
        style={{ border: 0 }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        title={title}
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setActivated(true)}
      className="absolute inset-0 w-full h-full group cursor-pointer"
      aria-label={`Play ${title}`}
    >
      <img
        src={thumbSrc}
        alt={title}
        className="w-full h-full object-cover"
        loading="lazy"
        onError={() => setThumbSrc(`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`)}
        onLoad={(e) => {
          if (e.currentTarget.naturalWidth <= 120) {
            setThumbSrc(`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`);
          }
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#E63F19] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
          <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7 sm:w-8 sm:h-8 ml-1">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </button>
  );
}
