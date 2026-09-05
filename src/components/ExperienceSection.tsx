const experiences = [
  {
    id: 'internship',
    priority: 'animate-p3',
    date: 'Aug 2026 – Present',
    title: 'UI/UX Designer & Front-End Developer Intern',
    company: 'Dinas Komunikasi dan Informatika Kota Tasikmalaya',
    type: 'Apprenticeship · APTIKA Division · On-site',
    description:
      'Serving within the Informatics Application Division (APTIKA), contributing to UI/UX Design and Front-End Web Development for the official SIPP portal redesign — currently at 85% development & refinement stage.',
    bullets: [
      'Collaborated on UI/UX mockups in Figma and translated designs into responsive layouts.',
      'Assisted in data entry and content integration for regional government agency (OPD) public service data into the portal.',
    ],
    tags: ['Figma', 'Laravel', 'Tailwind CSS', 'Data Entry'],
  },
  {
    id: 'graphic',
    priority: 'animate-p4',
    date: 'Jan 2022 – Jul 2024',
    title: 'Graphic Designer',
    company: 'Fixyoufit.id & R2Sports',
    type: '',
    description: '',
    bullets: [
      'Designed custom graphics and managed efficient workflows for e-commerce platforms like Shopee.',
      'Managed full production workflows from initial pre-press preparation to final finishing processes.',
    ],
    tags: ['CorelDRAW', 'Adobe Photoshop'],
  },
  {
    id: 'finishing',
    priority: 'animate-p4',
    date: 'Jul 2022 – Sep 2022',
    title: 'Staff Finishing',
    company: 'ISTIMEWA JAYA DIGITAL PRINTING PUSAT',
    type: 'Internship · Tasikmalaya, Jawa Barat · On-site',
    description: '',
    bullets: [
      'Managed the production workflow from the design stage to finishing, ensuring every order met technical specifications and company quality standards.',
    ],
    tags: [],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-20 sm:py-28 bg-dark-secondary/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Professional Milestones
          </h2>
          <p className="text-sm text-neutral-500 uppercase tracking-widest font-medium">Experience</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line (desktop) */}
          <div className="timeline-line hidden md:block" />
          {/* Left Line (mobile) */}
          <div className="md:hidden absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-neutral-700 to-transparent" />

          {experiences.map((exp, idx) => (
            <div key={exp.id} className={`relative mb-16 md:mb-20 group ${exp.priority}`}>
              {/* Desktop dot */}
              <div className="timeline-dot hidden md:block group-hover:scale-125 group-hover:bg-red-500 transition-all duration-300" style={{ top: '30px' }} />
              {/* Mobile dot */}
              <div className="md:hidden absolute left-[14px] top-[30px] w-3 h-3 rounded-full bg-red-600 border-2 border-dark-primary shadow-[0_0_12px_rgba(220,38,38,0.3)] group-hover:scale-125 group-hover:bg-red-500 transition-all duration-300 z-10" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16">
                {/* Date */}
                <div className="md:text-right pl-12 md:pl-0 md:pr-12 md:pt-1">
                  <span className="text-xs text-neutral-500 font-medium uppercase tracking-wider group-hover:text-red-400 transition-colors duration-300">
                    {exp.date}
                  </span>
                </div>

                {/* Content */}
                <div className="pl-12 md:pl-12">
                  <div className="p-5 sm:p-6 rounded-2xl bg-white/0 group-hover:bg-white/[0.02] border border-transparent group-hover:border-white/[0.05] transition-colors duration-500 -ml-5 sm:-ml-6 -mt-5 sm:-mt-6">
                    <h3
                      className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-tight group-hover:text-red-50 transition-colors"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      {exp.title}
                    </h3>
                    <p className="text-sm text-neutral-400 font-medium mt-1 group-hover:text-neutral-300 transition-colors">{exp.company}</p>
                    {exp.type && <p className="text-xs text-neutral-600 mt-1">{exp.type}</p>}
                    {exp.description && (
                      <p className="text-sm text-neutral-400 mt-4 leading-relaxed">{exp.description}</p>
                    )}
                    {exp.bullets && (
                      <div className="mt-4 space-y-2.5">
                        {exp.bullets.map((b, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-red-500/50 group-hover:bg-red-500 shrink-0 transition-colors duration-300" />
                            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">{b}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    {exp.tags.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <span key={tag} className="tech-tag group-hover:border-neutral-700/50 transition-colors">{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
