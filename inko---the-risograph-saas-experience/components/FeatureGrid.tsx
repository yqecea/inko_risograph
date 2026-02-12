
import React, { useState, useEffect, useRef, useMemo } from 'react';
// Fix: Corrected import source for ColorPalette from '../constants' to '../types'
import { FEATURES } from '../constants';
import { ColorPalette } from '../types';

/**
 * @interface TechnicalMetric
 * Defines the sub-pixel rendering metrics for the Inko engine.
 */
interface TechnicalMetric {
  label: string;
  value: string;
  unit: string;
  status: 'OPTIMAL' | 'CALIBRATING' | 'REACTIVE';
}

/**
 * @component FeatureGrid
 * A cinematic, high-density grid representing the core capabilities of the Inko engine.
 * Implements the "DENSE -> SPARSE -> DENSE" composition rule and "Typography as Architecture".
 */
const FeatureGrid: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  // Calibration metrics for the background architectural layer
  const metrics: TechnicalMetric[] = useMemo(() => [
    { label: 'Ink Viscosity', value: '84.2', unit: 'cps', status: 'OPTIMAL' },
    { label: 'Pressure Sensitivity', value: '1.24', unit: 'N/m²', status: 'REACTIVE' },
    { label: 'Drying Velocity', value: '0.45', unit: 's/px', status: 'CALIBRATING' },
    { label: 'Layer Misalignment', value: '0.002', unit: 'mm', status: 'OPTIMAL' },
  ], []);

  const rafIdRef = useRef<number | null>(null);

  /**
   * Scroll reaction logic for cinematic parallax effects.
   * Throttled via RAF to avoid per-pixel state updates.
   */
  useEffect(() => {
    const handleScroll = () => {
      if (rafIdRef.current !== null) return;
      rafIdRef.current = requestAnimationFrame(() => {
        rafIdRef.current = null;
        if (!sectionRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, 1 - rect.bottom / (window.innerHeight + rect.height)));
        setScrollProgress(progress);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafIdRef.current !== null) cancelAnimationFrame(rafIdRef.current);
    };
  }, []);

  return (
    <section 
      id="features" 
      ref={sectionRef}
      className="py-32 md:py-64 relative overflow-hidden bg-riso-paper selection:bg-riso-ink selection:text-riso-paper"
    >
      {/* 3-Plane Atmospheric Depth: Background Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Massive Typographic Graphic Layer (Aria-Hidden) */}
        <div 
          className="absolute top-0 left-0 text-[35vw] font-syne font-black text-riso-ink/[0.02] leading-none uppercase -translate-x-12 translate-y-24"
          aria-hidden="true"
        >
          CORE
        </div>
        
        {/* Generative Halftone Grain (Ambient Breathing Element) */}
        <div 
          className="absolute inset-0 opacity-[0.03] animate-pulse"
          style={{ 
            backgroundImage: `radial-gradient(var(--riso-ink) 1px, transparent 0)`, 
            backgroundSize: '24px 24px',
            animationDuration: '8s'
          }}
        />

        {/* Technical Calibration Sidebar (Editorial Layout Pattern) */}
        <div className="absolute right-12 top-1/4 hidden lg:flex flex-col space-y-16 items-end">
          {metrics.map((metric, idx) => (
            <div 
              key={metric.label} 
              className="flex flex-col items-end transform transition-all duration-700"
              style={{ 
                opacity: scrollProgress > 0.1 * idx ? 1 : 0,
                transform: `translateX(${(1 - scrollProgress) * 50}px)` 
              }}
            >
              <span className="text-[10px] uppercase font-black tracking-[0.4em] text-riso-blue mb-2">
                {metric.label}
              </span>
              <div className="flex items-baseline space-x-2">
                <span className="text-4xl font-syne font-black">{metric.value}</span>
                <span className="text-xs font-bold opacity-30">{metric.unit}</span>
              </div>
              <div className={`mt-2 px-2 py-0.5 text-[11px] font-black uppercase tracking-widest ${
                metric.status === 'OPTIMAL' ? 'bg-riso-green text-white' : 'bg-riso-yellow text-black'
              }`}>
                {metric.status}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Header Area: Eye-Path Engineered Entry Point */}
      <div className="container mx-auto px-6 mb-32 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8 space-y-8">
            <div className="overflow-hidden">
              <h2 
                className="text-xs uppercase tracking-[0.6em] font-black text-riso-blue transition-transform duration-700 ease-out"
                style={{ transform: `translateY(${(1 - scrollProgress) * 100}%)` }}
              >
                01 / THE CAPABILITIES
              </h2>
            </div>
            <h3 className="text-5xl md:text-[11rem] font-syne font-black uppercase leading-[0.8] tracking-tighter">
              A Better <br /> 
              <span className="text-riso-pink italic font-serif normal-case tracking-normal">Type</span> <br /> 
              of <span className="text-riso-blue relative">
                Output.
                <div className="absolute -bottom-4 left-0 w-full h-8 bg-riso-yellow/30 -z-10 -rotate-2"></div>
              </span>
            </h3>
          </div>
          <div className="lg:col-span-4 max-w-sm pb-8">
            <div className="border-l-4 border-riso-ink pl-8 space-y-6">
              <p className="text-xl font-serif italic text-gray-700 leading-relaxed">
                "We don't just render data; we give it weight. Every insight processed by Inko carries the tactile history of the physical press, ensuring your decisions are grounded in visual authority."
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-riso-ink flex items-center justify-center text-riso-paper font-syne font-black text-[10px]">
                  INK
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest">Master Plate Certified — 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of Features: Kinetic Interaction Zone */}
      <div className="container mx-auto px-6 relative z-30">
        <div className="feature-grid-items grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 border-t-4 border-riso-ink">
          {FEATURES.map((feature, idx) => (
            <div 
              key={feature.id} 
              onMouseEnter={() => setActiveFeature(feature.id)}
              onMouseLeave={() => setActiveFeature(null)}
              className={`group relative py-16 px-8 border-b-4 border-riso-ink lg:border-b-0 lg:border-r-4 last:border-r-0 transition-all duration-500 overflow-hidden cursor-crosshair ${
                activeFeature === feature.id ? 'bg-riso-ink text-riso-paper' : 'bg-white'
              }`}
            >
              {/* Dynamic Background Texture (Signature Motif) */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 halftone-bg"
                style={{ color: feature.color }}
              ></div>

              {/* High-End Motion: Staggered Content Reveal */}
              <div className="relative z-10 space-y-12">
                {/* Module ID Badge */}
                <div className="flex justify-between items-center">
                  <span className={`text-[10px] font-black uppercase tracking-[0.3em] px-2 py-1 transition-colors ${
                    activeFeature === feature.id ? 'bg-riso-paper text-riso-ink' : 'bg-riso-ink text-white'
                  }`}>
                    MOD. 00{feature.id}
                  </span>
                  {/* Atmospheric Signal Element */}
                  <div className={`w-2 h-2 rounded-full ${activeFeature === feature.id ? 'bg-riso-green animate-pulse' : 'bg-gray-200'}`}></div>
                </div>

                {/* Icon Wrapper with Physics-based Float */}
                <div className="relative w-20 h-20 flex items-center justify-center">
                  <div className="absolute inset-0 border-2 border-dashed border-gray-200 group-hover:border-white/20 transition-colors animate-[spin_12s_linear_infinite]"></div>
                  <svg 
                    className="w-12 h-12 relative z-10 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    strokeWidth="1.5"
                    style={{ color: activeFeature === feature.id ? '#fff' : feature.color }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={feature.icon} />
                  </svg>
                </div>

                {/* Typographic Momentum */}
                <div className="space-y-6">
                  <h4 className="text-3xl font-syne font-black uppercase leading-none tracking-tight">
                    {feature.title.split(' ').map((word, wIdx) => (
                      <span key={wIdx} className="block group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: `${wIdx * 50}ms` }}>
                        {word}
                      </span>
                    ))}
                  </h4>
                  <p className={`text-sm font-medium leading-relaxed transition-colors duration-500 ${
                    activeFeature === feature.id ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {feature.description}
                  </p>
                </div>

                {/* Data Visualization Micro-interaction */}
                <div className="pt-8 space-y-4">
                  <div className="flex justify-between text-[11px] font-black uppercase tracking-widest opacity-50">
                    <span>Calibration Level</span>
                    <span>{Math.round(60 + feature.id * 8)}%</span>
                  </div>
                  <div className="w-full h-[6px] bg-gray-100 group-hover:bg-white/10 relative overflow-hidden">
                    <div 
                      className="absolute top-0 left-0 h-full w-0 group-hover:w-full transition-all duration-[1.5s] ease-in-out"
                      style={{ backgroundColor: feature.color }}
                    ></div>
                  </div>
                </div>

                {/* Detailed Technical Specs (Revealed on Hover) */}
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-riso-ink border-t border-white/10 hidden lg:block">
                   <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-[11px] uppercase font-black text-gray-500">Processing Rate</div>
                        <div className="text-xs font-syne font-bold">2.4 GB/s</div>
                      </div>
                      <div>
                        <div className="text-[11px] uppercase font-black text-gray-500">Ink Density</div>
                        <div className="text-xs font-syne font-bold">600 DPI</div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Signature Section Break: Diagonal Tension Layer */}
      <div className="absolute -bottom-32 left-0 w-full h-64 bg-riso-ink -rotate-2 origin-left z-40 flex items-center overflow-hidden">
        <div className="flex whitespace-nowrap animate-[marquee_30s_linear_infinite]">
          {[1,2,3].map(i => (
            <span key={i} className="text-[12rem] font-syne font-black uppercase tracking-tighter mx-12 text-riso-paper opacity-10 italic">
              UNCOMPROMISED_FIDELITY // UNCOMPROMISED_FIDELITY // 
            </span>
          ))}
        </div>
      </div>

      {/* Atmospheric Texture Gradient */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-riso-paper to-transparent pointer-events-none"></div>
      
      <style>{`
        /* Responsive structural transformation (Desktop-first approach) */
        @media (min-width: 1024px) {
          .feature-grid-items > .group:hover {
            z-index: 50;
          }
        }
      `}</style>
    </section>
  );
};

export default FeatureGrid;
