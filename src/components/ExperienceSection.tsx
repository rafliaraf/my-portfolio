'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: string;
  summary: string;
  highlights: string[];
  technologies: string[];
  driveUrl?: string;
  badgeTag: string;
  statBadge: string;
  cardColor: string;
  accentBorder: string;
  glowColor: string;
  image: string;
}

const experiences: ExperienceItem[] = [
  {
    id: 'fixyoufit',
    role: 'Graphic Designer & Merchandise Specialist',
    organization: 'Fixyoufit.id',
    location: 'Tasikmalaya, Jawa Barat · On-site',
    period: 'Jan 2024 – Jul 2024',
    type: 'Commercial Creative & Production · Full-time',
    driveUrl: 'https://drive.google.com/drive/folders/1ALMCwWIb8r3t5oaAxkFMMqTqXn4gSpcn?usp=sharing',
    summary:
      'Designed promotional graphics and handled merchandise production for streetwear products and Shopee store listings.',
    highlights: [
      'Designed t-shirt graphics, promotional banners, and vector assets using CorelDRAW & Photoshop.',
      'Operated Direct Transfer Film (DTF) printers and handled heat-press production to ensure print quality.',
      'Created product catalog photos and marketplace visuals for e-commerce stores.',
    ],
    technologies: ['CorelDRAW', 'Adobe Photoshop', 'DTF Printing', 'E-Commerce Marketing', 'Visual Branding'],
    badgeTag: 'STREETWEAR & MERCH',
    statBadge: '01',
    cardColor: 'from-[#3b0808] via-[#1a0505] to-[#0a0202]',
    accentBorder: 'hover:border-red-500/80',
    glowColor: 'rgba(239, 68, 68, 0.25)',
    image: '/images/project-fixyoufit.png',
  },
  {
    id: 'r2sports',
    role: 'Graphic Designer & Sublimation Production',
    organization: 'R2Sports',
    location: 'Tasikmalaya, Jawa Barat · On-site',
    period: 'Dec 2023 – Feb 2024',
    type: 'Apparel Design & Production · Part-time',
    summary:
      'Created custom sportswear designs and camouflage patterns, managing the whole process from digital artwork to large-format sublimation print.',
    highlights: [
      'Designed camouflage patterns and jersey layouts for outdoor sportswear.',
      'Set up pre-press color separations and organized cut files for fabric assembly.',
      'Operated large-format sublimation heat-transfer printers and maintained printing machines.',
    ],
    technologies: ['CorelDRAW', 'Adobe Photoshop', 'Sublimation Printing', 'Pattern Design', 'Pre-Press'],
    badgeTag: 'SPORT APPAREL',
    statBadge: '02',
    cardColor: 'from-[#450a0a] via-[#1c0808] to-[#0c0303]',
    accentBorder: 'hover:border-red-500/80',
    glowColor: 'rgba(239, 68, 68, 0.25)',
    image: '/images/project-graphic.png',
  },
  {
    id: 'istimewa-jaya',
    role: 'Production & Finishing Specialist',
    organization: 'ISTIMEWA JAYA DIGITAL PRINTING PUSAT',
    location: 'Tasikmalaya, Jawa Barat · On-site',
    period: 'Jul 2022 – Sep 2022',
    type: 'Vocational Internship',
    summary:
      'Hands-on internship in digital printing production, pre-flight file checks, and finishing operations.',
    highlights: [
      'Checked client design files before printing to catch resolution and color mode issues early.',
      'Handled post-print finishing including precision cutting, laminating, and eyelet punching.',
    ],
    technologies: ['Pre-Press Inspection', 'Quality Assurance', 'Industrial Printing Equipment'],
    badgeTag: 'DIGITAL PRINTING',
    statBadge: '03',
    cardColor: 'from-[#2e0505] via-[#140303] to-[#080101]',
    accentBorder: 'hover:border-red-500/80',
    glowColor: 'rgba(239, 68, 68, 0.25)',
    image: '/images/cert-pkl.jpg',
  },
];

export default function ExperienceSection() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [modalExp, setModalExp] = useState<ExperienceItem | null>(null);

  // Fan stack positioning geometry based on active index
  const getFanTransform = (index: number) => {
    const diff = index - activeIdx;
    
    // Config for desktop fan
    let rotate = diff * 7; // slight rotation fan angle
    let translateX = diff * 75; // horizontal spread
    let translateY = Math.abs(diff) * 16; // arc curve
    let scale = diff === 0 ? 1.05 : 0.94 - Math.abs(diff) * 0.04;
    let zIndex = 20 - Math.abs(diff) * 5;

    return {
      transform: `translateX(${translateX}px) translateY(${translateY}px) rotate(${rotate}deg) scale(${scale})`,
      zIndex,
    };
  };

  return (
    <section id="experience" className="relative py-24 sm:py-32 bg-transparent border-t border-white/[0.08] select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20" data-aos="zoom-in">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span
              className="text-[11px] sm:text-xs font-semibold text-neutral-300 uppercase tracking-widest"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Career Progression
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
            style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700 }}
          >
            Work Experience
          </h2>
          <p
            className="text-sm sm:text-base text-neutral-300/80 font-normal mt-2 max-w-xl mx-auto leading-[1.65]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Past roles in graphic design, technical merchandise production, and internships leading to professional web &amp; software development.
          </p>
        </div>

        {/* ── Featured Wide Showcase Carousel (Matching Reference Screenshot) ── */}
        <div className="relative w-full max-w-6xl mx-auto flex items-center justify-center min-h-[360px] sm:min-h-[420px] md:min-h-[460px]">
          {/* Circular Left Arrow Button */}
          <button
            onClick={() => setActiveIdx((prev) => (prev === 0 ? experiences.length - 1 : prev - 1))}
            aria-label="Previous experience"
            className="absolute left-1 sm:left-2 md:left-6 z-30 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/40 hover:bg-black/70 border border-white/20 hover:border-white/50 text-white flex items-center justify-center backdrop-blur-md transition-all duration-300 active:scale-95 shadow-xl cursor-pointer"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 stroke-current fill-none stroke-[2.5]" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Slider Stage Container */}
          <div className="relative w-full h-[360px] sm:h-[400px] md:h-[420px] flex items-center justify-center overflow-hidden">
            {experiences.map((exp, idx) => {
              let offset = idx - activeIdx;
              const totalExp = experiences.length;
              if (offset > totalExp / 2) offset -= totalExp;
              if (offset < -totalExp / 2) offset += totalExp;

              const isCenter = offset === 0;
              const isPrev = offset === -1;
              const isNext = offset === 1;
              const isVisible = Math.abs(offset) <= 1;

              if (!isVisible) return null;

              let translateX = '0%';
              let scale = 0.85;
              let zIndex = 10;
              let opacity = 0.28;

              if (isCenter) {
                translateX = '0%';
                scale = 1;
                zIndex = 25;
                opacity = 1;
              } else if (isPrev) {
                translateX = '-68%';
                scale = 0.88;
                zIndex = 15;
                opacity = 0.28;
              } else if (isNext) {
                translateX = '68%';
                scale = 0.88;
                zIndex = 15;
                opacity = 0.28;
              }

              return (
                <div
                  key={exp.id}
                  onClick={() => {
                    if (isCenter) {
                      setModalExp(exp);
                    } else {
                      setActiveIdx(idx);
                    }
                  }}
                  style={{
                    transform: `translateX(${translateX}) scale(${scale})`,
                    zIndex,
                    opacity,
                    transition: 'all 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
                  }}
                  className={`absolute w-[92vw] max-w-[420px] sm:max-w-[560px] md:max-w-[700px] lg:max-w-[760px] h-[340px] sm:h-[370px] md:h-[390px] rounded-[32px] sm:rounded-[36px] overflow-hidden cursor-pointer transition-all duration-500 border ${
                    isCenter
                      ? 'border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.85)] bg-neutral-900/90 backdrop-blur-xl'
                      : 'border-white/10 shadow-2xl bg-neutral-950/80 pointer-events-auto'
                  }`}
                >
                  {/* Split Layout: Left Image + Right Content */}
                  <div className="w-full h-full grid grid-cols-1 sm:grid-cols-12 relative">
                    {/* Left Half: Aesthetic Image Graphic */}
                    <div className="sm:col-span-6 relative h-[160px] sm:h-full bg-neutral-950 overflow-hidden">
                      <Image
                        src={exp.image}
                        alt={exp.organization}
                        fill
                        unoptimized={true}
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-transparent via-black/20 to-neutral-900/90 sm:to-neutral-900" />
                    </div>

                    {/* Right Half: Content Info */}
                    <div className="sm:col-span-6 p-5 sm:p-7 md:p-8 flex flex-col justify-between bg-neutral-900/95 sm:bg-transparent">
                      <div>
                        <span className="text-[11px] font-bold text-red-500 uppercase tracking-widest block mb-1">
                          {exp.period}
                        </span>
                        <h3
                          className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-snug line-clamp-2"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {exp.organization}
                        </h3>
                        <p className="text-xs sm:text-sm font-semibold text-neutral-300 mt-1">
                          {exp.role}
                        </p>
                        <p
                          className="text-xs sm:text-sm text-neutral-300/85 mt-2 leading-relaxed line-clamp-2 font-normal"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {exp.summary}
                        </p>
                      </div>

                      {/* Pill Button "View detail" + Circular arrow button */}
                      <div className="flex items-center gap-2.5 mt-4 pt-3 border-t border-white/10 sm:border-t-0 sm:pt-0">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setModalExp(exp);
                          }}
                          className="px-6 py-2.5 rounded-full bg-white text-black font-semibold text-xs sm:text-sm tracking-normal shadow-lg hover:bg-neutral-200 transition-all duration-200 cursor-pointer italic"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          View detail
                        </button>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setModalExp(exp);
                          }}
                          aria-label="Open experience modal"
                          className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-lg hover:bg-neutral-200 transition-all duration-200 cursor-pointer"
                        >
                          <svg className="w-4 h-4 stroke-current fill-none stroke-[2.5]" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Circular Right Arrow Button */}
          <button
            onClick={() => setActiveIdx((prev) => (prev === experiences.length - 1 ? 0 : prev + 1))}
            aria-label="Next experience"
            className="absolute right-1 sm:right-2 md:right-6 z-30 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/40 hover:bg-black/70 border border-white/20 hover:border-white/50 text-white flex items-center justify-center backdrop-blur-md transition-all duration-300 active:scale-95 shadow-xl cursor-pointer"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 stroke-current fill-none stroke-[2.5]" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-4 sm:mt-6">
          {experiences.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              aria-label={`Go to experience ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                i === activeIdx
                  ? 'w-7 bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]'
                  : 'w-2 bg-neutral-800 hover:bg-neutral-600'
              }`}
            />
          ))}
        </div>
      </div>

      {/* ── Interactive Detail Modal When a Card Is Clicked ── */}
      {modalExp && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setModalExp(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setModalExp(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header info */}
            <div className="flex items-center gap-2 mb-2">
              <span
                className="text-xs font-semibold text-red-500 uppercase tracking-[0.1em]"
                style={{ letterSpacing: '0.1em' }}
              >
                {modalExp.type}
              </span>
              <span className="text-neutral-700">·</span>
              <span
                className="text-xs text-neutral-400 font-normal"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {modalExp.location}
              </span>
            </div>

            <h3
              className="text-2xl sm:text-3xl font-bold text-white tracking-tight"
              style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700 }}
            >
              {modalExp.role}
            </h3>
            <p
              className="text-base font-semibold text-neutral-300 mt-1"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {modalExp.organization}
            </p>

            <div className="flex items-center gap-3 my-4">
              <span
                className="inline-block px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-[#B3B3B3]"
                style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace" }}
              >
                {modalExp.period}
              </span>

              {modalExp.driveUrl && (
                <a
                  href={modalExp.driveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600/20 hover:bg-red-600/30 text-red-400 hover:text-red-300 border border-red-500/40 text-xs font-semibold transition-all"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.71 3.5L1.15 15l3.43 6 6.55-11.5L7.71 3.5zm3.43 6l3.43 6h7.72l-3.43-6h-7.72zm9.14 0L13.72 21h6.85l3.43-6-3.71-5.5z"/>
                  </svg>
                  <span>View Full Designs on Drive</span>
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>

            {/* Summary */}
            <p
              className="text-sm sm:text-base text-[#B3B3B3] font-normal leading-relaxed mt-4"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {modalExp.summary}
            </p>

            {/* Highlights */}
            <div className="mt-6 space-y-3">
              <h4
                className="text-xs uppercase tracking-wider text-neutral-400 font-semibold"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Key Responsibilities &amp; Deliverables
              </h4>
              {modalExp.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 shadow-[0_0_8px_rgba(239,68,68,0.6)]" />
                  <p
                    className="text-xs sm:text-sm text-[#B3B3B3] font-normal leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {h}
                  </p>
                </div>
              ))}
            </div>

            {/* Technologies */}
            <div className="mt-6 pt-5 border-t border-neutral-800">
              <h4
                className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-2.5"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Tools &amp; Scope
              </h4>
              <div className="flex flex-wrap gap-2">
                {modalExp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-md bg-neutral-900 text-[#B3B3B3] border border-neutral-800"
                    style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace" }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
