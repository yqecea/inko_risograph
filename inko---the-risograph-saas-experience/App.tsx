
import React, { useEffect, useState, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import Showcase from './components/Showcase';
import Comparison from './components/Comparison';
import Pricing from './components/Pricing';
import GrainOverlay from './components/GrainOverlay';
import ShowcaseSectionWrapper from './components/ShowcaseSectionWrapper';
import { HalftonePattern } from './constants';
import { ColorPalette } from './types';

/**
 * @component App
 * The central nervous system of the INKO experience.
 * Orchestrates global motion signatures and cinematic transitions.
 */
const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const lastScrollY = useRef(0);
  const mainRef = useRef<HTMLElement>(null);

  // Initialize engine state and handle global narrative transitions
  useEffect(() => {
    setIsLoaded(true);
    
    let rafId: number | null = null;
    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        const currentScrollY = window.scrollY;
        lastScrollY.current = currentScrollY;
        const scrollPercentage = (currentScrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        mainRef.current?.style.setProperty('--scroll-progress', `${scrollPercentage}%`);
        mainRef.current?.style.setProperty('--scroll-y', `${currentScrollY}px`);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => { window.removeEventListener('scroll', handleScroll); if (rafId !== null) cancelAnimationFrame(rafId); };
  }, []);

  return (
    <main 
      id="main-content"
      ref={mainRef}
      className={`relative min-h-screen selection:bg-riso-pink selection:text-white overflow-x-hidden bg-riso-paper transition-opacity duration-1000 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Prime Atmospheric Layer: Multi-Plane Depth System */}
      <GrainOverlay />
      
      {/* Static Visual Anchors (SVG Patterns) */}
      <HalftonePattern id="halftone-pink" color={ColorPalette.PINK} scale={0.5} />
      <HalftonePattern id="halftone-blue" color={ColorPalette.BLUE} scale={0.5} />
      <HalftonePattern id="halftone-yellow" color={ColorPalette.YELLOW} scale={1.2} />

      {/* Dynamic Navigation Architecture */}
      <Navbar />

      {/* Cinematic Narrative Flow */}
      <div className="relative">
        
        {/* SECTION 0: Hero Induction */}
        <Hero />
        
        {/* Section Transition: The Bleed Zone */}
        <div className="relative h-64 z-20 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-riso-ink/5 to-[#f4f1ea]"></div>
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-riso-ink/10"></div>
        </div>
        
        {/* SECTION 1: Atomic Capabilities */}
        <FeatureGrid />
        
        {/* SECTION 2: Process Immersion */}
        <Showcase />
        
        {/* SECTION 3: Technical Precision Section (The Archive) */}
        <section className="py-48 bg-white relative overflow-hidden">
          {/* Spatial Storytelling Layer */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-riso-ink translate-x-1/4 -rotate-12 origin-top-right -z-10 opacity-[0.02]"></div>
          
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-center">
              <div className="space-y-12">
                <div className="space-y-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-riso-pink">System Architecture</span>
                  <h2 className="text-6xl md:text-8xl font-syne font-black uppercase leading-none tracking-tighter">
                    Built for <br /> <span className="text-riso-blue italic font-serif normal-case">Permanence.</span>
                  </h2>
                </div>
                <p className="text-2xl font-serif italic text-gray-700 leading-relaxed max-w-xl">
                  "Most software is built to be forgotten. Inko is built to be archived. We treat every data export like a legacy document—meant to withstand the scrutiny of decades, not just the next quarterly review."
                </p>
                <div className="grid grid-cols-2 gap-8 pt-12 border-t-2 border-riso-ink">
                  <div className="space-y-2">
                    <span className="text-[11px] font-black uppercase tracking-widest text-gray-400">Database Engine</span>
                    <div className="text-lg font-syne font-bold uppercase">Atomic_Ledger_v4</div>
                  </div>
                  <div className="space-y-2">
                    <span className="text-[11px] font-black uppercase tracking-widest text-gray-400">Security Model</span>
                    <div className="text-lg font-syne font-bold uppercase">Ironclad_Plate_Lock</div>
                  </div>
                </div>
              </div>

               {/* Graphical Sculpture */}
              <div className="relative aspect-square bg-riso-paper border-8 border-riso-ink p-12 group overflow-hidden">
                <div className="absolute inset-0 halftone-bg opacity-10 group-hover:opacity-20 transition-opacity"></div>
                <div className="relative w-full h-full border-4 border-riso-ink flex items-center justify-center p-8 bg-white shadow-[10px_10px_0px_#ff33cc] md:shadow-[20px_20px_0px_#ff33cc]">
                  <div className="text-center space-y-8">
                     <div className="text-[15vw] md:text-[12rem] font-syne font-black leading-none text-riso-ink group-hover:scale-110 transition-transform duration-700">99.9</div>
                     <div className="text-sm font-black uppercase tracking-[0.4em] border-y-2 border-riso-ink py-2">Percentage of Soul Retained</div>
                  </div>
                </div>
                {/* Decorative Misaligned Stamps */}
                <div className="absolute top-4 right-4 w-24 h-24 border-4 border-riso-blue rounded-full opacity-30 -rotate-12"></div>
                <div className="absolute bottom-8 left-8 w-32 h-12 bg-riso-yellow/40 rotate-6"></div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: Comparative Superiority */}
        <Comparison />
        
        {/* SECTION 5: The Interaction Lab */}
        <ShowcaseSectionWrapper />
        
        {/* SECTION 6: Commercial Engagement */}
        <Pricing />

        {/* SECTION 7: The Journal */}
        <section id="journal" className="py-32 bg-riso-paper relative overflow-hidden text-riso-ink">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 left-1/4 w-px h-full bg-riso-ink opacity-10"></div>
          <div className="absolute top-0 right-1/4 w-px h-full bg-riso-ink opacity-10"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            {/* Section Header */}
            <div className="mb-24 flex flex-col items-center text-center">
               <span className="text-[10px] uppercase tracking-[0.4em] font-black text-riso-ink mb-4">05 / THE JOURNAL</span>
               <h2 className="text-6xl md:text-8xl font-syne font-black uppercase leading-[0.85] tracking-tighter">
                 Thoughts <br /> <span className="text-riso-pink italic font-serif text-5xl md:text-7xl lowercase">from the</span> <br /> Machine
               </h2>
            </div>

            {/* Journal Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {/* Entry 1 */}
              <article className="group cursor-pointer">
                <div className="border-t-2 border-riso-ink pt-4 mb-4 flex justify-between items-baseline">
                  <span className="text-xs font-black uppercase tracking-widest text-gray-500">Oct 12, 2025</span>
                  <span className="text-xs font-black uppercase tracking-widest text-riso-blue opacity-0 group-hover:opacity-100 transition-opacity">Read</span>
                </div>
                <h3 className="text-3xl font-syne font-bold uppercase leading-tight mb-4 group-hover:text-riso-pink transition-colors">
                  The Death of Flat Design
                </h3>
                <p className="font-serif italic text-gray-600 leading-relaxed">
                  Why we are returning to texture, grain, and the tactile error of the printed page.
                </p>
              </article>

              {/* Entry 2 */}
              <article className="group cursor-pointer">
                <div className="border-t-2 border-riso-ink pt-4 mb-4 flex justify-between items-baseline">
                  <span className="text-xs font-black uppercase tracking-widest text-gray-500">Sep 28, 2025</span>
                  <span className="text-xs font-black uppercase tracking-widest text-riso-blue opacity-0 group-hover:opacity-100 transition-opacity">Read</span>
                </div>
                <h3 className="text-3xl font-syne font-bold uppercase leading-tight mb-4 group-hover:text-riso-pink transition-colors">
                  Color Theory for the Colorblind
                </h3>
                <p className="font-serif italic text-gray-600 leading-relaxed">
                  How high-contrast ink traps create universal legibility in a chaotic world.
                </p>
              </article>

              {/* Entry 3 */}
              <article className="group cursor-pointer">
                <div className="border-t-2 border-riso-ink pt-4 mb-4 flex justify-between items-baseline">
                  <span className="text-xs font-black uppercase tracking-widest text-gray-500">Sep 15, 2025</span>
                  <span className="text-xs font-black uppercase tracking-widest text-riso-blue opacity-0 group-hover:opacity-100 transition-opacity">Read</span>
                </div>
                <h3 className="text-3xl font-syne font-bold uppercase leading-tight mb-4 group-hover:text-riso-pink transition-colors">
                  Manual Override
                </h3>
                <p className="font-serif italic text-gray-600 leading-relaxed">
                  When the algorithm fails, the human hand must intervene. A case study in glitched layouts.
                </p>
              </article>
            </div>
            
            {/* View All Button */}
            <div className="mt-20 text-center">
              <button type="button" aria-disabled="true" className="inline-block px-8 py-4 border-2 border-riso-ink text-riso-ink font-syne font-black uppercase text-xs tracking-[0.2em] hover:bg-riso-ink hover:text-riso-paper transition-all cursor-not-allowed opacity-60">
                View All Entries
              </button>
            </div>
          </div>
        </section>
        
        {/* SECTION 8: Final Conversion Narrative (The Manifesto) */}
        <section className="py-48 md:py-72 bg-riso-ink text-riso-paper relative overflow-hidden">
           {/* Cinematic Light Leak Animation */}
           <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-radial from-riso-blue/10 to-transparent animate-[riso-pulse_10s_infinite]"></div>
           </div>

           <div className="container mx-auto px-6 relative z-10">
              <div className="max-w-6xl mx-auto text-center space-y-16">
                 <div className="space-y-6">
                    <span className="text-xs uppercase tracking-[0.8em] font-black text-riso-yellow">06 / The Conclusion</span>
                    <h2 className="text-5xl font-syne font-black uppercase leading-[0.85] tracking-tighter" style={{ fontSize: 'clamp(3rem, 9vw, 10rem)' }}>
                      Ready to <br /> <span className="text-riso-pink">Reclaim</span> <br /> the Soul?
                    </h2>
                 </div>
                 
                 <p className="text-2xl md:text-3xl font-serif italic text-gray-400 max-w-4xl mx-auto leading-relaxed">
                    "This isn't just an upgrade. It's a return to form. Stop settling for the sterile, the flat, and the mechanical. Give your data the texture it deserves."
                 </p>
                 
                 <div className="flex flex-col md:flex-row items-center justify-center gap-12 pt-12">
                    <button className="group relative px-16 py-8 bg-white text-riso-ink font-syne font-black uppercase text-sm tracking-[0.3em] overflow-hidden transition-transform hover:scale-110 active:scale-95">
                      <div className="absolute inset-0 bg-riso-pink translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                      <span className="relative z-10 group-hover:text-white transition-colors">Join the Press</span>
                    </button>
                    <button className="px-16 py-8 border-4 border-white/20 text-white font-syne font-black uppercase text-sm tracking-[0.3em] hover:bg-white hover:text-riso-ink transition-all">
                      Consult the Archivist
                    </button>
                 </div>
              </div>
           </div>

           {/* Floating Geometric Elements (Ambient Physics) */}
           <div className="absolute top-1/4 left-10 w-32 h-32 border-8 border-riso-pink/20 rounded-full animate-float"></div>
           <div className="absolute bottom-1/4 right-20 w-48 h-48 bg-riso-blue/10 rotate-45 animate-float" style={{ animationDelay: '2s' }}></div>
        </section>

        {/* SECTION 8: Global Infrastructure (Footer) */}
        <footer role="contentinfo" className="bg-white text-riso-ink pt-32 pb-16 relative border-t-8 border-riso-ink">
           <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-32">
                 
                 {/* Brand Column */}
                 <div className="md:col-span-5 space-y-12">
                    <div className="relative inline-block">
                      <h2 className="text-6xl md:text-8xl font-syne font-black uppercase tracking-tighter">Inko.</h2>
                      <div className="absolute -bottom-2 -right-4 w-12 h-12 bg-riso-pink mix-blend-multiply opacity-80"></div>
                    </div>
                    <p className="text-xl font-serif italic text-gray-600 leading-relaxed max-w-md">
                      "Dedicated to the restoration of sensory friction in digital interfaces. Established 2025 in London, serving the global creative class."
                    </p>
                    <div className="flex space-x-4">
                       {['TWITTER', 'INSTAGRAM', 'LINKEDIN', 'ARE.NA'].map(social => (
                         <span 
                           key={social} 
                           role="link" 
                           aria-disabled="true"
                           tabIndex={-1}
                           className="px-4 py-2 border-2 border-riso-ink text-[10px] font-black uppercase tracking-widest transition-all cursor-default opacity-60"
                         >
                           {social}
                         </span>
                       ))}
                    </div>
                 </div>

                 {/* Navigation Clusters */}
                 <nav aria-label="Footer navigation" className="md:col-span-2 space-y-10">
                    <h4 className="text-[10px] uppercase font-black tracking-[0.4em] text-riso-blue">Inquiry</h4>
                    <ul className="space-y-4 text-lg font-syne font-bold uppercase tracking-tight">
                       <li><span role="link" aria-disabled="true" tabIndex={-1} className="transition-colors cursor-default opacity-60">The Engine</span></li>
                       <li><span role="link" aria-disabled="true" tabIndex={-1} className="transition-colors cursor-default opacity-60">Manifesto</span></li>
                       <li><span role="link" aria-disabled="true" tabIndex={-1} className="transition-colors cursor-default opacity-60">Journal</span></li>
                       <li><span role="link" aria-disabled="true" tabIndex={-1} className="transition-colors cursor-default opacity-60">Licensing</span></li>
                    </ul>
                 </nav>

                 <nav aria-label="Legal navigation" className="md:col-span-2 space-y-10">
                    <h4 className="text-[10px] uppercase font-black tracking-[0.4em] text-riso-pink">Legal</h4>
                    <ul className="space-y-4 text-lg font-syne font-bold uppercase tracking-tight">
                       <li><span role="link" aria-disabled="true" tabIndex={-1} className="transition-colors cursor-default opacity-60">Privacy</span></li>
                       <li><span role="link" aria-disabled="true" tabIndex={-1} className="transition-colors cursor-default opacity-60">Terms</span></li>
                       <li><span role="link" aria-disabled="true" tabIndex={-1} className="transition-colors cursor-default opacity-60">GDPR</span></li>
                       <li><span role="link" aria-disabled="true" tabIndex={-1} className="transition-colors cursor-default opacity-60">Cookies</span></li>
                    </ul>
                 </nav>

                 {/* High-Fidelity Address/Contact */}
                 <div className="md:col-span-3 space-y-10">
                    <h4 className="text-[10px] uppercase font-black tracking-[0.4em] text-riso-yellow">Location</h4>
                    <div className="space-y-6">
                       <address className="not-italic text-xl font-serif leading-relaxed">
                         42 Ink Street, Shoreditch <br />
                         London, UK E1 6QL
                       </address>
                       <div className="space-y-1">
                          <p className="text-sm font-black uppercase tracking-widest">General: hello@inko.press</p>
                          <p className="text-sm font-black uppercase tracking-widest">Support: tech@inko.press</p>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Final Footer Ledger */}
              <div className="pt-16 border-t-4 border-riso-ink flex flex-col lg:flex-row justify-between items-center gap-12 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
                 <div className="flex items-center space-x-12">
                   <span>© 2025 INKO_LABS_WORLDWIDE</span>
                   <span>VERIFIED_INK_DENSITY: 100%</span>
                 </div>
                 <div className="flex items-center space-x-12">
                   <span>DESIGNED_BY_SOUL</span>
                   <span className="text-riso-ink">MADE_IN_THE_MACHINE</span>
                 </div>
              </div>
           </div>
        </footer>
      </div>

      {/* Global CSS Overrides & Micro-interactions */}
      <style>{`
        /* Architectural Grid Overlay (Subtle) */
        #main-content::after {
          content: "";
          position: fixed;
          inset: 0;
          background-image: linear-gradient(to right, rgba(26,26,26,0.02) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(26,26,26,0.02) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
          z-index: 999;
        }
      `}</style>
    </main>
  );
};

export default App;
