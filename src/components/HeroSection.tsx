'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function HeroSection() {
  const { scrollY } = useScroll();

  // Smooth cinematic fade-out and subtle upward drift on scroll down
  const opacity = useTransform(scrollY, [0, 400, 550], [1, 0.4, 0]);
  const y = useTransform(scrollY, [0, 550], [0, -70]);
  const scale = useTransform(scrollY, [0, 550], [1, 0.95]);
  const filter = useTransform(scrollY, [0, 400, 550], ['blur(0px)', 'blur(2px)', 'blur(8px)']);

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="about"
      className="relative w-full min-h-screen min-h-[100dvh] flex flex-col justify-between bg-transparent overflow-hidden px-6 sm:px-10 lg:px-16 select-none pt-24 sm:pt-28 pb-10 sm:pb-14"
    >
      <motion.div
        style={{ opacity, y, scale, filter }}
        className="relative z-10 w-full max-w-7xl mx-auto flex-1 flex flex-col justify-between will-change-transform"
      >
        {/* ── Coordinated Lower-Mid Stage: Web Developer aligned with Description & Contact Me ── */}
        <div className="mt-auto mb-4 sm:mb-8 w-full flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12">
          {/* Left Side: Scaled-down, elegant Web Developer Typography */}
          <div className="flex-1 flex flex-col items-start select-none pointer-events-none">
            {/* Top Line: WEB */}
            <h1
              className="text-[2.2rem] xs:text-[2.8rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[4.6rem] font-black tracking-tight text-white uppercase leading-[0.92] drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)] text-left"
              style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
            >
              Web
            </h1>

            {/* Bottom Line: DEVELOPER (directly underneath WEB) */}
            <span
              className="text-[2.2rem] xs:text-[2.8rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[4.6rem] font-black tracking-tight text-red-500 uppercase leading-[0.92] drop-shadow-[0_0_30px_rgba(239,68,68,0.5)] text-left mt-1 sm:mt-1.5"
              style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
            >
              Developer
            </span>
          </div>

          {/* Right Side: Senior Statement & Contact Me Button perfectly aligned horizontally with the text */}
          <div className="max-w-md w-full flex flex-col items-start md:items-end text-left md:text-right pointer-events-auto">
            {/* Senior Developer Statement (English, clear contrast) */}
            <p
              className="text-xs sm:text-sm md:text-[14px] text-neutral-300 font-normal leading-relaxed tracking-wide select-none mb-4 drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Crafting scalable, high-performance web architectures with meticulous attention to clean code, seamless responsiveness, and immersive interactive design.
            </p>

            {/* Red Contact Me Button */}
            <a
              href="mailto:muhammadrafli0876@gmail.com"
              className="inline-flex items-center gap-2.5 px-6 py-2.5 sm:px-7 sm:py-3 bg-red-600 hover:bg-red-500 active:scale-95 text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-full shadow-[0_0_25px_rgba(220,38,38,0.6)] hover:shadow-[0_0_35px_rgba(239,68,68,0.85)] transition-all duration-300 group cursor-pointer"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              <span>Contact Me</span>
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
