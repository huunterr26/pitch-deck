import React from 'react';
import SlideLayout from '../SlideLayout';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, LabelList } from 'recharts';

const MARKET_DATA = [
  { name: 'SOM', value: 2, desc: '$2B AI No-Code Builders' },
  { name: 'SAM', value: 45, desc: '$45B AI-Enhanced Tools' },
  { name: 'TAM', value: 500, desc: '$500B Global App Market' },
];

const MarketSlide: React.FC<{ slideNum: number; total: number }> = ({ slideNum, total }) => {
  return (
    <SlideLayout title="Market Opportunity" subtitle="Capitalizing on the AI Shift" slideNumber={slideNum} totalSlides={total}>
      <div className="flex flex-col md:flex-row gap-16 h-full items-center">

        {/* Chart Section */}
        <div className="flex-1 w-full h-[400px] bg-black/40 backdrop-blur-xl border border-white/10 p-8 rounded-3xl relative">
          <div className="absolute top-4 right-8 text-[10px] font-mono text-brand-accent uppercase tracking-widest opacity-50">Market // TAM_VECTOR</div>

          <div className="h-full w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={MARKET_DATA} margin={{ top: 60, right: 30, left: 20, bottom: 20 }}>
                <XAxis dataKey="name" stroke="#475569" tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 'bold' }} axisLine={false} tickLine={false} />
                <YAxis hide />
                <Bar dataKey="value" radius={[12, 12, 12, 12]} barSize={80}>
                  {MARKET_DATA.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={index === 2 ? '#00f2ff' : index === 1 ? '#8b5cf6' : 'rgba(255,255,255,0.1)'}
                      className="transition-all duration-500 hover:opacity-80"
                    />
                  ))}
                  <LabelList
                    dataKey="value"
                    position="top"
                    formatter={(val: number) => `$${val}B`}
                    fill="#fff"
                    fontSize={20}
                    fontWeight="bold"
                    offset={15}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Text Data Stream */}
        <div className="flex-1 flex flex-col justify-center space-y-10">
          <div className="space-y-4 group">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-brand-accent"></div>
              <div className="text-[10px] font-mono text-brand-accent uppercase tracking-[0.3em]">The Opportunity</div>
            </div>
            <h3 className="text-3xl font-bold text-white group-hover:text-brand-accent transition-colors">$500B Serviceable Market</h3>
            <p className="text-slate-400 text-lg leading-relaxed font-light">The global software application market is ready for a fundamental paradigm shift from legacy coding to AI-native generation.</p>
          </div>

          <div className="space-y-4 group">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-brand-purple"></div>
              <div className="text-[10px] font-mono text-brand-purple uppercase tracking-[0.3em]">The Friction</div>
            </div>
            <h3 className="text-3xl font-bold text-white group-hover:text-brand-purple transition-colors 80% SMB Market Gap">80% SMB Market Gap</h3>
            <p className="text-slate-400 text-lg leading-relaxed font-light">Small and medium businesses are locked out of custom software due to cost and complexity. Ghost.OS.X eliminates these barriers.</p>
          </div>
        </div>

      </div>
    </SlideLayout>
  );
};

export default MarketSlide;