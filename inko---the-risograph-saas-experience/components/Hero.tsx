
import React, { useEffect, useState, useRef } from 'react';

/**
 * @component Hero
 * The signature introductory moment of the landing page.
 * Uses high-contrast typography and scroll-reactive misalignment to create tension.
 */
const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    setIsMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5);
        const y = (e.clientY / window.innerHeight - 0.5);
        setMousePos({ x, y });
        rafRef.current = null;
      });
    };

    if (window.matchMedia('(hover: hover)').matches) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[110vh] flex flex-col justify-center items-center overflow-hidden bg-riso-paper pt-32 pb-48"
    >
      {/* Plane 1: Background Atmospheric Graphic */}
      <div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <div 
          className="text-[45vw] font-syne font-black leading-none uppercase tracking-tighter text-riso-ink/[0.02] transform transition-transform duration-1000 ease-out"
          style={{ transform: `scale(${1 + Math.abs(mousePos.x) * 0.1})` }}
        >
          INKO
        </div>
      </div>

      {/* Plane 2: Dynamic Offset Layers (The Misalignment Motif) */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Tagline Narrative */}
          <div className="mb-12 overflow-hidden">
            <div 
              className={`transition-all duration-1000 delay-300 ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
            >
              <span className="inline-block text-xs uppercase tracking-[0.6em] font-black text-riso-blue">
                EST. MMXXV — THE ARCHIVAL DATA PRESS
              </span>
            </div>
          </div>

          {/* Headline: The Signature Visual Moment */}
          <div className="relative mb-24 cursor-default">
            {/* Blue Misalignment Layer */}
            <span 
              aria-hidden="true"
              className="text-5xl sm:text-7xl font-syne font-black leading-[0.8] uppercase tracking-tighter absolute top-0 left-0 text-riso-blue mix-blend-multiply opacity-60 blur-[1px] transition-transform duration-75 ease-linear"
              style={{ fontSize: 'clamp(3rem, 12vw, 14rem)', transform: `translate(${mousePos.x * -35 - 8}px, ${mousePos.y * -35 + 8}px)` }}
            >
              Raw <br /> Energy.
            </span>
            
            {/* Pink Misalignment Layer */}
            <span 
              aria-hidden="true"
              className="text-5xl sm:text-7xl font-syne font-black leading-[0.8] uppercase tracking-tighter absolute top-0 left-0 text-riso-pink mix-blend-multiply opacity-60 blur-[1px] transition-transform duration-75 ease-linear"
              style={{ fontSize: 'clamp(3rem, 12vw, 14rem)', transform: `translate(${mousePos.x * 35 + 8}px, ${mousePos.y * 35 - 8}px)` }}
            >
              Raw <br /> Energy.
            </span>

            {/* Main Typographic Anchor */}
            <h1 
              id="page-title"
              className={`text-5xl sm:text-7xl font-syne font-black leading-[0.8] uppercase tracking-tighter relative text-riso-ink transition-all duration-1000 ${
                isMounted ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
              }`}
              style={{ fontSize: 'clamp(3rem, 12vw, 14rem)' }}
            >
              Raw <br /> Energy.
            </h1>
          </div>

          {/* Contextual Narrative & Actions */}
          <div className="max-w-3xl flex flex-col items-center space-y-12">
            <div 
              className={`transition-all duration-1000 delay-500 ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              <p className="text-2xl md:text-3xl font-serif italic text-gray-800 leading-snug">
                "We restored the friction of the analog press to the sterile digital analytics landscape. 
                Inko is where data bleeds, textures communicate, and every insight carries physical weight."
              </p>
            </div>
            
            <div 
              className={`flex flex-wrap justify-center gap-8 transition-all duration-1000 delay-700 ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              {/* Primary CTA with Offset Shadow Motif */}
              <button className="group relative px-14 py-7 bg-riso-ink text-white font-syne text-xs uppercase tracking-[0.3em] font-black transition-transform hover:-translate-x-1 hover:-translate-y-1 active:scale-95">
                <div className="absolute inset-0 bg-riso-yellow translate-x-3 translate-y-3 -z-10 transition-transform group-hover:translate-x-5 group-hover:translate-y-5"></div>
                <div className="absolute inset-0 bg-riso-pink translate-x-2 translate-y-2 -z-20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                Initialize Engine
              </button>
              
              <button className="px-14 py-7 border-4 border-riso-ink text-riso-ink font-syne text-xs uppercase tracking-[0.3em] font-black hover:bg-riso-ink hover:text-white transition-all">
                The Manifesto
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Plane 3: Floating Cinematic Elements (Atmosphere Layer) */}
      <div className="absolute top-1/4 left-10 w-32 h-32 border-[12px] border-riso-blue/20 rounded-full animate-[float-drift_10s_ease-in-out_infinite] pointer-events-none hidden md:block"></div>
      <div className="absolute bottom-1/3 right-10 w-48 h-48 bg-riso-yellow/10 mix-blend-multiply animate-[float-drift_10s_ease-in-out_infinite] pointer-events-none hidden md:block" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-64 bg-riso-pink/10 rotate-45 animate-[float-drift_10s_ease-in-out_infinite] pointer-events-none hidden md:block" style={{ animationDelay: '2s' }}></div>

      {/* Interaction Cue: Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4">
        <span className="text-[11px] uppercase tracking-[0.4em] font-black opacity-40">Scroll to Ingest</span>
        <div className="w-[3px] h-16 bg-riso-ink/10 relative overflow-hidden rounded-full">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-riso-pink animate-[scroll-shuttle_2.5s_infinite]"></div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-shuttle {
          0% { transform: translateY(-100%); }
          50% { transform: translateY(100%); }
          50.1% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
