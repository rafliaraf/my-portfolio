'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  grade?: string;
  period?: string;
  skills?: string[];
  mediaThumbnail?: {
    title: string;
    image: string;
  };
  hasDicodingIcon?: boolean;
}

const certifications: Certification[] = [
  {
    id: 'pkl-istimewa-jaya',
    title: 'Praktik Kerja Lapangan (PKL)',
    issuer: 'CV. Istimewa Jaya Digital Printing · SMK Negeri 3 Tasikmalaya',
    issueDate: 'Issued Oct 2022',
    grade: 'Sangat Baik',
    period: '25 Juli s.d 06 Oktober 2022 (3 Bulan)',
    skills: ['CorelDRAW', 'Digital Printing Operations', 'Quality Control', 'Finishing & Production'],
    mediaThumbnail: {
      title: 'Sertifikat Praktik Kerja Lapangan (PKL) - CV. Istimewa Jaya Digital Printing',
      image: '/images/cert-pkl.jpg',
    },
  },
  {
    id: 'dicoding-c',
    title: 'Memulai Pemrograman Dengan C',
    issuer: 'Dicoding Indonesia',
    issueDate: 'Issued Jan 2024',
    expiryDate: 'Expires Jan 2027',
    credentialId: '6RPNVY13QZ2M',
    credentialUrl: 'https://www.dicoding.com/certificates/6RPNVY13QZ2M',
    hasDicodingIcon: true,
  },
  {
    id: 'dicoding-java',
    title: 'Memulai Pemrograman Dengan Java',
    issuer: 'Dicoding Indonesia',
    issueDate: 'Issued May 2026',
    expiryDate: 'Expires May 2029',
    credentialId: '2VX30M23JXYQ',
    credentialUrl: 'https://www.dicoding.com/certificates/2VX30M23JXYQ',
    hasDicodingIcon: true,
  },
];

export default function CertificationsSection() {
  const [selectedMedia, setSelectedMedia] = useState<{ title: string; image: string } | null>(null);

  return (
    <section id="certifications" className="relative py-20 sm:py-28 bg-dark-secondary/20 border-t border-neutral-800/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="text-xs sm:text-sm font-semibold text-red-500 uppercase tracking-widest mb-2">
            Verified Credentials
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Licenses & certifications
          </h2>
          <p className="text-sm text-neutral-400 mt-2">
            Official licenses, vocational training, and verified certifications matching LinkedIn record.
          </p>
        </div>

        {/* LinkedIn-Style List Container */}
        <div
          className="rounded-3xl border border-neutral-800/90 bg-gradient-to-b from-dark-card to-dark-primary/95 p-6 sm:p-10 shadow-2xl divide-y divide-neutral-800/80"
          data-aos="fade-up"
        >
          {certifications.map((cert) => (
            <div key={cert.id} className="py-7 first:pt-0 last:pb-0 flex items-start gap-4 sm:gap-6 group">
              
              {/* Left Logo / Icon (LinkedIn Style Square) */}
              <div className="shrink-0 mt-1">
                {cert.hasDicodingIcon ? (
                  /* Dicoding 'g' in Dark Blue rounded square */
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#091b29] border border-blue-900/40 flex items-center justify-center shadow-md">
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#00b4d8]" style={{ fontFamily: "'Syne', sans-serif" }}>
                      g
                    </span>
                  </div>
                ) : (
                  /* Generic Company Placeholder icon like LinkedIn */
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-neutral-800/90 border border-neutral-700/60 flex items-center justify-center text-neutral-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Right Content */}
              <div className="flex-1 min-w-0">
                <h3
                  className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug group-hover:text-red-400 transition-colors"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {cert.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-medium mt-0.5">{cert.issuer}</p>

                {/* Issued, Expiry, & Period */}
                <div className="mt-1 text-xs text-neutral-500 flex flex-wrap items-center gap-y-1">
                  <span>{cert.issueDate}</span>
                  {cert.expiryDate && (
                    <>
                      <span className="mx-1.5">·</span>
                      <span>{cert.expiryDate}</span>
                    </>
                  )}
                  {cert.period && (
                    <>
                      <span className="mx-1.5">·</span>
                      <span className="text-neutral-400">{cert.period}</span>
                    </>
                  )}
                </div>

                {/* Grade / Hasil (e.g. Sangat Baik) */}
                {cert.grade && (
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-[11px] font-mono text-neutral-400">Hasil:</span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {cert.grade}
                    </span>
                  </div>
                )}

                {/* Credential ID */}
                {cert.credentialId && (
                  <p className="text-xs text-neutral-500 mt-1 font-mono">
                    Credential ID {cert.credentialId}
                  </p>
                )}

                {/* Skills Line */}
                {cert.skills && cert.skills.length > 0 && (
                  <p className="text-xs sm:text-sm text-neutral-400 mt-2.5">
                    <span className="font-semibold text-neutral-300">Skills: </span>
                    {cert.skills.join(', ')}
                  </p>
                )}

                {/* Media Attachment Badge (Matches LinkedIn thumbnail style) */}
                {cert.mediaThumbnail && (
                  <div
                    onClick={() => setSelectedMedia(cert.mediaThumbnail!)}
                    className="mt-3.5 inline-flex items-center gap-3.5 p-2 pr-4 rounded-xl border border-neutral-700/80 bg-neutral-900/90 hover:bg-neutral-850 hover:border-red-500/50 cursor-pointer transition-all duration-300 group/thumb max-w-md shadow-sm"
                  >
                    <div className="relative w-20 sm:w-24 h-12 sm:h-14 rounded-lg overflow-hidden shrink-0 border border-neutral-800 bg-neutral-950">
                      <Image
                        src={cert.mediaThumbnail.image}
                        alt={cert.mediaThumbnail.title}
                        fill
                        className="object-cover group-hover/thumb:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-neutral-200 group-hover/thumb:text-white line-clamp-2 leading-snug">
                      {cert.mediaThumbnail.title}
                    </span>
                  </div>
                )}

                {/* Show Credential Button (Matches LinkedIn button with rounded-full border) */}
                {cert.credentialUrl && (
                  <div className="mt-3.5">
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-400 hover:border-white text-xs sm:text-sm font-semibold text-white hover:bg-white/10 transition-all duration-200"
                    >
                      <span>Show credential</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3.5 h-3.5 text-neutral-300"
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
          ))}
        </div>

      </div>

      {/* Lightbox Modal when clicking media thumbnail */}
      {selectedMedia && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedMedia(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-dark-card border border-neutral-800 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(220,38,38,0.25)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800/80 bg-dark-primary/70">
              <h4 className="text-base sm:text-lg font-bold text-white">{selectedMedia.title}</h4>
              <button
                onClick={() => setSelectedMedia(null)}
                className="p-2 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                aria-label="Close modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="relative w-full h-[60vh] sm:h-[70vh] bg-neutral-950 flex items-center justify-center p-4">
              <Image
                src={selectedMedia.image}
                alt={selectedMedia.title}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
