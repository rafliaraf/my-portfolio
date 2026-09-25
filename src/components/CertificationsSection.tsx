'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  year: string;
  credentialId?: string;
  credentialUrl?: string;
  grade?: string;
  period?: string;
  skills?: string[];
  image: string;
}

const certifications: Certification[] = [
  {
    id: 'dicoding-manajemen-proyek',
    title: 'Belajar Dasar Manajemen Proyek',
    issuer: 'Dicoding Indonesia',
    issueDate: 'Issued 19 Sep 2026',
    expiryDate: 'Expires 19 Sep 2029',
    year: '2026',
    credentialId: '1RXYD0283XVM',
    credentialUrl: 'https://www.dicoding.com/certificates/1RXYD0283XVM',
    skills: ['Project Management Fundamentals', 'Agile & Waterfall', 'Sprint Planning', 'Risk & Resource Management'],
    image: '/images/cert-manajemen-proyek.png',
  },
  {
    id: 'dicoding-c',
    title: 'Pemrograman C',
    issuer: 'Dicoding Indonesia',
    issueDate: 'Issued Jan 2024',
    expiryDate: 'Expires Jan 2027',
    year: '2024',
    credentialId: '6RPNVY13QZ2M',
    credentialUrl: 'https://www.dicoding.com/certificates/6RPNVY13QZ2M',
    skills: ['C Programming', 'Memory Management', 'Data Structures', 'Pointers & Algorithms'],
    image: '/images/cert-c.jpg',
  },
  {
    id: 'dicoding-java',
    title: 'Pemrograman Java',
    issuer: 'Dicoding Indonesia',
    issueDate: 'Issued May 2026',
    expiryDate: 'Expires May 2029',
    year: '2026',
    credentialId: '2VX30M23JXYQ',
    credentialUrl: 'https://www.dicoding.com/certificates/2VX30M23JXYQ',
    skills: ['Java Standard Edition', 'Object-Oriented Programming (OOP)', 'Collections Framework'],
    image: '/images/cert-java.jpg',
  },
  {
    id: 'pkl-istimewa-jaya',
    title: 'Praktik Kerja Lapangan',
    issuer: 'CV. Istimewa Jaya Digital Printing',
    issueDate: 'Issued Oct 2022',
    year: '2022',
    grade: 'Sangat Baik',
    period: '25 Juli s.d 06 Oktober 2022 (3 Bulan)',
    skills: ['CorelDRAW', 'Digital Printing Operations', 'Quality Control', 'Finishing & Production'],
    image: '/images/cert-pkl.jpg',
  },
];

export default function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [activeCertIdx, setActiveCertIdx] = useState<number>(0);

  return (
    <section id="certifications" className="relative py-20 sm:py-28 overflow-hidden select-none border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16" data-aos="zoom-in">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span
              className="text-[11px] sm:text-xs font-semibold text-neutral-300 uppercase tracking-widest"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Verified Credentials
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
            style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700 }}
          >
            Licenses &amp; Certifications
          </h2>
          <p
            className="text-sm sm:text-base text-neutral-300/80 font-normal mt-3 max-w-2xl mx-auto leading-[1.65]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Verified programming certifications and vocational credentials. Click any badge to view verified credentials.
          </p>
        </div>

        {/* ── Featured Wide Showcase Carousel (Matching Reference Screenshot) ── */}
        <div className="relative w-full max-w-6xl mx-auto flex items-center justify-center min-h-[410px] sm:min-h-[420px] md:min-h-[460px]">
          {/* Circular Left Arrow Button */}
          <button
            onClick={() => setActiveCertIdx((prev) => (prev === 0 ? certifications.length - 1 : prev - 1))}
            aria-label="Previous certification"
            className="absolute left-1 sm:left-2 md:left-6 z-30 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/40 hover:bg-black/70 border border-white/20 hover:border-white/50 text-white flex items-center justify-center backdrop-blur-md transition-all duration-300 active:scale-95 shadow-xl cursor-pointer"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 stroke-current fill-none stroke-[2.5]" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Slider Stage Container */}
          <div className="relative w-full h-[410px] sm:h-[400px] md:h-[420px] flex items-center justify-center overflow-hidden">
            {certifications.map((cert, idx) => {
              let offset = idx - activeCertIdx;
              const totalCert = certifications.length;
              if (offset > totalCert / 2) offset -= totalCert;
              if (offset < -totalCert / 2) offset += totalCert;

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
                  key={cert.id}
                  onClick={() => {
                    if (isCenter) {
                      setSelectedCert(cert);
                    } else {
                      setActiveCertIdx(idx);
                    }
                  }}
                  style={{
                    transform: `translateX(${translateX}) scale(${scale})`,
                    zIndex,
                    opacity,
                    transition: 'all 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
                  }}
                  className={`absolute w-[92vw] max-w-[420px] sm:max-w-[560px] md:max-w-[700px] lg:max-w-[760px] h-[390px] sm:h-[370px] md:h-[390px] rounded-[24px] sm:rounded-[36px] overflow-hidden cursor-pointer transition-all duration-500 border ${
                    isCenter
                      ? 'border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.85)] bg-neutral-900/90 backdrop-blur-xl'
                      : 'border-white/10 shadow-2xl bg-neutral-950/80 pointer-events-auto'
                  }`}
                >
                  {/* Split Layout: Left Image + Right Content */}
                  <div className="w-full h-full flex flex-col sm:grid sm:grid-cols-12 relative">
                    {/* Left Half: Certificate Artwork/Photo */}
                    <div className="w-full sm:col-span-6 relative h-[150px] sm:h-full bg-neutral-950 overflow-hidden flex-shrink-0">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        unoptimized={true}
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-transparent via-black/20 to-neutral-900/90 sm:to-neutral-900" />
                    </div>

                    {/* Right Half: Content Info */}
                    <div className="flex-1 sm:col-span-6 p-4 sm:p-7 md:p-8 flex flex-col justify-between bg-neutral-900/95 sm:bg-transparent overflow-hidden">
                      <div>
                        <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-widest block mb-1">
                          Verified Credential · {cert.year}
                        </span>
                        <h3
                          className="text-base sm:text-xl md:text-2xl font-bold text-white leading-snug line-clamp-2"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {cert.title}
                        </h3>
                        <p className="text-xs sm:text-sm font-semibold text-neutral-300 mt-1">
                          {cert.issuer}
                        </p>
                        <p
                          className="text-xs sm:text-sm text-neutral-300/85 mt-2 leading-relaxed line-clamp-2 font-normal"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {cert.skills ? cert.skills.join(' · ') : cert.issueDate}
                        </p>
                      </div>

                      {/* Red "View detail" Button */}
                      <div className="flex items-center mt-4 pt-3 border-t border-white/10 sm:border-t-0 sm:pt-0">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedCert(cert);
                          }}
                          className="px-6 py-2.5 rounded-full bg-red-600 hover:bg-red-500 text-white font-semibold text-xs sm:text-sm tracking-normal shadow-[0_0_20px_rgba(220,38,38,0.5)] hover:shadow-[0_0_28px_rgba(239,68,68,0.8)] transition-all duration-300 cursor-pointer active:scale-95"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          View detail
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
            onClick={() => setActiveCertIdx((prev) => (prev === certifications.length - 1 ? 0 : prev + 1))}
            aria-label="Next certification"
            className="absolute right-1 sm:right-2 md:right-6 z-30 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/40 hover:bg-black/70 border border-white/20 hover:border-white/50 text-white flex items-center justify-center backdrop-blur-md transition-all duration-300 active:scale-95 shadow-xl cursor-pointer"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 stroke-current fill-none stroke-[2.5]" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-4 sm:mt-6">
          {certifications.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveCertIdx(i)}
              aria-label={`Go to certification ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                i === activeCertIdx
                  ? 'w-7 bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]'
                  : 'w-2 bg-neutral-800 hover:bg-neutral-600'
              }`}
            />
          ))}
        </div>
      </div>

      {/* ── Detail Modal on Card Click ── */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-dark-card border border-neutral-800 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(220,38,38,0.3)] max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800/80 bg-dark-primary/80">
              <div>
                <span
                  className="text-xs text-red-500 font-semibold uppercase tracking-[0.1em]"
                  style={{ letterSpacing: '0.1em' }}
                >
                  Credential Details
                </span>
                <h4
                  className="text-lg font-bold text-white"
                  style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700 }}
                >
                  {selectedCert.title}
                </h4>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-2 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Scroll Content */}
            <div className="overflow-y-auto p-6 space-y-5">
              <div className="relative w-full aspect-[4/3] max-h-[320px] rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950 flex items-center justify-center">
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  fill
                  unoptimized={true}
                  className="object-contain"
                  priority
                />
              </div>

              <div>
                <h5
                  className="text-xs font-semibold text-red-400 uppercase tracking-[0.1em] mb-1"
                  style={{ letterSpacing: '0.1em' }}
                >
                  Issuing Organization
                </h5>
                <p
                  className="text-sm text-neutral-200 font-medium"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {selectedCert.issuer}
                </p>
                <div
                  className="mt-1 text-xs text-[#B3B3B3] flex flex-wrap items-center gap-y-1 font-normal"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <span>{selectedCert.issueDate}</span>
                  {selectedCert.expiryDate && (
                    <>
                      <span className="mx-1.5">·</span>
                      <span>{selectedCert.expiryDate}</span>
                    </>
                  )}
                  {selectedCert.period && (
                    <>
                      <span className="mx-1.5">·</span>
                      <span
                        className="text-[#B3B3B3] text-[12px]"
                        style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace", fontSize: '12px' }}
                      >
                        {selectedCert.period}
                      </span>
                    </>
                  )}
                </div>

                {selectedCert.grade && (
                  <div className="mt-2.5 flex items-center gap-2">
                    <span
                      className="text-[12px] text-neutral-400 font-mono"
                      style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace", fontSize: '12px' }}
                    >
                      Result:
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {selectedCert.grade === 'Sangat Baik' ? 'Excellent' : selectedCert.grade}
                    </span>
                  </div>
                )}

                {selectedCert.credentialId && (
                  <p
                    className="text-[12px] text-[#B3B3B3] mt-2 font-mono"
                    style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace", fontSize: '12px' }}
                  >
                    Credential ID: {selectedCert.credentialId}
                  </p>
                )}
              </div>

              {selectedCert.skills && selectedCert.skills.length > 0 && (
                <div>
                  <h5
                    className="text-xs font-semibold text-red-400 uppercase tracking-[0.1em] mb-2"
                    style={{ letterSpacing: '0.1em' }}
                  >
                    Skills &amp; Competencies
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedCert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[12px] px-2.5 py-1 rounded-md bg-neutral-900/90 text-[#B3B3B3] border border-neutral-800"
                        style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace", fontSize: '12px' }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            {selectedCert.credentialUrl && (
              <div className="px-6 py-4 bg-dark-primary/90 border-t border-neutral-800/80 flex items-center justify-end">
                <a
                  href={selectedCert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-red-600 hover:bg-red-500 text-white text-xs font-bold uppercase tracking-[0.08em] transition-all duration-300 shadow-[0_0_15px_rgba(220,38,38,0.4)]"
                  style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700 }}
                >
                  <span>Show Credential</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
