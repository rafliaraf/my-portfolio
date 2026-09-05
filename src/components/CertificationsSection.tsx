'use client';

interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  skills: string[];
  type: 'course' | 'internship';
}

const certifications: Certification[] = [
  {
    id: 'pkl-istimewa-jaya',
    title: 'Praktik Kerja Lapangan (PKL) - Digital Istimewa Jaya Printing',
    issuer: 'ISTIMEWA JAYA DIGITAL PRINTING PUSAT',
    issueDate: 'Issued Oct 2022',
    skills: ['CorelDRAW', 'Quality Control', 'Pre-Press Production', 'Finishing Process'],
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
    type: 'course',
  },
];

export default function CertificationsSection() {
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
            Official credentials and skill verifications recognized by accredited institutions and industry training academies.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-neutral-800/80 bg-gradient-to-b from-dark-card to-dark-primary p-6 sm:p-7 hover:border-red-500/40 transition-all duration-500 hover:shadow-[0_0_35px_rgba(220,38,38,0.12)]"
              data-aos="fade-up"
            >
              <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />

              <div>
                {/* Header: Icon & Type Badge */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0 group-hover:border-red-500/30 transition-colors">
                    {cert.issuer.includes('Dicoding') ? (
                      /* Dicoding iconic 'g' monogram */
                      <span className="text-xl font-black text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
                        g
                      </span>
                    ) : (
                      /* Certificate / Award icon */
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    )}
                  </div>

                  <span className="text-[11px] font-medium tracking-wide uppercase px-2.5 py-1 rounded-full bg-neutral-900/80 border border-neutral-800 text-neutral-400">
                    {cert.type === 'internship' ? 'Vocational' : 'Accredited'}
                  </span>
                </div>

                {/* Title & Issuer */}
                <h3
                  className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug group-hover:text-red-50 transition-colors"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {cert.title}
                </h3>
                <p className="text-sm font-semibold text-neutral-300 mt-1.5">{cert.issuer}</p>

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
                  <div className="flex items-center gap-2 py-2 px-1 text-xs text-neutral-500 font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Certified & Verified Record</span>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
