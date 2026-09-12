'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function HeroSection() {
  // Track scroll inside the window for clean, fluid fade out on scroll down, and reappearance on scroll up
  const { scrollY } = useScroll();

  // Smooth cinematic fade-out, upward float, and scale as user scrolls towards the next section
  // Extends smoothly over 450px of scroll for a gradual, natural transition
  const opacity = useTransform(scrollY, [0, 380, 520], [1, 0.4, 0]);
  const y = useTransform(scrollY, [0, 520], [0, -90]);
  const scale = useTransform(scrollY, [0, 520], [1, 0.90]);
  const filter = useTransform(scrollY, [0, 380, 520], ['blur(0px)', 'blur(2px)', 'blur(8px)']);

  return (
    <section
      id="about"
      className="relative w-full min-h-screen min-h-[100dvh] flex flex-col justify-between bg-transparent overflow-hidden px-5 sm:px-10 lg:px-16 select-none pt-24 sm:pt-28 pb-10 sm:pb-14"
    >
      {/* ── Scroll-Linked Motion Container with cinematic fade, upward drift, and defocus blur ── */}
      <motion.div
        style={{ opacity, y, scale, filter }}
        className="relative z-10 w-full max-w-6xl mx-auto flex-1 flex flex-col justify-between will-change-transform"
      >
        {/* ── Top Bar: Clean Greeting Meta ── */}
        <div className="w-full pt-3 sm:pt-4">
          <div className="flex flex-col">
            <span
              className="text-[11px] sm:text-xs font-bold text-red-500 uppercase tracking-[0.25em]"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              HELLO! 👋
            </span>
            <span
              className="text-xs sm:text-sm text-neutral-300 font-semibold tracking-wider uppercase mt-0.5"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              I&apos;M MUHAMMAD RAFLI
            </span>
          </div>
        </div>

        {/* ── Center Stage: Clean & High-Impact Typography (Back-End Developer) ── */}
        <div className="my-auto py-8 sm:py-12 w-full">
          <h1
            className="text-white font-black leading-[0.94] sm:leading-[0.90] tracking-tight uppercase select-none drop-shadow-[0_12px_40px_rgba(0,0,0,0.95)]"
            style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
          >
            <span className="block text-[2rem] xs:text-[2.4rem] sm:text-[3.8rem] md:text-[4.8rem] lg:text-[5.8rem] text-white">
              BACK-END
            </span>
            <span className="block text-[2rem] xs:text-[2.4rem] sm:text-[3.8rem] md:text-[4.8rem] lg:text-[5.8rem] text-white mt-0.5 sm:mt-1">
              DEVELOPER
            </span>
          </h1>
        </div>

        {/* ── Bottom Section: Specialization & Direct Contacts ── */}
        <div className="pt-4 sm:pt-6 border-t border-neutral-800/80 flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-6">
          {/* Focus Specialization */}
          <div className="max-w-lg">
            <p
              className="text-xs font-semibold text-red-500 uppercase tracking-widest mb-1"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              WHAT I DO
            </p>
            <p
              className="text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed text-balance"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              I build and test back-end systems — focusing on reliable REST APIs, database performance, and making sure endpoints don&apos;t break in production.
            </p>
          </div>

          {/* Identity & Direct Social Links */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 self-start md:self-auto">
            <span
              className="text-xs text-neutral-400 font-medium tracking-wider uppercase"
              style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace" }}
            >
              MUHAMMAD RAFLI AOLIA ANSORI
            </span>

            <div className="flex items-center gap-2.5">
              {/* GitHub */}
              <a
                href="https://github.com/rafliaraf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub: rafliaraf"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-neutral-900 border border-neutral-800 hover:border-red-500 text-neutral-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/muhammadrafliaoliaa/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn: Muhammad Rafli Aolia Ansori"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-neutral-900 border border-neutral-800 hover:border-red-500 text-neutral-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>

              {/* Gmail Direct */}
              <a
                href="mailto:muhammadrafli0876@gmail.com"
                aria-label="Gmail Direct"
                title="Email: muhammadrafli0876@gmail.com"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-neutral-900 border border-neutral-800 hover:border-red-500 text-neutral-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
