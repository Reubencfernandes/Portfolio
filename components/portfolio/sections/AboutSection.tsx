'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { FadeIn } from '../FadeIn';
import { ContactButton } from '../ContactButton';
import { ImageFillText } from '../ImageFillText';

const ABOUT_IMAGE_URL = '/about.png';
const ABOUT_TEXT =
  "I'm a Computer Science and Engineering graduate passionate about full-stack development, AI, and UI/UX design. I work across React, Next.js, Flutter, Node.js, and Python, with a growing focus on Large Language Models and AI research. I'm also building a Konkani language project to preserve my native tongue through technology. Let's build something incredible together!";

export function AboutSection() {
  return (
    <section id="about" className="dark-section min-h-screen px-5 sm:px-8 md:px-10 py-20 flex flex-col justify-center items-center relative overflow-hidden">
      <FadeIn delay={0.1} duration={0.9} x={-80} y={0} className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none">
        <motion.div
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Image src="/computer.png" alt="Computer" width={420} height={420} className="w-full h-auto" priority />
        </motion.div>
      </FadeIn>

      <FadeIn delay={0.15} duration={0.9} x={80} y={0} className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5.4, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
        >
          <Image src="/bible.png" alt="Bible" width={420} height={420} className="w-full h-auto" priority />
        </motion.div>
      </FadeIn>

      <FadeIn delay={0.3} duration={0.9} x={80} y={0} className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px] pointer-events-none">
        <motion.div
          animate={{ y: [0, -16, 0] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
        >
          <Image src="/japanese.png" alt="Japanese" width={440} height={440} className="w-full h-auto" />
        </motion.div>
      </FadeIn>

      <FadeIn delay={0.35} duration={0.9} x={-80} y={0} className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[130px] sm:w-[170px] md:w-[220px] pointer-events-none">
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 5.1, repeat: Infinity, ease: 'easeInOut', delay: 1.8 }}
        >
          <Image src="/beach.png" alt="Beach" width={440} height={440} className="w-full h-auto" />
        </motion.div>
      </FadeIn>

      <div className="flex flex-col items-center w-full gap-10 sm:gap-14 md:gap-16">
        <FadeIn y={40} duration={0.8}>
          <h2 className="font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)] inline-block text-transparent bg-clip-text bg-gradient-to-b from-[#FFE0D0] to-[#FF8C4C]">
            About me
          </h2>
        </FadeIn>

        <ImageFillText text={ABOUT_TEXT} imageSrc={ABOUT_IMAGE_URL} />
      </div>

      <div className="mt-16 sm:mt-20 md:mt-24">
        <FadeIn y={20} delay={0.4} duration={0.8}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
