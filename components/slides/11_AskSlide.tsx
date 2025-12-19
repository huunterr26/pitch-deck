import React from 'react';
import SlideLayout from '../SlideLayout';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { ASK_ALLOCATION } from '../../constants';
import { TrendingUp, Users, Rocket } from 'lucide-react';

const AskSlide: React.FC<{ slideNum: number; total: number }> = ({ slideNum, total }) => {
  return (
    <SlideLayout title="Capital Requirement" subtitle="Pre-Seed Allocation" slideNumber={slideNum} totalSlides={total}>
      <div className="flex flex-col items-center justify-center h-full">
         
         <div className="flex flex-col md:flex-row gap-12 items-center w-full max-w-5xl">
             
             {/* Left: The Number */}
             <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="text-[10px] font-mono text-brand-accent uppercase tracking-[0.2em] mb-2">Total Request</div>
                  <h2 className="text-8xl md:text-9xl font-black text-white tracking-tighter leading-none mb-4">$1M</h2>
                  <div className="px-4 py-1 bg-white text-black font-bold font-mono text-sm uppercase">Pre-Seed Round</div>
             </div>

             {/* Middle: Chart */}
             <div className="w-full md:w-1/3 h-[250px] relative">
                  <ResponsiveContainer width="100%" height="100%">
                     <PieChart>
                        <Pie
                          data={ASK_ALLOCATION}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={5}
                          dataKey="value"
                          stroke="none"
                        >
                          {ASK_ALLOCATION.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={index === 0 ? '#00ff00' : index === 1 ? '#ffffff' : '#333333'} />
                          ))}
                        </Pie>
                        <Tooltip contentStyle={{backgroundColor: '#000', borderColor: '#333'}} />
                     </PieChart>
                  </ResponsiveContainer>
                  {/* Chart Center Label */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                      <div className="text-xs font-mono text-slate-500">USE OF</div>
                      <div className="text-white font-bold">FUNDS</div>
                  </div>
             </div>

             {/* Right: Milestones */}
             <div className="w-full md:w-1/3 space-y-6">
                 <div className="border-l-2 border-brand-accent pl-4">
                     <div className="text-xs font-mono text-slate-500 mb-1">TARGET 01</div>
                     <div className="text-white font-bold text-xl">2,500 Users</div>
                     <div className="text-slate-400 text-sm">Paying Customer Base</div>
                 </div>
                 <div className="border-l-2 border-white pl-4">
                     <div className="text-xs font-mono text-slate-500 mb-1">TARGET 02</div>
                     <div className="text-white font-bold text-xl">$250k ARR</div>
                     <div className="text-slate-400 text-sm">Run Rate</div>
                 </div>
                 <div className="border-l-2 border-slate-700 pl-4">
                     <div className="text-xs font-mono text-slate-500 mb-1">TARGET 03</div>
                     <div className="text-white font-bold text-xl">Series A</div>
                     <div className="text-slate-400 text-sm">Ready by Q4 2026</div>
                 </div>
             </div>

         </div>

      </div>
    </SlideLayout>
  );
};

export default AskSlide;