'use client';

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
}

const experiences: ExperienceItem[] = [
  {
    id: 'sipp-intern',
    role: 'UI/UX Designer & Front-End Developer',
    organization: 'Dinas Komunikasi dan Informatika Kota Tasikmalaya',
    location: 'Tasikmalaya, Jawa Barat · On-site',
    period: 'Aug 2026 – Present',
    type: 'Government Apprenticeship · APTIKA Division',
    summary:
      'Spearheaded the UI/UX architecture and modern front-end overhaul of SIPP (Sistem Informasi Pelayanan Publik), enhancing citizen accessibility across regional public services.',
    highlights: [
      'Architected user flows, high-fidelity responsive wireframes, and design systems within Figma.',
      'Slicing mockups into accessible, pixel-perfect Laravel Blade templates powered by Tailwind CSS.',
      'Curated, standardized, and integrated comprehensive regional agency (OPD) public service datasets into the portal system.',
    ],
    technologies: ['Figma', 'Tailwind CSS', 'Laravel Blade', 'Data Engineering', 'JavaScript'],
  },
  {
    id: 'fixyoufit-r2',
    role: 'Lead Graphic & Apparel Designer',
    organization: 'Fixyoufit.id & R2Sports',
    location: 'Tasikmalaya, Jawa Barat · On-site',
    period: 'Jan 2022 – Jul 2024',
    type: 'Commercial Creative & Production',
    summary:
      'Orchestrated digital marketing visual assets, e-commerce storefront imagery, and physical merchandise printing lines for active sportswear and streetwear brands.',
    highlights: [
      'Engineered print-ready vector typography, sublimation patterns, and marketing collateral using CorelDRAW & Photoshop.',
      'Supervised end-to-end Direct Transfer Film (DTF) and high-density fabric production workflows with stringent quality control.',
      'Enhanced product catalog click-through rates across digital marketplaces like Shopee.',
    ],
    technologies: ['CorelDRAW', 'Adobe Photoshop', 'DTF Printing', 'Sublimation Prep', 'Visual Branding'],
  },
  {
    id: 'istimewa-jaya',
    role: 'Production & Finishing Specialist',
    organization: 'ISTIMEWA JAYA DIGITAL PRINTING PUSAT',
    location: 'Tasikmalaya, Jawa Barat · On-site',
    period: 'Jul 2022 – Sep 2022',
    type: 'Vocational Internship',
    summary:
      'Managed industrial print production, pre-press checks, and finishing executions ensuring rigorous adherence to technical specifications.',
    highlights: [
      'Conducted pre-flight file checks to prevent rasterization errors and color gamut discrepancies during large-format output.',
      'Streamlined cutting, laminating, and assembly phases to maintain high throughput and zero defect rates.',
    ],
    technologies: ['Pre-Press Inspection', 'Quality Assurance', 'Industrial Printing Equipment'],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-20 sm:py-28 bg-dark-secondary/30 border-t border-neutral-800/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20" data-aos="fade-up">
          <p className="text-xs sm:text-sm font-semibold text-red-500 uppercase tracking-widest mb-2">
            Career Progression
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Work Experience & Milestones
          </h2>
          <p className="text-sm text-neutral-400 mt-2 max-w-lg mx-auto">
            Demonstrated track record spanning public sector digital infrastructure, commercial creative direction, and technical print production.
          </p>
        </div>

        {/* Structured Editorial Timeline */}
        <div className="space-y-8 sm:space-y-10">
          {experiences.map((exp, idx) => (
            <div
              key={exp.id}
              className="group relative rounded-3xl border border-neutral-800/80 bg-gradient-to-b from-dark-card to-dark-primary p-6 sm:p-9 hover:border-red-500/40 transition-all duration-500 hover:shadow-[0_0_35px_rgba(220,38,38,0.1)]"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              {/* Subtle Red Accents on Hover */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-red-500/0 group-hover:via-red-500/50 to-transparent transition-all duration-500" />

              {/* Header Area: Organization, Role, Timeline */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 pb-6 border-b border-neutral-800/80">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="text-xs font-semibold text-red-500 uppercase tracking-wider">
                      {exp.type}
                    </span>
                    <span className="text-neutral-700">·</span>
                    <span className="text-xs text-neutral-400">{exp.location}</span>
                  </div>
                  <h3
                    className="text-xl sm:text-2xl font-bold text-white group-hover:text-red-50 transition-colors"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {exp.role}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-neutral-300 mt-1">
                    {exp.organization}
                  </p>
                </div>

                {/* Period Pill */}
                <div className="self-start sm:self-auto shrink-0 mt-1 sm:mt-0">
                  <span className="inline-block px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300">
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Summary Description */}
              <p className="text-sm text-neutral-300 mt-5 leading-relaxed">
                {exp.summary}
              </p>

              {/* Key Deliverables & Responsibilities */}
              <div className="mt-5 space-y-2.5">
                {exp.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 shadow-[0_0_8px_rgba(239,68,68,0.6)]" />
                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                      {h}
                    </p>
                  </div>
                ))}
              </div>

              {/* Technologies Applied */}
              <div className="mt-6 pt-5 border-t border-neutral-800/60 flex flex-wrap items-center gap-2">
                <span className="text-xs text-neutral-400 font-medium mr-1">Tools & Scope:</span>
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-md bg-neutral-900/80 text-neutral-300 border border-neutral-800 group-hover:border-neutral-700 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
