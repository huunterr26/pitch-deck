"use client";

import React from 'react';
import { Mail, Phone, Globe, ExternalLink } from 'lucide-react';
import AnimatedLogo from '@/components/AnimatedLogo';

const ClosingSlide: React.FC<{ slideNum?: number; total?: number }> = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center text-center relative overflow-hidden bg-transparent font-sans">

      {/* Background Grok Visual */}
      <div className="absolute inset-0 z-0">
        <img
          src="/grok_image_xzmfm0.jpg"
          alt="The Future"
          className="w-full h-full object-cover opacity-[0.03] mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
      </div>

      {/* Background Glows */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-accent/5 to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-purple/5 rounded-full blur-[120px]"></div>

      <div className="z-10 max-w-3xl px-8 relative">


        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          The <span className="bg-gradient-to-r from-brand-accent to-brand-purple bg-clip-text text-transparent">Future</span> of Creation.
        </h2>

        <p className="text-xl md:text-2xl text-slate-400 font-light mb-16 tracking-wide">
          <span className="text-white font-semibold">GHOST.OS.X</span> // The Singular Path from Idea to Reality
        </p>

        {/* Contact Module */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-brand-accent/50 transition-all group">
            <h3 className="text-white font-bold text-2xl tracking-tight mb-4 flex items-center gap-3">
              David Hunter Jr.
            </h3>
            <p className="text-brand-accent/70 text-xs font-mono uppercase tracking-widest mb-6 border-l border-brand-accent/30 pl-3">Founder & CEO</p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-300 hover:text-brand-accent transition-colors cursor-pointer text-sm font-mono">
                <Mail size={16} className="text-brand-accent" />
                <span>david@hunter-llc.dev</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 hover:text-brand-purple transition-colors cursor-pointer text-sm font-mono">
                <Globe size={16} className="text-brand-purple" />
                <span>GHOST-OS-X.AI</span>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-brand-purple/50 transition-all flex flex-col justify-center gap-6">
            <div className="space-y-1">
              <span className="text-[10px] text-slate-500 uppercase tracking-widest block font-mono">Headquarters</span>
              <p className="text-white font-medium">Remote First / AI Native</p>
            </div>

            <button className="w-full py-4 bg-white text-black font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-brand-accent hover:text-black transition-all group">
              INITIALIZE_PARTNERSHIP
              <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="mt-16 text-[10px] font-mono text-slate-600 uppercase tracking-[0.5em] flex items-center justify-center gap-4">
          <div className="w-8 h-px bg-slate-800"></div>
          <span>GHOST.OS.X // Q1 2026</span>
          <div className="w-8 h-px bg-slate-800"></div>
        </div>
      </div>
    </div>
  );
};

export default ClosingSlide;