
import React, { useState, useEffect, useRef } from 'react';
import { ColorPalette } from '../types';

/**
 * ShowcaseSectionExtended
 * 
 * This component handles the interactive "Print Head" simulation.
 * It's a highly detailed, complex component designed to push the technical boundaries
 * of the landing page's theme.
 */

interface PrintState {
  isActive: boolean;
  progress: number;
  currentInk: ColorPalette;
  pressure: number;
}

const ShowcaseSectionExtended: React.FC = () => {
  const [printState, setPrintState] = useState<PrintState>({
    isActive: false,
    progress: 0,
    currentInk: ColorPalette.PINK,
    pressure: 0.8,
  });

  const [scrolledAmount, setScrolledAmount] = useState(0);
  const [hasEntered, setHasEntered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setPrintState(prev => ({ ...prev, isActive: true }));
            setHasEntered(true);
          } else {
            setPrintState(prev => ({ ...prev, isActive: false }));
          }
        });
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!printState.isActive) return;

    const interval = setInterval(() => {
      setPrintState((prev) => {
        if (prev.progress >= 100) {
          // Switch color and restart
          const colors = [ColorPalette.PINK, ColorPalette.BLUE, ColorPalette.YELLOW];
          const nextIndex = (colors.indexOf(prev.currentInk) + 1) % colors.length;
          return { ...prev, progress: 0, currentInk: colors[nextIndex] };
        }
        return { ...prev, progress: prev.progress + 0.5 };
      });
    }, 16);

    return () => clearInterval(interval);
  }, [printState.isActive]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full max-w-5xl mx-auto my-16 md:my-48 p-4 md:p-12 border-4 border-riso-ink bg-white overflow-hidden"
      style={{ 
        opacity: hasEntered ? 1 : 0, 
        transform: hasEntered ? 'translateY(0)' : 'translateY(40px)', 
        transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)' 
      }}
    >
      {/* Header of the Simulation */}
      <div 
        className="flex justify-between items-center mb-6 md:mb-12 border-b-2 border-riso-ink pb-6"
        style={{ 
          opacity: hasEntered ? 1 : 0, 
          transform: hasEntered ? 'translateY(0)' : 'translateY(20px)', 
          transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s' 
        }}
      >
        <div>
          <h4 className="text-2xl font-syne font-black uppercase">Engine Status: Operational</h4>
          <p className="text-[10px] font-mono opacity-50 uppercase tracking-widest">Model_GR_Digital_Core_v4.2</p>
        </div>
        <div className="flex gap-4">
          <div className={`w-3 h-3 rounded-full ${printState.isActive ? 'bg-riso-green animate-pulse' : 'bg-gray-300'}`}></div>
          <div className="w-12 h-3 bg-gray-200 relative overflow-hidden">
             <div 
               className="absolute top-0 left-0 h-full bg-riso-blue transition-all duration-300" 
               style={{ width: `${printState.progress}%` }}
             ></div>
          </div>
        </div>
      </div>

      {/* Main Simulation Area */}
      <div 
        className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start"
        style={{ 
          opacity: hasEntered ? 1 : 0, 
          transform: hasEntered ? 'translateY(0)' : 'translateY(20px)', 
          transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.4s' 
        }}
      >
        {/* Control Column */}
        <div className="space-y-8">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-600">Ink Viscosity</label>
            <div className="flex items-center space-x-4">
               <input 
                 type="range" 
                 min="0" 
                 max="100" 
                 value={Math.round(printState.pressure * 100)} 
                 onChange={(e) => setPrintState(prev => ({ ...prev, pressure: Number(e.target.value) / 100 }))} 
                 aria-label="Ink viscosity control" 
                 className="w-full h-1 bg-gray-100 appearance-none rounded-full accent-riso-ink" 
               />
               <span className="text-xs font-bold font-mono">{printState.pressure.toFixed(2)}</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-600">Plate Alignment</label>
            <div className="flex gap-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className={`flex-1 h-8 border-2 border-riso-ink flex items-center justify-center text-[11px] font-bold ${i === 2 ? 'bg-riso-yellow' : ''}`}>
                  0.{i}
                </div>
              ))}
            </div>
          </div>

          <div className="pt-8">
            <p className="text-sm leading-relaxed text-gray-600 font-medium">
              "The Inko Engine uses a reactive print-head algorithm that adjusts pressure based on the luminosity of the data points. This creates the signature organic variations in our output."
            </p>
          </div>
        </div>

        {/* Visualizer Column */}
        <div className="md:col-span-2 relative aspect-video bg-[#f0f0f0] border-4 border-riso-ink overflow-hidden group">
          {/* Halftone Overlay */}
          <div className="absolute inset-0 halftone-bg text-black/5 opacity-50"></div>
          
          {/* The "Print Head" Bar */}
          <div 
            className="absolute top-0 w-2 h-full bg-riso-ink z-20 shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-all duration-100 ease-linear"
            style={{ left: `${printState.progress}%` }}
          >
            <div className="absolute top-0 -translate-x-1/2 w-8 h-8 bg-riso-ink rotate-45"></div>
            <div className="absolute bottom-0 -translate-x-1/2 w-8 h-8 bg-riso-ink rotate-45"></div>
          </div>

          {/* Rendered Content */}
          <div className="absolute inset-0 flex items-center justify-center p-12">
             <div className="relative w-full h-full">
                {/* Misaligned Text Layers */}
                <h5 
                  className="text-3xl sm:text-5xl md:text-8xl font-syne font-black uppercase absolute inset-0 flex items-center justify-center mix-blend-multiply opacity-40 transition-transform duration-100"
                  style={{ 
                    color: ColorPalette.PINK, 
                    transform: `translate(${Math.sin(printState.progress * 0.1) * 4}px, ${Math.cos(printState.progress * 0.1) * 4}px)`,
                    clipPath: `inset(0 ${100 - printState.progress}% 0 0)` 
                  }}
                >
                  Insight
                </h5>
                <h5 
                  className="text-3xl sm:text-5xl md:text-8xl font-syne font-black uppercase absolute inset-0 flex items-center justify-center mix-blend-multiply opacity-40 transition-transform duration-100"
                  style={{ 
                    color: ColorPalette.BLUE, 
                    transform: `translate(${Math.cos(printState.progress * 0.1) * -4}px, ${Math.sin(printState.progress * 0.1) * -4}px)`,
                    clipPath: `inset(0 ${100 - printState.progress}% 0 0)` 
                  }}
                >
                  Insight
                </h5>
                <h5 
                  className="text-3xl sm:text-5xl md:text-8xl font-syne font-black uppercase relative flex items-center justify-center text-riso-ink"
                  style={{ clipPath: `inset(0 ${100 - printState.progress}% 0 0)` }}
                >
                  Insight
                </h5>
             </div>
          </div>

          {/* Data Readout Overlay */}
          <div className="absolute bottom-4 right-4 text-[11px] font-mono bg-riso-ink text-white p-2 space-y-1">
             <div>CURSOR_X: {Math.round(printState.progress * 10)}px</div>
             <div>INK_LOAD: {printState.currentInk}</div>
             <div>BUFFER: OK</div>
          </div>
        </div>
      </div>

      {/* Footer Decoration */}
      <div className="mt-12 flex justify-between items-end">
        <div className="text-[10px] font-black uppercase tracking-[0.2em] space-y-1">
          <div>Authentic Plate Process</div>
          <div className="text-riso-pink">Verified by Inko-Labs</div>
        </div>
        <div className="flex gap-2">
          <div className="w-12 h-12 halftone-bg text-riso-blue"></div>
          <div className="w-12 h-12 halftone-bg text-riso-pink"></div>
          <div className="w-12 h-12 halftone-bg text-riso-yellow"></div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSectionExtended;
