"use client";

import React from 'react';
import SlideLayout from '@/components/SlideLayout';
import { Check, Zap, Rocket, Building2 } from 'lucide-react';

const BusinessModelSlide: React.FC<{ slideNum: number; total: number }> = ({ slideNum, total }) => {
    const tiers = [
        {
            name: 'Free',
            price: '$0',
            icon: <Zap className="text-slate-500" size={24} />,
            features: ['3 Active Projects', 'GHOST Standard Model', 'Community Support'],
            highlight: false
        },
        {
            name: 'Pro',
            price: '$49',
            icon: <Rocket className="text-brand-accent" size={24} />,
            features: ['Unlimited Projects', 'GHOST Ultra Model', 'Code Export (Docker)', 'Priority Generation'],
            highlight: true
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            icon: <Building2 className="text-brand-purple" size={24} />,
            features: ['VPC Deployment', 'Custom Model Tuning', 'SSO & IAM Control', 'Dedicated GHOST Engineer'],
            highlight: false
        },
    ];

    return (
        <SlideLayout title="Business Model" subtitle="Scaling with GHOST.OS.X" slideNumber={slideNum} totalSlides={total}>
            <div className="flex flex-col h-full justify-center gap-12">

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                    {tiers.map((tier, i) => (
                        <div key={i} className={`flex flex-col p-8 rounded-3xl border transition-all duration-500 ${tier.highlight ? 'border-brand-accent bg-brand-accent/5 scale-105 z-10 shadow-[0_20px_40px_rgba(0,242,255,0.1)]' : 'border-white/10 bg-black/40 hover:bg-white/5'} relative group`}>
                            {tier.highlight && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-accent text-black text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest shadow-[0_0_15px_#00f2ff]">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-6 flex justify-between items-start">
                                <div className="p-3 bg-black/60 rounded-2xl border border-white/5 group-hover:scale-110 transition-transform">
                                    {tier.icon}
                                </div>
                                <h3 className={`font-mono text-xs uppercase tracking-[0.2em] font-bold ${tier.highlight ? 'text-brand-accent' : 'text-slate-500'}`}>{tier.name}</h3>
                            </div>

                            <div className="mb-2">
                                <span className="text-4xl font-bold text-white">{tier.price}</span>
                                {tier.price !== 'Custom' && <span className="text-sm text-slate-500 font-mono">/mo</span>}
                            </div>

                            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-6"></div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {tier.features.map((f, j) => (
                                    <li key={j} className="flex items-start gap-3">
                                        <Check size={16} className={tier.highlight ? 'text-brand-accent' : 'text-slate-600'} />
                                        <span className="text-slate-400 text-sm">{f}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 rounded-xl font-bold text-sm transition-all ${tier.highlight ? 'bg-brand-accent text-black hover:shadow-[0_0_20px_#00f2ff]' : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'}`}>
                                {tier.price === 'Custom' ? 'Contact Sales' : 'Start Building'}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Expansion Revenue */}
                <div className="flex items-center justify-center gap-12 text-center border-white/5 border-t pt-8 opacity-60">
                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.4em]">Scaling Vectors</div>
                    <div className="flex gap-8">
                        <span className="text-white text-xs font-mono border-b border-brand-accent/30 pb-1">Token-based Overage</span>
                        <span className="text-white text-xs font-mono border-b border-brand-purple/30 pb-1">GHOST Marketplace</span>
                        <span className="text-white text-xs font-mono border-b border-brand-accent/30 pb-1">Enterprise Advisory</span>
                    </div>
                </div>

            </div>
        </SlideLayout>
    );
};

export default BusinessModelSlide;