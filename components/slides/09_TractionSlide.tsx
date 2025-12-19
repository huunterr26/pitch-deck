import React from 'react';
import SlideLayout from '../SlideLayout';
import { CheckSquare, Circle } from 'lucide-react';

const TractionSlide: React.FC<{ slideNum: number; total: number }> = ({ slideNum, total }) => {
  return (
    <SlideLayout title="Execution Log" subtitle="Status & Roadmap" slideNumber={slideNum} totalSlides={total}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 h-full">
        
        {/* Status Panel */}
        <div className="border border-brand-accent/30 bg-black/40 p-6 flex flex-col">
            <h3 className="text-brand-accent font-mono text-sm uppercase tracking-widest mb-6 border-b border-brand-accent/20 pb-2">
                /// SYSTEM STATUS: ONLINE
            </h3>
            <div className="space-y-4 font-mono text-sm">
                {[
                  "Core A2A Agent System [ACTIVE]",
                  "15 Specialized Agents [INTEGRATED]",
                  "Billing Infrastructure [STRIPE_READY]",
                  "Auth & User Systems [DEPLOYED]",
                  "Collaboration Engine [REALTIME]"
                ].map((item, i) => (
                   <div key={i} className="flex items-center gap-3 text-white">
                       <CheckSquare size={16} className="text-brand-accent" />
                       {item}
                   </div>
                ))}
            </div>
            
            <div className="mt-auto p-4 bg-brand-accent/10 border border-brand-accent/20 text-xs text-brand-accent font-mono text-center">
                ALL SYSTEMS OPERATIONAL
            </div>
        </div>

        {/* Roadmap Timeline */}
        <div className="relative pl-8 border-l border-slate-800">
            <h3 className="text-white font-mono text-sm uppercase tracking-widest mb-8 absolute -left-[11px] top-0 bg-black px-2 py-1 border border-slate-700">
                TIMELINE
            </h3>
            
            <div className="space-y-10 mt-12">
               {[
                 { q: 'Q1 2026', title: 'Private Beta', sub: 'DATA_GATHERING' },
                 { q: 'Q2 2026', title: 'Public Launch', sub: 'PRODUCT_HUNT' },
                 { q: 'Q3 2026', title: 'Enterprise', sub: 'REVENUE_SCALE' },
                 { q: 'Q4 2026', title: 'Series A', sub: 'EXPANSION' },
               ].map((m, i) => (
                  <div key={i} className="relative group">
                      <div className="absolute -left-[41px] top-1 w-4 h-4 bg-black border-2 border-slate-600 group-hover:border-brand-accent transition-colors"></div>
                      <div className="flex flex-col">
                          <span className="text-brand-accent font-mono text-xs">{m.q}</span>
                          <span className="text-white font-bold text-lg">{m.title}</span>
                          <span className="text-slate-500 text-xs font-mono uppercase">{m.sub}</span>
                      </div>
                  </div>
               ))}
            </div>
        </div>

      </div>
    </SlideLayout>
  );
};

export default TractionSlide;