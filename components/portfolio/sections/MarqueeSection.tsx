'use client';
/* eslint-disable @next/next/no-img-element */

import React, { useEffect, useState } from 'react';
import OpenAI from '@lobehub/icons/es/OpenAI/components/Mono';
import Anthropic from '@lobehub/icons/es/Anthropic/components/Mono';
import Claude from '@lobehub/icons/es/Claude/components/Mono';
import Gemini from '@lobehub/icons/es/Gemini/components/Mono';
import HuggingFace from '@lobehub/icons/es/HuggingFace/components/Mono';
import Ollama from '@lobehub/icons/es/Ollama/components/Mono';

type TechItem = {
  name: string;
  icon: React.ReactNode;
};

const row1: TechItem[] = [
  { name: 'React', icon: <img src="https://cdn.simpleicons.org/react/D7E2EA" alt="React" referrerPolicy="no-referrer" className="w-14 h-14" /> },
  { name: 'Next.js', icon: <img src="https://cdn.simpleicons.org/nextdotjs/D7E2EA" alt="Next.js" referrerPolicy="no-referrer" className="w-14 h-14" /> },
  { name: 'TypeScript', icon: <img src="https://cdn.simpleicons.org/typescript/D7E2EA" alt="TypeScript" referrerPolicy="no-referrer" className="w-14 h-14" /> },
  { name: 'Tailwind CSS', icon: <img src="https://cdn.simpleicons.org/tailwindcss/D7E2EA" alt="Tailwind CSS" referrerPolicy="no-referrer" className="w-14 h-14" /> },
  { name: 'Node.js', icon: <img src="https://cdn.simpleicons.org/nodedotjs/D7E2EA" alt="Node.js" referrerPolicy="no-referrer" className="w-14 h-14" /> },
  { name: 'Python', icon: <img src="https://cdn.simpleicons.org/python/D7E2EA" alt="Python" referrerPolicy="no-referrer" className="w-14 h-14" /> },
  { name: 'PHP', icon: <img src="https://cdn.simpleicons.org/php/D7E2EA" alt="PHP" referrerPolicy="no-referrer" className="w-14 h-14" /> },
  { name: 'Flutter', icon: <img src="https://cdn.simpleicons.org/flutter/D7E2EA" alt="Flutter" referrerPolicy="no-referrer" className="w-14 h-14" /> },
];

const row2: TechItem[] = [
  { name: 'Firebase', icon: <img src="https://cdn.simpleicons.org/firebase/D7E2EA" alt="Firebase" referrerPolicy="no-referrer" className="w-14 h-14" /> },
  { name: 'MongoDB', icon: <img src="https://cdn.simpleicons.org/mongodb/D7E2EA" alt="MongoDB" referrerPolicy="no-referrer" className="w-14 h-14" /> },
  { name: 'OpenAI', icon: <OpenAI size={56} style={{ color: '#D7E2EA' }} /> },
  { name: 'Anthropic', icon: <Anthropic size={56} style={{ color: '#D7E2EA' }} /> },
  { name: 'Claude', icon: <Claude size={56} style={{ color: '#D7E2EA' }} /> },
  { name: 'Gemini', icon: <Gemini size={56} style={{ color: '#D7E2EA' }} /> },
  { name: 'Hugging Face', icon: <HuggingFace size={56} style={{ color: '#D7E2EA' }} /> },
  { name: 'Ollama', icon: <Ollama size={56} style={{ color: '#D7E2EA' }} /> },
];

export function MarqueeSection() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElement = document.getElementById('marquee-section');
      if (sectionElement) {
        const sectionTop = sectionElement.offsetTop;
        const currentOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
        setOffset(currentOffset);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="marquee-section" className="dark-section pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-[100px] bg-gradient-to-b from-[#E63F19] to-transparent mix-blend-overlay opacity-30 pointer-events-none"></div>

      <div className="flex flex-col gap-6">
        <div className="flex whitespace-nowrap will-change-transform" style={{ transform: `translate3d(${-(offset - 200)}px, 0, 0)` }}>
          {[...row1, ...row1, ...row1].map((item, idx) => (
            <div key={idx} className="w-[220px] h-[160px] mx-3 flex flex-col justify-center items-center gap-3 bg-[rgba(215,226,234,0.04)] border border-[rgba(215,226,234,0.1)] rounded-2xl shrink-0">
              <div className="w-[56px] h-[56px] flex items-center justify-center">
                {item.icon}
              </div>
              <span className="text-[#D7E2EA] font-light uppercase tracking-wider text-sm opacity-70">
                {item.name}
              </span>
            </div>
          ))}
        </div>

        <div className="flex whitespace-nowrap will-change-transform" style={{ transform: `translate3d(${offset - 800}px, 0, 0)` }}>
          {[...row2, ...row2, ...row2].map((item, idx) => (
            <div key={idx} className="w-[220px] h-[160px] mx-3 flex flex-col justify-center items-center gap-3 bg-[rgba(215,226,234,0.04)] border border-[rgba(215,226,234,0.1)] rounded-2xl shrink-0">
              <div className="w-[56px] h-[56px] flex items-center justify-center">
                {item.icon}
              </div>
              <span className="text-[#D7E2EA] font-light uppercase tracking-wider text-sm opacity-70">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
