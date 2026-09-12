'use client';

import React, { useEffect, useRef, useState } from 'react';

const TOTAL_FRAMES = 300;

const getFrameSrc = (index: number) => {
  const padded = String(index).padStart(3, '0');
  return `/frames/ezgif-frame-${padded}.jpg`;
};

interface BackgroundScrollAnimationProps {
  children?: React.ReactNode;
}

export default function BackgroundScrollAnimation({ children }: BackgroundScrollAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(1);
  const targetFrameRef = useRef<number>(1);
  const animationFrameIdRef = useRef<number | null>(null);
  const [loadProgress, setLoadProgress] = useState<number>(0);
  const [isReady, setIsReady] = useState<boolean>(false);

  // Preload frames for instantaneous smooth scrub
  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFrameSrc(i);
      img.onload = () => {
        loadedCount++;
        setLoadProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
        if (loadedCount === 1) {
          renderFrame(1);
        }
        if (loadedCount === TOTAL_FRAMES) {
          setIsReady(true);
        }
      };
      images[i] = img;
    }
    imagesRef.current = images;

    return () => {
      images.length = 0;
    };
  }, []);

  // Render frame into canvas with full viewport aspect fill
  const renderFrame = (frameNumber: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const clamped = Math.max(1, Math.min(TOTAL_FRAMES, Math.round(frameNumber)));
    const img = imagesRef.current[clamped];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const dpr = window.devicePixelRatio || 1;
    const displayWidth = window.innerWidth;
    const displayHeight = window.innerHeight;

    if (canvas.width !== displayWidth * dpr || canvas.height !== displayHeight * dpr) {
      canvas.width = displayWidth * dpr;
      canvas.height = displayHeight * dpr;
    }

    ctx.save();
    ctx.scale(dpr, dpr);

    const imgAspect = img.naturalWidth / img.naturalHeight;
    const canvasAspect = displayWidth / displayHeight;

    let drawWidth = displayWidth;
    let drawHeight = displayHeight;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasAspect > imgAspect) {
      drawHeight = displayWidth / imgAspect;
      offsetY = (displayHeight - drawHeight) / 2;
    } else {
      drawWidth = displayHeight * imgAspect;
      offsetX = (displayWidth - drawWidth) / 2;
    }

    ctx.clearRect(0, 0, displayWidth, displayHeight);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    ctx.restore();
  };

  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress strictly within the page container (starts at top, completes right at footer end)
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.offsetHeight;
      const totalScrollableDistance = containerHeight - window.innerHeight;

      if (totalScrollableDistance <= 0) return;

      const currentScrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, currentScrolled / totalScrollableDistance));
      targetFrameRef.current = 1 + progress * (TOTAL_FRAMES - 1);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Continuous lerp loop for fluid, cinematic damping inertia
  useEffect(() => {
    const renderLoop = () => {
      const diff = targetFrameRef.current - currentFrameRef.current;

      if (Math.abs(diff) > 0.01) {
        currentFrameRef.current += diff * 0.12;
        renderFrame(currentFrameRef.current);
      }

      animationFrameIdRef.current = requestAnimationFrame(renderLoop);
    };

    animationFrameIdRef.current = requestAnimationFrame(renderLoop);

    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      renderFrame(currentFrameRef.current);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full min-h-screen">
      {/* ── Fixed Fullscreen Animated Canvas Background ── */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover block"
        />

        {/* Ambient Dark Overlay to ensure maximum contrast & readability for content */}
        <div className="absolute inset-0 bg-black/45 backdrop-brightness-95 pointer-events-none" />

        {/* Subtle Radial Gradient Vignette for cinematic look */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 40%, rgba(0, 0, 0, 0.75) 100%)',
          }}
        />

        {/* Loading indicator */}
        {!isReady && loadProgress < 100 && (
          <div className="absolute bottom-6 right-6 text-white/40 text-[11px] font-mono tracking-widest uppercase">
            Loading background {loadProgress}%
          </div>
        )}
      </div>

      {/* ── Foreground Content ── */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
}
