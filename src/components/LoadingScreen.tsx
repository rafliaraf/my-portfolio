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
    
    let rafId: number;
    let timeoutId1: NodeJS.Timeout;
    let timeoutId2: NodeJS.Timeout;

    const step = (timestamp: number) => {
      try {
        if (startTimestamp === null) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const easedProgress = easeOutQuad(progress);
        const currentValue = Math.floor(easedProgress * endValue);
        
        if (counter) {
          counter.textContent = String(currentValue);
        }

        if (progress < 1) {
          rafId = window.requestAnimationFrame(step);
        } else {
          timeoutId1 = setTimeout(() => {
            if (screen) screen.classList.add('fade-out');
            document.body.classList.remove('overflow-hidden');

            // GSAP Staggered Entrance Animation
            try {
              const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });
              tl.to('.animate-p1', { autoAlpha: 1, y: 0, stagger: 0.1 }, 0);
              tl.to('.animate-p2', { autoAlpha: 1, y: 0, stagger: 0.1 }, 0.2);
              tl.to('.animate-p3', { autoAlpha: 1, y: 0 }, 0.4);
              tl.to('.animate-p4', { autoAlpha: 1, y: 0 }, 0.6);
            } catch (e) {
              console.error("GSAP error:", e);
            }

            timeoutId2 = setTimeout(() => {
              if (screen && screen.parentNode) {
                screen.parentNode.removeChild(screen);
              }
            }, 600);
          }, 300);
        }
      } catch (e) {
        console.error("Animation step error:", e);
      }
    };

    rafId = window.requestAnimationFrame(step);
    
    return () => {
      window.cancelAnimationFrame(rafId);
      clearTimeout(timeoutId1);
      clearTimeout(timeoutId2);
      document.body.classList.remove('overflow-hidden');
    };
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

      <div className="relative z-10 text-center flex items-baseline justify-center">
        <span
          ref={counterRef}
          id="loading-counter"
          className="text-7xl sm:text-9xl font-bold text-white tracking-normal"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          0
        </span>
        <span className="text-4xl sm:text-6xl font-bold text-red-600 ml-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>%</span>
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
