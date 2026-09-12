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
    cardColor: 'from-[#1e1b4b] via-[#0f172a] to-[#030712]',
    accentBorder: 'hover:border-indigo-500/80',
    glowColor: 'rgba(99, 102, 241, 0.25)',
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
    cardColor: 'from-[#450a0a] via-[#1c1917] to-[#0c0a09]',
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
    cardColor: 'from-[#143224] via-[#091e14] to-[#021009]',
    accentBorder: 'hover:border-emerald-500/80',
    glowColor: 'rgba(16, 185, 129, 0.25)',
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
    <section id="experience" className="relative py-24 sm:py-32 bg-dark-secondary/30 border-t border-neutral-800/40 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20" data-aos="zoom-in">
          <p
            className="text-xs sm:text-sm font-semibold text-red-500 uppercase mb-2 tracking-[0.1em]"
            style={{ letterSpacing: '0.1em' }}
          >
            Career Progression
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
            style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700 }}
          >
            Work Experience
          </h2>
          <p
            className="text-sm sm:text-base text-[#B3B3B3] font-normal mt-2 max-w-xl mx-auto leading-[1.65]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Past roles in graphic design, technical merchandise production, and internships before focusing on back-end development.
          </p>
        </div>

        {/* ── Desktop Interactive Fan Fanned Cards Deck ── */}
        <div className="hidden lg:flex flex-col items-center justify-center min-h-[560px] relative my-6">
          <div className="relative w-full max-w-[420px] h-[520px] flex items-center justify-center">
            {experiences.map((exp, idx) => {
              const fanStyle = getFanTransform(idx);
              const isActive = idx === activeIdx;

              return (
                <div
                  key={exp.id}
                  onClick={() => {
                    if (isActive) {
                      setModalExp(exp);
                    } else {
                      setActiveIdx(idx);
                    }
                  }}
                  style={{
                    transform: fanStyle.transform,
                    zIndex: fanStyle.zIndex,
                    transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
                  }}
                  className={`absolute w-[320px] h-[480px] rounded-[32px] p-6 cursor-pointer border-2 shadow-2xl flex flex-col justify-between overflow-hidden bg-gradient-to-b ${exp.cardColor} ${
                    isActive
                      ? 'border-white/90 shadow-[0_20px_50px_rgba(0,0,0,0.8)]'
                      : 'border-white/20 hover:border-white/50 opacity-90 hover:opacity-100'
                  }`}
                >
                  {/* Top Bar: Title & Pill Chip */}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3
                        className="text-2xl font-bold text-white tracking-wide"
                        style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700 }}
                      >
                        {exp.organization}
                      </h3>
                      <p
                        className="text-xs text-white/70 uppercase tracking-widest mt-0.5 font-medium"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {exp.badgeTag}
                      </p>
                    </div>

                    {/* Circular / Pill Counter Badge */}
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      <span style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace" }}>
                        {exp.statBadge}
                      </span>
                    </div>
                  </div>

                  {/* Center Character/Artwork Image */}
                  <div className="relative w-full h-[220px] flex items-center justify-center my-auto overflow-hidden rounded-2xl border border-white/10 group-hover:scale-105 transition-transform duration-500">
                    <Image
                      src={exp.image}
                      alt={exp.organization}
                      fill
                      unoptimized={true}
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    
                    {/* Period badge inside artwork */}
                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between">
                      <span
                        className="text-[11px] text-white/90 font-medium px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-sm border border-white/15"
                        style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace" }}
                      >
                        {exp.period}
                      </span>
                      <span className="text-[11px] text-red-400 font-semibold uppercase tracking-wider">
                        Click Detail
                      </span>
                    </div>
                  </div>

                  {/* Bottom: Role & Scope Tags */}
                  <div className="pt-3 border-t border-white/15">
                    <p
                      className="text-sm font-semibold text-white truncate"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {exp.role}
                    </p>
                    <div className="flex items-center gap-1.5 mt-2 overflow-hidden">
                      {exp.technologies.slice(0, 2).map((t) => (
                        <span
                          key={t}
                          className="text-[10px] px-2 py-0.5 rounded-md bg-white/10 text-white/80 border border-white/15 truncate"
                          style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace" }}
                        >
                          {t}
                        </span>
                      ))}
                      {exp.technologies.length > 2 && (
                        <span className="text-[10px] text-white/50">+{exp.technologies.length - 2}</span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Deck Switcher Controls */}
          <div className="flex items-center gap-3 mt-8">
            {experiences.map((exp, idx) => (
              <button
                key={exp.id}
                onClick={() => setActiveIdx(idx)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
                  activeIdx === idx
                    ? 'bg-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.5)]'
                    : 'bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white'
                }`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {exp.organization}
              </button>
            ))}
          </div>
        </div>

        {/* ── Mobile & Tablet Horizontal Snap Carousel ── */}
        <div className="lg:hidden w-full overflow-x-auto pb-4 pt-2 -mx-4 px-4 flex gap-4 snap-x snap-mandatory scrollbar-none">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              onClick={() => setModalExp(exp)}
              className={`relative shrink-0 w-[84vw] max-w-[320px] rounded-[24px] p-5 cursor-pointer border border-white/20 shadow-xl flex flex-col justify-between overflow-hidden bg-gradient-to-b ${exp.cardColor} snap-center`}
            >
              {/* Top Bar: Title & Pill Chip */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <h3
                    className="text-lg font-bold text-white tracking-wide line-clamp-1"
                    style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700 }}
                  >
                    {exp.organization}
                  </h3>
                  <p
                    className="text-[10px] text-white/70 uppercase tracking-widest mt-0.5 font-medium"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {exp.badgeTag}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-xs font-semibold shrink-0">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace" }}>
                    {exp.statBadge}
                  </span>
                </div>
              </div>

              {/* Artwork Container */}
              <div className="relative w-full h-[175px] rounded-xl overflow-hidden border border-white/10 mb-3">
                <Image
                  src={exp.image}
                  alt={exp.organization}
                  fill
                  unoptimized={true}
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between">
                  <span
                    className="text-[10px] text-white/90 font-medium px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-sm border border-white/15"
                    style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace" }}
                  >
                    {exp.period}
                  </span>
                  <span className="text-[10px] text-red-400 font-semibold uppercase tracking-wider">
                    Tap for details
                  </span>
                </div>
              </div>

              {/* Role & Scope */}
              <div className="pt-2 border-t border-white/15">
                <p
                  className="text-xs font-semibold text-white line-clamp-1"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {exp.role}
                </p>
                <div className="flex flex-wrap items-center gap-1 mt-2">
                  {exp.technologies.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="text-[9px] px-2 py-0.5 rounded-md bg-white/10 text-white/80 border border-white/15"
                      style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace" }}
                    >
                      {t}
                    </span>
                  ))}
                  {exp.technologies.length > 3 && (
                    <span className="text-[9px] text-white/50">+{exp.technologies.length - 3}</span>
                  )}
                </div>
              </div>
            </div>
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
