"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Send, ArrowRight, Sparkles, Rocket, Shield, Zap, Users, Gift, Star } from "lucide-react";
import { SiReact, SiNextdotjs, SiVuedotjs, SiOpenai, SiGithub, SiVercel, SiStripe, SiGoogle } from "react-icons/si";
import { motion } from "framer-motion";
import ParticleSwarm from "@/components/ParticleSwarm";

const HERO_MESSAGES = [
    "The best way to predict the future is to invent it. — Alan Kay",
    "Simplicity is the ultimate sophistication. — Leonardo da Vinci",
    "The people who are crazy enough to think they can change the world are the ones who do. — Steve Jobs",
    "Innovation distinguishes between a leader and a follower. — Steve Jobs",
    "Design is not just what it looks like and feels like. Design is how it works. — Steve Jobs",
    "Stay hungry. Stay foolish. — Steve Jobs",
    "Software is eating the world. — Marc Andreessen",
    "Any sufficiently advanced technology is indistinguishable from magic. — Arthur C. Clarke",
    "Move fast and break things. — Mark Zuckerberg",
    "The only way to do great work is to love what you do. — Steve Jobs",
    "Ideas are easy. Implementation is hard. — Guy Kawasaki",
    "If you're not embarrassed by the first version of your product, you've launched too late. — Reid Hoffman",
    "Make something people want. — Paul Graham",
    "Done is better than perfect. — Sheryl Sandberg",
    "Prototype early, prototype often. — IDEO",
    "From idea to interactive prototype in minutes.",
    "Validate before you build. Iterate before you ship.",
];

export default function WaitlistPage() {
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const [statusMessage, setStatusMessage] = useState("");
    const [currentQuote, setCurrentQuote] = useState("");
    const [activeGlobalTab, setActiveGlobalTab] = useState<string | null>(null);
    const [isSidebarHovered, setIsSidebarHovered] = useState(false);

    // Quote rotation
    useEffect(() => {
        const shuffled = [...HERO_MESSAGES].sort(() => 0.5 - Math.random());
        let index = 0;
        setCurrentQuote(shuffled[0]);

        const interval = setInterval(() => {
            index = (index + 1) % shuffled.length;
            setCurrentQuote(shuffled[index]);
        }, 8000);

        return () => clearInterval(interval);
    }, []);

    // Auto-cycling sidebar tabs
    useEffect(() => {
        if (isSidebarHovered) return;

        const interval = setInterval(() => {
            const allTabs = ["Early", "Preview", "Priority", "Exclusive", "Launch", "Beta", "Founder", "VIP"];
            const randomTab = allTabs[Math.floor(Math.random() * allTabs.length)];
            setActiveGlobalTab(randomTab);
        }, 5500);

        return () => clearInterval(interval);
    }, [isSidebarHovered]);

    const handleSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email.trim() || isSubmitting) return;

        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            const response = await fetch("/api/waitlist", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, source: "landing" }),
            });

            const data = await response.json();

            if (data.success) {
                setSubmitStatus("success");
                setStatusMessage(data.message);
                setEmail("");
            } else {
                setSubmitStatus("error");
                setStatusMessage(data.error || "Something went wrong");
            }
        } catch {
            setSubmitStatus("error");
            setStatusMessage("Network error. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    }, [email, isSubmitting]);

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Particle Background */}
            <div className="fixed inset-0 z-0 opacity-40">
                <ParticleSwarm />
            </div>

            {/* Hero Background Image */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-transparent z-10" />
                <div className="absolute inset-0">
                    <img
                        src="/brand-background.png"
                        alt=""
                        className="w-full h-full object-cover object-top opacity-30"
                    />
                </div>
            </div>

            <section className="h-screen relative flex flex-col justify-center items-center">
                {/* TOP BAR - AI-Powered Badge */}
                <div className="absolute top-0 left-0 w-full flex justify-center z-50 pointer-events-none">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="pointer-events-auto"
                    >
                        <h2
                            className="text-lg md:text-xl font-black tracking-[0.4em] py-3 px-12 border border-black/10 bg-white uppercase text-center text-black"
                            style={{ WebkitTextStroke: "0.5px rgba(0,0,0,0.1)", textShadow: "0 0 15px rgba(0,0,0,0.05)" }}
                        >
                            AI-Powered Rapid Prototyping
                        </h2>
                        <div className="h-px w-full max-sm mx-auto bg-gradient-to-r from-transparent via-black/10 to-transparent mt-4 opacity-20" />
                    </motion.div>
                </div>

                {/* TOP-RIGHT: View Pitch Deck Button */}
                <div className="absolute top-8 right-8 z-50 flex flex-col items-end gap-3 pointer-events-auto">
                    <Link
                        href="/deck"
                        className="group relative h-auto w-48 px-6 py-2 bg-black border border-white rounded-none hover:bg-white transition-all duration-300 flex items-center justify-center gap-2"
                    >
                        <span className="relative z-10 text-white group-hover:text-black font-black tracking-[0.2em] text-[10px] uppercase">
                            Pitch_Deck_//
                        </span>
                        <ArrowRight className="w-3 h-3 text-white group-hover:text-black transition-colors" />
                    </Link>
                </div>

                {/* MAIN CONTENT */}
                <section className="relative z-10 w-full px-4 flex flex-col items-center pt-0">
                    {/* LOGO + TITLE */}
                    <div className="flex flex-col items-center justify-center w-full mb-8 -mt-40">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex flex-col items-center"
                        >
                            {/* OOTET Logo */}
                            <div className="relative mb-4">
                                <div className="absolute -inset-6 bg-brand-accent/10 rounded-full blur-3xl" />
                                <img
                                    src="/OOTET1.png"
                                    alt="GHOST.OS.X"
                                    className="h-20 md:h-24 lg:h-28 object-contain relative z-10 drop-shadow-[0_0_30px_rgba(0,242,255,0.4)]"
                                />
                            </div>

                            {/* Divider */}
                            <motion.div
                                initial={{ opacity: 0, scaleX: 0 }}
                                animate={{ opacity: 1, scaleX: 1 }}
                                transition={{ delay: 0.7, duration: 0.8 }}
                                className="mt-4 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            />
                        </motion.div>

                        {/* TAGLINE: Prototype. Validate. Iterate. */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="flex items-center justify-center gap-6 mt-6"
                        >
                            <span
                                className="text-lg md:text-xl font-bold tracking-[0.15em] uppercase leading-none text-white/60"
                                style={{ animation: "staggerWord 4s ease-in-out infinite", animationDelay: "0s" }}
                            >
                                Prototype.
                            </span>
                            <span
                                className="text-2xl md:text-3xl font-black tracking-[0.2em] uppercase italic text-white"
                                style={{ animation: "staggerWord 4s ease-in-out infinite", animationDelay: "0.4s" }}
                            >
                                Validate.
                            </span>
                            <span
                                className="text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-white/40"
                                style={{ animation: "staggerWord 4s ease-in-out infinite", animationDelay: "0.8s" }}
                            >
                                Iterate.
                            </span>
                        </motion.div>
                    </div>

                    {/* EMAIL SIGNUP FORM */}
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="relative w-full mt-24"
                        style={{ width: "min(90vw, 800px)" }}
                    >
                        <div className="relative group/prompt">
                            {/* 3D Border Effect */}
                            <div className="absolute -inset-[2px] bg-gradient-to-br from-white/40 via-transparent to-black/10 rounded-lg pointer-events-none z-10" />
                            <div className="absolute -inset-1 pointer-events-none opacity-20 bg-white/5 blur-xl rounded-xl" />

                            <div className="relative bg-black/40 backdrop-blur-xl transition-all duration-700 rounded-lg border border-white/10 overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)]">
                                <div className="flex flex-col">
                                    {/* Header */}
                                    <div className="p-6 pb-2 border-b border-white/5">
                                        <div className="flex items-center gap-3 mb-4">
                                            <Sparkles className="w-4 h-4 text-brand-accent" />
                                            <span className="text-[10px] font-mono text-white/60 tracking-[0.3em] uppercase">
                                                Join the Waitlist — Early Access Coming Q1 2026
                                            </span>
                                        </div>

                                        {/* Email Input */}
                                        <div className="flex items-center gap-4">
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="Enter your email address..."
                                                className="flex-1 bg-transparent border-none outline-none text-lg font-mono tracking-wide text-white placeholder:text-white/30 py-2"
                                                disabled={isSubmitting}
                                            />
                                            <button
                                                type="submit"
                                                disabled={isSubmitting || !email.trim()}
                                                className="h-12 w-12 rounded-none bg-white text-black hover:bg-brand-accent hover:text-black transition-all duration-500 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                {isSubmitting ? (
                                                    <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                                                ) : (
                                                    <Send className="w-4 h-4" />
                                                )}
                                            </button>
                                        </div>

                                        {/* Status Message */}
                                        {submitStatus !== "idle" && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className={`mt-3 text-sm font-mono ${submitStatus === "success" ? "text-brand-accent" : "text-red-400"}`}
                                            >
                                                {statusMessage}
                                            </motion.div>
                                        )}
                                    </div>

                                    {/* TACTICAL FOOTER */}
                                    <div className="flex items-center justify-between p-3 md:px-6 border-t border-white/5 bg-white/[0.03]">
                                        <div className="flex items-center gap-6 select-none opacity-60">
                                            <div className="flex flex-col gap-0.5">
                                                <span className="text-[5px] font-mono text-white/40 tracking-[0.4em] uppercase">Ghost_Sync</span>
                                                <span className="text-[8px] font-black text-white tracking-widest uppercase">Active</span>
                                            </div>
                                            <div className="flex flex-col gap-0.5">
                                                <span className="text-[5px] font-mono text-white/40 tracking-[0.4em] uppercase">Launch_Date</span>
                                                <span className="text-[8px] font-black text-brand-accent tracking-widest">Q1 2026</span>
                                            </div>
                                            <div className="flex flex-col gap-0.5">
                                                <span className="text-[5px] font-mono text-white/40 tracking-[0.4em] uppercase">Early_Access</span>
                                                <span className="text-[8px] font-black text-white tracking-widest">Limited</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <div className="flex flex-col items-end gap-0.5 opacity-40">
                                                <span className="text-[6px] font-mono text-white tracking-[0.4em] uppercase">Injection_Model</span>
                                                <div className="text-[8px] font-black tracking-widest uppercase text-white">GHOST.AGENT 4.0</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* INFRASTRUCTURE ICONS */}
                                    <div className="px-10 py-5 flex flex-wrap items-center justify-center gap-16 border-t border-white/5 bg-white/[0.01]">
                                        <div className="flex items-center gap-8">
                                            <span className="text-white/30 tracking-[0.3em] text-[8px] uppercase font-black">Architecture</span>
                                            <div className="flex items-center gap-6">
                                                <SiReact className="w-4 h-4 text-white/40 hover:text-white hover:scale-110 transition-all cursor-help" />
                                                <SiNextdotjs className="w-4 h-4 text-white/40 hover:text-white hover:scale-110 transition-all cursor-help" />
                                                <SiVuedotjs className="w-4 h-4 text-white/40 hover:text-white hover:scale-110 transition-all cursor-help" />
                                                <SiGithub className="w-4 h-4 text-white/40 hover:text-white hover:scale-110 transition-all cursor-help" />
                                            </div>
                                        </div>
                                        <div className="w-[1px] h-3 bg-white/10 hidden sm:block" />
                                        <div className="flex items-center gap-8">
                                            <span className="text-white/30 tracking-[0.3em] text-[8px] uppercase font-black">Integrations</span>
                                            <div className="flex items-center gap-6">
                                                <SiOpenai className="w-4 h-4 text-white/40 hover:text-white hover:scale-110 transition-all cursor-help" />
                                                <SiVercel className="w-4 h-4 text-white/40 hover:text-white hover:scale-110 transition-all cursor-help" />
                                                <SiStripe className="w-4 h-4 text-white/40 hover:text-white hover:scale-110 transition-all cursor-help" />
                                                <SiGoogle className="w-4 h-4 text-white/40 hover:text-white hover:scale-110 transition-all cursor-help" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.form>
                </section>
            </section>

            {/* LEFT SIDEBAR - WAITLIST BENEFITS */}
            <div className="fixed top-12 left-12 z-50 pointer-events-none max-w-sm p-6 border-l border-white/10 hidden lg:block">
                <div className="text-[10px] font-black tracking-[0.5em] text-white/20 uppercase mb-4 border-b border-white/5 pb-1 w-fit">Ghost Intelligence</div>
                <div className="min-h-[80px] flex items-start">
                    <p className="text-xs md:text-sm leading-relaxed font-mono text-white/40 italic">
                        "{currentQuote}"
                    </p>
                </div>
                <div
                    className="mt-8 flex flex-col gap-6 pointer-events-auto"
                    onMouseEnter={() => setIsSidebarHovered(true)}
                    onMouseLeave={() => setIsSidebarHovered(false)}
                >
                    {[
                        { id: "Early", label: "Early_Access", title: "First in line:", sub: "priority access.", desc: "Be among the first to experience GHOST.OS.X when we launch.", icon: Rocket },
                        { id: "Preview", label: "Preview_Builds", title: "Sneak peeks:", sub: "beta features.", desc: "Access exclusive preview builds and shape the product roadmap.", icon: Sparkles },
                        { id: "Priority", label: "Priority_Support", title: "Direct line:", sub: "founder access.", desc: "Get priority support and direct communication with our team.", icon: Shield },
                        { id: "Exclusive", label: "Exclusive_Pricing", title: "Founder rate:", sub: "locked forever.", desc: "Lock in exclusive founding member pricing for life.", icon: Gift },
                    ].map((tab) => (
                        <motion.div
                            key={tab.id}
                            layout
                            className={`group cursor-help transition-all duration-500 pointer-events-auto ${activeGlobalTab === tab.id ? "active-cycle" : ""}`}
                            onMouseEnter={() => setActiveGlobalTab(tab.id)}
                        >
                            <div className="flex items-center gap-3">
                                <div className={`w-6 h-[1px] bg-white/20 transition-all duration-500 group-hover:w-12 group-hover:bg-brand-accent/50 ${activeGlobalTab === tab.id ? "w-12 bg-brand-accent/50" : ""}`} />
                                <tab.icon className={`w-3 h-3 text-white/30 transition-colors duration-500 group-hover:text-brand-accent ${activeGlobalTab === tab.id ? "text-brand-accent" : ""}`} />
                                <span className={`text-[8px] font-mono text-white/30 tracking-[0.4em] uppercase font-black transition-colors duration-500 group-hover:text-white/60 ${activeGlobalTab === tab.id ? "text-white/60" : ""}`}>{tab.label}</span>
                            </div>
                            <div className={`overflow-hidden transition-all duration-700 max-h-0 group-hover:max-h-64 group-hover:opacity-100 flex flex-col pl-9 ${activeGlobalTab === tab.id ? "max-h-64 opacity-100" : "opacity-0"}`}>
                                <h3 className="text-xl font-black text-white italic tracking-tighter leading-tight uppercase whitespace-pre-line mt-2 transition-all duration-500">
                                    {tab.title}{"\n"}<span style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)", color: "transparent" }}>{tab.sub}</span>
                                </h3>
                                <p className="text-[9px] font-mono text-white/20 leading-relaxed uppercase tracking-[0.1em] mt-2 max-w-[280px] transition-all duration-700">{tab.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* RIGHT SIDEBAR - LAUNCH TIMELINE */}
            <div className="fixed bottom-20 right-12 z-50 pointer-events-none max-w-sm flex flex-col items-end p-6 border-r border-white/10 hidden lg:flex">
                <div
                    className="flex flex-col gap-6 pointer-events-auto"
                    onMouseEnter={() => setIsSidebarHovered(true)}
                    onMouseLeave={() => setIsSidebarHovered(false)}
                >
                    {[
                        { id: "Launch", label: "Launch_Q1_2026", title: "Public launch:", sub: "full access.", desc: "General availability with complete feature set.", icon: Zap },
                        { id: "Beta", label: "Beta_Testing", title: "Private beta:", sub: "early testing.", desc: "Invite-only testing phase for waitlist members.", icon: Shield },
                        { id: "Founder", label: "Founder_Tier", title: "Exclusive perks:", sub: "lifetime benefits.", desc: "Special badge, priority features, and founding member recognition.", icon: Star },
                        { id: "VIP", label: "VIP_Community", title: "Inner circle:", sub: "direct influence.", desc: "Shape the product with direct input to our development team.", icon: Users },
                    ].map((tab) => (
                        <motion.div
                            key={tab.id}
                            layout
                            className={`group cursor-help transition-all duration-500 pointer-events-auto ${activeGlobalTab === tab.id ? "active-cycle" : ""}`}
                            onMouseEnter={() => setActiveGlobalTab(tab.id)}
                        >
                            <div className={`overflow-hidden transition-all duration-700 max-h-0 group-hover:max-h-64 group-hover:opacity-100 flex flex-col pr-9 text-right mb-2 ${activeGlobalTab === tab.id ? "max-h-64 opacity-100" : "opacity-0"}`}>
                                <h3 className="text-xl font-black text-white italic tracking-tighter leading-tight uppercase whitespace-pre-line mt-2 transition-all duration-500">
                                    {tab.title}{"\n"}<span style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)", color: "transparent" }}>{tab.sub}</span>
                                </h3>
                                <p className="text-[9px] font-mono text-white/20 leading-relaxed uppercase tracking-[0.1em] mt-2 ml-auto max-w-[240px] transition-all duration-700">{tab.desc}</p>
                            </div>
                            <div className="flex items-center gap-3 justify-end">
                                <span className={`text-[8px] font-mono text-white/30 tracking-[0.4em] uppercase font-black transition-colors duration-500 group-hover:text-white/60 ${activeGlobalTab === tab.id ? "text-white/60" : ""}`}>{tab.label}</span>
                                <tab.icon className={`w-3 h-3 text-white/30 transition-colors duration-500 group-hover:text-brand-accent ${activeGlobalTab === tab.id ? "text-brand-accent" : ""}`} />
                                <div className={`w-6 h-[1px] bg-white/20 transition-all duration-500 group-hover:w-12 group-hover:bg-brand-accent/50 ${activeGlobalTab === tab.id ? "w-12 bg-brand-accent/50" : ""}`} />
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="text-[10px] font-black tracking-[0.5em] text-white/20 uppercase mt-8 border-t border-white/5 pt-1 w-fit">Launch_Timeline</div>
            </div>

            {/* FOOTER */}
            <footer className="absolute bottom-0 left-0 w-full z-40 py-3 px-8 flex items-center border-t border-white/5 bg-black/80 backdrop-blur-sm">
                {/* Left: Copyright */}
                <span className="text-[9px] font-mono text-white/30 tracking-[0.2em] uppercase">
                    © 2026 Hunter LLC
                </span>
                {/* Center: Tagline */}
                <span className="flex-1 text-center text-[10px] font-mono text-white/40 tracking-[0.3em] uppercase">
                    From Idea to Prototype_//
                </span>
                {/* Right: Spacer for balance */}
                <span className="text-[9px] font-mono text-transparent tracking-[0.2em]">
                    © 2026 Hunter LLC
                </span>
            </footer>
        </div>
    );
}
