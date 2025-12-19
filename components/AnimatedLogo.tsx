import React from 'react';
import { useTheme } from './ThemeContext';

interface AnimatedLogoProps {
    className?: string;
    alt?: string;
}

const AnimatedLogo: React.FC<AnimatedLogoProps> = ({
    className = '',
    alt = 'vAi Logo',
}) => {
    const { isRedPill, isGlitching, glitchIntensity } = useTheme();

    // Calculate glitch offsets
    const glitchOffset = isGlitching ? (Math.random() - 0.5) * 8 : 0;
    const rgbSplitX = isGlitching ? (Math.random() - 0.5) * 6 : 0;
    const rgbSplitY = isGlitching ? (Math.random() - 0.5) * 4 : 0;

    // Normal (isRedPill=false) = GREEN theme = show green logo (footer.png)
    // Red Pill mode (isRedPill=true) = RED theme = show red logo (footerredpill.png)
    const currentLogo = isRedPill ? '/footerredpill.png' : '/footer.png';
    const altLogo = isRedPill ? '/footer.png' : '/footerredpill.png';

    return (
        <div
            className={`relative overflow-hidden ${className}`}
            style={{
                transform: isGlitching ? `translate(${glitchOffset}px, ${glitchOffset * 0.5}px)` : 'none',
            }}
        >
            {/* Glitch scanlines overlay */}
            {isGlitching && (
                <div
                    className="absolute inset-0 z-20 pointer-events-none"
                    style={{
                        background: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(0, 0, 0, 0.3) 2px,
              rgba(0, 0, 0, 0.3) 4px
            )`,
                        opacity: glitchIntensity * 0.5,
                    }}
                />
            )}

            {/* RGB Split - Red channel (offset left) */}
            {isGlitching && (
                <img
                    src={currentLogo}
                    alt=""
                    className="absolute inset-0 w-full h-full object-contain mix-blend-screen"
                    style={{
                        transform: `translate(${-rgbSplitX}px, ${rgbSplitY}px)`,
                        filter: 'url(#redChannel)',
                        opacity: 0.7,
                    }}
                />
            )}

            {/* RGB Split - Blue channel (offset right) */}
            {isGlitching && (
                <img
                    src={currentLogo}
                    alt=""
                    className="absolute inset-0 w-full h-full object-contain mix-blend-screen"
                    style={{
                        transform: `translate(${rgbSplitX}px, ${-rgbSplitY}px)`,
                        filter: 'url(#blueChannel)',
                        opacity: 0.7,
                    }}
                />
            )}

            {/* Main logo - fades based on glitch state */}
            <img
                src={currentLogo}
                alt={alt}
                className="w-full h-full object-contain transition-opacity duration-100"
                style={{
                    opacity: isGlitching && Math.random() > 0.3 ? 0.3 : 1,
                    transform: isGlitching ? `skewX(${(Math.random() - 0.5) * 2}deg)` : 'none',
                }}
            />

            {/* Alt logo flash during glitch */}
            {isGlitching && (
                <img
                    src={altLogo}
                    alt=""
                    className="absolute inset-0 w-full h-full object-contain"
                    style={{
                        opacity: glitchIntensity > 0.5 ? 0.8 : 0,
                        transform: `skewX(${(Math.random() - 0.5) * 3}deg)`,
                    }}
                />
            )}

            {/* Glitch color flash */}
            {isGlitching && (
                <div
                    className="absolute inset-0 z-10 pointer-events-none"
                    style={{
                        backgroundColor: isRedPill
                            ? `rgba(0, 255, 0, ${glitchIntensity * 0.15})`
                            : `rgba(255, 0, 0, ${glitchIntensity * 0.15})`,
                    }}
                />
            )}

            {/* SVG filters for RGB channel separation */}
            <svg className="absolute w-0 h-0">
                <defs>
                    <filter id="redChannel">
                        <feColorMatrix
                            type="matrix"
                            values="1 0 0 0 0
                      0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0"
                        />
                    </filter>
                    <filter id="blueChannel">
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0
                      0 0 0 0 0
                      0 0 1 0 0
                      0 0 0 1 0"
                        />
                    </filter>
                </defs>
            </svg>
        </div>
    );
};

export default AnimatedLogo;
