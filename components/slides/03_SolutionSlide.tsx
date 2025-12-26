import React from 'react';
import SlideLayout from '../SlideLayout';
import { Sparkles, Terminal, Code2, ShieldCheck, Rocket, Layout, Globe, Box } from 'lucide-react';

const SolutionSlide: React.FC<{ slideNum: number; total: number }> = ({ slideNum, total }) => {
  const highlights = [
    {
      icon: <Sparkles className="w-5 h-5 text-brand-accent" />,
      title: "Natural Language to Code",
      desc: "Describe your app in plain English. Our AI architects design and build it instantly."
    },
    {
      icon: <Box className="w-5 h-5 text-brand-purple" />,
      title: "Full-Stack Generation",
      desc: "Frontend, backend, database schema, and REST APIs — all generated in sync."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-brand-accent" />,
      title: "Built-in Security",
      desc: "Automated vulnerability scanning and one-click fixes for enterprise-grade safety."
    },
    {
      icon: <Terminal className="w-5 h-5 text-brand-purple" />,
      title: "Real Dev Environment",
      desc: "Actual Node.js runtime in the browser. Install npm packages and run live builds."
    },
    {
      icon: <Code2 className="w-5 h-5 text-brand-accent" />,
      title: "Export Everything",
      desc: "No vendor lock-in. Export clean, production-ready React and TypeScript code."
    }
  ];

  return (
    <SlideLayout title="The Solution" subtitle="Ghost.OS.X: The Future of Creation" slideNumber={slideNum} totalSlides={total}>
      <div className="flex flex-col md:flex-row gap-12 h-full">

        {/* Left Panel: Bullet Highlights */}
        <div className="flex-1 flex flex-col justify-center gap-4">
          <div className="mb-6">
            <h3 className="text-3xl font-bold text-white mb-4">AI-Native Application Builder</h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              We've eliminated the gap between imagination and deployment. Tell Ghost what you want, and watch it build.
            </p>
          </div>

          <div className="space-y-3">
            {highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-accent/30 transition-all hover:bg-white/10 group">
                <div className="p-2 bg-black/40 rounded-lg">
                  {h.icon}
                </div>
                <div>
                  <h4 className="font-bold text-white group-hover:text-brand-accent transition-colors">{h.title}</h4>
                  <p className="text-slate-400 text-sm leading-snug">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel: Value Prop Visual */}
        <div className="flex-1 flex flex-col justify-center relative">
          <div className="absolute inset-0 bg-brand-accent/5 rounded-3xl blur-3xl"></div>

          <div className="relative bg-black/60 backdrop-blur-xl border border-white/10 p-8 rounded-3xl overflow-hidden shadow-2xl group">
            {/* Grok Subsurface Integration */}
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-1000 -z-10">
              <img
                src="/grok_image_xy0ow5x.jpg"
                alt="Solution Visual"
                className="w-full h-full object-cover scale-125 group-hover:scale-110 transition-transform duration-[3000ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black via-black/40 to-black"></div>
            </div>

            <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <div className="text-[10px] font-mono text-slate-500 ml-4">GHOST_SESSION // LIVE_BUILD // Q1_2026</div>
            </div>

            <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl group/img">
              <img
                src="/ghost-session-active.png"
                alt="Ghost Session Active"
                className="w-full h-auto object-cover opacity-90 group-hover/img:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

              {/* Animated Scanner Effect */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-accent/50 blur-[2px] animate-[slide-down_4s_linear_infinite] opacity-0 group-hover/img:opacity-100 transition-opacity"></div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex justify-between items-center text-[10px] font-mono text-slate-500">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1"><Rocket size={10} className="text-brand-accent" /> SYSTEM_DEPOLYED</span>
                <span className="flex items-center gap-1 text-brand-purple"><ShieldCheck size={10} /> NEURAL_LOCKED</span>
              </div>
              <span className="text-brand-accent/50 animate-pulse">TERMINAL_ACTIVE...</span>
            </div>
          </div>
        </div>

      </div>
    </SlideLayout>
  );
};

export default SolutionSlide;