'use client';

import React from 'react';
import { FadeIn } from '../FadeIn';
import { Mail, Linkedin, Twitter } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="bg-[#FFE0D0] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-30 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn y={30} duration={0.8}>
        <h2 className="text-[#1A0F08] font-black uppercase text-center text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28 leading-none">
          Let&apos;s Talk
        </h2>
      </FadeIn>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 md:gap-10">
        <div className="flex-1 flex flex-col gap-10">
          <FadeIn delay={0.2} duration={0.8}>
            <p className="text-[#1A0F08] font-medium text-[clamp(1.5rem,3vw,2.5rem)] leading-tight max-w-md">
              Have a project in mind? Let&apos;s build something incredible together.
            </p>
          </FadeIn>
          <FadeIn delay={0.4} duration={0.8}>
            <div className="flex flex-col gap-6">
              <a href="mailto:reuben@example.com" className="flex items-center gap-4 text-[#1A0F08] hover:text-[#E63F19] transition-colors group">
                <div className="w-12 h-12 rounded-full border-2 border-[#1A0F08] flex items-center justify-center group-hover:border-[#E63F19] transition-colors">
                  <Mail size={20} />
                </div>
                <span className="font-medium uppercase tracking-wider text-sm sm:text-base">reuben@example.com</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-[#1A0F08] hover:text-[#E63F19] transition-colors group">
                <div className="w-12 h-12 rounded-full border-2 border-[#1A0F08] flex items-center justify-center group-hover:border-[#E63F19] transition-colors">
                  <Linkedin size={20} />
                </div>
                <span className="font-medium uppercase tracking-wider text-sm sm:text-base">LinkedIn</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-[#1A0F08] hover:text-[#E63F19] transition-colors group">
                <div className="w-12 h-12 rounded-full border-2 border-[#1A0F08] flex items-center justify-center group-hover:border-[#E63F19] transition-colors">
                  <Twitter size={20} />
                </div>
                <span className="font-medium uppercase tracking-wider text-sm sm:text-base">Twitter / X</span>
              </a>
            </div>
          </FadeIn>
        </div>

        <div className="flex-1">
          <FadeIn delay={0.6} duration={0.8}>
            <form className="flex flex-col gap-8 sm:gap-10" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full bg-transparent border-b-2 border-[rgba(26,15,8,0.2)] py-4 text-[#1A0F08] placeholder:text-[#1A0F08]/50 outline-none focus:border-[#E63F19] transition-colors peer text-lg font-medium"
                  required
                />
              </div>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full bg-transparent border-b-2 border-[rgba(26,15,8,0.2)] py-4 text-[#1A0F08] placeholder:text-[#1A0F08]/50 outline-none focus:border-[#E63F19] transition-colors peer text-lg font-medium"
                  required
                />
              </div>
              <div className="relative">
                <textarea
                  id="message"
                  placeholder="Your Message..."
                  rows={4}
                  className="w-full bg-transparent border-b-2 border-[rgba(26,15,8,0.2)] py-4 text-[#1A0F08] placeholder:text-[#1A0F08]/50 outline-none focus:border-[#E63F19] transition-colors peer text-lg font-medium resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="self-start relative group overflow-hidden rounded-full border-2 border-[#1A0F08] px-8 py-4 sm:px-10 sm:py-4 transition-colors"
              >
                <div className="absolute inset-0 bg-[#E63F19] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
                <span className="relative z-10 text-[#1A0F08] font-bold uppercase tracking-widest text-sm sm:text-base group-hover:text-[#FFE0D0] transition-colors duration-300">
                  Submit Message
                </span>
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
