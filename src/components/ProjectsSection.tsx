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
    title: 'SIPPN KOTA TASIKMALAYA',
    company: 'Dinas Komunikasi dan Informatika Kota Tasikmalaya',
    type: 'Apprenticeship · APTIKA Division · On-site',
    description: 'Membantu tim APTIKA di Diskominfo Kota Tasikmalaya untuk merombak total UI/UX portal SIPPN (Sistem Informasi Pelayanan Publik Nasional). Dari tahap riset desain hingga proses implementasi kode di front-end, saya memastikan aplikasinya jadi lebih modern dan ramah pengguna.',
    responsibilities: [
      { label: 'Desain & Wireframing:', text: 'Memetakan alur pengguna dan merancang antarmuka (high-fidelity mockup) menggunakan Figma.' },
      { label: 'Slicing & Integrasi:', text: 'Menerjemahkan desain UI ke dalam baris kode yang responsif menggunakan Tailwind CSS dan Laravel Blade.' },
      { label: 'Evaluasi & Iterasi:', text: 'Melakukan pengujian layout untuk memastikan kompatibilitas di berbagai perangkat (Mobile/Desktop).' },
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
      { label: '', text: 'Merancang grafis untuk kebutuhan promosi e-commerce (seperti Shopee) dengan CorelDRAW, memastikan estetika visual yang pas untuk memikat pelanggan.' },
      { label: '', text: 'Mengelola alur kerja desain yang serba cepat agar memenuhi target deadline pasar tanpa mengorbankan ketajaman dan kualitas warna saat dicetak.' },
      { label: '', text: 'Terjun langsung mengawasi produksi cetak Direct Transfer Film (DTF) untuk menjaga standar kualitas produk fisik.' },
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
      { label: '', text: 'Bertanggung jawab penuh atas alur produksi dari hulu ke hilir—mulai dari konsep desain, persiapan file cetak, hingga proses finishing (pemotongan, laminasi, dan pengemasan).' },
      { label: '', text: 'Menangani masalah teknis mesin cetak dengan cekatan untuk meminimalisir kegagalan produksi dan menjaga efisiensi waktu kerja.' },
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
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
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
                  className="lg:col-span-2 project-card rounded-2xl border border-neutral-800 bg-dark-card p-6 sm:p-8"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
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
                        <h3 className="text-xl sm:text-2xl font-semibold text-white mb-1">{project.title}</h3>
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
                    <div className="relative rounded-xl overflow-hidden border border-neutral-800 bg-dark-secondary">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover"
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
                className="project-card rounded-2xl border border-neutral-800 bg-dark-card p-6"
                data-aos="zoom-in-up"
              >
                <div className="mb-4">
                  <span className={`badge ${project.badge.color}`}>
                    <span className={`inline-block w-1.5 h-1.5 rounded-full ${project.badge.dot}`} />
                    {project.badge.label}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{project.title}</h3>
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
                <div className="relative rounded-xl overflow-hidden border border-neutral-800 bg-dark-secondary">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={192}
                    className="w-full h-48 object-cover"
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
