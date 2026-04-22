'use client';

import React, { useEffect, useRef } from 'react';
import { ContactButton } from '../ContactButton';
import { FadeIn } from '../FadeIn';

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!videoRef.current) return;
      const scrollY = window.scrollY;

      if (scrollY > 5) {
        if (videoRef.current.paused) {
          videoRef.current.play().catch((e) => console.log('Autoplay prevented:', e));
        }
      } else {
        if (!videoRef.current.paused) {
          videoRef.current.pause();
        }
        videoRef.current.currentTime = 0;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="h-screen w-full hero-bg relative overflow-hidden flex flex-col">
      <FadeIn delay={0} y={-20} duration={0.7} className="w-full relative z-20">
        <header className="px-5 sm:px-8 md:px-10 pt-5 sm:pt-6 md:pt-8 flex justify-between items-center w-full">
          <div className="hidden md:block flex-1"></div>

          <nav className="flex w-full md:w-auto justify-between md:justify-center flex-1 gap-2 sm:gap-6 md:gap-8">
            <a href="#about" className="text-[#1A0F08] font-black md:font-medium uppercase tracking-wider text-[11px] sm:text-xs md:text-sm hover:opacity-60 transition-opacity duration-200">About</a>
            <a href="#projects" className="text-[#1A0F08] font-black md:font-medium uppercase tracking-wider text-[11px] sm:text-xs md:text-sm hover:opacity-60 transition-opacity duration-200">Projects</a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="text-[#1A0F08] font-black md:font-medium uppercase tracking-wider text-[11px] sm:text-xs md:text-sm hover:opacity-60 transition-opacity duration-200">Resume</a>
          </nav>

          <div className="hidden md:flex flex-1 justify-end">
            <ContactButton />
          </div>
        </header>
      </FadeIn>

      <div className="flex-1 w-full px-6 md:px-10 pb-10 md:pb-14 flex items-end container mx-auto">
        <div className="z-10 relative w-full md:w-[55%] lg:w-[60%] flex flex-col gap-3 sm:gap-4 mt-8 md:mt-0">
          <FadeIn delay={0.2} y={20} duration={0.7}>
            <div className="mb-2 md:mb-4">
              <p className="text-[#FFE0D0] font-medium text-[11px] sm:text-xs md:text-sm uppercase tracking-wider opacity-90 drop-shadow-md">Hi, I&apos;m Reuben</p>
              <p className="text-[#FFE0D0] font-medium text-[11px] sm:text-xs md:text-sm uppercase tracking-wider opacity-90 drop-shadow-md">Full-Stack Developer</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.35} y={40} duration={0.9}>
            <h1 className="font-black text-[#FFE0D0] tracking-tight leading-[0.85] text-[15.5vw] sm:text-[16vw] md:text-[14vw] lg:text-[12vw] drop-shadow-2xl">
              Reuben<br />Fernandes<span className="text-[#FF8C4C]">.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.6} y={20} duration={0.7} className="md:hidden mt-4">
            <div className="flex flex-col items-start gap-1">
              <p className="text-[#FFE0D0] font-medium text-[10px] uppercase tracking-wider opacity-80 drop-shadow-md">Based in Goa, India</p>
            </div>
          </FadeIn>
        </div>

        <div className="absolute right-0 top-0 bottom-0 w-[90%] sm:w-[70%] md:w-[50%] lg:w-[45%] z-0 h-full">
          <FadeIn delay={0.1} x={60} y={0} duration={1.0} className="w-full h-full">
            <video
              ref={videoRef}
              src="/Reuben.mp4"
              className="absolute right-0 top-0 bottom-0 w-full h-full object-cover object-center pointer-events-none"
              style={{
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 35%, black 100%)',
                maskImage: 'linear-gradient(to right, transparent 0%, black 35%, black 100%)',
              }}
              muted
              playsInline
              loop
            />
          </FadeIn>
        </div>
      </div>

      <FadeIn delay={0.6} y={20} duration={0.7} className="hidden md:flex z-10 absolute bottom-20 right-10">
        <div className="flex flex-col items-end gap-1">
          <p className="text-[#FFE0D0] font-medium text-sm uppercase tracking-wider text-right opacity-90 drop-shadow-md">Based in Goa, India</p>
        </div>
      </FadeIn>
    </section>
  );
}
