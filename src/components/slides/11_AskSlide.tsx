"use client";

import React from 'react';
import SlideLayout from '@/components/SlideLayout';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Target, Users, TrendingUp } from 'lucide-react';

const DATA = [
  { name: 'Engineering', value: 40 },
  { name: 'AI Infrastructure', value: 30 },
  { name: 'Growth', value: 20 },
  { name: 'Ops', value: 10 },
];

const COLORS = ['#00f2ff', '#8b5cf6', 'rgba(255,255,255,0.4)', 'rgba(255,255,255,0.1)'];

const AskSlide: React.FC<{ slideNum: number; total: number }> = ({ slideNum, total }) => {
  return (
    <SlideLayout title="The Ask" subtitle="Investing in GHOST.OS.X" slideNumber={slideNum} totalSlides={total}>
      <div className="flex flex-col h-full justify-center">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">

          {/* Round Summary */}
          <div className="flex flex-col gap-6">
            <div className="space-y-2">
              <span className="text-brand-accent font-mono text-xs uppercase tracking-[0.3em]">Pre-Seed Round</span>
              <h2 className="text-8xl font-black text-white tracking-tighter">$1M</h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">Raising capital to accelerate the singularity of software development.</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-3xl space-y-4">
              <div className="flex items-center gap-3">
                <Target className="text-brand-accent" size={20} />
                <span className="text-white font-medium text-sm">6-Month Runway</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="text-brand-purple" size={20} />
                <span className="text-white font-medium text-sm">3 Senior AI Engineers</span>
              </div>
            </div>
          </div>

          {/* Allocation Chart */}
          <div className="h-[400px] relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-[40px] p-8">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={DATA}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={8}
                  dataKey="value"
                  stroke="none"
                >
                  {DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Allocation</div>
              <div className="text-2xl font-bold text-white uppercase tracking-tight">Focus</div>
            </div>
          </div>

          {/* Use of Funds Table */}
          <div className="space-y-6">
            {DATA.map((item, i) => (
              <div key={i} className="flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[i] }}></div>
                  <span className="text-white font-bold tracking-tight group-hover:text-brand-accent transition-colors">{item.name}</span>
                </div>
                <span className="text-slate-500 font-mono text-sm">{item.value}%</span>
              </div>
            ))}

            <div className="mt-12 pt-12 border-t border-white/5 flex flex-col gap-4">
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <TrendingUp size={16} className="text-brand-accent" />
                <span>Projection: 5,000 MAU by Q3</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <TrendingUp size={16} className="text-brand-purple" />
                <span>Revenue Target: $1M ARR by EoY</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </SlideLayout>
  );
};

export default AskSlide;