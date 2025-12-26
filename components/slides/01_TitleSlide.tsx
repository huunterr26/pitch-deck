import React from 'react';
import { Mail, Globe, Laptop, Cpu } from 'lucide-react';
import AnimatedLogo from '../AnimatedLogo';

const TitleSlide: React.FC<{ slideNum?: number; total?: number }> = () => {
  return (
    <div className="h-full w-full flex flex-col justify-between p-8 md:p-12 relative overflow-hidden bg-transparent font-sans">

      {/* Background - Premium Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[900px] h-[900px] bg-brand-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-brand-purple/10 rounded-full blur-[100px]" />
      </div>

      {/* Top Navigation / Status */}
      <div className="flex justify-between items-end border-b border-white/10 pb-4 z-10 transition-all">
        <div className="flex flex-col">
          <span className="text-[10px] text-slate-500 font-mono tracking-[0.2em] uppercase mb-1">Status</span>
          <div className="flex items-center gap-2 text-brand-accent font-mono text-sm tracking-widest bg-brand-accent/5 px-3 py-1 rounded border border-brand-accent/20">
            <div className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-pulse"></div>
            SYSTEM_ACTIVE_Q1_2026
          </div>
        </div>
        <div className="text-slate-500 font-mono text-xs hidden md:block">
          GHOST.OS.X // PRE-SEED
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-12 z-10 relative py-8">

        {/* Left: Typography */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tight leading-[0.85]">
            GHOST.<br />
            <span className="bg-gradient-to-r from-brand-accent to-brand-purple bg-clip-text text-transparent">OS.X</span>
          </h1>

          <p className="text-slate-300 text-xl md:text-2xl font-light max-w-xl leading-relaxed border-l-2 border-brand-accent pl-6">
            The <span className="text-white font-semibold">AI-Powered</span> No-Code Revolution.
          </p>
        </div>

        {/* Right: Premium Logo Presentation */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative group p-10">
            {/* Grok Hero Image Integration */}
            <div className="absolute inset-0 overflow-hidden rounded-[40px] opacity-30 mix-blend-screen group-hover:opacity-50 transition-opacity duration-1000 z-0">
              <img
                src="/grok_image_xh5i3en.jpg"
                alt="GHOST Intelligence"
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[2000ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/80"></div>
            </div>

            <div className="absolute -inset-4 bg-gradient-to-r from-brand-accent to-brand-purple rounded-3xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500 z-0"></div>

            <div className="bg-black/40 backdrop-blur-2xl border border-white/10 p-12 md:p-16 rounded-3xl shadow-2xl relative z-10 w-72 h-72 md:w-96 md:h-96 flex items-center justify-center overflow-hidden" />

            {/* Floating Detail Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-brand-accent/30 rounded-tr-3xl"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-brand-purple/30 rounded-bl-3xl"></div>
          </div>
        </div>

      </div>

      {/* Footer / Contact */}
      <div className="z-10 grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-white/10 pt-6">
        <div className="flex items-center gap-4">
          <div>
            <h3 className="text-white font-bold tracking-tight text-xl">David Hunter Jr.</h3>
            <p className="text-brand-accent/70 text-xs font-mono uppercase tracking-widest">Founder & CEO</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-6 font-mono text-sm">
          <div className="flex items-center gap-3 text-slate-300 hover:text-brand-accent transition-colors cursor-pointer text-sm">
            <Globe size={16} className="text-brand-accent" />
            <span>GHOST-OS-X.AI</span>
          </div>
          <div className="hidden md:block w-px h-4 bg-white/10"></div>
          <div className="flex items-center gap-3 text-slate-300 hover:text-brand-purple transition-colors cursor-pointer text-sm">
            <Mail size={16} className="text-brand-purple" />
            <span>david@hunter-llc.dev</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default TitleSlide;