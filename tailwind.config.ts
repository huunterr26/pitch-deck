import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    dark: "#000000",
                    accent: "var(--brand-accent, #00f2ff)",
                    secondary: "#ffffff",
                    primer: "#333333",
                    surface: "#0a0a0a",
                    purple: "#8b5cf6",
                },
            },
            fontFamily: {
                sans: ["Rajdhani", "sans-serif"],
                mono: [
                    "ui-monospace",
                    "SFMono-Regular",
                    "Menlo",
                    "Monaco",
                    "Consolas",
                    "Liberation Mono",
                    "Courier New",
                    "monospace",
                ],
            },
            animation: {
                "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                blob: "blob 10s infinite",
                typewriter: "typing 3.5s steps(40, end), blink-caret .75s step-end infinite",
                "stagger-word": "staggerWord 4s ease-in-out infinite",
            },
            keyframes: {
                blob: {
                    "0%": { transform: "translate(0px, 0px) scale(1)" },
                    "33%": { transform: "translate(30px, -50px) scale(1.1)" },
                    "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
                    "100%": { transform: "translate(0px, 0px) scale(1)" },
                },
                typing: {
                    from: { width: "0" },
                    to: { width: "100%" },
                },
                "blink-caret": {
                    "from, to": { borderColor: "transparent" },
                    "50%": { borderColor: "var(--brand-accent, #00f2ff)" },
                },
                staggerWord: {
                    "0%": { opacity: "0", filter: "blur(10px)", transform: "translateY(10px)" },
                    "15%, 50%": { opacity: "1", filter: "blur(0px)", transform: "translateY(0)" },
                    "65%, 100%": { opacity: "0", filter: "blur(10px)", transform: "translateY(-10px)" },
                },
                "tagline-reveal": {
                    "0%, 100%": { opacity: "0", transform: "translateY(20px)", filter: "blur(15px)" },
                    "10%, 40%": { opacity: "0.4", transform: "translateY(0)", filter: "blur(0)" },
                    "45%": { opacity: "0", transform: "translateY(-20px)", filter: "blur(15px)" },
                },
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};

export default config;
