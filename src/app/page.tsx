'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TechTicker from '@/components/TechTicker';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      easing: 'ease-out-cubic',
      offset: 50,
    });
  }, []);

  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <HeroSection />
        <TechTicker />
        <ProjectsSection />
        <ExperienceSection />
      </main>
      <footer className="border-t border-neutral-800/60 bg-dark-primary py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <span
              className="text-sm font-bold text-white tracking-tight uppercase"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Muhammad Rafli
            </span>
            <p className="text-xs text-neutral-600 text-center">
              © {new Date().getFullYear()} Muhammad Rafli Aolia Ansori. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://www.linkedin.com/in/muhammadrafliaoliaa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-500 hover:text-white transition-colors duration-200"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/rafliaraf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-500 hover:text-white transition-colors duration-200"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
