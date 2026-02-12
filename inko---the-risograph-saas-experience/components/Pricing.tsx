
import React from 'react';
import { PRICING_PLANS } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="pricing-section py-24 md:py-48 bg-riso-ink relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
           <span className="text-sm uppercase tracking-[0.5em] font-bold text-riso-yellow mb-6 block">04 / The Investment</span>
           <h2 className="text-5xl md:text-8xl font-syne font-black uppercase tracking-tighter leading-none text-riso-paper">
             Choose <br /> Your <br /> <span className="text-riso-blue">Density.</span>
           </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan, idx) => (
            <div key={idx} className="relative group">
              <div 
                className={`pricing-deco-layer absolute inset-0 transition-transform duration-500 -z-10 ${
                  plan.isPopular ? 'bg-riso-pink opacity-80' : 'bg-white opacity-10'
                }`}
              ></div>

              {/* Main Card */}
              <div className="pricing-card h-full bg-[#2a2a2a] border-2 border-white/20 p-8 md:p-12 flex flex-col space-y-12 transition-colors">
                <div className="space-y-4">
                  <span className={`text-[10px] uppercase tracking-[0.3em] font-black px-3 py-1 ${
                    plan.isPopular ? 'bg-riso-pink text-white' : 'bg-white/10 text-white'
                  }`}>
                    {plan.name}
                  </span>
                  <div className="flex items-baseline">
                    <span className="text-5xl font-syne font-black text-riso-paper">${plan.price}</span>
                    <span className="text-xs text-gray-400 uppercase font-bold ml-2">/ month</span>
                  </div>
                </div>

                <div className="flex-grow">
                  <ul className="space-y-4">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center space-x-3 text-sm font-medium text-gray-200">
                        <svg className="w-5 h-5 text-riso-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className={`w-full py-5 font-syne text-xs uppercase tracking-[0.2em] font-bold transition-all relative overflow-hidden group/btn ${
                  plan.isPopular 
                  ? 'bg-riso-pink text-white' 
                  : 'bg-white text-black hover:bg-riso-blue hover:text-white'
                }`}>
                  <span className="relative z-10">Select This Plate</span>
                </button>
              </div>
              
              {plan.isPopular && (
                <div className="absolute top-0 right-12 -translate-y-1/2 bg-riso-yellow text-black font-syne text-[10px] font-black px-4 py-1 uppercase tracking-widest rotate-6">
                  Recommended Press
                </div>
              )}
            </div>
          ))}
        </div>

        {/* FAQ Teaser */}
        <div className="mt-32 text-center">
          <p className="text-gray-400 font-serif italic text-lg mb-8">
            "Questions about our proprietary ink-delivery methods?"
          </p>
          <a href="#journal" className="inline-block text-riso-blue font-syne text-sm uppercase tracking-widest font-bold border-b-4 border-riso-blue pb-2 hover:text-riso-paper transition-colors">
            Consult the Archivist →
          </a>
        </div>
      </div>

      {/* Background Graphic Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.05]">
        <div className="absolute top-[20%] right-[-5%] text-[20rem] font-black leading-none uppercase rotate-90 text-white select-none">INKO</div>
      </div>

      <style>{`
        @media (hover: hover) {
          .pricing-section .group:hover > .pricing-deco-layer {
            transform: translate(16px, 16px);
          }
          .pricing-section .group:hover > .pricing-card {
            background-color: #1a1a1a;
          }
        }
      `}</style>
    </section>
  );
};

export default Pricing;
