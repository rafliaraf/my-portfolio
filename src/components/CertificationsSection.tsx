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

  return (
    <section id="certifications" className="relative py-20 sm:py-28 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16" data-aos="zoom-in">
          <p
            className="text-xs sm:text-sm font-semibold text-red-500 uppercase mb-2 tracking-[0.1em]"
            style={{ letterSpacing: '0.1em' }}
          >
            Verified Credentials
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
            style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700 }}
          >
            Licenses &amp; certifications
          </h2>
          <p
            className="text-sm sm:text-base text-[#B3B3B3] font-normal mt-3 max-w-2xl mx-auto leading-[1.65]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Verified programming certifications and vocational credentials. Click any badge to view details.
          </p>
        </div>

        {/* ── Gallery Card Carousel on Mobile, Grid on Tablet/Desktop ── */}
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 max-w-5xl mx-auto overflow-x-auto sm:overflow-visible pb-4 sm:pb-0 -mx-4 px-4 sm:mx-auto sm:px-0 snap-x snap-mandatory scrollbar-none">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              data-aos="zoom-in"
              data-aos-delay={index * 120}
              onClick={() => setSelectedCert(cert)}
              className="group relative cursor-pointer shrink-0 w-[78vw] max-w-[280px] sm:w-auto sm:max-w-none snap-center flex flex-col rounded-sm border-2 border-neutral-700/80 bg-neutral-950/90 hover:border-red-500/90 transition-all duration-300 hover:shadow-[0_0_30px_rgba(220,38,38,0.25)] overflow-hidden"
            >
              {/* Outer border inset frame matching the reference screenshot */}
              <div className="p-3.5 sm:p-4 flex flex-col flex-1">

                {/* Square Image Box with Fine Border */}
                <div className="relative w-full aspect-square bg-neutral-900 border border-neutral-800/90 overflow-hidden">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    unoptimized={true}
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  {/* Subtle hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Bottom Metadata (Title, Issuer, Year) */}
                <div className="pt-3.5 pb-1 flex flex-col text-left">
                  <h3
                    className="text-base sm:text-lg font-bold text-white tracking-wide group-hover:text-red-400 transition-colors duration-200 line-clamp-1"
                    style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700 }}
                  >
                    {cert.title}
                  </h3>
                  <p
                    className="text-xs uppercase text-neutral-400 tracking-wider mt-1 font-medium line-clamp-1"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {cert.issuer}
                  </p>
                  <span
                    className="text-[12px] text-[#B3B3B3] font-mono mt-1"
                    style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace", fontSize: '12px' }}
                  >
                    {cert.year}
                  </span>
                </div>

              </div>
            </div>
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
