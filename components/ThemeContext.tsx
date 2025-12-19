import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';

interface ThemeContextType {
    isRedPill: boolean;
    isGlitching: boolean;
    glitchIntensity: number;
    accentColor: string;
    accentColorRgb: string;
}

const ThemeContext = createContext<ThemeContextType>({
    isRedPill: false,
    isGlitching: false,
    glitchIntensity: 0,
    accentColor: '#00ff00',  // Start with GREEN (normal)
    accentColorRgb: '0, 255, 0',
});

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
    children: ReactNode;
    cycleDuration?: number;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
    children,
    cycleDuration = 4000
}) => {
    const [isRedPill, setIsRedPill] = useState(false);
    const [isGlitching, setIsGlitching] = useState(false);
    const [glitchIntensity, setGlitchIntensity] = useState(0);

    // Trigger glitch and swap theme
    const triggerGlitch = useCallback(() => {
        setIsGlitching(true);

        let flickerCount = 0;
        const maxFlickers = 8 + Math.floor(Math.random() * 6);

        const flicker = setInterval(() => {
            setGlitchIntensity(Math.random());
            flickerCount++;

            if (flickerCount >= maxFlickers) {
                clearInterval(flicker);
                setIsGlitching(false);
                setGlitchIntensity(0);
                setIsRedPill(prev => !prev);
            }
        }, 50 + Math.random() * 80);
    }, []);

    useEffect(() => {
        const interval = setInterval(triggerGlitch, cycleDuration);
        return () => clearInterval(interval);
    }, [cycleDuration, triggerGlitch]);

    // Update CSS variables when theme changes
    // Normal (isRedPill=false) = GREEN, Red Pill activated = RED
    useEffect(() => {
        const root = document.documentElement;

        if (isRedPill) {
            // Red pill mode = RED theme
            root.style.setProperty('--brand-accent', '#ff3333');
            root.style.setProperty('--brand-accent-rgb', '255, 51, 51');
        } else {
            // Normal mode = GREEN theme
            root.style.setProperty('--brand-accent', '#00ff00');
            root.style.setProperty('--brand-accent-rgb', '0, 255, 0');
        }
    }, [isRedPill]);

    const value: ThemeContextType = {
        isRedPill,
        isGlitching,
        glitchIntensity,
        accentColor: isRedPill ? '#ff3333' : '#00ff00',
        accentColorRgb: isRedPill ? '255, 51, 51' : '0, 255, 0',
    };

    return (
        <ThemeContext.Provider value={value}>
            {/* Global glitch overlay during transitions */}
            {isGlitching && (
                <div
                    className="fixed inset-0 z-[9999] pointer-events-none"
                    style={{
                        background: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(${isRedPill ? '255, 0, 0' : '0, 255, 0'}, ${glitchIntensity * 0.05}) 2px,
              rgba(${isRedPill ? '255, 0, 0' : '0, 255, 0'}, ${glitchIntensity * 0.05}) 4px
            )`,
                    }}
                />
            )}
            {children}
        </ThemeContext.Provider>
    );
};
