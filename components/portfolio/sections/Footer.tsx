'use client';

import React from 'react';

export function Footer() {
  return (
    <footer className="bg-[#FFE0D0] py-8 sm:py-10 px-5 sm:px-8 md:px-10 border-t border-[rgba(26,15,8,0.15)] flex flex-col sm:flex-row justify-between items-center gap-6 relative z-30 w-full">
      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
        <p className="text-[#1A0F08] font-medium text-xs sm:text-sm uppercase tracking-wider opacity-80">
          &copy; {new Date().getFullYear()} Reuben Fernandes
        </p>
        <span className="hidden sm:inline-block text-[#1A0F08] opacity-30">&bull;</span>
        <p className="text-[#1A0F08] font-medium text-xs sm:text-sm uppercase tracking-wider opacity-80 text-center">
          All Rights Reserved
        </p>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="text-[#1A0F08] font-bold text-xs sm:text-sm uppercase tracking-widest hover:text-[#E63F19] transition-colors"
      >
        Back to top &uarr;
      </button>
    </footer>
  );
}
