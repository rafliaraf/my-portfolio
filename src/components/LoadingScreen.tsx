'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function LoadingScreen() {
  const screenRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const screen = screenRef.current;
    const counter = counterRef.current;
    if (!screen || !counter) return;

    let startTimestamp: number | null = null;
    const duration = 2000;
    const endValue = 100;
    const easeOutQuad = (t: number) => t * (2 - t);

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easedProgress = easeOutQuad(progress);
      const currentValue = Math.floor(easedProgress * endValue);
      counter.textContent = String(currentValue);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setTimeout(() => {
          screen.classList.add('fade-out');
          document.body.classList.remove('overflow-hidden');

          // GSAP Staggered Entrance Animation
          const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });
          tl.to('.animate-p1', { autoAlpha: 1, y: 0, stagger: 0.1 }, 0);
          tl.to('.animate-p2', { autoAlpha: 1, y: 0, stagger: 0.1 }, 0.2);
          tl.to('.animate-p3', { autoAlpha: 1, y: 0 }, 0.4);
          tl.to('.animate-p4', { autoAlpha: 1, y: 0 }, 0.6);

          setTimeout(() => {
            screen.remove();
          }, 600);
        }, 300);
      }
    };

    window.requestAnimationFrame(step);
  }, []);

  return (
    <div
      id="loading-screen"
      ref={screenRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-dark-primary"
    >
      {/* Grid lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="loading-grid-line loading-grid-line-1" />
        <div className="loading-grid-line loading-grid-line-2" />
        <div className="loading-grid-line loading-grid-line-3" />
        <div className="loading-grid-line loading-grid-line-4" />
      </div>

      {/* Red ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[400px] h-[400px] bg-red-600/5 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Counter */}
      <div className="relative z-10 text-center flex items-baseline justify-center">
        <span
          ref={counterRef}
          id="loading-counter"
          className="text-7xl sm:text-9xl font-black text-white tracking-tighter"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          0
        </span>
        <span className="text-4xl sm:text-6xl font-bold text-red-600 ml-2">%</span>
      </div>

      {/* Loading bar */}
      <div className="loading-text-reveal loading-delay-3">
        <div className="mt-8 w-48 h-[2px] bg-neutral-800 rounded-full mx-auto overflow-hidden">
          <div className="loading-bar h-full bg-gradient-to-r from-red-600 to-red-500 rounded-full" />
        </div>
      </div>
    </div>
  );
}
