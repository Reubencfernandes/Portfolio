'use client';

import React from 'react';
import { FadeIn } from '../FadeIn';
import { Mail, Linkedin, Twitter } from 'lucide-react';

const CONTACT_EMAIL = '18reuchagasfernandes@gmail.com';

export function ContactSection() {
  return (
    <section id="contact" className="bg-[#FFE0D0] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-30 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn y={30} duration={0.8}>
        <h2 className="text-[#1A0F08] font-black uppercase text-center text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28 leading-none">
          Let&apos;s Talk
        </h2>
      </FadeIn>

      <div className="max-w-xl mx-auto flex flex-col items-center gap-10">
        <FadeIn delay={0.2} duration={0.8}>
          <p className="text-[#1A0F08] font-medium text-[clamp(1.5rem,3vw,2.5rem)] leading-tight text-center">
            Have a project in mind? Let&apos;s build something incredible together.
          </p>
        </FadeIn>

        <FadeIn delay={0.4} duration={0.8}>
          <div className="flex flex-col gap-6">
            <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-4 text-[#1A0F08] hover:text-[#E63F19] transition-colors group">
              <div className="w-12 h-12 rounded-full border-2 border-[#1A0F08] flex items-center justify-center group-hover:border-[#E63F19] transition-colors">
                <Mail size={20} />
              </div>
              <span className="font-medium uppercase tracking-wider text-sm sm:text-base">{CONTACT_EMAIL}</span>
            </a>
            <a href="https://www.linkedin.com/in/reuben-chagas-fernandes/" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-[#1A0F08] hover:text-[#E63F19] transition-colors group">
              <div className="w-12 h-12 rounded-full border-2 border-[#1A0F08] flex items-center justify-center group-hover:border-[#E63F19] transition-colors">
                <Linkedin size={20} />
              </div>
              <span className="font-medium uppercase tracking-wider text-sm sm:text-base">LinkedIn</span>
            </a>
            <a href="https://x.com/18reuchagas" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-[#1A0F08] hover:text-[#E63F19] transition-colors group">
              <div className="w-12 h-12 rounded-full border-2 border-[#1A0F08] flex items-center justify-center group-hover:border-[#E63F19] transition-colors">
                <Twitter size={20} />
              </div>
              <span className="font-medium uppercase tracking-wider text-sm sm:text-base">Twitter / X</span>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
