"use client";

import React, { useRef, useEffect } from "react";

const ParticleSwarm: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const particles: Particle[] = [];
        const particleCount = width < 768 ? 40 : 80;
        const mouseDistance = 120;

        const mouse = { x: -1000, y: -1000 };

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            baseColor: string;
            glowColor: string;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.15;
                this.vy = (Math.random() - 0.5) * 0.15;
                this.size = Math.random() * 2 + 0.5;

                const rand = Math.random();
                if (rand > 0.7) {
                    this.baseColor = "rgba(0, 242, 255, 0.4)"; // Cyan
                    this.glowColor = "#00f2ff";
                } else if (rand > 0.4) {
                    this.baseColor = "rgba(139, 92, 246, 0.4)"; // Purple
                    this.glowColor = "#8b5cf6";
                } else {
                    this.baseColor = "rgba(255, 255, 255, 0.3)"; // White
                    this.glowColor = "#ffffff";
                }
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;

                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < mouseDistance) {
                    const forceDirectionX = dx / dist;
                    const forceDirectionY = dy / dist;
                    const force = (mouseDistance - dist) / mouseDistance;

                    this.vx += forceDirectionX * force * 0.005;
                    this.vy += forceDirectionY * force * 0.005;
                }
            }

            draw() {
                if (!ctx) return;

                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                let alpha = 0.4;
                if (dist < mouseDistance) {
                    alpha = 0.4 + (1 - dist / mouseDistance) * 0.6;
                }

                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

                if (dist < mouseDistance) {
                    ctx.shadowBlur = 15 * (1 - dist / mouseDistance);
                    ctx.shadowColor = this.glowColor;
                    // Convert hex to rgba for fill
                    const r = parseInt(this.glowColor.slice(1, 3), 16);
                    const g = parseInt(this.glowColor.slice(3, 5), 16);
                    const b = parseInt(this.glowColor.slice(5, 7), 16);
                    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
                } else {
                    ctx.shadowBlur = 0;
                    ctx.fillStyle = this.baseColor;
                }

                ctx.fill();
                ctx.shadowBlur = 0;

                // Subtle connections
                particles.forEach((p2) => {
                    const dx2 = this.x - p2.x;
                    const dy2 = this.y - p2.y;
                    const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
                    if (dist2 < 100) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(139, 92, 246, ${0.1 * (1 - dist2 / 100)})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(this.x, this.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                });
            }
        }

        const init = () => {
            particles.length = 0;
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            particles.forEach((p) => {
                p.update();
                p.draw();
            });
            requestAnimationFrame(animate);
        };

        init();
        animate();

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            init();
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const handleMouseLeave = () => {
            mouse.x = -1000;
            mouse.y = -1000;
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseout", handleMouseLeave);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseout", handleMouseLeave);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 pointer-events-none opacity-60"
        />
    );
};

export default ParticleSwarm;
