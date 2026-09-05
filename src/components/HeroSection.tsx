'use client';

import Image from 'next/image';
import LineWaves from './LineWaves';

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="about" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-dark-primary pt-24 pb-16 sm:pt-28 sm:pb-20">
      
      {/* Dynamic Background Effect */}
      <div className="absolute inset-0 z-0 opacity-40">
        <LineWaves
          speed={0.25}
          lineCount={30}
          lineColor="#200505"
          waveAmplitude={0.7}
          waveFrequency={0.003}
          warpIntensity={0.8}
          rotation={-45}
          edgeFadeWidth={0}
          colorCycleSpeed={1}
          brightness={1.3}
          color1="#dc2626"
          color2="#991b1b"
          color3="#dc2626"
          enableMouseInteraction
          mouseInfluence={1.5}
          className="w-full h-full absolute inset-0"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-dark-primary via-dark-primary/60 to-dark-primary pointer-events-none z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Left Column: Clean, Polished Portrait Card (5 cols) */}
          <div className="lg:col-span-5 flex justify-center" data-aos="fade-right">
            <div className="relative group">
              {/* Subtle Red Ambient Glow behind photo */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-red-600/30 to-red-900/20 blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Photo Frame */}
              <div className="relative w-[280px] h-[360px] sm:w-[320px] sm:h-[420px] rounded-2xl overflow-hidden border border-neutral-800/90 bg-neutral-900 shadow-2xl">
                <Image
                  src={require('../../public/images/hero-photo.png')}
                  alt="Muhammad Rafli Aolia Ansori"
                  fill
                  className="object-cover object-top filter contrast-[1.04] brightness-95 group-hover:scale-102 transition-transform duration-700 ease-out"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-primary via-transparent to-transparent opacity-80" />
                
                {/* Floating Bottom Tag */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-neutral-950/85 backdrop-blur-md border border-neutral-800/80 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-white leading-tight">Muhammad Rafli</p>
                    <p className="text-[11px] text-red-400">UI/UX & Front-End</p>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean, Structured Executive Bio (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left" data-aos="fade-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-900/90 border border-neutral-800 text-xs font-medium text-neutral-300 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Available for Hire & Engineering Roles</span>
            </div>

            {/* Clean, Crisp Heading */}
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              MUHAMMAD RAFLI <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">
                AOLIA ANSORI
              </span>
            </h1>

            {/* Subtitle / Role */}
            <p className="text-base sm:text-lg font-semibold text-neutral-200 mt-3">
              UI/UX Designer & Front-End Developer
            </p>

            {/* Narrative Bio */}
            <p className="text-sm sm:text-base text-neutral-400 mt-4 leading-relaxed max-w-xl">
              Specialized in engineering accessible digital public services, responsive web applications, and physical brand merchandise. Proven track record contributing to municipal enterprise portals (SIPP Kota Tasikmalaya) and commercial product lines.
            </p>

            {/* Clean Key Highlights Grid */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-7 py-4 border-y border-neutral-800/80 w-full max-w-lg">
              <div>
                <p className="text-xl sm:text-2xl font-bold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
                  SIPP Portal
                </p>
                <p className="text-xs text-neutral-400 mt-0.5">Municipal Gov Redesign</p>
              </div>
              <div className="border-x border-neutral-800/80 px-2 sm:px-4">
                <p className="text-xl sm:text-2xl font-bold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
                  Design & Dev
                </p>
                <p className="text-xs text-neutral-400 mt-0.5">Figma to Laravel/Tailwind</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
                  Print & DTF
                </p>
                <p className="text-xs text-neutral-400 mt-0.5">Industrial Production</p>
              </div>
            </div>

            {/* Professional Connect Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mt-8">
              <a
                href="https://www.linkedin.com/in/muhammadrafliaoliaa/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs sm:text-sm font-semibold shadow-[0_0_20px_rgba(220,38,38,0.35)] flex items-center gap-2 transition-all duration-300"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.9 0-1.63.73-1.63 1.63 0 .9.73 1.63 1.63 1.63.9 0 1.63-.73 1.63-1.63 0-.9-.73-1.63-1.63-1.63Z" />
                </svg>
                <span>Connect on LinkedIn</span>
              </a>

              <a
                href="https://github.com/rafliaraf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-neutral-900/90 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all duration-300"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>GitHub</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
