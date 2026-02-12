
import React from 'react';

const Comparison: React.FC = () => {
  return (
    <section className="py-24 md:py-48 bg-riso-paper relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-sm uppercase tracking-[0.5em] font-bold text-riso-green mb-6 block">03 / Technical Specs</span>
            <h2 className="text-5xl md:text-7xl font-syne font-black uppercase tracking-tighter leading-none">
              The Ledger <br /> of <span className="text-riso-blue italic font-serif normal-case">Superiority.</span>
            </h2>
          </div>

          {/* Ledger Table */}
          <div className="relative border-4 border-riso-ink bg-white overflow-hidden overflow-x-auto">
            {/* Top Bar */}
            <div className="bg-riso-ink text-riso-paper px-6 py-3 flex justify-between items-center text-[10px] uppercase font-bold tracking-widest">
              <span>Ref: LEDGER_B_2025</span>
              <span>Status: Verified_Ink_Flow</span>
            </div>

            <table className="w-full border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b-4 border-riso-ink">
                  <th className="p-6 text-left font-syne font-bold uppercase text-xs border-r-4 border-riso-ink">Feature Variable</th>
                  <th className="p-6 text-center font-syne font-bold uppercase text-xs border-r-4 border-riso-ink bg-gray-50">Standard SaaS</th>
                  <th className="p-6 text-center font-syne font-bold uppercase text-xs bg-riso-blue/10">Inko Engine</th>
                </tr>
              </thead>
              <tbody className="text-sm font-medium">
                <tr className="border-b-2 border-gray-200 group hover:bg-gray-50">
                  <td className="p-6 border-r-4 border-riso-ink font-syne uppercase tracking-tight">Latency Response</td>
                  <td className="p-6 text-center border-r-4 border-riso-ink text-gray-400">120ms (Delayed)</td>
                  <td className="p-6 text-center font-bold text-riso-blue">14ms (Instant Press)</td>
                </tr>
                <tr className="border-b-2 border-gray-200 group hover:bg-gray-50">
                  <td className="p-6 border-r-4 border-riso-ink font-syne uppercase tracking-tight">Visual Integrity</td>
                  <td className="p-6 text-center border-r-4 border-riso-ink text-gray-400">Compressed / Flat</td>
                  <td className="p-6 text-center font-bold text-riso-pink">Tactile / Layered</td>
                </tr>
                <tr className="border-b-2 border-gray-200 group hover:bg-gray-50">
                  <td className="p-6 border-r-4 border-riso-ink font-syne uppercase tracking-tight">Export Fidelity</td>
                  <td className="p-6 text-center border-r-4 border-riso-ink text-gray-400">Low-res PNG</td>
                  <td className="p-6 text-center font-bold text-riso-green">Print-Ready Vector</td>
                </tr>
                <tr className="border-b-2 border-gray-200 group hover:bg-gray-50">
                  <td className="p-6 border-r-4 border-riso-ink font-syne uppercase tracking-tight">API Reliability</td>
                  <td className="p-6 text-center border-r-4 border-riso-ink text-gray-400">Standard 99.0%</td>
                  <td className="p-6 text-center font-bold text-riso-yellow">Ironclad 99.99%</td>
                </tr>
                <tr className="group hover:bg-gray-50">
                  <td className="p-6 border-r-4 border-riso-ink font-syne uppercase tracking-tight">Soul Coefficient</td>
                  <td className="p-6 text-center border-r-4 border-riso-ink text-gray-400">0.0 (Mechanical)</td>
                  <td className="p-6 text-center font-bold text-riso-pink">11.0 (Artisanal)</td>
                </tr>
              </tbody>
            </table>

            {/* Bottom Graphic Stamps */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 border-4 border-riso-pink rounded-full opacity-20 -rotate-12 flex items-center justify-center text-[10px] font-black uppercase text-center p-4 hidden md:flex">
              Approved for Global Distribution
            </div>
            <div className="absolute top-1/2 -right-12 w-48 h-12 bg-riso-yellow/30 rotate-90 items-center justify-center text-[10px] font-bold uppercase tracking-widest text-riso-ink hidden md:flex">
              Master Plate Verified
            </div>
          </div>

          <div className="mt-12 flex items-center justify-center space-x-8 opacity-40 grayscale group hover:grayscale-0 transition-all">
            <span className="text-xs uppercase tracking-widest font-black">Trusted By:</span>
            <div className="w-12 h-12 bg-riso-ink rounded-full flex items-center justify-center" aria-label="Partner company logo placeholder">
              <span className="text-[10px] text-white font-black uppercase">LOGO</span>
            </div>
            <div className="w-24 h-8 bg-riso-ink flex items-center justify-center" aria-label="Partner company logo placeholder">
              <span className="text-[10px] text-white font-black uppercase">PARTNER</span>
            </div>
            <div className="w-16 h-10 bg-riso-ink -rotate-6 flex items-center justify-center" aria-label="Partner company logo placeholder">
              <span className="text-[10px] text-white font-black uppercase">STUDIO</span>
            </div>
            <div className="w-20 h-8 bg-riso-ink flex items-center justify-center" aria-label="Partner company logo placeholder">
              <span className="text-[10px] text-white font-black uppercase">AGENCY</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
