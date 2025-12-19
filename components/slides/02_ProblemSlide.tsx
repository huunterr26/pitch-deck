import React from 'react';
import SlideLayout from '../SlideLayout';
import { XCircle, AlertTriangle, ShieldAlert, Clock, Terminal } from 'lucide-react';

const ProblemSlide: React.FC<{ slideNum: number; total: number }> = ({ slideNum, total }) => {
  const problems = [
    {
      id: "ERR_01",
      icon: <Clock className="w-6 h-6 text-red-500" />,
      title: "LATENCY_CRITICAL",
      subtitle: "Slow Development",
      desc: "Founders can't build real apps without $50k+ and 3-6 months."
    },
    {
      id: "ERR_02",
      icon: <XCircle className="w-6 h-6 text-red-500" />,
      title: "FUNCTIONALITY_LIMITED",
      subtitle: "No-Code Toys",
      desc: "Existing tools build prototypes, not scalable production software."
    },
    {
      id: "ERR_03",
      icon: <AlertTriangle className="w-6 h-6 text-orange-500" />,
      title: "SKILL_GAP",
      subtitle: "Partial Assistance",
      desc: "Copilots help devs but don't replace the need for deep tech skills."
    },
    {
      id: "ERR_04",
      icon: <ShieldAlert className="w-6 h-6 text-red-500" />,
      title: "SECURITY_BREACH",
      subtitle: "Vulnerabilities",
      desc: "No-code apps ship with critical exploits. Security is ignored."
    }
  ];

  return (
    <SlideLayout title="System Diagnostics" subtitle="Current Market Failures" slideNumber={slideNum} totalSlides={total}>
      <div className="flex flex-col h-full gap-6">
        
        {/* Error Log Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {problems.map((p, idx) => (
                <div key={idx} className="bg-black/40 border border-red-500/30 p-4 flex gap-4 items-start hover:bg-red-900/10 transition-colors group">
                    <div className="font-mono text-xs text-red-500/70 pt-1">{p.id}</div>
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                            {p.icon}
                            <h3 className="text-lg font-bold text-white tracking-wider">{p.title}</h3>
                        </div>
                        <div className="text-brand-accent text-sm font-mono mb-2 uppercase tracking-widest opacity-80">> {p.subtitle}</div>
                        <p className="text-slate-400 text-sm leading-relaxed border-l border-red-500/20 pl-3">
                            {p.desc}
                        </p>
                    </div>
                </div>
            ))}
        </div>

        {/* Critical Failure Banner */}
        <div className="mt-auto border border-red-500 bg-red-950/20 p-6 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,0,0,0.05)_10px,rgba(255,0,0,0.05)_20px)] pointer-events-none"></div>
            
            <div className="relative">
                <div className="text-6xl md:text-8xl font-black text-red-500 tracking-tighter opacity-80">70%</div>
                <div className="text-red-400 font-mono text-xs uppercase tracking-[0.3em] absolute -bottom-4 w-full text-center">Failure Rate</div>
            </div>
            
            <div className="flex-1 border-l border-red-500/50 pl-6">
                <div className="flex items-center gap-2 text-red-500 font-mono mb-2">
                    <Terminal size={16} />
                    <span>SYSTEM_ALERT</span>
                </div>
                <p className="text-xl md:text-2xl text-white font-light">
                    Majority of early-stage startups fail due to product delays and excessive development costs.
                </p>
            </div>
        </div>

      </div>
    </SlideLayout>
  );
};

export default ProblemSlide;