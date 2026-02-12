
import React, { useRef, useEffect } from 'react';

const Showcase: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (window.innerWidth < 1024) return;
      
      // If we're inside the showcase, intercept vertical scroll and make it horizontal
      const rect = container.getBoundingClientRect();
      if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
        if ((e.deltaY > 0 && container.scrollLeft < container.scrollWidth - container.clientWidth) ||
            (e.deltaY < 0 && container.scrollLeft > 0)) {
          e.preventDefault();
          container.scrollLeft += e.deltaY;
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <section id="process" className="py-24 md:py-48 bg-[#1a1a1a] text-[#f4f1ea] overflow-hidden">
      <div className="container mx-auto px-6 mb-20">
        <h2 className="text-sm uppercase tracking-[0.5em] font-bold text-riso-pink mb-4">02 / The Process</h2>
        <h3 className="text-5xl md:text-7xl font-syne font-black uppercase tracking-tighter">
          Layered <br /> Intelligence.
        </h3>
      </div>

      {/* Horizontal Scroll Area */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto lg:overflow-x-hidden space-x-6 md:space-x-12 px-6 pb-20 scrollbar-hide no-scrollbar snap-x snap-mandatory lg:snap-none"
      >
        {/* Slide 1 */}
        <div className="flex-shrink-0 w-[85vw] md:w-full max-w-4xl relative group snap-start">
          <div className="absolute inset-0 bg-riso-blue mix-blend-screen opacity-10 transition-opacity group-hover:opacity-20"></div>
          <div className="border-2 border-[#f4f1ea]/20 p-4 md:p-12 space-y-12 backdrop-blur-sm">
             <div className="flex justify-between items-start">
               <span className="text-6xl font-syne font-black text-riso-blue">01</span>
               <div className="w-24 h-[1px] bg-riso-blue mt-8"></div>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div className="space-y-6">
                 <h4 className="text-3xl font-syne font-bold uppercase">The Emulsion</h4>
                 <p className="text-gray-400 leading-relaxed font-medium">
                   "We start by emulsifying your data streams into a unified light-sensitive layer. 
                   Our algorithms detect the most subtle patterns, preparing them for the first pass of the digital press."
                 </p>
                 <ul className="space-y-3 text-xs uppercase tracking-widest font-bold text-riso-blue">
                   <li>• Real-time ingestion</li>
                   <li>• Pattern sensitivity 99.4%</li>
                   <li>• Noise reduction filters</li>
                 </ul>
               </div>
               <div className="relative aspect-video bg-[#2a2a2a] overflow-hidden border border-white/10 group-hover:border-riso-blue/50 transition-colors">
                  <div className="absolute inset-0 halftone-bg text-black opacity-40"></div>
                  <img src="https://picsum.photos/seed/ink1/800/450" className="w-full h-full object-cover mix-blend-multiply opacity-80" alt="Process 1" />
                  <div className="absolute bottom-4 left-4 text-[10px] font-mono opacity-50">LDR_PROC_INIT.exe</div>
               </div>
             </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="flex-shrink-0 w-[85vw] md:w-full max-w-4xl relative group snap-start">
          <div className="absolute inset-0 bg-riso-pink mix-blend-screen opacity-10 transition-opacity group-hover:opacity-20"></div>
          <div className="border-2 border-[#f4f1ea]/20 p-4 md:p-12 space-y-12 backdrop-blur-sm">
             <div className="flex justify-between items-start">
               <span className="text-6xl font-syne font-black text-riso-pink">02</span>
               <div className="w-24 h-[1px] bg-riso-pink mt-8"></div>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div className="space-y-6">
                 <h4 className="text-3xl font-syne font-bold uppercase">Multi-Pass Mixing</h4>
                 <p className="text-gray-400 leading-relaxed font-medium">
                   "Insights aren't binary. We overlay multiple perspectives using our unique ink-mixing logic. 
                   Discover what happens when your sales data meets sentiment analysis in a high-contrast overlap."
                 </p>
                 <ul className="space-y-3 text-xs uppercase tracking-widest font-bold text-riso-pink">
                   <li>• Dual-layer blending</li>
                   <li>• Chromatic analysis</li>
                   <li>• Contextual overlapping</li>
                 </ul>
               </div>
               <div className="relative aspect-video bg-[#2a2a2a] overflow-hidden border border-white/10 group-hover:border-riso-pink/50 transition-colors">
                  <div className="absolute inset-0 halftone-bg text-black opacity-40"></div>
                  <img src="https://picsum.photos/seed/ink2/800/450" className="w-full h-full object-cover mix-blend-multiply opacity-80" alt="Process 2" />
                  <div className="absolute bottom-4 left-4 text-[10px] font-mono opacity-50">RGB_CMYK_XFORM.dll</div>
               </div>
             </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="flex-shrink-0 w-[85vw] md:w-full max-w-4xl relative group snap-start">
          <div className="absolute inset-0 bg-riso-yellow mix-blend-screen opacity-10 transition-opacity group-hover:opacity-20"></div>
          <div className="border-2 border-[#f4f1ea]/20 p-4 md:p-12 space-y-12 backdrop-blur-sm">
             <div className="flex justify-between items-start">
               <span className="text-6xl font-syne font-black text-riso-yellow">03</span>
               <div className="w-24 h-[1px] bg-riso-yellow mt-8"></div>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div className="space-y-6">
                 <h4 className="text-3xl font-syne font-bold uppercase">The Final Pull</h4>
                 <p className="text-gray-400 leading-relaxed font-medium">
                   "The result is a high-fidelity report with tangible value. 
                   Export your findings into a format that demands attention and respect in the boardroom."
                 </p>
                 <ul className="space-y-3 text-xs uppercase tracking-widest font-bold text-riso-yellow">
                   <li>• High-res PDF export</li>
                   <li>• Tactile UI elements</li>
                   <li>• Collaborative proofing</li>
                 </ul>
               </div>
               <div className="relative aspect-video bg-[#2a2a2a] overflow-hidden border border-white/10 group-hover:border-riso-yellow/50 transition-colors">
                  <div className="absolute inset-0 halftone-bg text-black opacity-40"></div>
                  <img src="https://picsum.photos/seed/ink3/800/450" className="w-full h-full object-cover mix-blend-multiply opacity-80" alt="Process 3" />
                  <div className="absolute bottom-4 left-4 text-[10px] font-mono opacity-50">FINAL_PULL_OUTPUT.bin</div>
               </div>
             </div>
          </div>
        </div>
      </div>

      {/* Decorative Text Loop at bottom */}
      <div className="w-full overflow-hidden py-12 border-t border-white/10 mt-12">
        <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite]">
          {[1,2,3,4,5,6].map(i => (
            <span key={i} className="text-8xl font-syne font-black uppercase tracking-tighter mx-12 opacity-20 outline-text">
              Quality over Quantity — Quality over Quantity —
            </span>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Showcase;
