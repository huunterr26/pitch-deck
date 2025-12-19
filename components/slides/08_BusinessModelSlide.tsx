import React from 'react';
import SlideLayout from '../SlideLayout';

const BusinessModelSlide: React.FC<{ slideNum: number; total: number }> = ({ slideNum, total }) => {
  const tiers = [
    { name: 'Free', price: '$0', target: 'Hobbyists', features: ['3 Projects', '100 Gen/mo'], highlight: false },
    { name: 'Starter', price: '$39', target: 'Side Projects', features: ['10 Projects', '500 Gen/mo'], highlight: false },
    { name: 'Pro', price: '$99', target: 'Freelancers', features: ['50 Projects', '5k Gen/mo', 'Export Code'], highlight: true },
    { name: 'Business', price: '$249', target: 'Agencies', features: ['500 Projects', '20k Gen/mo', 'Priority'], highlight: false },
  ];

  return (
    <SlideLayout title="Revenue Protocols" subtitle="SaaS Subscription Model" slideNumber={slideNum} totalSlides={total}>
      <div className="flex flex-col h-full justify-between pb-8">
        
        {/* Pricing Grid */}
        <div className="grid grid-cols-4 gap-4 mt-8 items-end">
            {tiers.map((tier, i) => (
                <div key={i} className={`flex flex-col p-6 border ${tier.highlight ? 'border-brand-accent bg-brand-accent/5 scale-105 z-10 shadow-[0_0_30px_rgba(0,255,0,0.1)]' : 'border-slate-800 bg-black/40 text-slate-500'} relative`}>
                    {tier.highlight && (
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-accent text-black text-[9px] font-bold px-2 py-0.5 uppercase tracking-wider">
                            Recommended
                        </div>
                    )}
                    
                    <h3 className={`font-mono text-sm uppercase mb-2 ${tier.highlight ? 'text-brand-accent' : 'text-slate-400'}`}>{tier.name}</h3>
                    <div className="text-3xl font-bold text-white mb-1">{tier.price}<span className="text-xs font-normal text-slate-500">/mo</span></div>
                    <div className="text-xs text-slate-500 mb-6">{tier.target}</div>
                    
                    <ul className="space-y-3 font-mono text-xs">
                        {tier.features.map((f, j) => (
                            <li key={j} className="flex items-center gap-2">
                                <div className={`w-1 h-1 ${tier.highlight ? 'bg-brand-accent' : 'bg-slate-600'}`}></div>
                                {f}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>

        {/* Enterprise & Expansion */}
        <div className="grid grid-cols-2 gap-8 mt-12 border-t border-slate-800 pt-8">
             <div className="flex flex-col gap-2">
                 <h4 className="text-white font-bold uppercase tracking-wider text-sm">Enterprise Custom</h4>
                 <p className="text-slate-400 text-sm">Unlimited volume, private cloud deployment, and SLA guarantees.</p>
             </div>
             <div className="flex flex-col gap-2">
                 <h4 className="text-brand-accent font-bold uppercase tracking-wider text-sm">Secondary Streams</h4>
                 <div className="flex gap-4 text-xs font-mono text-slate-400">
                     <span className="border border-slate-700 px-2 py-1">OVERAGE_FEES</span>
                     <span className="border border-slate-700 px-2 py-1">AGENT_TRAINING</span>
                     <span className="border border-slate-700 px-2 py-1">WHITE_LABEL</span>
                 </div>
             </div>
        </div>

      </div>
    </SlideLayout>
  );
};

export default BusinessModelSlide;