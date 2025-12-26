import React from 'react';
import AnimatedLogo from './AnimatedLogo';

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

      {/* Background - Premium Ethereal Feel */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle Glows */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-brand-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-brand-purple/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>

        {/* Clean Decorative Brackets */}
        <div className="absolute top-8 left-8 w-6 h-6 border-t border-l border-white/10 rounded-tl-xl transition-all hover:border-brand-accent/40"></div>
        <div className="absolute top-8 right-8 w-6 h-6 border-t border-r border-white/10 rounded-tr-xl"></div>
        <div className="absolute bottom-8 left-8 w-6 h-6 border-b border-l border-white/10 rounded-bl-xl"></div>
        <div className="absolute bottom-8 right-8 w-6 h-6 border-b border-r border-white/10 rounded-br-xl"></div>
      </div>


      {/* Logo Placeholder - Top Right */}
      <div className="absolute top-8 right-12 z-20 opacity-40 hover:opacity-100 transition-all scale-75 md:scale-90">
        <AnimatedLogo className="h-8 md:h-10 w-auto" />
      </div>

      {/* Header Section */}
      <div className="flex justify-between items-end border-b border-white/10 pb-6 mb-8 z-10 shrink-0">
        <div className="flex flex-col">
          <span className="text-[10px] text-slate-500 font-mono tracking-[0.3em] uppercase mb-2">Section {slideNumber < 10 ? `0${slideNumber}` : slideNumber}</span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-none">
            {title}
          </h1>
        </div>
        <div className="flex flex-col items-end">
          {subtitle && (
            <div className="flex items-center gap-3 text-brand-accent font-mono text-xs md:text-sm tracking-[0.15em] bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
              <span>GHOST-OS-X.AI</span>
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