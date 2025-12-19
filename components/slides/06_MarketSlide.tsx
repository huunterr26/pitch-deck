import React from 'react';
import SlideLayout from '../SlideLayout';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, LabelList } from 'recharts';
import { MARKET_DATA } from '../../constants';

const MarketSlide: React.FC<{ slideNum: number; total: number }> = ({ slideNum, total }) => {
  return (
    <SlideLayout title="Market Analysis" subtitle="Opportunity Vector" slideNumber={slideNum} totalSlides={total}>
      <div className="flex flex-col md:flex-row gap-12 h-full">
        
        {/* Chart Section */}
        <div className="w-full md:w-1/2 flex flex-col border border-slate-800 bg-black/40 p-6 relative">
             <div className="absolute top-0 right-0 p-2 text-[10px] font-mono text-brand-accent">FIG_01: TAM_GROWTH</div>
             
             <div className="flex-1 w-full min-h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={MARKET_DATA} margin={{ top: 40, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="name" stroke="#64748b" tick={{ fill: '#94a3b8', fontFamily: 'monospace' }} axisLine={{ stroke: '#334155' }} tickLine={false} />
                    <YAxis stroke="#64748b" tickFormatter={(value) => `${value}B`} tick={{ fill: '#94a3b8', fontFamily: 'monospace' }} axisLine={false} tickLine={false} />
                    <Bar dataKey="value">
                      {MARKET_DATA.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index === 0 ? '#00ff00' : index === 1 ? '#ffffff' : '#333333'} />
                      ))}
                      <LabelList dataKey="value" position="top" formatter={(val: number) => `$${val}B`} fill="#fff" fontSize={14} fontFamily="monospace" offset={10} />
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
             </div>

             <div className="flex justify-between mt-4 text-[10px] font-mono text-slate-500 uppercase">
                {MARKET_DATA.map((d, i) => (
                   <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2" style={{backgroundColor: i === 0 ? '#00ff00' : i === 1 ? '#ffffff' : '#333333'}}></div>
                      <span>{d.name}</span>
                   </div>
                ))}
             </div>
        </div>

        {/* Text Data Stream */}
        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6">
           <div className="space-y-1">
               <div className="text-[10px] font-mono text-brand-accent uppercase tracking-widest mb-1">/// DRIVER 01</div>
               <h3 className="text-xl font-bold text-white">Post-ChatGPT Expectation</h3>
               <p className="text-slate-400 font-light border-l-2 border-slate-700 pl-4">Users now demand autonomous execution, not just chat interfaces.</p>
           </div>
           
           <div className="space-y-1">
               <div className="text-[10px] font-mono text-white uppercase tracking-widest mb-1">/// DRIVER 02</div>
               <h3 className="text-xl font-bold text-white">Resource Scarcity</h3>
               <p className="text-slate-400 font-light border-l-2 border-slate-700 pl-4">1M+ unfilled developer roles create a critical bottleneck for innovation.</p>
           </div>

           <div className="space-y-1">
               <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">/// DRIVER 03</div>
               <h3 className="text-xl font-bold text-white">Enterprise Shift</h3>
               <p className="text-slate-400 font-light border-l-2 border-slate-700 pl-4">Gartner projects 70% of new enterprise applications will use low-code by 2027.</p>
           </div>
        </div>

      </div>
    </SlideLayout>
  );
};

export default MarketSlide;