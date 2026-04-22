'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { LiveProjectButton } from '../LiveProjectButton';
import { FadeIn } from '../FadeIn';

type Project = {
  id: string;
  title: string;
  videoId: string;
};

const projects: Project[] = [
  {
    id: '01',
    title: 'Konkani AI',
    videoId: 'dQw4w9WgXcQ',
  },
  {
    id: '02',
    title: 'Tiny AYA Mobile',
    videoId: 'M7lc1UVf-VE',
  },
  {
    id: '03',
    title: 'PowerPoint AI',
    videoId: 'jNQXAC9IVRw',
  },
  {
    id: '04',
    title: 'Multi Model Dataset',
    videoId: 'dQw4w9WgXcQ',
  },
  {
    id: '05',
    title: 'ISO Language',
    videoId: 'M7lc1UVf-VE',
  },
];

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

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
            totalCards={projects.length}
            containerRef={containerRef}
          />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  totalCards,
  containerRef,
}: {
  project: Project;
  index: number;
  totalCards: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: containerScroll } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(containerScroll, [index * (1 / totalCards), 1], [1, targetScale]);

  const topOffset = `calc(6rem + ${index * 30}px)`;

  return (
    <div ref={cardRef} className="h-[85vh] flex items-center justify-center sticky" style={{ top: topOffset }}>
      <motion.div
        style={{ scale }}
        className="w-full h-full max-h-[800px] flex flex-col rounded-3xl overflow-hidden relative shadow-2xl origin-top"
      >
        <div className="absolute inset-0 bg-[#1A0F08] -z-10"></div>
        <div className="w-full flex-1 relative bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${project.videoId}?rel=0&modestbranding=1`}
            className="w-full h-full absolute inset-0"
            style={{ border: 0 }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            title={project.title}
          />
        </div>

        <div className="p-6 sm:p-8 md:p-10 bg-[#1A0F08] border-t border-[rgba(215,226,234,0.1)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-[#E63F19] font-mono text-xs sm:text-sm uppercase tracking-widest">{project.id}</span>
            <h3 className="text-[#D7E2EA] font-medium text-lg sm:text-xl md:text-2xl uppercase">{project.title}</h3>
          </div>
          <div className="shrink-0">
            <LiveProjectButton href={`https://www.youtube.com/watch?v=${project.videoId}`} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
