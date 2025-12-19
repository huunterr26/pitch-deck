import React from 'react';

interface SlideLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  slideNumber: number;
  totalSlides: number;
}

const SlideLayout: React.FC<SlideLayoutProps> = ({ title, subtitle, children, slideNumber }) => {
  return (
    <div className="h-full w-full flex flex-col p-6 md:p-10 relative overflow-hidden bg-transparent text-white font-sans selection:bg-brand-accent/30">
      
      {/* Background Grid & decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
          {/* Subtle Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          
          {/* Corner Brackets */}
          <div className="absolute top-8 left-8 w-8 h-8 border-t border-l border-brand-accent/50"></div>
          <div className="absolute top-8 right-8 w-8 h-8 border-t border-r border-brand-accent/50"></div>
          <div className="absolute bottom-8 left-8 w-8 h-8 border-b border-l border-brand-accent/50"></div>
          <div className="absolute bottom-8 right-8 w-8 h-8 border-b border-r border-brand-accent/50"></div>
      </div>

      {/* Top Technical Header */}
      <div className="flex justify-between items-end border-b border-brand-accent/30 pb-4 mb-6 z-10 shrink-0">
         <div className="flex flex-col">
            <span className="text-[10px] text-slate-500 font-mono tracking-[0.2em] uppercase mb-1">Module {slideNumber < 10 ? `0${slideNumber}` : slideNumber}</span>
            <h1 className="text-3xl md:text-5xl font-medium tracking-tight text-white uppercase leading-none">
              {title}
            </h1>
         </div>
         <div className="flex flex-col items-end">
             {subtitle && (
                <div className="flex items-center gap-2 text-brand-accent font-mono text-xs md:text-sm tracking-widest bg-brand-accent/10 px-3 py-1 rounded-sm border border-brand-accent/20">
                    <span className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-pulse"></span>
                    {subtitle.toUpperCase()}
                </div>
             )}
         </div>
      </div>

      {/* Content Container */}
      <div className="flex-1 overflow-hidden z-10 relative flex flex-col">
        {children}
      </div>
    </div>
  );
};

export default SlideLayout;