
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled((prev) => (prev === isScrolled ? prev : isScrolled));
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Focus trap for mobile menu
  useEffect(() => {
    if (!mobileMenuOpen) return;
    
    const menuOverlay = document.querySelector('[data-mobile-menu]') as HTMLElement;
    if (!menuOverlay) return;
    
    const focusableElements = menuOverlay.querySelectorAll<HTMLElement>(
      'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        return;
      }
      if (e.key !== 'Tab') return;
      
      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable?.focus();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable?.focus();
        }
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    firstFocusable?.focus();
    
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
          scrolled ? 'py-4 bg-riso-paper/90 backdrop-blur-sm border-b-2 border-riso-ink' : 'py-8 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo Section */}
          <div className="relative group cursor-pointer z-[110]" role="link" tabIndex={0} aria-label="Inko home" onKeyDown={(e: React.KeyboardEvent) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); } }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="absolute inset-0 bg-riso-pink translate-x-1 -translate-y-1 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-riso-blue -translate-x-1 translate-y-1 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="text-3xl font-syne font-black tracking-tighter uppercase relative z-10 transition-transform duration-300 group-hover:scale-105">
              Inko<span className="text-[#ff33cc]">.</span>
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-12">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-syne text-xs uppercase tracking-[0.2em] font-bold relative overflow-hidden group py-2"
              >
                <span className="relative z-10 block transition-transform duration-500 group-hover:-translate-y-full">
                  {link.label}
                </span>
                <span aria-hidden="true" className="absolute top-0 left-0 z-10 block transition-transform duration-500 translate-y-full group-hover:translate-y-0 text-riso-pink">
                  {link.label}
                </span>
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <button className="hidden md:block group relative px-6 py-2 bg-riso-ink text-riso-paper font-syne text-xs uppercase tracking-widest overflow-hidden border-2 border-transparent hover:border-riso-pink transition-colors duration-300">
            <div className="absolute inset-0 w-0 bg-riso-pink transition-all duration-300 group-hover:w-full"></div>
            <span className="relative z-10 group-hover:text-white font-bold transition-colors">Request Access</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden relative z-[110] w-10 h-10 flex flex-col justify-center items-center gap-1.5 group"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className={`w-8 h-0.5 bg-riso-ink transition-all duration-300 origin-center ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-8 h-0.5 bg-riso-ink transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-8 h-0.5 bg-riso-ink transition-all duration-300 origin-center ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        data-mobile-menu
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed inset-0 z-[105] bg-riso-paper flex flex-col justify-center items-center transition-all duration-500 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* Background Grain/Texture Effect */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }}>
        </div>

        <div className="flex flex-col space-y-8 items-center relative z-10 text-center">
          {NAV_LINKS.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              className={`group relative overflow-hidden transition-all duration-500 transform ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              onClick={() => setMobileMenuOpen(false)}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <span className="block text-4xl md:text-6xl font-syne font-black uppercase tracking-tighter text-riso-ink transition-colors duration-300 group-hover:text-riso-pink">
                {link.label}
              </span>
            </a>
          ))}
          
          <div className={`pt-8 transition-all duration-500 delay-300 transform ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
             <button className="group relative px-8 py-3 bg-riso-ink text-riso-paper font-syne text-sm uppercase tracking-widest overflow-hidden border-2 border-riso-ink">
              <div className="absolute inset-0 w-0 bg-riso-blue transition-all duration-300 group-hover:w-full"></div>
              <span className="relative z-10 group-hover:text-white font-bold transition-colors">Request Access</span>
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-10 left-0 w-full text-center">
          <p className="font-syne text-[10px] uppercase tracking-[0.4em] text-riso-ink/50">
            Inko Risograph SaaS
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
