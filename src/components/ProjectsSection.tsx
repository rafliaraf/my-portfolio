'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';

const projects = [
  {
    id: 'sippn',
    fullWidth: true,
    badge: { label: '85% Completed', color: 'badge-completed', dot: 'bg-yellow-400' },
    date: 'Aug 2026 – Present',
    title: 'SIPP KOTA TASIKMALAYA',
    company: 'Department of Communication and Informatics, Tasikmalaya City',
    type: 'Apprenticeship · APTIKA Division · On-site',
    description: 'Assisted the APTIKA team at the Department of Communication and Informatics of Tasikmalaya City to completely overhaul the UI/UX of the SIPPN (National Public Service Information System) portal. From the design research phase to the front-end code implementation process, I ensured the application became more modern and user-friendly.',
    responsibilities: [
      { label: 'Design & Wireframing:', text: 'Mapped user flows and designed user interfaces (high-fidelity mockups) using Figma.' },
      { label: 'Slicing & Integration:', text: 'Translated UI designs into responsive code using Tailwind CSS and Laravel Blade.' },
      { label: 'Evaluation & Iteration:', text: 'Conducted layout testing to ensure compatibility across various devices (Mobile/Desktop).' },
    ],
    tags: ['Figma', 'UI/UX', 'Laravel', 'Tailwind CSS', 'JavaScript', 'HTML5/CSS3'],
    link: 'https://sipp.tasikmalayakota.go.id/',
    image: '/images/project-sippn.png',
    hidden: false,
  },
  {
    id: 'fixyoufit',
    fullWidth: false,
    badge: { label: 'Completed', color: 'badge-completed', dot: 'bg-yellow-400' },
    date: '',
    title: 'Graphic Designer',
    company: 'Fixyoufit.id — Full-time',
    type: 'Jan 2024 - Jul 2024 · 7 mos\nTasikmalaya, West Java, Indonesia · On-site',
    description: '',
    responsibilities: [
      { label: '', text: 'Designed graphics for e-commerce promotional needs (such as Shopee) using CorelDRAW, ensuring appropriate visual aesthetics to attract customers.' },
      { label: '', text: 'Managed a fast-paced design workflow to meet market deadlines without sacrificing sharpness and color quality when printed.' },
      { label: '', text: 'Directly supervised the production of Direct Transfer Film (DTF) printing to maintain physical product quality standards.' },
    ],
    tags: [],
    link: '',
    image: '/images/project-fixyoufit.png',
    hidden: true,
  },
  {
    id: 'r2sports',
    fullWidth: false,
    badge: { label: 'Completed', color: 'badge-completed', dot: 'bg-yellow-400' },
    date: '',
    title: 'Graphic Designer',
    company: 'R2Sports — Part-time',
    type: 'Dec 2023 - Feb 2024 · 3 mos\nTasikmalaya, West Java, Indonesia · On-site',
    description: '',
    responsibilities: [
      { label: '', text: 'Took full responsibility for the entire production workflow—from design concept, print file preparation, to the finishing process (cutting, laminating, and packaging).' },
      { label: '', text: 'Handled technical issues with printing machines swiftly to minimize production failures and maintain work time efficiency.' },
    ],
    tags: [],
    link: '',
    image: '/images/project-graphic.png',
    hidden: true,
  },
];

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (showAll) {
      setTimeout(() => AOS.refresh(), 100);
    }
  }, [showAll]);

  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12" data-aos="fade-right">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
              Featured Solutions & Projects
            </h2>
          </div>
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors group"
          >
            <span>{showAll ? 'View Less' : 'View All'}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-4 h-4 transition-transform duration-300 ${showAll ? 'rotate-180' : 'group-hover:translate-x-1'}`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {projects.map((project) => {
            if (project.hidden && !showAll) return null;

            if (project.fullWidth) {
              return (
                <div
                  key={project.id}
                  className="lg:col-span-2 project-card group relative rounded-[2rem] border border-neutral-800/80 bg-gradient-to-b from-dark-card to-dark-primary p-6 sm:p-10 overflow-hidden"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Content */}
                    <div className="flex flex-col">
                      <div>
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <span className={`badge ${project.badge.color}`}>
                            <span className={`inline-block w-1.5 h-1.5 rounded-full ${project.badge.dot}`} />
                            {project.badge.label}
                          </span>
                          {project.date && <span className="text-xs text-neutral-600">{project.date}</span>}
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>{project.title}</h3>
                        <p className="text-xs text-neutral-500 font-medium mb-1">{project.company}</p>
                        <p className="text-xs text-neutral-600 mb-4">{project.type}</p>
                        {project.description && (
                          <p className="text-sm text-neutral-400 leading-relaxed mb-4">{project.description}</p>
                        )}
                        <div className="space-y-2 mb-5">
                          {project.responsibilities.map((r, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <span className="mt-1.5 w-1 h-1 rounded-full bg-red-500 shrink-0" />
                              <p className="text-xs text-neutral-500 leading-relaxed">
                                {r.label && <span className="text-neutral-300 font-medium">{r.label} </span>}
                                {r.text}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="tech-tag">{tag}</span>
                        ))}
                      </div>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 mt-4 text-sm text-red-500 hover:text-red-400 font-medium transition-colors group"
                        >
                          Visit Live Site
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                          </svg>
                        </a>
                      )}
                    </div>

                    {/* Image */}
                    <div className="relative rounded-2xl overflow-hidden border border-neutral-800/50 bg-dark-secondary shadow-2xl group-hover:shadow-[0_0_40px_rgba(220,38,38,0.15)] transition-shadow duration-500 aspect-[4/3] sm:aspect-video md:aspect-[4/3] lg:aspect-[16/10]">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={project.id}
                className="project-card group flex flex-col relative rounded-[2rem] border border-neutral-800/80 bg-gradient-to-b from-dark-card to-dark-primary p-6 sm:p-8 overflow-hidden"
                data-aos="zoom-in-up"
              >
                <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="mb-4">
                  <span className={`badge ${project.badge.color}`}>
                    <span className={`inline-block w-1.5 h-1.5 rounded-full ${project.badge.dot}`} />
                    {project.badge.label}
                  </span>
                </div>
                <h3 className="text-xl font-bold tracking-tight text-white mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>{project.title}</h3>
                <p className="text-xs text-neutral-500 mb-3 font-medium">{project.company}</p>
                <p className="text-xs text-neutral-600 mb-4 whitespace-pre-line">{project.type}</p>
                <div className="space-y-2 mb-5">
                  {project.responsibilities.map((r, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-red-500 shrink-0" />
                      <p className="text-xs text-neutral-400 leading-relaxed">{r.text}</p>
                    </div>
                  ))}
                </div>
                <div className="relative rounded-2xl overflow-hidden border border-neutral-800/50 bg-dark-secondary aspect-video group-hover:shadow-[0_0_30px_rgba(220,38,38,0.1)] transition-shadow duration-500 mt-auto">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
