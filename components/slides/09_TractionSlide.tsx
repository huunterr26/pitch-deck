import React from 'react';
import SlideLayout from '../SlideLayout';
import { Circle, ArrowUpRight, TrendingUp } from 'lucide-react';

const TractionSlide: React.FC<{ slideNum: number; total: number }> = ({ slideNum, total }) => {
  const milestones = [
    { q: 'Q1 2026', title: 'Private Beta', status: 'Upcoming', desc: 'Onboarding first 100 waitlist developers.' },
    { q: 'Q2 2026', title: 'Public Alpha', status: 'Planned', desc: 'Self-serve access for validated builders.' },
    { q: 'Q3 2026', title: 'Scale & API', status: 'Planned', desc: 'Enterprise hub and ecosystem launch.' },
    { q: 'Q4 2026', title: 'Global Edge', status: 'Planned', desc: 'Decentralized deployment optimization.' },
  ];

  const markers = [
    { label: "Waitlist Size", value: "5k+" },
    { label: "Core Engine", value: "98%" },
    { label: "Infrastructure Readiness", value: "94.2%" }
  ];

  return (
    <SlideLayout title="Traction & Roadmap" subtitle="The GHOST Momentum" slideNumber={slideNum} totalSlides={total}>
      <div className="flex flex-col h-full gap-8">

        {/* Core Stats */}
        <div className="grid grid-cols-3 gap-6">
          {markers.map((m, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <TrendingUp size={60} className="text-brand-accent" />
              </div>
              <div className="text-[10px] text-slate-500 font-mono uppercase tracking-[0.2em] mb-2">{m.label}</div>
              <div className="text-4xl font-bold text-white group-hover:text-brand-accent transition-colors">{m.value}</div>
            </div>
          ))}
        </div>

        {/* Timeline Visual */}
        <div className="flex-1 bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-10 relative overflow-hidden">

          <div className="flex justify-between items-start relative z-10 h-full">
            {milestones.map((m, i) => (
              <div key={i} className="flex flex-col gap-6 relative w-1/4 group">

                {/* Timeline Node */}
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-500 ${m.status === 'Upcoming' ? 'bg-brand-accent/20 border-brand-accent shadow-[0_0_20px_#00f2ff]' : 'bg-white/5 border-white/10'
                    }`}>
                    {m.status === 'Upcoming' ? <ArrowUpRight className="text-brand-accent" size={24} /> : <Circle className="text-slate-600" size={16} />}
                  </div>
                  <div className="flex flex-col">
                    <span className={`text-xs font-mono font-bold ${m.status === 'Upcoming' ? 'text-brand-accent' : 'text-slate-500'}`}>{m.q}</span>
                    <span className="text-white font-bold">{m.status}</span>
                  </div>
                </div>

                {/* Content Card */}
                <div className={`p-6 rounded-2xl border transition-all duration-500 h-full ${m.status === 'Upcoming' ? 'bg-white/5 border-brand-accent/30' : 'bg-transparent border-transparent'
                  }`}>
                  <h4 className="text-xl font-bold text-white mb-2">{m.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{m.desc}</p>
                </div>

                {/* Connecting Line (except last) */}
                {i < milestones.length - 1 && (
                  <div className="absolute top-6 left-12 w-full h-[1px] bg-gradient-to-r from-brand-accent/50 to-transparent -z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex items-center justify-between text-[10px] font-mono text-slate-600 uppercase tracking-[0.4em]">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-pulse"></div>
            <span>Pre-Seed Round Active</span>
          </div>
          <span>On Track for Q1 Beta</span>
        </div>

      </div>
    </SlideLayout>
  );
};

export default TractionSlide;