import React, { useRef, useEffect } from 'react';

const ParticleSwarm: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particles: Particle[] = [];
    const particleCount = width < 768 ? 50 : 100;
    const mouseDistance = 80; // Range for lasers - decreased from 150 to require closer proximity

    let mouse = { x: -1000, y: -1000 };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      baseColor: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.2; 
        this.vy = (Math.random() - 0.5) * 0.2;
        this.size = Math.random() * 2 + 0.5;
        
        // Theme colors - Terminal Green & White
        const rand = Math.random();
        if (rand > 0.90) {
             this.baseColor = 'rgba(255, 255, 255, 0.9)'; // Brighter White
             this.size += 1;
        } else if (rand > 0.60) {
             this.baseColor = 'rgba(0, 255, 0, 0.9)'; // Brighter Green
        } else {
             this.baseColor = 'rgba(0, 255, 0, 0.5)'; // Dim Green
        }
        this.color = this.baseColor;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Mild attraction to keep them interesting around the cursor
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouseDistance) {
           const forceDirectionX = dx / dist;
           const forceDirectionY = dy / dist;
           const force = (mouseDistance - dist) / mouseDistance;
           
           this.vx += forceDirectionX * force * 0.01;
           this.vy += forceDirectionY * force * 0.01;
           
           // Cap speed
           const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
           if (speed > 1.5) {
               this.vx = (this.vx / speed) * 1.5;
               this.vy = (this.vy / speed) * 1.5;
           }
        }
      }

      draw() {
        if (!ctx) return;
        
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Determine color based on activity
        let currentColor = this.baseColor;
        let isActive = false;

        if (dist < mouseDistance) {
            currentColor = '#00ff00'; // Active bright green
            isActive = true;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = currentColor;
        
        // Add glow to the particle if active
        if (isActive) {
            ctx.shadowBlur = 10;
            ctx.shadowColor = '#00ff00';
        } else {
            ctx.shadowBlur = 0;
        }
        
        ctx.fill();
        ctx.shadowBlur = 0; // Reset shadow for next operations

        // Draw Laser to Mouse
        if (isActive) {
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(mouse.x, mouse.y);
            
            // Laser calculation
            // Use full intensity (1.0) when close, fading out
            const alpha = (1 - (dist / mouseDistance));
            
            ctx.save();
            
            // Additive blending makes overlapping lasers SUPER bright
            ctx.globalCompositeOperation = 'lighter';
            
            // Add a glow effect
            ctx.shadowBlur = 15;
            ctx.shadowColor = '#00ff00';
            
            // Bright neon green - Pure green
            ctx.strokeStyle = `rgba(0, 255, 0, ${alpha})`;
            ctx.lineWidth = 2; 
            
            ctx.stroke();
            ctx.restore();
        }
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

      particles.forEach(p => {
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
    }

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none opacity-80" />;
};

export default ParticleSwarm;