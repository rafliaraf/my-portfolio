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
  skills: string[];
  image: string;
  type: 'course' | 'internship';
}

const certifications: Certification[] = [
  {
    id: 'pkl-istimewa-jaya',
    title: 'Praktik Kerja Lapangan (PKL) - Digital Istimewa Jaya Printing',
    issuer: 'ISTIMEWA JAYA DIGITAL PRINTING PUSAT',
    issueDate: 'Issued Oct 2022',
    skills: ['CorelDRAW', 'Quality Control', 'Pre-Press Production', 'Finishing Process'],
    image: '/images/cert-pkl.jpg',
    type: 'internship',
  },
  {
    id: 'dicoding-c',
    title: 'Memulai Pemrograman Dengan C',
    issuer: 'Dicoding Indonesia',
    issueDate: 'Issued Jan 2024',
    expiryDate: 'Expires Jan 2027',
    credentialId: '6RPNVY13QZ2M',
    credentialUrl: 'https://www.dicoding.com/certificates/6RPNVY13QZ2M',
    skills: ['C (Programming Language)', 'Algorithms', 'Logic Formulation'],
    image: '/images/cert-c.jpg',
    type: 'course',
  },
  {
    id: 'dicoding-java',
    title: 'Memulai Pemrograman Dengan Java',
    issuer: 'Dicoding Indonesia',
    issueDate: 'Issued May 2026',
    expiryDate: 'Expires May 2029',
    credentialId: '2VX30M23JXYQ',
    credentialUrl: 'https://www.dicoding.com/certificates/2VX30M23JXYQ',
    skills: ['Java', 'Object-Oriented Programming (OOP)', 'Software Architecture'],
    image: '/images/cert-java.jpg',
    type: 'course',
  },
];

export default function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="relative py-20 sm:py-28 bg-dark-secondary/20 border-t border-neutral-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <p className="text-xs sm:text-sm font-semibold text-red-500 uppercase tracking-widest mb-2">
            Verified Credentials
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Licenses & Certifications
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-3">
            Official credentials and skill verifications recognized by accredited institutions and industry training academies. Click certificate preview to inspect in full resolution.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-neutral-800/80 bg-gradient-to-b from-dark-card to-dark-primary overflow-hidden hover:border-red-500/40 transition-all duration-500 hover:shadow-[0_0_35px_rgba(220,38,38,0.12)]"
              data-aos="fade-up"
            >
              <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl z-10" />

              {/* Certificate Image Preview */}
              <div
                onClick={() => setSelectedCert(cert)}
                className="relative w-full aspect-[16/10] bg-neutral-950 overflow-hidden cursor-pointer group/img border-b border-neutral-800/80"
              >
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover group-hover/img:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-card/90 via-transparent to-transparent opacity-60 group-hover/img:opacity-20 transition-opacity" />

                {/* Click to inspect overlay hint */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                  <span className="px-3.5 py-1.5 rounded-full bg-red-600 text-white text-xs font-semibold shadow-lg flex items-center gap-1.5 scale-95 group-hover/img:scale-100 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                    Inspect Document
                  </span>
                </div>

                {/* Top Badge: Type */}
                <div className="absolute top-3 right-3 z-10">
                  <span className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-neutral-300">
                    {cert.type === 'internship' ? 'Vocational' : 'Accredited'}
                  </span>
                </div>
              </div>

              {/* Certificate Content Details */}
              <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                <div>
                  {/* Title & Issuer */}
                  <h3
                    className="text-lg font-bold text-white tracking-tight leading-snug group-hover:text-red-50 transition-colors"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {cert.title}
                  </h3>
                  <p className="text-sm font-semibold text-red-400 mt-1.5">{cert.issuer}</p>

                  {/* Date & Expiry */}
                  <div className="mt-2.5 flex flex-wrap items-center gap-2 text-xs text-neutral-500">
                    <span>{cert.issueDate}</span>
                    {cert.expiryDate && (
                      <>
                        <span>·</span>
                        <span>{cert.expiryDate}</span>
                      </>
                    )}
                  </div>

                  {/* Credential ID if present */}
                  {cert.credentialId && (
                    <p className="text-xs text-neutral-500 mt-1 font-mono tracking-wider">
                      Credential ID: <span className="text-neutral-300">{cert.credentialId}</span>
                    </p>
                  )}

                  {/* Skills tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] px-2.5 py-1 rounded-lg bg-white/[0.04] text-neutral-300 border border-white/[0.06]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button: Show Credential */}
                <div className="mt-6 pt-5 border-t border-neutral-800/60">
                  {cert.credentialUrl ? (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-neutral-200 bg-neutral-900/90 hover:bg-neutral-800 hover:text-white border border-neutral-800 hover:border-red-500/40 transition-all duration-300 group/btn"
                    >
                      <span>Show credential</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3.5 h-3.5 text-neutral-400 group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ) : (
                    <button
                      onClick={() => setSelectedCert(cert)}
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-neutral-200 bg-neutral-900/90 hover:bg-neutral-800 hover:text-white border border-neutral-800 hover:border-red-500/40 transition-all duration-300 group/btn"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>View Certificate</span>
                    </button>
                  )}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Certificate Document Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-dark-card border border-neutral-800 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(220,38,38,0.25)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800/80 bg-dark-primary/70">
              <div>
                <span className="text-xs text-red-500 font-semibold uppercase tracking-wider">
                  {selectedCert.issuer}
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white">{selectedCert.title}</h4>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-2 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                aria-label="Close modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Certificate Image */}
            <div className="relative w-full h-[55vh] sm:h-[65vh] bg-neutral-950 flex items-center justify-center p-2 sm:p-4">
              <Image
                src={selectedCert.image}
                alt={selectedCert.title}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-dark-primary/90 border-t border-neutral-800/80 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="text-xs text-neutral-400 space-y-1">
                <p><span className="text-white font-medium">Timeline:</span> {selectedCert.issueDate} {selectedCert.expiryDate ? `· ${selectedCert.expiryDate}` : ''}</p>
                {selectedCert.credentialId && (
                  <p><span className="text-white font-medium">Credential ID:</span> <span className="font-mono">{selectedCert.credentialId}</span></p>
                )}
              </div>

              {selectedCert.credentialUrl && (
                <a
                  href={selectedCert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-semibold transition-colors shrink-0"
                >
                  <span>Verify at Dicoding</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
