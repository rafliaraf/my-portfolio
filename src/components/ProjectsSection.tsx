'use client';

import { useState } from 'react';
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
      'Engineered an integrated municipal digital governance platform for residential site plan legalization and public utilities (PSU) monitoring. Designed with a headless Laravel 12 REST API and multi-role Flutter cross-platform architecture serving Developers, Desk Verifiers, and Field Surveyors.',
    responsibilities: [
      { label: 'Project Management & SDLC:', text: 'Authored end-to-end technical documentation (BRD, SRS, Data Dictionary, and 9-week agile implementation roadmap).' },
      { label: 'Dual-Client Architecture:', text: 'Designed API integration between Laravel 12 Sanctum token authentication and Flutter client with custom state management.' },
      { label: 'Technical Document Engine:', text: 'Architected multipart CAD (.dwg/.dxf) & PDF upload workflows with server-side MIME validation and automated inspection report (BAP) PDF generation.' },
      { label: 'Comprehensive QA Testing:', text: 'Formulated Blackbox test suites, boundary input validations, and executed multi-stakeholder User Acceptance Testing (UAT).' },
      { label: 'Multi-Stage Workflow:', text: 'Implemented rigid verification state machine transitions from administrative check, technical review, field survey, to final endorsement.' },
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
      'Engineered and validated bridging integration between Puskesmas Information System (SIMPUS) and SATUSEHAT Kemenkes Sandbox based on international HL7 FHIR R4 standards. Covered secure OAuth 2.0 authentication, patient encounter lifecycle, and clinical diagnosis mapping.',
    responsibilities: [
      { label: 'OAuth 2.0 Token Bridging:', text: 'Implemented secure Client Credentials Flow for automated token generation and expiry management.' },
      { label: 'FHIR Encounter Lifecycle:', text: 'Synchronized multi-stage encounter states (arrived, in-progress, finished) via RESTful POST/PUT requests.' },
      { label: 'Diagnosis & Condition Mapping:', text: 'Mapped clinical conditions using standardized ICD-10 codes associated with patient IHS numbers and encounter references.' },
      { label: 'Error Handling & Resilience:', text: 'Engineered fallback handlers for HTTP 504 Gateway Timeouts and validated FHIR OperationOutcome errors with persistent logging.' },
      { label: 'Automated Testing:', text: 'Executed end-to-end integration test suites using automated CLI test runners and Postman Collections.' },
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
      'Engineered comprehensive automated blackbox API test suites for the SIMPUS billing and cashier checkout subsystem. Covered consultation tariff calculations, drug prescriptions, multi-payment reconciliation, and double-charge idempotency safety.',
    responsibilities: [
      { label: 'Tariff & Invoice Calculation:', text: 'Tested itemized invoice calculations aggregating registration, doctor consultations, and pharmacy prescription lines.' },
      { label: 'Cashier Checkout Reconciliation:', text: 'Verified cash tender logic (exact change calculation, underpayment rejection) and QRIS digital payment confirmation.' },
      { label: 'Idempotency Protection:', text: 'Validated transaction deduplication via Idempotency-Key headers to prevent duplicate charges from network retry anomalies.' },
      { label: 'Official Receipt Generation:', text: 'Asserted uniqueness and format structure of digital payment receipts (KWT/PKM/YYYYMM/XXXX).' },
      { label: 'Automated Test Suites:', text: 'Constructed Postman collections and Python runner scripts with 100% passed test assertions.' },
    ],
    tags: ['API Testing', 'Postman', 'Python', 'Billing System', 'Idempotency', 'Quality Assurance', 'SIMPUS'],
    link: 'https://github.com/rafliaraf/simpus-billing-api-testing',
    image: '/images/project-satusehat.png',
  },
  {
    id: 'simpus-antrian-reservasi',
    date: 'Sep 2026',
    title: 'SIMPUS – Kiosk Queue & Doctor Appointment API Testing',
    category: 'API Testing & Quality Assurance',
    company: 'Department of Communication and Informatics, Tasikmalaya City',
    type: 'Apprenticeship · APTIKA Division · QA Automation',
    description:
      'Designed and executed end-to-end blackbox API test suites for the SIMPUS Loket/Kiosk queue ticketing and doctor appointment reservation system. Validated multi-unit queue prefixes, desk call lifecycle transitions, and enforced rigorous quota boundary limits.',
    responsibilities: [
      { label: 'Kiosk Queue Dispatching:', text: 'Tested multi-clinic ticketing endpoints across Umum (A), Gigi (B), KIA (C), and Lansia (D) with sequence integrity and queue counter validations.' },
      { label: 'Calling State Transitions:', text: 'Verified real-time lifecycle status transitions from MENUNGGU to DIPANGGIL and SELESAI/DILEWATI via PATCH endpoints with desk assignment.' },
      { label: 'Doctor Schedule Catalog:', text: 'Validated dynamic schedule retrieval and real-time remaining quota tracking with clinic query filtering.' },
      { label: 'Strict Quota Limit Validation:', text: 'Executed quota exhaustion tests, confirming robust HTTP 422 Unprocessable Entity responses when doctor reservation quotas were fully booked.' },
      { label: 'Automated Postman Test Suites:', text: 'Built complete Postman collections with automated pre-request scripts and assertions achieving 100% test pass rate.' },
    ],
    tags: ['API Testing', 'Postman', 'Python', 'REST API', 'Quality Assurance', 'HTTP 422', 'SIMPUS'],
    link: 'https://github.com/rafliaraf/uji-kiosk-antrian-reservasi-puskesmas',
    image: '/images/project-satusehat.png',
  },
  {
    id: 'sipp',
    date: 'Aug 2026 – Present',
    title: 'SIPP KOTA TASIKMALAYA',
    category: 'UI/UX & Web Development',
    company: 'Department of Communication and Informatics, Tasikmalaya City',
    type: 'Apprenticeship · APTIKA Division · On-site',
    description:
      'Assisted the APTIKA team at the Department of Communication and Informatics of Tasikmalaya City to completely overhaul the UI/UX of the SIPP portal. From design research to responsive front-end implementation.',
    responsibilities: [
      { label: 'Design & Wireframing:', text: 'Mapped user flows and designed high-fidelity UI mockups using Figma.' },
      { label: 'Slicing & Integration:', text: 'Translated UI designs into responsive code with Tailwind CSS and Laravel Blade.' },
      { label: 'Data & Service Management:', text: 'Curated and inputted public service data from various regional government agencies (OPD) to populate the portal.' },
      { label: 'Evaluation & Iteration:', text: 'Conducted layout testing across mobile and desktop devices.' },
    ],
    tags: ['Figma', 'UI/UX', 'Laravel', 'Tailwind CSS', 'Data Entry'],
    link: 'https://sipp.tasikmalayakota.go.id/',
    image: '/images/project-sippn.png',
  },
  {
    id: 'fixyoufit',
    date: 'Jan 2024 – Jul 2024',
    title: 'Fixyoufit.id Apparel Artwork',
    category: 'Graphic Design & Merchandise',
    company: 'Fixyoufit.id — Full-time',
    type: 'Jan 2024 - Jul 2024 · 7 mos · Tasikmalaya · On-site',
    description:
      'Created streetwear graphic apparel designs and promotional e-commerce catalog visuals. Handled production workflows from vector drafting to DTF textile printing.',
    responsibilities: [
      { label: 'Graphic Creation:', text: 'Designed e-commerce promotional graphics and streetwear t-shirt artworks using CorelDRAW & Photoshop.' },
      { label: 'Workflow:', text: 'Managed fast-paced design turnaround to meet marketing launches without losing print resolution.' },
      { label: 'Quality Control:', text: 'Supervised Direct Transfer Film (DTF) printing to guarantee crisp colors and durability.' },
    ],
    tags: ['CorelDRAW', 'Adobe Photoshop'],
    image: '/images/project-fixyoufit.png',
  },
  {
    id: 'r2sports',
    date: 'Dec 2023 – Feb 2024',
    title: 'R2Sports Camo Series Hoodie',
    category: 'Graphic Design & Print Production',
    company: 'R2Sports — Part-time',
    type: 'Dec 2023 - Feb 2024 · 3 mos · Tasikmalaya · On-site',
    description:
      'Designed technical sportswear and outdoor camo pattern apparel. Took end-to-end responsibility from digital artwork preparation to large-format sublimation print and finishing.',
    responsibilities: [
      { label: 'Pattern Design:', text: 'Created intricate camouflage seamless patterns and hoodie jersey apparel layouts.' },
      { label: 'Pre-press & Finishing:', text: 'Prepared color separations, print layouts, cutting, and packaging workflows.' },
      { label: 'Equipment Handling:', text: 'Managed printing machines and maintained efficient production uptime.' },
    ],
    tags: ['CorelDRAW', 'Adobe Photoshop'],
    image: '/images/project-graphic.png',
  },
];

export default function ProjectsSection() {
  const [selectedImage, setSelectedImage] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <p className="text-xs sm:text-sm font-semibold text-red-500 uppercase tracking-widest mb-2">
            Selected Works
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Featured Projects & Visuals
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-3 max-w-2xl mx-auto">
            A curated portfolio of digital platforms, UI/UX systems, and physical apparel design — click any image to view in high resolution.
          </p>
        </div>

        {/* Project Cards (Each with Prominent Visual Image) */}
        <div className="space-y-12 lg:space-y-16">
          {projects.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={project.id}
                className="group relative rounded-[2.5rem] border border-neutral-800/80 bg-gradient-to-b from-dark-card to-dark-primary p-6 sm:p-8 lg:p-10 overflow-hidden hover:border-red-500/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(220,38,38,0.12)]"
                data-aos="fade-up"
              >
                <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                  {/* Visual Image Showcase (Takes 6 or 7 columns) */}
                  <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div
                      onClick={() => setSelectedImage(project)}
                      className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 aspect-[4/3] sm:aspect-[16/10] shadow-2xl cursor-pointer group/img flex flex-col"
                    >
                      {/* Browser Window Header Mockup for Web Projects */}
                      {project.id === 'sipp' && (
                        <div className="flex items-center gap-2 px-3 py-2 bg-neutral-900/90 border-b border-neutral-800 z-10 shrink-0">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                          </div>
                          <div className="flex-1 mx-2 px-2.5 py-0.5 rounded-md bg-neutral-950/70 border border-neutral-800 text-[10px] text-neutral-400 font-mono truncate flex items-center gap-1.5">
                            <span className="text-emerald-500">🔒</span>
                            <span>sipp.tasikmalayakota.go.id</span>
                          </div>
                        </div>
                      )}

                      <div className="relative flex-1 w-full h-full overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className={`group-hover/img:scale-105 transition-transform duration-700 ease-out ${
                            project.id === 'sipp' ? 'object-cover object-top' : 'object-contain p-3'
                          }`}
                          loading="lazy"
                        />

                        {/* Subtle Vignette Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-primary/60 via-transparent to-transparent pointer-events-none" />

                        {/* Click-to-zoom badge indicator */}
                        <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md text-white text-xs font-medium border border-white/10 group-hover/img:border-red-500/50 group-hover/img:bg-red-600 transition-all duration-300">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                          </svg>
                          <span>View Full Image</span>
                        </div>

                        {/* Category Badge */}
                        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
                          <span className="text-[11px] font-medium px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-red-400 border border-red-500/30">
                            {project.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Details Content */}
                  <div className={`lg:col-span-6 flex flex-col justify-between ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div>
                      {/* Meta info: Category & Timeline */}
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="text-xs font-semibold tracking-wider uppercase text-red-500 bg-red-500/10 border border-red-500/20 px-3 py-1 rounded-full">
                          {project.category}
                        </span>
                        {project.date && (
                          <span className="text-xs text-neutral-400 font-medium tracking-wide">{project.date}</span>
                        )}
                      </div>

                      {/* Title & Company */}
                      <h3
                        className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-1.5 group-hover:text-red-50 transition-colors"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                      >
                        {project.title}
                      </h3>
                      <p className="text-sm text-red-400 font-medium mb-1">{project.company}</p>
                      <p className="text-xs text-neutral-500 mb-4">{project.type}</p>

                      {/* Description */}
                      <p className="text-sm text-neutral-300 leading-relaxed mb-5">
                        {project.description}
                      </p>

                      {/* Responsibilities list */}
                      <div className="space-y-2.5 mb-6">
                        {project.responsibilities.map((r, i) => (
                          <div key={i} className="flex items-start gap-2.5">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                              {r.label && <span className="text-neutral-200 font-semibold">{r.label} </span>}
                              {r.text}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Area: Tags & Links */}
                    <div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span key={tag} className="tech-tag">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-red-500 hover:text-red-400 font-semibold transition-colors group/link"
                        >
                          {project.link.includes('github.com') ? 'View on GitHub Repository' : 'Visit Live Site'}
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                          </svg>
                        </a>
                      )}
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Fullscreen Image Preview Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-dark-card border border-neutral-800 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(220,38,38,0.25)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800/80 bg-dark-primary/70">
              <div>
                <span className="text-xs text-red-500 font-semibold uppercase tracking-wider">
                  {selectedImage.category}
                </span>
                <h4 className="text-lg font-bold text-white">{selectedImage.title}</h4>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="p-2 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                aria-label="Close modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="relative w-full h-[60vh] sm:h-[70vh] bg-neutral-950 flex items-center justify-center p-4">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-dark-primary/90 border-t border-neutral-800/80 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <p className="text-xs sm:text-sm text-neutral-300 max-w-xl">
                {selectedImage.description}
              </p>
              <div className="flex flex-wrap gap-1.5 shrink-0">
                {selectedImage.tags.map((t) => (
                  <span key={t} className="tech-tag text-xs">
                    {t}
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
