import React from 'react';
import SlideLayout from '../SlideLayout';
import { Check, X, ShieldAlert, Cpu } from 'lucide-react';
import { COMPETITORS } from '../../constants';

const CompetitionSlide: React.FC<{ slideNum: number; total: number }> = ({ slideNum, total }) => {
  return (
    <SlideLayout title="Competitive Matrix" subtitle="The Ghost Advantage" slideNumber={slideNum} totalSlides={total}>
      <div className="w-full h-full flex flex-col">

        {/* Matrix Table */}
        <div className="w-full border border-white/10 bg-black/40 rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-5 gap-4 p-6 border-b border-white/10 bg-white/5 text-[10px] font-mono text-slate-500 uppercase tracking-[0.2em]">
            <div className="col-span-1">Platform</div>
            <div className="text-center">Unified Intel</div>
            <div className="text-center">Security Scan</div>
            <div className="text-center">Transparency</div>
            <div className="text-right">Model</div>
          </div>

          {/* Rows */}
          {COMPETITORS.map((comp, i) => {
            const isGhost = comp.name === 'Ghost.OS.X';
            return (
              <div key={i} className={`grid grid-cols-5 gap-4 p-6 items-center border-b border-white/5 last:border-0 ${isGhost ? 'bg-brand-accent/5 relative overflow-hidden' : ''}`}>
                {isGhost && <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-accent shadow-[0_0_10px_#00f2ff]"></div>}

                <div className={`font-bold text-lg ${isGhost ? 'text-brand-accent' : 'text-white'}`}>{comp.name}</div>

                <div className="flex justify-center text-center">
                  {comp.multiAgent ? <Check size={20} className="text-brand-accent" /> : <X size={20} className="text-slate-700" />}
                </div>

                <div className="flex justify-center">
                  {comp.security ? <Check size={20} className="text-brand-accent" /> : <X size={20} className="text-slate-700" />}
                </div>

                <div className="flex justify-center">
                  {comp.visibility ? <div className="text-[8px] font-mono text-brand-accent border border-brand-accent/50 px-2 py-0.5 rounded-full uppercase tracking-tighter">Verified</div> : <div className="text-[8px] font-mono text-slate-600 uppercase tracking-tighter">Opaque</div>}
                </div>

                <div className="text-right font-mono text-sm text-slate-400">
                  {comp.pricing}
                </div>
              </div>
            );
          })}
        </div>

        {/* Differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white/5 border border-white/10 p-6 rounded-3xl flex gap-6 items-start hover:border-brand-accent/30 transition-all group">
            <div className="p-3 bg-black/40 rounded-2xl group-hover:scale-110 transition-transform">
              <Cpu className="text-brand-accent" size={28} />
            </div>
            <div>
              <h4 className="text-brand-accent font-bold text-sm uppercase mb-2 tracking-widest">Singularity Engine</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Ghost handles the entire pipeline as a unified intelligence, eliminating the coordination lag of traditional multi-agent systems.</p>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-3xl flex gap-6 items-start hover:border-brand-purple/30 transition-all group">
            <div className="p-3 bg-black/40 rounded-2xl group-hover:scale-110 transition-transform">
              <ShieldAlert className="text-brand-purple" size={28} />
            </div>
            <div>
              <h4 className="text-brand-purple font-bold text-sm uppercase mb-2 tracking-widest">Native Security</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Integrated vulnerability scanning is not a feature — it's the foundation. Every line generated is verified for safety.</p>
            </div>
          </div>
        </div>

      </div>
    </SlideLayout>
  );
};

export default CompetitionSlide;