import React, { useState } from 'react';
import { Mail, Phone } from 'lucide-react';

const ClosingSlide: React.FC<{ slideNum?: number; total?: number }> = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="h-full w-full flex flex-col items-center justify-center text-center relative overflow-hidden bg-black font-sans">
       
       {/* Background Grid */}
       <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

       <div className="z-10 max-w-2xl px-8 relative">
          
          {/* Logo Block */}
          <div className="mb-12">
              {!imageError ? (
                <img 
                  src="logo.png" 
                  alt="vAi Logo" 
                  className="h-24 mx-auto object-contain"
                  onError={() => setImageError(true)}
                />
              ) : (
                <h1 className="text-8xl font-black tracking-tighter text-white mb-2">
                  vAi<span className="text-brand-accent">.</span>
                </h1>
              )}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-50 mt-8"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-light text-white mb-12 flex flex-col md:block items-center gap-4">
            <span>Let's glitch the <span className="font-bold text-brand-accent animate-pulse">matrix</span>...</span>
            <span className="inline-block md:ml-5 transform -rotate-12 mt-4 md:mt-0 origin-center">
                <span className="border-4 border-double border-brand-accent/70 text-brand-accent/90 text-sm md:text-xl font-mono font-black px-4 py-1 tracking-[0.2em] uppercase bg-black/80 shadow-[0_0_20px_rgba(0,255,0,0.15)] hover:scale-110 transition-transform cursor-default select-none backdrop-blur-sm">
                  TOGETHER
                </span>
            </span>
          </h2>
          
          {/* Contact Module */}
          <div className="border border-slate-800 bg-black/80 p-8 backdrop-blur relative group hover:border-brand-accent/50 transition-colors">
             <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-brand-accent"></div>
             <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-brand-accent"></div>
             <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-brand-accent"></div>
             <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-brand-accent"></div>

             <h3 className="text-white font-bold text-2xl tracking-wide mb-4">David Hunter Jr.</h3>
             
             <div className="flex flex-col gap-3 items-center text-slate-300 font-mono text-sm">
                 <div className="flex items-center gap-2 hover:text-brand-accent transition-colors cursor-pointer">
                     <Mail size={16} />
                     <span>david@hunter-llc.dev</span>
                 </div>
                 <div className="flex items-center gap-2">
                     <Phone size={16} />
                     <span>507-321-9421</span>
                     <span className="text-slate-700">|</span>
                     <span>315-503-8372</span>
                 </div>
             </div>
          </div>

          <div className="mt-12 text-[10px] font-mono text-slate-600 uppercase tracking-[0.3em]">
             End of Transmission // Q4 2025
          </div>
       </div>
    </div>
  );
};

export default ClosingSlide;