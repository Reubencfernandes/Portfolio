import React from 'react';
import Image from 'next/image';
import { ContactButton } from '../ContactButton';

export function HeroSection() {
  return (
    <section className="h-screen w-full hero-bg relative overflow-hidden flex flex-col">
      <div className="anim-fade-down w-full relative z-20">
        <header className="px-5 sm:px-8 md:px-10 pt-5 sm:pt-6 md:pt-8 flex justify-between items-center w-full">
          <div className="hidden md:block flex-1"></div>

          <nav className="flex w-full md:w-auto justify-between md:justify-center flex-1 gap-2 sm:gap-6 md:gap-8">
            <a href="#about" className="text-[#1A0F08] font-black md:font-medium uppercase tracking-wider text-[11px] sm:text-xs md:text-sm hover:opacity-60 transition-opacity duration-200">About</a>
            <a href="#projects" className="text-[#1A0F08] font-black md:font-medium uppercase tracking-wider text-[11px] sm:text-xs md:text-sm hover:opacity-60 transition-opacity duration-200">Projects</a>
            <a href="https://drive.google.com/file/d/1xtfEFmQHH51jj6KV7eWIOSzJ2v-3zJgo/view?usp=sharing" target="_blank" rel="noreferrer" className="text-[#1A0F08] font-black md:font-medium uppercase tracking-wider text-[11px] sm:text-xs md:text-sm hover:opacity-60 transition-opacity duration-200">Resume</a>
          </nav>

          <div className="hidden md:flex flex-1 justify-end">
            <ContactButton />
          </div>
        </header>
      </div>

      <div className="flex-1 w-full px-6 md:px-10 pb-10 md:pb-14 flex items-end container mx-auto">
        <div className="z-10 relative w-full md:w-[55%] lg:w-[60%] flex flex-col gap-3 sm:gap-4 mt-8 md:mt-0">
          <div className="anim-fade-up [animation-delay:0.2s]">
            <div className="mb-2 md:mb-4">
              <p className="text-[#FFE0D0] font-medium text-[11px] sm:text-xs md:text-sm uppercase tracking-wider opacity-90 drop-shadow-md">Hi, I&apos;m Reuben</p>
              <p className="text-[#FFE0D0] font-medium text-[11px] sm:text-xs md:text-sm uppercase tracking-wider opacity-90 drop-shadow-md">Full-Stack Developer</p>
            </div>
          </div>

          <div className="anim-hero-title">
            <h1 className="font-black text-[#FFE0D0] tracking-tight leading-[0.85] text-[15.5vw] sm:text-[16vw] md:text-[14vw] lg:text-[12vw] drop-shadow-2xl">
              Reuben<br />Fernandes<span className="text-[#FF8C4C]">.</span>
            </h1>
          </div>

          <div className="anim-fade-up [animation-delay:0.6s] md:hidden mt-4">
            <div className="flex flex-col items-start gap-1">
              <p className="text-[#FFE0D0] font-medium text-[10px] uppercase tracking-wider opacity-80 drop-shadow-md">Based in Goa, India</p>
            </div>
          </div>
        </div>

        <div className="absolute right-0 top-0 bottom-0 w-[90%] sm:w-[70%] md:w-[50%] lg:w-[45%] z-0 h-full">
          <div className="anim-hero-image relative w-full h-full">
            <Image
              src="/reuben.webp"
              alt="Reuben Chagas Fernandes"
              fill
              priority
              sizes="(max-width: 768px) 90vw, 45vw"
              className="object-cover object-center pointer-events-none"
              style={{
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 35%, black 100%)',
                maskImage: 'linear-gradient(to right, transparent 0%, black 35%, black 100%)',
              }}
            />
          </div>
        </div>
      </div>

      <div className="anim-fade-up [animation-delay:0.6s] hidden md:flex z-10 absolute bottom-20 right-10">
        <div className="flex flex-col items-end gap-1">
          <p className="text-[#FFE0D0] font-medium text-sm uppercase tracking-wider text-right opacity-90 drop-shadow-md">Based in Goa, India</p>
        </div>
      </div>
    </section>
  );
}
