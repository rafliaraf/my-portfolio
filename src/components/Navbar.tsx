'use client';

import { useEffect, useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const scrollY = window.scrollY + 120;
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => {
        const el = section as HTMLElement;
        const sectionTop = el.offsetTop;
        const sectionHeight = el.offsetHeight;
        const sectionId = el.getAttribute('id') || '';
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  const navLinkClass = (section: string) =>
    `nav-link text-sm font-medium transition-colors ${activeSection === section
      ? 'text-red-500 underline underline-offset-4 decoration-red-500/40'
      : 'text-neutral-400 hover:text-white'
    }`;

  return (
    <nav
      id="main-navbar"
      className={`nav-glass fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'border-b border-neutral-800/50' : ''
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollTo('#about')}
            className="flex items-center group animate-p1"
          >
            <span
              className="text-white font-bold text-lg tracking-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Muhammad Rafli
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo('#about')} className={navLinkClass('about')} data-section="about">About</button>
            <button onClick={() => scrollTo('#projects')} className={navLinkClass('projects')} data-section="projects">Projects</button>
            <button onClick={() => scrollTo('#experience')} className={navLinkClass('experience')} data-section="experience">Experience</button>
            <button onClick={() => scrollTo('#certifications')} className={navLinkClass('certifications')} data-section="certifications">Certifications</button>
          </div>

          {/* Mobile Hamburger */}
          <button
            id="hamburger-btn"
            className="md:hidden text-neutral-400 hover:text-white transition-colors animate-p1"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu md:hidden ${menuOpen ? 'open' : ''}`}>
          <div className="flex flex-col gap-3 pb-4 pt-2">
            <button onClick={() => scrollTo('#about')} className={`${navLinkClass('about')} px-2 py-1.5 text-left`}>About</button>
            <button onClick={() => scrollTo('#projects')} className={`${navLinkClass('projects')} px-2 py-1.5 text-left`}>Projects</button>
            <button onClick={() => scrollTo('#experience')} className={`${navLinkClass('experience')} px-2 py-1.5 text-left`}>Experience</button>
            <button onClick={() => scrollTo('#certifications')} className={`${navLinkClass('certifications')} px-2 py-1.5 text-left`}>Certifications</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
