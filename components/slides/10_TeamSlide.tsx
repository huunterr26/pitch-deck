import React from 'react';
import SlideLayout from '../SlideLayout';
import { User, Code2, Wrench, Layers } from 'lucide-react';

const TeamSlide: React.FC<{ slideNum: number; total: number }> = ({ slideNum, total }) => {
  return (
    <SlideLayout title="Personnel" subtitle="Founder Profile" slideNumber={slideNum} totalSlides={total}>
      <div className="flex flex-col items-center justify-center h-full">
        
        {/* Founder ID Card */}
        <div className="w-full max-w-2xl border border-brand-accent/30 bg-black/60 relative p-1">
            {/* ID Header */}
            <div className="bg-brand-accent/10 p-2 flex justify-between items-center text-[10px] font-mono text-brand-accent uppercase border-b border-brand-accent/20">
                <span>ID: DH-001</span>
                <span>CLEARANCE: LEVEL 5</span>
            </div>

            <div className="flex flex-col md:flex-row p-8 gap-8 items-center md:items-start">
                {/* Photo Placeholder */}
                <div className="w-32 h-32 bg-slate-900 border border-slate-700 flex items-center justify-center shrink-0">
                    <User size={48} className="text-slate-600" />
                </div>
                
                {/* Data */}
                <div className="flex-1 space-y-4 text-center md:text-left">
                    <div>
                        <h2 className="text-3xl font-bold text-white uppercase tracking-tight">David Hunter Jr.</h2>
                        <div className="text-brand-accent font-mono text-sm">FOUNDER // LEAD ENGINEER</div>
                    </div>
                    
                    <div className="space-y-2 text-sm text-slate-300 font-mono">
                        <div className="flex items-center gap-2 justify-center md:justify-start">
                            <span className="text-slate-500">[ROLE]</span>
                            <span>Full Stack Developer (Self-Taught)</span>
                        </div>
                        <div className="flex items-center gap-2 justify-center md:justify-start">
                            <span className="text-slate-500">[EXP]</span>
                            <span>Fiber Telecom Tech (4 Years)</span>
                        </div>
                        <div className="flex items-center gap-2 justify-center md:justify-start">
                            <span className="text-slate-500">[ACH]</span>
                            <span>Solo-built vAi Core Engine</span>
                        </div>
                    </div>

                    <div className="mt-4 p-3 border-l-2 border-brand-accent bg-slate-900/50 text-xs text-slate-400 italic">
                        "Built completely on nights and weekends. 100% bootstrap mindset."
                    </div>
                </div>
            </div>
        </div>

        {/* Recruitment Slots */}
        <div className="flex gap-4 mt-8 w-full max-w-2xl">
             <div className="flex-1 border border-dashed border-slate-700 p-4 text-center hover:bg-slate-900/50 transition-colors cursor-pointer group">
                 <div className="text-xs font-mono text-slate-500 mb-1 group-hover:text-white">[OPEN_SLOT_01]</div>
                 <div className="font-bold text-white">Technical Co-Founder</div>
                 <div className="text-[10px] text-slate-500">AI/ML Specialization</div>
             </div>
             <div className="flex-1 border border-dashed border-slate-700 p-4 text-center hover:bg-slate-900/50 transition-colors cursor-pointer group">
                 <div className="text-xs font-mono text-slate-500 mb-1 group-hover:text-white">[OPEN_SLOT_02]</div>
                 <div className="font-bold text-white">Advisors</div>
                 <div className="text-[10px] text-slate-500">SaaS / DevTools</div>
             </div>
        </div>

      </div>
    </SlideLayout>
  );
};

export default TeamSlide;