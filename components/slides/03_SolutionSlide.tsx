import React from 'react';
import SlideLayout from '../SlideLayout';
import { Users, Terminal, LayoutTemplate, ShieldCheck, Rocket, ChevronRight } from 'lucide-react';

const SolutionSlide: React.FC<{ slideNum: number; total: number }> = ({ slideNum, total }) => {
  const modules = [
    {
      icon: <Users className="w-5 h-5" />,
      title: "MULTI_AGENT_CORE",
      desc: "15 specialized AI agents (Architect, Builder, Security) collaborating."
    },
    {
      icon: <Terminal className="w-5 h-5" />,
      title: "NEURAL_TERMINAL",
      desc: "Real-time transparent inter-agent communication protocols."
    },
    {
      icon: <LayoutTemplate className="w-5 h-5" />,
      title: "VISUAL_CANVAS",
      desc: "Drag-and-drop interface outputting clean, exportable React code."
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "SECURITY_PROTOCOL",
      desc: "Automated vulnerability scanning and pen-testing by 'Shadow' agent."
    },
    {
      icon: <Rocket className="w-5 h-5" />,
      title: "DEPLOY_PIPELINE",
      desc: "One-click ship to Vercel/AWS with full CI/CD generation."
    }
  ];

  return (
    <SlideLayout title="Solution Architecture" subtitle="vAi™ Operating System" slideNumber={slideNum} totalSlides={total}>
      <div className="flex flex-col md:flex-row gap-8 h-full">
        
        {/* Left Panel: Modules */}
        <div className="w-full md:w-3/5 flex flex-col gap-3">
          {modules.map((m, i) => (
            <div key={i} className="flex items-center gap-4 p-4 border border-slate-800 bg-black/40 hover:border-brand-accent transition-all group">
               <div className="w-10 h-10 flex items-center justify-center bg-slate-900 border border-slate-700 group-hover:bg-brand-accent group-hover:text-black group-hover:border-brand-accent transition-colors text-brand-accent">
                  {m.icon}
               </div>
               <div>
                  <h3 className="font-mono text-brand-accent font-bold text-lg group-hover:text-white transition-colors">{m.title}</h3>
                  <p className="text-slate-400 text-sm leading-tight">{m.desc}</p>
               </div>
            </div>
          ))}
        </div>

        {/* Right Panel: Output Logic */}
        <div className="w-full md:w-2/5 flex flex-col h-full border border-brand-accent/20 bg-brand-accent/5 relative">
            {/* Tech markers */}
            <div className="absolute top-0 right-0 p-2 text-[10px] font-mono text-brand-accent opacity-50">SYS_OUT</div>
            
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-8">
                
                <div className="space-y-2">
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-widest">Input</div>
                    <div className="p-4 border border-dashed border-slate-600 bg-black/50 text-white italic">
                        "Build a SaaS dashboard..."
                    </div>
                </div>

                <div className="flex flex-col items-center text-brand-accent gap-1 animate-pulse">
                    <div className="h-8 w-px bg-brand-accent"></div>
                    <ChevronRight className="rotate-90" />
                </div>

                <div className="space-y-2 w-full">
                    <div className="text-xs font-mono text-brand-accent uppercase tracking-widest">Output</div>
                    <div className="p-1 border border-brand-accent bg-black relative shadow-[0_0_20px_rgba(0,255,0,0.1)]">
                         <div className="absolute -top-1 -left-1 w-2 h-2 bg-brand-accent"></div>
                         <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-brand-accent"></div>
                         <div className="h-24 bg-slate-900 flex items-center justify-center">
                            <span className="font-bold text-white text-xl">Production App</span>
                         </div>
                    </div>
                    <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
                        <span>DB: CONNECTED</span>
                        <span>API: LIVE</span>
                        <span>SECURE: TRUE</span>
                    </div>
                </div>

            </div>
        </div>

      </div>
    </SlideLayout>
  );
};

export default SolutionSlide;