import React, { useState, useEffect } from 'react';
import SlideLayout from '../SlideLayout';
import { Terminal, Shield, CheckCircle, Activity, Play, Server, Lock } from 'lucide-react';

const DemoSlide: React.FC<{ slideNum: number; total: number }> = ({ slideNum, total }) => {
  const [logs, setLogs] = useState<string[]>([]);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const sequence = [
      { text: "> User: Build a SaaS dashboard with user auth, billing...", delay: 500 },
      { text: "[Bear] Routing request >> OVERSEER", delay: 1500 },
      { text: "[Overseer] Plan approved. Delegating >> KAREN (ARCHITECT)", delay: 2500 },
      { text: "[Karen] Blueprint: Next.js 15 + Turso + Stripe", delay: 3500 },
      { text: "[DeX] Generating auth modules...", delay: 4000 },
      { text: "[DeX] Linking API routes...", delay: 4500 },
      { text: "[Shadow] ⚠️ VULNERABILITY DETECTED: SQL Injection", delay: 5500 },
      { text: "[Fixxie] Patching exploit. Sanitizing inputs...", delay: 6500 },
      { text: "[Fixxie] ✅ Security checks passed.", delay: 7500 },
      { text: "🚀 Deploying to Vercel Preview...", delay: 8500 },
      { text: "✨ STATUS: LIVE", delay: 9500 },
    ];

    let timeouts: NodeJS.Timeout[] = [];
    setLogs([]);
    setStage(0);

    sequence.forEach((item, index) => {
      const timeout = setTimeout(() => {
        setLogs(prev => [...prev, item.text]);
        setStage(index);
      }, item.delay);
      timeouts.push(timeout);
    });

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <SlideLayout title="Neural Terminal" subtitle="Real-time Execution Environment" slideNumber={slideNum} totalSlides={total}>
      <div className="flex flex-col h-full gap-4">
        
        {/* Terminal Window */}
        <div className="flex-1 bg-black border border-slate-700 font-mono text-sm relative flex flex-col shadow-2xl">
          {/* Window Header */}
          <div className="bg-slate-900/80 border-b border-slate-700 px-4 py-2 flex items-center justify-between backdrop-blur">
            <div className="flex gap-2">
               <div className="text-[10px] text-slate-500 font-mono">vAi_KERNEL_v1.0.4</div>
            </div>
            <div className="flex items-center gap-4 text-xs">
                <div className="flex items-center gap-1 text-slate-400">
                    <Activity size={12} />
                    <span>IDLE: 12%</span>
                </div>
                <div className="flex items-center gap-1 text-slate-400">
                    <Server size={12} />
                    <span>TURSO: ON</span>
                </div>
            </div>
          </div>

          {/* Logs */}
          <div className="flex-1 p-6 overflow-y-auto space-y-2 font-mono leading-relaxed">
             {logs.map((log, i) => {
                 let style = "text-slate-400 border-l-2 border-transparent pl-2";
                 if (log.includes("> User")) style = "text-white font-bold bg-white/5 border-white pl-2 py-1";
                 if (log.includes("⚠️")) style = "text-red-400 border-red-500 pl-2 bg-red-900/10";
                 if (log.includes("✅") || log.includes("✨")) style = "text-brand-accent border-brand-accent pl-2";
                 if (log.includes("Routing") || log.includes("Delegating")) style = "text-blue-400";
                 
                 return <div key={i} className={`${style} animate-fade-in`}>{log}</div>
             })}
             <div className="animate-pulse text-brand-accent pl-2">_</div>
          </div>
        </div>

        {/* Status Footer Panel */}
        <div className="h-20 bg-slate-900/50 border border-slate-700 flex items-center px-6 gap-8 backdrop-blur-sm">
             <div className="flex flex-col">
                 <span className="text-[10px] text-slate-500 uppercase tracking-widest">Active Process</span>
                 <span className="text-white font-mono">{stage < 10 ? 'BUILDING...' : 'DEPLOYED'}</span>
             </div>
             <div className="h-8 w-px bg-slate-700"></div>
             <div className="flex flex-col">
                 <span className="text-[10px] text-slate-500 uppercase tracking-widest">Security Status</span>
                 <div className="flex items-center gap-2">
                     <Lock size={14} className={stage > 7 ? "text-brand-accent" : "text-yellow-500"} />
                     <span className={stage > 7 ? "text-brand-accent font-mono" : "text-yellow-500 font-mono"}>
                         {stage > 7 ? 'SECURE' : 'SCANNING'}
                     </span>
                 </div>
             </div>
             <div className="flex-1 flex justify-end">
                 <div className="bg-brand-accent/10 border border-brand-accent/50 px-4 py-2 text-brand-accent text-xs font-bold tracking-widest uppercase">
                    Live Demo
                 </div>
             </div>
        </div>

      </div>
    </SlideLayout>
  );
};

export default DemoSlide;