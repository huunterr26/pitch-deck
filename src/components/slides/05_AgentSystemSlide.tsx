"use client";

import React from 'react';
import SlideLayout from '@/components/SlideLayout';
import { Search, Cpu, ListChecks, Zap, ShieldCheck, Rocket, ArrowRight, RefreshCcw } from 'lucide-react';

const HowItWorksSlide: React.FC<{ slideNum: number; total: number }> = ({ slideNum, total }) => {
  const pipeline = [
    {
      icon: <Search className="w-6 h-6 text-brand-accent" />,
      label: "User Specification",
      desc: "GHOST captures intent"
    },
    {
      icon: <Cpu className="w-6 h-6 text-brand-purple" />,
      label: "GHOST Intelligence",
      desc: "Single-agent orchestration"
    },
    {
      icon: <ListChecks className="w-6 h-6 text-brand-accent" />,
      label: "Task Registry",
      desc: "Autonomous execution"
    },
    {
      icon: <RefreshCcw className="w-6 h-6 text-brand-purple" />,
      label: "Self-Healing",
      desc: "Real-time error correction"
    },
    {
      icon: <Rocket className="w-6 h-6 text-brand-accent" />,
      label: "Final Build",
      desc: "Instant live production"
    }
  ];

  const registryTasks = [
    { name: "Schema Generation", status: "completed" },
    { name: "UI Architecture", status: "completed" },
    { name: "API Route Binding", status: "in-progress" },
    { name: "Security Verification", status: "queued" }
  ];

  return (
    <SlideLayout title="How It Works" subtitle="GHOST: The Unified Intelligence" slideNumber={slideNum} totalSlides={total}>
      <div className="flex flex-col h-full gap-8">

        {/* Top: The Pipeline */}
        <div className="flex items-center justify-between gap-4 py-8 relative">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 z-0"></div>

          {pipeline.map((p, i) => (
            <div key={i} className="flex flex-col items-center gap-3 relative z-10 w-40">
              <div className="w-16 h-16 rounded-2xl bg-black/60 border border-white/10 flex items-center justify-center group-hover:border-brand-accent/50 transition-all shadow-xl backdrop-blur-md">
                {p.icon}
              </div>
              <div className="text-center">
                <p className="text-white font-bold text-xs uppercase tracking-widest mb-1">{p.label}</p>
                <p className="text-slate-500 text-[9px]">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom: The Core Systems */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Task Registry Visual */}
          <div className="bg-black/40 border border-white/5 p-6 rounded-3xl relative overflow-hidden">
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-brand-accent/5 rounded-full blur-3xl"></div>
            <div className="flex items-center gap-3 mb-6">
              <ListChecks className="text-brand-accent" size={24} />
              <div>
                <h4 className="text-white font-bold">Autonomous Task Registry</h4>
                <p className="text-slate-500 text-xs">Linear execution without human bottlenecks</p>
              </div>
            </div>

            <div className="space-y-3">
              {registryTasks.map((t, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-white/5 border border-white/5 rounded-xl">
                  <span className="text-xs text-slate-300 font-mono">{t.name}</span>
                  <div className="flex items-center gap-2">
                    <span className={`text-[8px] uppercase font-mono px-2 py-0.5 rounded ${t.status === 'completed' ? 'bg-green-500/10 text-green-400' :
                        t.status === 'in-progress' ? 'bg-brand-accent/10 text-brand-accent animate-pulse' : 'bg-white/5 text-slate-600'
                      }`}>
                      {t.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* GHOST Intelligent System */}
          <div className="bg-brand-purple/5 border border-brand-purple/20 p-6 rounded-3xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/10 to-transparent"></div>
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <RefreshCcw className="text-brand-purple" size={24} />
              <div>
                <h4 className="text-white font-bold">Self-Healing Runtime</h4>
                <p className="text-slate-500 text-xs">Verified. Corrected. Optimized.</p>
              </div>
            </div>

            <div className="space-y-4 relative z-10">
              <div className="p-4 bg-black/40 border border-white/10 rounded-2xl">
                <p className="text-slate-400 text-xs italic mb-2">"Found dependency conflict in package-lock.json..."</p>
                <div className="flex items-center gap-2 text-brand-accent font-mono text-[10px]">
                  <Zap size={10} />
                  <span>AUTO_RESOLVING_CONFLICT</span>
                </div>
              </div>
              <div className="p-4 bg-black/40 border border-white/10 rounded-2xl">
                <p className="text-slate-400 text-xs italic mb-2">"API endpoint type mismatch detected on line 42..."</p>
                <div className="flex items-center gap-2 text-brand-purple font-mono text-[10px]">
                  <Zap size={10} />
                  <span>APPLYING_TYPE_SAFETY_FIX</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Closing Stat */}
        <div className="text-center font-mono text-[10px] text-slate-600 tracking-[0.5em] uppercase">
          GHOST.OS.X // The Singular Path from Idea to Reality
        </div>

      </div>
    </SlideLayout>
  );
};

export default HowItWorksSlide;