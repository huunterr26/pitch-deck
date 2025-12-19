import React, { useState } from 'react';
import { Mail, Phone, Cpu, Terminal, Zap } from 'lucide-react';

const TitleSlide: React.FC<{ slideNum?: number; total?: number }> = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="h-full w-full flex flex-col justify-between p-8 md:p-12 relative overflow-hidden bg-transparent font-sans">
      
      {/* Background - Static & Subtle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[900px] h-[900px] bg-brand-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px]" />
      </div>

      {/* Top Technical Bar */}
      <div className="flex justify-between items-end border-b border-brand-accent/30 pb-4 z-10">
         <div className="flex flex-col">
            <span className="text-[10px] text-slate-500 font-mono tracking-[0.2em] uppercase mb-1">Classification</span>
            <div className="flex items-center gap-2 text-brand-accent font-mono text-sm tracking-widest bg-brand-accent/10 px-3 py-1 rounded">
               <div className="w-1.5 h-1.5 bg-brand-accent rounded-full"></div>
               INVESTOR_DECK_Q4
            </div>
         </div>
         <div className="text-slate-500 font-mono text-xs hidden md:block">
            ID: vAi-2025-PRE-SEED
         </div>
      </div>

      {/* Main Content - Industrial Layout */}
      <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-12 z-10 relative py-8">

        {/* Left: Typography */}
        <div className="flex-1 text-center md:text-left space-y-6">
             <div className="inline-flex items-center gap-2 text-slate-400 border border-slate-700 rounded-full px-4 py-1 text-xs font-mono mb-4">
                <Cpu size={12} />
                <span>AI-NATIVE ARCHITECTURE</span>
             </div>

             <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight leading-[0.9]">
               The Full-Stack<br/>
               <span className="text-brand-accent font-bold">Builder.</span>
             </h1>

             <p className="text-slate-400 text-xl md:text-2xl font-light max-w-xl leading-relaxed border-l-2 border-brand-accent/50 pl-6">
               Build production-ready apps with <span className="text-white font-semibold">15 AI agents</span> that collaborate in real-time.
             </p>
        </div>

        {/* Right: Static Logo Tile */}
        <div className="flex-1 flex justify-center md:justify-end">
           <div className="relative">
               {/* Tech Borders */}
               <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-brand-accent/50"></div>
               <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-brand-accent/50"></div>
               
               <div className="bg-black/80 backdrop-blur-xl border border-white/10 p-12 md:p-16 shadow-2xl relative z-10 w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
                  {!imageError ? (
                    <img 
                      src="logo.png" 
                      alt="vAi Logo" 
                      className="w-full h-auto object-contain"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center">
                      <h1 className="text-7xl md:text-8xl font-black tracking-tighter text-white">
                        vAi<span className="text-brand-accent">.</span>
                      </h1>
                    </div>
                  )}
               </div>
               
               {/* Decorative floating elements */}
               <div className="absolute top-1/2 -right-12 -translate-y-1/2 flex flex-col gap-2">
                   {[1,2,3].map(i => <div key={i} className="w-1.5 h-1.5 bg-slate-700 rounded-full"></div>)}
               </div>
           </div>
        </div>

      </div>

      {/* Footer / Founder Info */}
      <div className="z-10 grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-brand-accent/20 pt-6">
         {/* Founder */}
         <div className="flex items-center gap-4 group cursor-default">
             <div className="w-10 h-10 bg-brand-accent flex items-center justify-center text-black font-bold text-lg">
                DH
             </div>
             <div>
                <h3 className="text-white font-bold tracking-wide uppercase text-lg group-hover:text-brand-accent transition-colors">David Hunter Jr.</h3>
                <p className="text-slate-500 text-xs font-mono uppercase tracking-wider">Founder</p>
             </div>
         </div>

         {/* Contact Specs */}
         <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-6 font-mono text-sm text-slate-400">
            <div className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail size={16} className="text-brand-accent" /> 
                david@hunter-llc.dev
            </div>
            <div className="hidden md:block w-px h-4 bg-slate-700"></div>
            <div className="flex items-center gap-3">
                <Phone size={16} className="text-brand-accent" /> 
                507-321-9421
            </div>
         </div>
      </div>

    </div>
  );
};

export default TitleSlide;