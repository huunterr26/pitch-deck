"use client";

import React from 'react';
import SlideLayout from '@/components/SlideLayout';
import { XCircle, AlertTriangle, TrendingDown, Clock, Terminal, Quote } from 'lucide-react';

const ProblemSlide: React.FC<{ slideNum: number; total: number }> = ({ slideNum, total }) => {
  const problems = [
    {
      icon: <Clock className="w-6 h-6 text-brand-accent" />,
      title: "Complexity Barrier",
      desc: "Building software is still too hard, too slow, and too expensive. Technical debt accumulates faster than features."
    },
    {
      icon: <XCircle className="w-6 h-6 text-brand-purple" />,
      title: "The 'Toy' Problem",
      desc: "Existing no-code tools produce toy applications, not production-ready software. No real backend, no scalability."
    },
    {
      icon: <TrendingDown className="w-6 h-6 text-brand-accent" />,
      title: "Boilerplate Tax",
      desc: "Developers spend 70% of their time on boilerplate, not innovation. Every project starts from zero."
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-brand-purple" />,
      title: "Market Access",
      desc: "80% of businesses need custom software but can't afford to build it. A $500B+ market is trapped."
    }
  ];

  return (
    <SlideLayout title="The Problem" subtitle="Market Barriers & Technical Friction" slideNumber={slideNum} totalSlides={total}>
      <div className="flex flex-col h-full gap-8">

        {/* Quote Section */}
        <div className="bg-white/5 border-l-4 border-brand-accent p-6 rounded-r-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Quote size={80} className="text-brand-accent" />
          </div>
          <p className="text-2xl md:text-3xl text-white font-light italic leading-relaxed relative z-10">
            "I have a $10M idea but I need $100K just to build an MVP."
          </p>
          <p className="text-slate-400 mt-4 font-mono text-sm uppercase tracking-widest">— Every non-technical founder</p>
        </div>

        {/* Problem Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
          {problems.map((p, idx) => (
            <div key={idx} className="bg-black/40 border border-white/10 p-6 rounded-2xl hover:border-brand-accent/50 transition-all hover:bg-white/5 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white/5 rounded-xl group-hover:scale-110 transition-transform">
                  {p.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{p.title}</h3>
              </div>
              <p className="text-slate-400 leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Stat Bar */}
        <div className="flex items-center justify-between border-t border-white/10 pt-6">
          <div className="flex items-center gap-8">
            <div className="flex flex-col">
              <span className="text-3xl font-black text-brand-accent">$500B+</span>
              <span className="text-[10px] text-slate-500 uppercase tracking-widest">Market Trapped</span>
            </div>
            <div className="w-px h-8 bg-white/10"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-black text-brand-purple">80%</span>
              <span className="text-[10px] text-slate-500 uppercase tracking-widest">SMB Gap</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2 text-slate-500 font-mono text-xs">
            <Terminal size={14} />
            <span>ANALYSIS_COMPLETE // DEFICIT_IDENTIFIED</span>
          </div>
        </div>

      </div>
    </SlideLayout>
  );
};

export default ProblemSlide;