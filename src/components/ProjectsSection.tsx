'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Project {
  id: string;
  date?: string;
  title: string;
  category: string;
  company: string;
  type: string;
  description: string;
  responsibilities: { label: string; text: string }[];
  tags: string[];
  link?: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 'satu-rumah',
    date: 'Aug 2026 – Present',
    title: 'SATU RUMAH PERWASKIM – Site Plan & PSU System',
    category: 'System Architecture & QA Testing',
    company: 'Dinas Perumahan dan Kawasan Permukiman Kota Tasikmalaya',
    type: 'Dual-Client Architecture · Project Management · Lead QA',
    description:
      'A municipal platform for managing residential site plan approvals and public utility (PSU) verification. Built using Laravel 12 on the back-end and Flutter on mobile, connecting developers, administrative reviewers, and field survey teams.',
    responsibilities: [
      { label: 'Technical Docs & Planning:', text: 'Created the initial BRD, SRS, data dictionary, and coordinated the 9-week development sprints.' },
      { label: 'API & Auth Setup:', text: 'Connected the Flutter app to Laravel 12 using Sanctum token authentication with role-based access.' },
      { label: 'File Upload & Reports:', text: 'Handled CAD (.dwg/.dxf) and PDF file uploads with strict MIME-type checks and auto-generated official inspection PDFs.' },
      { label: 'Testing & QA:', text: 'Ran blackbox tests and led User Acceptance Testing (UAT) directly with government staff.' },
      { label: 'Approval Workflow:', text: 'Built the multi-step verification pipeline from document submission to field check and final endorsement.' },
    ],
    tags: ['Project Management', 'Quality Assurance', 'Laravel 12', 'Flutter', 'REST API', 'Sanctum', 'Blackbox Testing', 'UAT'],
    image: '/images/project-saturumah.png',
  },
  {
    id: 'simpus-satusehat',
    date: 'Sep 2026',
    title: 'SIMPUS – SATUSEHAT Integration (HL7 FHIR R4)',
    category: 'Backend & API Integration',
    company: 'SATUSEHAT Sandbox Kemenkes RI',
    type: 'HealthTech Interoperability · API Testing · Independent Project',
    description:
      'Bridged a clinic system (SIMPUS) with the Indonesian Ministry of Health (Kemenkes) SATUSEHAT sandbox using HL7 FHIR R4 standards. Handled OAuth authentication, patient encounter tracking, and medical diagnosis mapping.',
    responsibilities: [
      { label: 'OAuth 2.0 Auth:', text: 'Implemented client credentials token fetching with automatic refresh on token expiry.' },
      { label: 'Encounter Syncing:', text: 'Updated patient consultation states (arrived, in-consultation, completed) directly to the FHIR endpoint.' },
      { label: 'Condition & ICD-10:', text: 'Mapped diagnosis data to ICD-10 standards linked to the patient\'s verified IHS number.' },
      { label: 'Error & Timeout Handling:', text: 'Added fallback handling for 504 gateway timeouts and logged OperationOutcome responses.' },
      { label: 'Automated Postman Tests:', text: 'Wrote automated test suites in Postman to ensure requests conform to FHIR schemas.' },
    ],
    tags: ['HL7 FHIR R4', 'SATUSEHAT API', 'OAuth 2.0', 'Node.js', 'Postman', 'ICD-10', 'HealthTech'],
    image: '/images/project-satusehat.png',
  },
  {
    id: 'simpus-billing-kasir',
    date: 'Sep 2026',
    title: 'SIMPUS – Billing, Cashier & Invoice API Testing',
    category: 'API Testing & Quality Assurance',
    company: 'Department of Communication and Informatics, Tasikmalaya City',
    type: 'Apprenticeship · APTIKA Division · QA Automation',
    description:
      'Automated API test suites for the Puskesmas cashier and billing service. Tested calculation accuracy for patient fees, pharmacy prescriptions, QRIS payments, and double-charge protection.',
    responsibilities: [
      { label: 'Invoice Calculations:', text: 'Tested itemized billings combining registration, clinic checkups, and prescription items.' },
      { label: 'Cash & QRIS Payment Checks:', text: 'Verified cash change math, underpayment rejections, and simulated QRIS transaction callbacks.' },
      { label: 'Idempotency Protection:', text: 'Used Idempotency-Key headers to ensure retried network requests never charge a patient twice.' },
      { label: 'Receipt Format Verification:', text: 'Asserted unique invoice numbers and receipt formatting requirements.' },
      { label: 'Automated Test Scripts:', text: 'Built Postman collections and Python runners with 100% passing test assertions.' },
    ],
    tags: ['API Testing', 'Postman', 'Python', 'Billing System', 'Idempotency', 'Quality Assurance', 'SIMPUS'],
    link: 'https://github.com/rafliaraf/simpus-billing-api-testing',
    image: '/images/project-simpus-billing.jpg',
  },
  {
    id: 'simpus-antrian-reservasi',
    date: 'Sep 2026',
    title: 'SIMPUS – Kiosk Queue & Doctor Appointment API Testing',
    category: 'API Testing & Quality Assurance',
    company: 'Department of Communication and Informatics, Tasikmalaya City',
    type: 'Apprenticeship · APTIKA Division · QA Automation',
    description:
      'End-to-end blackbox API testing for self-service kiosk ticketing and doctor booking. Verified ticket queue numbering, desk calling status, and doctor reservation limits.',
    responsibilities: [
      { label: 'Queue Ticket Endpoints:', text: 'Tested ticketing logic for general, dental, maternal, and elderly clinic queues.' },
      { label: 'Status Updates:', text: 'Verified status transitions when patients are waiting, called to a desk, or completed.' },
      { label: 'Quota Exhaustion Tests:', text: 'Simulated fully booked doctor schedules, making sure the API properly returns HTTP 422 instead of crashing.' },
      { label: 'Automated Postman Collection:', text: 'Created test scripts in Postman to validate response schemas and status codes automatically.' },
    ],
    tags: ['API Testing', 'Postman', 'Python', 'REST API', 'Quality Assurance', 'HTTP 422', 'SIMPUS'],
    link: 'https://github.com/rafliaraf/uji-kiosk-antrian-reservasi-puskesmas',
    image: '/images/project-simpus-antrian.jpg',
  },
  {
    id: 'simpus-farmasi-resep',
    date: 'Sep 2026',
    title: 'SIMPUS – E-Prescription & Pharmacy Inventory API Testing',
    category: 'API Testing & Quality Assurance',
    company: 'Department of Communication and Informatics, Tasikmalaya City',
    type: 'Apprenticeship · APTIKA Division · QA Automation',
    description:
      'Automated API test suites for the e-prescription and medicine inventory workflow. Focused on doctor prescription validation, stock deduction, allergy alerts, and race conditions.',
    responsibilities: [
      { label: 'Prescription Flow:', text: 'Tested prescription intake from doctor consultations through pharmacist validation.' },
      { label: 'Allergy Alerts:', text: 'Verified that prescribing medications conflicting with recorded patient allergies triggers HTTP 422 warnings.' },
      { label: 'Stock Deduction Logic:', text: 'Checked that dispensing medicine deducts real stock accurately and blocks requests exceeding inventory.' },
      { label: 'Concurrency / Race Conditions:', text: 'Sent concurrent simultaneous requests under low stock to confirm database locks prevent negative stock.' },
      { label: 'Automated Testing:', text: 'Developed Postman collections and Python runner scripts achieving 100% passed test cases.' },
    ],
    tags: ['API Testing', 'Postman', 'Python', 'Inventory System', 'Negative Stock', 'Race Condition', 'SIMPUS'],
    link: 'https://github.com/rafliaraf/Uji-Farmasi-Resep-Elektronik-Logistik-Obat',
    image: '/images/project-simpus-farmasi.png',
  },
  {
    id: 'sipp',
    date: 'Aug 2026 – Present',
    title: 'SIPP KOTA TASIKMALAYA',
    category: 'Public Sector Portal & API Integration',
    company: 'Department of Communication and Informatics, Tasikmalaya City',
    type: 'Apprenticeship · APTIKA Division · On-site',
    description:
      'Worked with the Diskominfo team to update the municipal public service portal (SIPP). Cleaned up agency service data, built responsive views in Laravel Blade, and tested data accuracy across devices.',
    responsibilities: [
      { label: 'Data Management:', text: 'Organized and verified public service catalog data across local government agencies.' },
      { label: 'Responsive Front-End:', text: 'Built clean interface components using Laravel Blade and Tailwind CSS.' },
      { label: 'Testing & Verification:', text: 'Manually verified public service directory links, forms, and responsiveness across phones and desktops.' },
    ],
    tags: ['Laravel', 'REST API', 'Data Architecture', 'Tailwind CSS', 'Public Sector'],
    link: 'https://sipp.tasikmalayakota.go.id/',
    image: '/images/project-sippn.png',
  },
];

export default function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const total = projects.length;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
    setTouchStartX(null);
  };

  return (
    <section id="projects" className="relative py-20 sm:py-28 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14" data-aos="zoom-in">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span
              className="text-[11px] sm:text-xs font-semibold text-neutral-300 uppercase tracking-widest"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Systems &amp; Architecture
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
            style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700 }}
          >
            Featured Web &amp; Engineering Projects
          </h2>
          <p
            className="text-sm sm:text-base text-neutral-300/80 font-normal mt-3 max-w-2xl mx-auto leading-[1.65]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            A collection of web applications, public sector platforms, and robust API architectures I have engineered. Click any project for technical specifications.
          </p>
        </div>

        {/* ── Featured Wide Showcase Carousel (Matching Reference Screenshot) ── */}
        <div className="relative w-full max-w-6xl mx-auto flex items-center justify-center min-h-[360px] sm:min-h-[420px] md:min-h-[460px]">
          {/* Circular Left Arrow Button (Bordered, semi-transparent) */}
          <button
            onClick={prevSlide}
            aria-label="Previous project"
            className="absolute left-1 sm:left-2 md:left-6 z-30 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/40 hover:bg-black/70 border border-white/20 hover:border-white/50 text-white flex items-center justify-center backdrop-blur-md transition-all duration-300 active:scale-95 shadow-xl cursor-pointer"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 stroke-current fill-none stroke-[2.5]" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Slider Stage Container */}
          <div className="relative w-full h-[360px] sm:h-[400px] md:h-[420px] flex items-center justify-center overflow-hidden">
            {projects.map((project, idx) => {
              let offset = idx - currentIndex;
              if (offset > total / 2) offset -= total;
              if (offset < -total / 2) offset += total;

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
                  key={project.id}
                  onClick={() => {
                    if (isCenter) {
                      setSelectedProject(project);
                    } else {
                      setCurrentIndex(idx);
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
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-transparent via-black/20 to-neutral-900/90 sm:to-neutral-900" />
                    </div>

                    {/* Right Half: Content Info (Matching Reference Layout) */}
                    <div className="sm:col-span-6 p-5 sm:p-7 md:p-8 flex flex-col justify-between bg-neutral-900/95 sm:bg-transparent">
                      <div>
                        {/* Title with Courier/Sans Tech Look */}
                        <h3
                          className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-snug line-clamp-2"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {project.title}
                        </h3>

                        {/* Description Paragraph */}
                        <p
                          className="text-xs sm:text-sm text-neutral-300/85 mt-2.5 sm:mt-3 leading-relaxed line-clamp-3 font-normal"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {project.description}
                        </p>
                      </div>

                      {/* Pill Button "View detail" + Circular arrow button */}
                      <div className="flex items-center gap-2.5 mt-4 pt-3 border-t border-white/10 sm:border-t-0 sm:pt-0">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedProject(project);
                          }}
                          className="px-6 py-2.5 rounded-full bg-white text-black font-semibold text-xs sm:text-sm tracking-normal shadow-lg hover:bg-neutral-200 transition-all duration-200 cursor-pointer italic"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          View detail
                        </button>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedProject(project);
                          }}
                          aria-label="Open project modal"
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

          {/* Circular Right Arrow Button (Bordered, semi-transparent) */}
          <button
            onClick={nextSlide}
            aria-label="Next project"
            className="absolute right-1 sm:right-2 md:right-6 z-30 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/40 hover:bg-black/70 border border-white/20 hover:border-white/50 text-white flex items-center justify-center backdrop-blur-md transition-all duration-300 active:scale-95 shadow-xl cursor-pointer"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 stroke-current fill-none stroke-[2.5]" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-4 sm:mt-6">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to project ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                i === currentIndex
                  ? 'w-7 bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]'
                  : 'w-2 bg-neutral-800 hover:bg-neutral-600'
              }`}
            />
          ))}
        </div>
      </div>

      {/* ── Detail Modal for Selected Project ── */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-dark-card border border-red-900/60 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(220,38,38,0.3)] max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800/80 bg-dark-primary/70">
              <div>
                <span
                  className="text-xs text-red-500 font-semibold uppercase tracking-[0.1em]"
                  style={{ letterSpacing: '0.1em' }}
                >
                  {selectedProject.category}
                </span>
                <h4
                  className="text-lg font-bold text-white"
                  style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700 }}
                >
                  {selectedProject.title}
                </h4>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
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
              <div className="relative w-full aspect-[16/9] max-h-[380px] rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950/90 shadow-inner flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div>
                <h5
                  className="text-xs font-semibold text-red-400 uppercase tracking-[0.1em] mb-1.5"
                  style={{ letterSpacing: '0.1em' }}
                >
                  Overview
                </h5>
                <p
                  className="text-sm text-[#B3B3B3] font-normal leading-[1.65]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {selectedProject.description}
                </p>
              </div>

              <div>
                <h5
                  className="text-xs font-semibold text-red-400 uppercase tracking-[0.1em] mb-2"
                  style={{ letterSpacing: '0.1em' }}
                >
                  Key Responsibilities &amp; Scope
                </h5>
                <div className="space-y-2">
                  {selectedProject.responsibilities.map((r, i) => (
                    <div
                      key={i}
                      className="text-xs sm:text-sm text-[#B3B3B3] font-normal leading-[1.65] flex items-start gap-2"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      <span className="text-red-500 mt-1 font-bold">•</span>
                      <span>
                        <strong className="text-[#E0E0E0] font-medium">{r.label} </strong>
                        {r.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-dark-primary/90 border-t border-neutral-800/80 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[12px] px-2.5 py-1 rounded-md bg-neutral-900/90 text-[#B3B3B3] border border-neutral-800"
                    style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace", fontSize: '12px' }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-red-400 hover:text-red-300 underline underline-offset-4"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  View Code on GitHub →
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
