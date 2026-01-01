"use client";

import React from 'react';
import SlideLayout from '@/components/SlideLayout';
import { Monitor } from 'lucide-react';

const DemoSlide: React.FC<{ slideNum: number; total: number }> = ({ slideNum, total }) => {
  return (
    <SlideLayout title="Product Demo" subtitle="Building the Future" slideNumber={slideNum} totalSlides={total}>
      <div className="flex flex-col h-full gap-6">

        {/* Content Header */}
        <div className="flex items-center justify-between">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold text-white mb-2">Watch GHOST.OS.X in Action</h3>
            <p className="text-slate-400">Experience a high-fidelity workflow as GHOST transforms concepts into production-ready deployments with unprecedented speed.</p>
          </div>
        </div>

        {/* Video/GIF Container */}
        <div className="flex-1 bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl relative flex items-center justify-center shadow-2xl overflow-hidden group">

          {/* GIF Element */}
          <img
            className="w-full h-full object-contain"
            src="/Recording 2025-12-26 130314.gif"
            alt="GHOST Demo"
          />

          {/* Premium Glow Overlay */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

          {/* Status Overlay */}
          <div className="absolute bottom-6 left-6 flex items-center gap-2 text-brand-accent font-mono text-[10px] tracking-[0.2em] uppercase bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
            <Monitor size={12} />
            <span>Live Build Environment Active</span>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Frontend', value: 'React 19 + Vite' },
            { label: 'Backend', value: 'Node.js Edge' },
            { label: 'Security', value: 'Vulnerability Scan' },
            { label: 'Deployment', value: 'Instant Vercel' }
          ].map((f, i) => (
            <div key={i} className="bg-white/5 border border-white/5 p-4 rounded-2xl">
              <span className="text-[10px] text-slate-500 uppercase tracking-widest">{f.label}</span>
              <p className="text-white font-bold text-sm">{f.value}</p>
            </div>
          ))}
        </div>

      </div>
    </SlideLayout>
  );
};

export default DemoSlide;