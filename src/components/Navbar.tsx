'use client';

import { useEffect, useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('ABOUT');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section scroll spy
      const sections = [
        { id: 'about', label: 'ABOUT' },
        { id: 'projects', label: 'PROJECTS' },
        { id: 'experience', label: 'EXPERIENCE' },
        { id: 'certifications', label: 'CERTIFICATIONS' },
      ];

      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && scrollPos >= el.offsetTop) {
          setActiveSection(sections[i].label);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string, label: string) => {
    setActiveSection(label);
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMenuOpen(false);
  };

  const navItems = [
    { label: 'ABOUT', target: '#about' },
    { label: 'PROJECTS', target: '#projects' },
    { label: 'EXPERIENCE', target: '#experience' },
    { label: 'CERTIFICATIONS', target: '#certifications' },
  ];

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 select-none ${
        scrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-neutral-900/80 shadow-2xl py-3.5'
          : 'bg-gradient-to-b from-black/90 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between">
          {/* Brand Logo - Bold Red All-Caps with Original Name */}
          <button
            onClick={() => scrollTo('#about', 'ABOUT')}
            className="flex items-center group cursor-pointer focus:outline-none"
          >
            <span
              className="text-[#991b1b] hover:text-red-500 font-bold text-lg sm:text-xl md:text-2xl tracking-[0.14em] uppercase transition-colors duration-300 drop-shadow-[0_0_15px_rgba(185,28,28,0.4)]"
              style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700 }}
            >
              MUHAMMAD RAFLI
            </span>
          </button>

          {/* Desktop Nav Items with Red Active Glow Indicator */}
          <div className="hidden md:flex items-center gap-6 lg:gap-10">
            {navItems.map((item) => {
              const isActive = activeSection === item.label;
              return (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.target, item.label)}
                  className={`relative py-1 text-xs sm:text-[13px] font-bold tracking-[0.14em] uppercase transition-all duration-300 cursor-pointer focus:outline-none flex flex-col items-center ${
                    isActive
                      ? 'text-white drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                  style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700 }}
                >
                  <span>{item.label}</span>

                  {/* Glowing Red Underline Indicator */}
                  {isActive && (
                    <span
                      className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-red-600 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.9)] animate-pulse"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile Hamburger */}
          <button
            id="hamburger-btn"
            className="md:hidden text-neutral-300 hover:text-white transition-colors focus:outline-none p-1"
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

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t border-neutral-900 mt-3 flex flex-col gap-3.5 bg-black/95 px-3 rounded-lg backdrop-blur-lg">
            {navItems.map((item) => {
              const isActive = activeSection === item.label;
              return (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.target, item.label)}
                  className={`text-left text-xs font-bold tracking-[0.18em] uppercase py-1.5 transition-all flex items-center justify-between ${
                    isActive ? 'text-red-500 font-extrabold' : 'text-neutral-400 hover:text-white'
                  }`}
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-red-600 shadow-[0_0_8px_rgba(239,68,68,0.9)]" />
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}

