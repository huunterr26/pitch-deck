import React, { useState } from 'react';
import SlideLayout from '../SlideLayout';
import { Network, Eye, Bot, Shield, Database, Server, FileText, Globe, User, Rocket, ArrowDown } from 'lucide-react';

// Types for the layout
type AgentType = 'core' | 'build' | 'security' | 'design' | 'ops' | 'user' | 'prod';

interface AgentNodeProps {
  id: string;
  name: string;
  role: string;
  icon: React.ReactNode;
  type: AgentType;
  x: string; // Percentage 
  y: string; // Percentage
  onNodeHover: (id: string | null) => void;
  isDimmed: boolean;
  isOverseer?: boolean;
  isUser?: boolean;
  isActiveStep?: boolean;
}

const AgentNode: React.FC<AgentNodeProps> = ({ id, name, role, icon, type, x, y, onNodeHover, isDimmed, isOverseer, isUser, isActiveStep }) => {
  const isCore = type === 'core';
  const isSpecial = isUser || type === 'prod';
  
  // Dynamic styles based on type
  const styles = {
    core: 'border-brand-accent bg-black text-brand-accent shadow-[0_0_15px_rgba(0,255,0,0.15)]',
    build: 'border-blue-500/30 bg-blue-950/30 text-blue-400',
    security: 'border-red-500/30 bg-red-950/30 text-red-400',
    design: 'border-purple-500/30 bg-purple-950/30 text-purple-400',
    ops: 'border-orange-500/30 bg-orange-950/30 text-orange-400',
    user: 'border-white/50 bg-white/10 text-white',
    prod: 'border-brand-accent bg-brand-accent/20 text-brand-accent',
  };

  const overseerStyle = isOverseer ? 'ring-1 ring-brand-accent/50 scale-110 z-50 bg-black shadow-[0_0_30px_rgba(0,255,0,0.2)]' : '';
  const activeStepStyle = isActiveStep ? 'ring-1 ring-brand-accent shadow-[0_0_15px_#00ff00] scale-105 bg-black z-50 border-brand-accent' : '';

  return (
    <div 
      className={`absolute flex flex-col items-center justify-center transition-all duration-300 cursor-default z-20 group
        ${isDimmed ? 'opacity-20 scale-90 grayscale blur-[1px]' : 'opacity-100 scale-100'}
      `}
      style={{ left: x, top: y, transform: 'translate(-50%, -50%)' }}
      onMouseEnter={() => onNodeHover(id)}
      onMouseLeave={() => onNodeHover(null)}
    >
      {/* Connector Dot */}
      {!isSpecial && <div className={`absolute inset-0 m-auto w-1 h-1 rounded-full z-[-1] ${isCore ? 'bg-brand-accent shadow-[0_0_5px_#00ff00]' : 'bg-slate-500'}`}></div>}

      {/* Card */}
      <div className={`
        relative flex flex-col items-center justify-center border backdrop-blur-sm transition-all duration-300
        ${isUser ? 'p-2 rounded-full border-white/40' : 'p-2'}
        ${type === 'prod' ? 'w-32 h-12 flex-row gap-3 rounded-lg border-brand-accent' : ''}
        ${!isUser && !isSpecial && isCore ? 'w-28 md:w-32 rounded-lg min-h-[60px]' : ''}
        ${!isUser && !isSpecial && !isCore ? 'w-20 md:w-24 rounded-md min-h-[50px] hover:border-white/20' : ''}
        ${styles[type]}
        ${overseerStyle}
        ${activeStepStyle}
      `}>
         {/* Tech Corners - minimalistic */}
         {!isUser && !isSpecial && (
            <>
                <div className="absolute top-0 left-0 w-0.5 h-0.5 bg-current opacity-50"></div>
                <div className="absolute top-0 right-0 w-0.5 h-0.5 bg-current opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-0.5 h-0.5 bg-current opacity-50"></div>
                <div className="absolute bottom-0 right-0 w-0.5 h-0.5 bg-current opacity-50"></div>
            </>
         )}

         <div className={`${type === 'prod' ? 'order-1' : 'mb-1 transform scale-75'}`}>{icon}</div>
         
         <div className={`${type === 'prod' ? 'text-left' : 'text-center'}`}>
             {!isUser && <div className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-white leading-none mb-0.5">{name}</div>}
             {!isUser && <div className="text-[5px] md:text-[6px] font-mono opacity-70 uppercase tracking-widest leading-none">{role}</div>}
         </div>
      </div>
      {isUser && <div className="mt-2 text-[9px] font-mono text-slate-400 uppercase tracking-widest">USER_INPUT</div>}
    </div>
  );
};

// Laser Path Component - RAZOR THIN
const LaserPath: React.FC<{ start: {x: number, y: number}, end: {x: number, y: number}, active: boolean, dimmed: boolean, dashed?: boolean }> = ({ start, end, active, dimmed, dashed }) => {
  const pathData = `M ${start.x} ${start.y} L ${end.x} ${end.y}`;

  // Colors
  const activeColor = "#00ff00";
  const idleColor = "#00ff00"; 
  const dimmedColor = "#1e293b"; // Slate-800

  return (
    <g className="pointer-events-none transition-all duration-300">
      {/* Glow - Significantly reduced spread for "tight" look */}
      <path 
        d={pathData} 
        fill="none" 
        stroke={activeColor} 
        strokeWidth={active ? "2" : "0"} 
        strokeOpacity={active ? "0.3" : "0"}
        filter="url(#laser-glow-tight)"
        className="transition-all duration-300"
      />
      
      {/* Core Beam - 1px Active, 0.5px Idle */}
      <path 
        d={pathData} 
        fill="none" 
        stroke={active ? activeColor : (dimmed ? dimmedColor : idleColor)} 
        strokeWidth={active ? "1" : "0.5"} 
        strokeOpacity={active ? "1" : (dimmed ? "0.1" : "0.3")}
        strokeDasharray={dashed ? "2 2" : ""}
        className="transition-all duration-300"
      />
    </g>
  );
};

// Flow Definition
const FLOW_STEPS = [
  { id: 1, label: "User Input >> Bear", nodes: ['user', 'bear'] },
  { id: 2, label: "Bear <> Overseer Strategy", nodes: ['bear', 'overseer'] },
  { id: 3, label: "Bear >> Delegation Swarm", nodes: ['bear', 'karen', 'webgen', 'dex', 'shadow', 'hive'] },
  { id: 4, label: "Agents >> Overseer Report", nodes: ['karen', 'webgen', 'dex', 'shadow', 'hive', 'overseer'] },
  { id: 5, label: "DeX >> Production", nodes: ['dex', 'prod'] },
];

const AgentSystemSlide: React.FC<{ slideNum: number; total: number }> = ({ slideNum, total }) => {
  const [activeSteps, setActiveSteps] = useState<number[]>([]);

  // Layout Configuration
  const userPos = { x: 50, y: 8 };
  const bearPos = { x: 40, y: 28 };
  const overseerPos = { x: 60, y: 28 };
  
  const nodes = [
    { id: 'user', type: 'user', x: 50, y: 8, name: 'User', role: 'Input', icon: <User/> },
    { id: 'bear', type: 'core', x: 40, y: 28, name: 'Bear', role: 'ORCHESTRATOR', icon: <Network/> },
    { id: 'overseer', type: 'core', x: 60, y: 28, name: 'Overseer', role: 'SUPERVISOR', icon: <Eye/> },
    
    // Worker Row
    { id: 'karen', type: 'build', x: 15, y: 58, name: 'Karen', role: 'ARCHITECT', icon: <FileText/> },
    { id: 'webgen', type: 'design', x: 32, y: 58, name: 'WebGen', role: 'DESIGNER', icon: <Globe/> },
    { id: 'dex', type: 'build', x: 50, y: 75, name: 'DeX', role: 'BUILDER', icon: <Bot/> }, 
    { id: 'shadow', type: 'security', x: 68, y: 58, name: 'Shadow', role: 'SECURITY', icon: <Shield/> },
    { id: 'hive', type: 'ops', x: 85, y: 58, name: 'Hive', role: 'BACKEND', icon: <Database/> },

    // Output
    { id: 'prod', type: 'prod', x: 50, y: 92, name: 'Production', role: 'DEPLOYMENT', icon: <Rocket/> },
  ] as const;

  const agents = nodes.filter(n => ['build', 'design', 'security', 'ops'].includes(n.type));

  // Connections with Step mapping
  const connections = [
      // 1. User -> Bear
      { start: userPos, end: bearPos, steps: [1], dashed: false },
      
      // 2. Control Loop (Bear <-> Overseer)
      { start: bearPos, end: overseerPos, steps: [2], dashed: false },

      // 3. Bear -> Agents (Delegation)
      ...agents.map(a => ({
          start: bearPos,
          end: { x: a.x, y: a.y },
          steps: [3],
          dashed: false
      })),

      // 4. Agents -> Overseer (Reporting)
      ...agents.map(a => ({
          start: { x: a.x, y: a.y },
          end: overseerPos,
          steps: [4],
          dashed: true
      })),

      // 5. DeX -> Production
      { start: { x: 50, y: 75 }, end: { x: 50, y: 92 }, steps: [5], dashed: false },
  ];

  const handleNodeHover = (nodeId: string | null) => {
    if (!nodeId) {
        setActiveSteps([]);
        return;
    }
    // Find all steps this node participates in
    const relevantSteps = FLOW_STEPS.filter(step => step.nodes.includes(nodeId)).map(s => s.id);
    setActiveSteps(relevantSteps);
  };

  const handleStepHover = (stepId: number | null) => {
    if (stepId === null) {
        setActiveSteps([]);
    } else {
        setActiveSteps([stepId]);
    }
  };

  return (
    <SlideLayout title="Agent Topology" subtitle="Two-Layer Control System" slideNumber={slideNum} totalSlides={total}>
      <div className="relative w-full h-full flex flex-col font-sans">
        
        {/* SVG Layer for Laser Connections */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
           <defs>
             {/* Tighter Glow Filter */}
             <filter id="laser-glow-tight" x="-50%" y="-50%" width="200%" height="200%">
               <feGaussianBlur stdDeviation="0.8" result="coloredBlur"/>
               <feMerge>
                 <feMergeNode in="coloredBlur"/>
                 <feMergeNode in="SourceGraphic"/>
               </feMerge>
             </filter>
           </defs>
           
           {connections.map((conn, i) => {
             // A connection is active if ANY of its steps are currently active
             const isStepActive = activeSteps.some(s => conn.steps.includes(s));
             // Dim if something is selected but this isn't it
             const isDimmed = activeSteps.length > 0 && !isStepActive;

             return (
                <LaserPath 
                  key={i} 
                  start={conn.start} 
                  end={conn.end} 
                  active={isStepActive}
                  dimmed={isDimmed}
                  dashed={conn.dashed}
                />
             );
           })}
        </svg>

        {/* NODES LAYER */}
        <div className="relative z-20 w-full h-full">
            
            {/* Control Layer Label */}
            <div className={`absolute top-[28%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[15%] border border-slate-800/50 rounded-xl pointer-events-none transition-opacity duration-300 ${activeSteps.length > 0 ? 'opacity-10' : 'opacity-100'}`}></div>
            <div className={`absolute top-[22%] left-1/2 -translate-x-1/2 text-[8px] font-mono text-slate-600 uppercase tracking-[0.3em] transition-opacity duration-300 ${activeSteps.length > 0 ? 'opacity-0' : 'opacity-100'}`}>Control Layer</div>

            {/* Worker Layer Label */}
            <div className={`absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[35%] border border-slate-800/50 rounded-xl pointer-events-none transition-opacity duration-300 ${activeSteps.length > 0 ? 'opacity-10' : 'opacity-100'}`}></div>
            <div className={`absolute top-[50%] left-1/2 -translate-x-1/2 text-[8px] font-mono text-slate-600 uppercase tracking-[0.3em] transition-opacity duration-300 ${activeSteps.length > 0 ? 'opacity-0' : 'opacity-100'}`}>Worker Swarm</div>

            {nodes.map((node) => {
                 // Node is active if it belongs to ANY active step
                 const isInActiveStep = activeSteps.length > 0 && FLOW_STEPS.some(s => activeSteps.includes(s.id) && s.nodes.includes(node.id));
                 
                 // Dimming logic: Dim if something is selected but this node is NOT in it
                 const isDimmed = activeSteps.length > 0 && !isInActiveStep;

                 return (
                   <AgentNode 
                      key={node.id}
                      id={node.id}
                      name={node.name} 
                      role={node.role} 
                      icon={React.cloneElement(node.icon as React.ReactElement<{ size?: number | string }>, { size: node.type === 'user' ? 24 : node.type === 'prod' ? 20 : 16 })} 
                      type={node.type as AgentType} 
                      x={`${node.x}%`} 
                      y={`${node.y}%`} 
                      onNodeHover={handleNodeHover}
                      isDimmed={isDimmed}
                      isOverseer={node.name === 'Overseer'}
                      isUser={node.type === 'user'}
                      isActiveStep={!!isInActiveStep}
                   />
                 );
            })}
        </div>

        {/* Interactive Legend - Protocol Flow */}
        <div className="absolute top-0 right-0 p-4 w-64 text-right z-30">
             <div className="text-[8px] font-mono text-slate-500 uppercase tracking-widest mb-3 border-b border-slate-800 pb-1">Validation Protocol</div>
             <div className="flex flex-col gap-2 font-mono text-[9px]">
                 {FLOW_STEPS.map((step) => {
                     const isActive = activeSteps.includes(step.id);
                     // If we are hovering a node (activeSteps has length) and this step is NOT in it, fade it out
                     const isDimmed = activeSteps.length > 0 && !isActive;

                     return (
                         <div 
                            key={step.id}
                            className={`flex items-center justify-end gap-3 cursor-pointer transition-all duration-300 p-2 rounded-md border border-transparent 
                                ${isActive ? 'bg-brand-accent/10 border-brand-accent/20 translate-x-[-4px]' : ''}
                                ${isDimmed ? 'opacity-20' : 'opacity-60 hover:opacity-100'}
                            `}
                            onMouseEnter={() => handleStepHover(step.id)}
                            onMouseLeave={() => handleStepHover(null)}
                         >
                             <span className={`transition-colors uppercase ${isActive ? 'text-brand-accent font-bold tracking-widest' : 'text-slate-400'}`}>
                                 {step.id}. {step.label}
                             </span>
                             <div className={`w-2 h-2 rounded-full transition-all ${isActive ? 'bg-brand-accent shadow-[0_0_8px_#00ff00] scale-125' : 'bg-slate-700'}`}></div>
                         </div>
                     )
                 })}
             </div>
        </div>

      </div>
    </SlideLayout>
  );
};

export default AgentSystemSlide;