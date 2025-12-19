import React from 'react';
import SlideLayout from '../SlideLayout';
import { Check, X, ShieldAlert, Cpu } from 'lucide-react';
import { COMPETITORS } from '../../constants';

const CompetitionSlide: React.FC<{ slideNum: number; total: number }> = ({ slideNum, total }) => {
  return (
    <SlideLayout title="Competitive Matrix" subtitle="Feature Parity Analysis" slideNumber={slideNum} totalSlides={total}>
      <div className="w-full h-full flex flex-col">
        
        {/* Matrix Table */}
        <div className="w-full border border-slate-800 bg-black/40">
           {/* Header */}
           <div className="grid grid-cols-5 gap-4 p-4 border-b border-slate-700 bg-slate-900/50 text-xs font-mono text-slate-400 uppercase tracking-wider">
               <div className="col-span-1">Entity</div>
               <div className="text-center">Multi-Agent</div>
               <div className="text-center">Security</div>
               <div className="text-center">Transparency</div>
               <div className="text-right">Model</div>
           </div>

           {/* Rows */}
           {COMPETITORS.map((comp, i) => {
              const isVai = comp.name === 'vAi™';
              return (
                <div key={i} className={`grid grid-cols-5 gap-4 p-4 items-center border-b border-slate-800 ${isVai ? 'bg-brand-accent/5 border-brand-accent/30 relative overflow-hidden' : ''}`}>
                   {isVai && <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-accent"></div>}
                   
                   <div className={`font-bold text-lg ${isVai ? 'text-brand-accent' : 'text-white'}`}>{comp.name}</div>
                   
                   <div className="flex justify-center">
                       {comp.multiAgent ? <Check size={18} className="text-brand-accent"/> : <X size={18} className="text-slate-700"/>}
                   </div>
                   
                   <div className="flex justify-center">
                       {comp.security ? <Check size={18} className="text-brand-accent"/> : <X size={18} className="text-slate-700"/>}
                   </div>
                   
                   <div className="flex justify-center">
                       {comp.visibility ? <div className="text-xs font-mono text-brand-accent border border-brand-accent px-2 py-0.5">VISIBLE</div> : <div className="text-xs font-mono text-slate-600">OPAQUE</div>}
                   </div>
                   
                   <div className="text-right font-mono text-sm text-slate-300">
                       {comp.pricing}
                   </div>
                </div>
              );
           })}
        </div>

        {/* Differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="border border-brand-accent/30 bg-brand-accent/5 p-4 flex gap-4 items-start">
                <Cpu className="text-brand-accent shrink-0 mt-1" />
                <div>
                    <h4 className="text-brand-accent font-bold text-sm uppercase mb-1">Advantage: Identity</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">Named agents (Bear, DeX) provide accountability. Competitors use hidden, generic subprocesses.</p>
                </div>
            </div>
            <div className="border border-slate-700 p-4 flex gap-4 items-start">
                <ShieldAlert className="text-white shrink-0 mt-1" />
                <div>
                    <h4 className="text-white font-bold text-sm uppercase mb-1">Advantage: Security</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">Integrated pen-testing agent "Shadow" runs live exploits during the build phase.</p>
                </div>
            </div>
        </div>

      </div>
    </SlideLayout>
  );
};

export default CompetitionSlide;