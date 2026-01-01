import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "./globals.css";

const rajdhani = Rajdhani({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-rajdhani",
});

export const metadata: Metadata = {
    title: "GHOST.OS.X | AI-Powered Rapid Prototyping",
    description:
        "Transform your ideas into interactive prototypes in minutes. Join the waitlist for early access to the AI-powered no-code revolution.",
    keywords: [
        "AI prototyping",
        "no-code",
        "rapid prototyping",
        "GHOST.OS.X",
        "startup tools",
        "MVP builder",
    ],
    openGraph: {
        title: "GHOST.OS.X | AI-Powered Rapid Prototyping",
        description:
            "Transform your ideas into interactive prototypes in minutes.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={rajdhani.variable}>
            <body className="bg-black text-white font-sans antialiased overflow-hidden h-screen">
                {/* Noise Texture Overlay */}
                <div className="bg-noise" />

                {/* Main Content */}
                {children}
            </body>
        </html>
    );
}
