"use client";

import React from "react";
import { Ghost } from "lucide-react";

interface AnimatedLogoProps {
    className?: string;
}

const AnimatedLogo: React.FC<AnimatedLogoProps> = ({ className = "" }) => {
    return (
        <div className={`relative flex items-center justify-center ${className}`}>
            <div className="relative group">
                {/* Animated Glow behind logo */}
                <div className="absolute -inset-4 bg-brand-accent/20 rounded-full blur-xl animate-pulse" />

                {/* Ghost Icon Logo */}
                <Ghost className="w-full h-full text-white relative z-10 drop-shadow-[0_0_15px_rgba(0,242,255,0.6)] group-hover:scale-110 transition-transform duration-500" />
            </div>
        </div>
    );
};

export default AnimatedLogo;
