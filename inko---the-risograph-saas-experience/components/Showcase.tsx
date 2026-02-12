
import React, { useRef, useEffect, useState } from 'react';

const SLIDES = [
  {
    num: '01',
    hex: '#0055ff',
    title: 'The Emulsion',
    description:
      '"We start by emulsifying your data streams into a unified light-sensitive layer. Our algorithms detect the most subtle patterns, preparing them for the first pass of the digital press."',
    features: ['Real-time ingestion', 'Pattern sensitivity 99.4%', 'Noise reduction filters'],
    imgSeed: 'ink1',
    filename: 'LDR_PROC_INIT.exe',
    altText: 'Data emulsion process visualization',
  },
  {
    num: '02',
    hex: '#ff33cc',
    title: 'Multi-Pass Mixing',
    description:
      '"Insights aren\'t binary. We overlay multiple perspectives using our unique ink-mixing logic. Discover what happens when your sales data meets sentiment analysis in a high-contrast overlap."',
    features: ['Dual-layer blending', 'Chromatic analysis', 'Contextual overlapping'],
    imgSeed: 'ink2',
    filename: 'RGB_CMYK_XFORM.dll',
    altText: 'Multi-pass ink mixing analysis',
  },
  {
    num: '03',
    hex: '#ffdd00',
    title: 'The Final Pull',
    description:
      '"The result is a high-fidelity report with tangible value. Export your findings into a format that demands attention and respect in the boardroom."',
    features: ['High-res PDF export', 'Tactile UI elements', 'Collaborative proofing'],
    imgSeed: 'ink3',
    filename: 'FINAL_PULL_OUTPUT.bin',
    altText: 'Final high-fidelity output pull',
  },
];

/**
 * Showcase — "Layered Intelligence" horizontal scroll section.
 * Desktop: Click/swipe carousel with snap points.
 * Mobile: Native horizontal swipe with snap points.
 */
const Showcase: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredSlide, setHoveredSlide] = useState<number | null>(null);
  const [scrollHintVisible, setScrollHintVisible] = useState(true);
  const activeSlideRef = useRef(activeSlide);

  // Entrance animation via IntersectionObserver
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Active slide tracking + progress
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      const maxScroll = scrollWidth - clientWidth;
      if (maxScroll <= 0) return;
      
      setScrollProgress(scrollLeft / maxScroll);
      const idx = Math.round((scrollLeft / maxScroll) * (SLIDES.length - 1));
      setActiveSlide(Math.min(idx, SLIDES.length - 1));
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    // Initialize
    handleScroll();

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Sync ref for wheel handler closure
  useEffect(() => { activeSlideRef.current = activeSlide; }, [activeSlide]);

  useEffect(() => {
    if (activeSlide > 0) setScrollHintVisible(false);
  }, [activeSlide]);

  const scrollToSlide = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const slide = container.children[index] as HTMLElement | undefined;
    if (slide) slide.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
  };

  // Wheel → slide navigation (scroll hijack)
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let lastWheelTime = 0;
    const COOLDOWN = 600;

    const handleWheel = (e: WheelEvent) => {
      const rect = section.getBoundingClientRect();
      const sectionVisible = rect.top < window.innerHeight * 0.5 && rect.bottom > window.innerHeight * 0.3;
      if (!sectionVisible) return;

      const current = activeSlideRef.current;
      const isForward = e.deltaY > 0;

      // At boundaries — let page scroll naturally
      if ((isForward && current >= SLIDES.length - 1) || (!isForward && current <= 0)) return;

      e.preventDefault();

      const now = Date.now();
      if (now - lastWheelTime < COOLDOWN) return;
      lastWheelTime = now;

      scrollToSlide(isForward ? current + 1 : current - 1);
    };

    section.addEventListener('wheel', handleWheel, { passive: false });
    return () => section.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="py-24 md:py-48 bg-[#1a1a1a] text-[#f4f1ea] overflow-hidden"
    >
      {/* Header */}
      <div className="container mx-auto px-6 mb-20">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <span
              className="text-sm uppercase tracking-[0.5em] font-bold mb-4 transition-all duration-700 block"
              style={{
                color: '#ff33cc',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              02 / The Process
            </span>
            <h2
              className="text-5xl md:text-7xl font-syne font-black uppercase tracking-tighter transition-all duration-700"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: '150ms',
              }}
            >
              Layered <br /> Intelligence.
            </h2>
          </div>

          {/* Slide indicators + arrow buttons — desktop only */}
          <div className="hidden lg:flex items-center gap-4 pb-2">
            <button
              onClick={() => scrollToSlide(Math.max(0, activeSlide - 1))}
              disabled={activeSlide === 0}
              className="w-10 h-10 border border-white/30 flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white transition-all duration-200 disabled:opacity-20 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label="Previous slide"
            >
              ←
            </button>
            <div className="flex items-center gap-3">
              {SLIDES.map((slide, i) => (
                <button
                  key={slide.num}
                  onClick={() => scrollToSlide(i)}
                  className="relative h-1 bg-white/20 overflow-hidden cursor-pointer transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  style={{ width: activeSlide === i ? '4rem' : '2rem' }}
                  aria-label={`Go to slide ${i + 1}`}
                >
                  <div
                    className="absolute inset-0 transition-transform duration-500"
                    style={{
                      backgroundColor: slide.hex,
                      transform: activeSlide === i ? 'scaleX(1)' : 'scaleX(0)',
                      transformOrigin: 'left',
                    }}
                  />
                </button>
              ))}
            </div>
            <button
              onClick={() => scrollToSlide(Math.min(SLIDES.length - 1, activeSlide + 1))}
              disabled={activeSlide === SLIDES.length - 1}
              className="w-10 h-10 border border-white/30 flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white transition-all duration-200 disabled:opacity-20 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label="Next slide"
            >
              →
            </button>
            <span className="text-xs font-mono text-white/40 ml-2">
              {String(activeSlide + 1).padStart(2, '0')}/{String(SLIDES.length).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Area */}
      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto space-x-6 md:space-x-12 px-6 pb-20 no-scrollbar snap-x snap-mandatory"
        >
        {SLIDES.map((slide, i) => (
          <div
            key={slide.num}
            className="showcase-slide flex-shrink-0 w-[85vw] md:w-full max-w-4xl relative group snap-start"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(60px) scale(0.95)',
              transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${300 + i * 200}ms`,
            }}
          >
            {/* Color wash overlay */}
            <div
              className="absolute inset-0 mix-blend-screen opacity-10 transition-opacity duration-500 group-hover:opacity-25"
              style={{ backgroundColor: slide.hex }}
            />

            <div className="border-2 border-[#f4f1ea]/20 p-4 md:p-12 space-y-12 backdrop-blur-sm transition-all duration-500 group-hover:border-[#f4f1ea]/40">
              {/* Slide number + accent line */}
              <div className="flex justify-between items-start">
                <span
                  className="text-6xl font-syne font-black transition-all duration-500 group-hover:tracking-wider"
                  style={{ color: slide.hex }}
                >
                  {slide.num}
                </span>
                <div
                  className="h-[1px] mt-8 transition-all duration-700"
                  style={{
                    backgroundColor: slide.hex,
                    width: activeSlide === i ? '6rem' : '3rem',
                  }}
                />
              </div>

              {/* Content grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h4 className="text-3xl font-syne font-bold uppercase transition-transform duration-500 group-hover:translate-x-2">
                    {slide.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed font-medium">
                    {slide.description}
                  </p>
                  <ul
                    className="space-y-3 text-xs uppercase tracking-widest font-bold"
                    style={{ color: slide.hex }}
                  >
                    {slide.features.map((feat, j) => (
                      <li
                        key={j}
                        className="transition-all duration-300 group-hover:translate-x-1"
                        style={{ transitionDelay: `${j * 80}ms` }}
                      >
                        • {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image panel */}
                <div
                  className="relative aspect-video bg-[#2a2a2a] overflow-hidden border border-white/10 transition-all duration-500"
                  style={{ borderColor: hoveredSlide === i ? `${slide.hex}80` : 'rgba(255,255,255,0.1)' }}
                  onMouseEnter={() => setHoveredSlide(i)}
                  onMouseLeave={() => setHoveredSlide(null)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#2a2a2a] via-[#3a3a3a] to-[#2a2a2a] bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite]" />
                  <div className="absolute inset-0 halftone-bg text-black opacity-40" />
                  <img
                    src={`https://picsum.photos/seed/${slide.imgSeed}/800/450`}
                    width="800"
                    height="450"
                    loading="lazy"
                    className="w-full h-full object-cover mix-blend-multiply opacity-80 transition-transform duration-700 group-hover:scale-105 relative z-10"
                    alt={slide.altText}
                  />
                  {/* Color flash overlay on hover */}
                  <div
                    className="absolute inset-0 mix-blend-multiply opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-20"
                    style={{ backgroundColor: slide.hex }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/70 to-transparent z-20" />
                  <div className="absolute bottom-4 left-4 text-[10px] font-mono text-white/90 z-30 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                    {slide.filename}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>

        {scrollHintVisible && (
          <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-2 pointer-events-none animate-[bounceRight_1.5s_ease-in-out_infinite]">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/50 [writing-mode:vertical-lr]">
              Scroll
            </span>
            <span className="text-white/50 text-lg">→</span>
          </div>
        )}
      </div>

      {/* Scroll progress bar — desktop only */}
      <div className="hidden lg:block container mx-auto px-6 -mt-12 mb-8">
        <div className="w-full h-[2px] bg-white/10 overflow-hidden">
          <div
            className="h-full transition-transform duration-150 origin-left"
            style={{
              backgroundColor: '#ff33cc',
              transform: `scaleX(${scrollProgress})`,
            }}
          />
        </div>
      </div>

      {/* Decorative Text Loop at bottom */}
      <div className="w-full overflow-hidden py-12 border-t border-white/10 mt-12">
        <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite] showcase-marquee">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <span
              key={i}
              className="text-8xl font-syne font-black uppercase tracking-tighter mx-12 opacity-20 outline-text"
            >
              Quality over Quantity — Quality over Quantity —
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .showcase-marquee { animation: none !important; }
        }
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        @keyframes bounceRight {
          0%, 100% { transform: translateX(0) translateY(-50%); }
          50% { transform: translateX(6px) translateY(-50%); }
        }
        .showcase-slide:hover {
          will-change: transform, opacity;
          box-shadow: 0 0 60px -15px rgba(255, 51, 204, 0.15);
        }
      `}</style>
    </section>
  );
};

export default Showcase;
