'use client';

import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FadeIn } from '../FadeIn';
import { Mail, Linkedin, Twitter, Send } from 'lucide-react';

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('sending');
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
      );
      setStatus('sent');
      formRef.current.reset();
    } catch (err) {
      console.error('EmailJS Error:', err);
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="bg-[#FFE0D0] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-30 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn y={30} duration={0.8}>
        <h2 className="text-[#1A0F08] font-black uppercase text-center text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28 leading-none">
          Let&apos;s Talk
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row lg:items-start lg:gap-16 gap-12">
        {/* Left: intro + contact links */}
        <div className="flex flex-col items-center lg:items-start gap-10 lg:flex-1">
          <FadeIn delay={0.2} duration={0.8}>
            <p className="text-[#1A0F08] font-medium text-[clamp(1.5rem,3vw,2.5rem)] leading-tight text-center lg:text-left">
              Have a project in mind? Let&apos;s build something incredible together.
            </p>
          </FadeIn>

          <FadeIn delay={0.4} duration={0.8}>
            <div className="flex flex-col gap-6">
              <a href="mailto:18reuchagasfernandes@gmail.com" className="flex items-center gap-4 text-[#1A0F08] hover:text-[#E63F19] transition-colors group">
                <div className="w-12 h-12 rounded-full border-2 border-[#1A0F08] flex items-center justify-center group-hover:border-[#E63F19] transition-colors">
                  <Mail size={20} />
                </div>
                <span className="font-medium uppercase tracking-wider text-sm sm:text-base">18reuchagasfernandes@gmail.com</span>
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

        {/* Right: contact form */}
        <FadeIn delay={0.3} duration={0.8} className="w-full lg:flex-1">
          <form ref={formRef} onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-[#1A0F08] font-mono text-xs sm:text-sm uppercase tracking-widest font-bold ml-1">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                required
                className="w-full bg-transparent border-2 border-[#1A0F08] rounded-2xl px-5 py-4 text-[#1A0F08] placeholder-[#1A0F08]/40 font-mono text-sm sm:text-base focus:outline-none focus:border-[#E63F19] focus:shadow-[4px_4px_0px_0px_#E63F19] hover:shadow-[4px_4px_0px_0px_#1A0F08] hover:-translate-y-0.5 transition-all duration-200"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="from_email" className="text-[#1A0F08] font-mono text-xs sm:text-sm uppercase tracking-widest font-bold ml-1">Email</label>
              <input
                id="from_email"
                name="from_email"
                type="email"
                placeholder="john@example.com"
                required
                className="w-full bg-transparent border-2 border-[#1A0F08] rounded-2xl px-5 py-4 text-[#1A0F08] placeholder-[#1A0F08]/40 font-mono text-sm sm:text-base focus:outline-none focus:border-[#E63F19] focus:shadow-[4px_4px_0px_0px_#E63F19] hover:shadow-[4px_4px_0px_0px_#1A0F08] hover:-translate-y-0.5 transition-all duration-200"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-[#1A0F08] font-mono text-xs sm:text-sm uppercase tracking-widest font-bold ml-1">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                rows={5}
                required
                className="w-full bg-transparent border-2 border-[#1A0F08] rounded-2xl px-5 py-4 text-[#1A0F08] placeholder-[#1A0F08]/40 font-mono text-sm sm:text-base focus:outline-none focus:border-[#E63F19] focus:shadow-[4px_4px_0px_0px_#E63F19] hover:shadow-[4px_4px_0px_0px_#1A0F08] hover:-translate-y-0.5 transition-all duration-200 resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'sending' || status === 'sent'}
              className="mt-2 flex items-center justify-center gap-3 w-full bg-[#1A0F08] text-[#FFE0D0] font-black uppercase tracking-widest text-sm py-4 rounded-2xl hover:bg-[#E63F19] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#1A0F08] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
            >
              {status === 'sending' && 'Sending...'}
              {status === 'sent' && 'Message sent!'}
              {status === 'error' && 'Try again'}
              {status === 'idle' && (
                <>
                  Send message <Send size={16} />
                </>
              )}
            </button>
            {status === 'error' && (
              <p className="text-[#E63F19] text-sm text-center font-mono font-medium">
                Something went wrong. Please email me directly.
              </p>
            )}
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
