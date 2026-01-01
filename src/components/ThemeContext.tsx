"use client";

import React, { createContext, useContext, ReactNode, useEffect } from "react";

interface ThemeContextType {
    brandCyan: string;
    brandPurple: string;
    accentColor: string;
}

const ThemeContext = createContext<ThemeContextType>({
    brandCyan: "#00f2ff",
    brandPurple: "#8b5cf6",
    accentColor: "#00f2ff",
});

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    // Update CSS variables for the premium theme
    useEffect(() => {
        const root = document.documentElement;
        root.style.setProperty("--brand-accent", "#00f2ff");
        root.style.setProperty("--brand-accent-rgb", "0, 242, 255");
        root.style.setProperty("--brand-purple", "#8b5cf6");
        root.style.setProperty("--brand-purple-rgb", "139, 92, 246");
    }, []);

    const value: ThemeContextType = {
        brandCyan: "#00f2ff",
        brandPurple: "#8b5cf6",
        accentColor: "#00f2ff",
    };

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
};
