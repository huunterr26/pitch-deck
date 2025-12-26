import React, { useRef, useState } from 'react';
import SlideLayout from '../SlideLayout';
import { Play, Pause, Volume2, VolumeX, Maximize, Monitor, Zap } from 'lucide-react';

const DemoSlide: React.FC<{ slideNum: number; total: number }> = ({ slideNum, total }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <SlideLayout title="Product Demo" subtitle="Building the Future" slideNumber={slideNum} totalSlides={total}>
      <div className="flex flex-col h-full gap-6">

        {/* Content Header */}
        <div className="flex items-center justify-between">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold text-white mb-2">Watch Ghost.OS.X in Action</h3>
            <p className="text-slate-400">Experience a high-fidelity workflow as Ghost transforms concepts into production-ready deployments with unprecedented speed.</p>
          </div>
        </div>

        {/* Video Container */}
        <div className="flex-1 bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl relative flex items-center justify-center shadow-2xl overflow-hidden group">

          {/* Video Element */}
          <video
            ref={videoRef}
            className="w-full h-full object-contain"
            src="/Screen Recording 2025-12-25 212119.mp4"
            muted={isMuted}
            loop
            playsInline
            onClick={togglePlay}
          />

          {/* Premium Glow Overlay */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

          {/* Play Overlay (shown when paused) */}
          {!isPlaying && (
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center cursor-pointer transition-all duration-500"
              onClick={togglePlay}
            >
              <div className="relative group/btn">
                <div className="absolute -inset-4 bg-brand-accent/30 rounded-full blur-xl opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:scale-110 transition-all duration-300 relative z-10">
                  <Play size={40} className="text-white ml-2" fill="white" />
                </div>
              </div>
              <div className="absolute bottom-12 flex flex-col items-center gap-2">
                <div className="flex items-center gap-2 text-brand-accent font-mono text-xs tracking-[0.2em] uppercase">
                  <Monitor size={14} />
                  <span>Click to Initialize Demo</span>
                </div>
              </div>
            </div>
          )}

          {/* Video Controls */}
          <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 transition-all duration-500 ${isPlaying ? 'opacity-0 group-hover:opacity-100 translate-y-0' : 'opacity-100 translate-y-0'}`}>
            <div className="flex items-center gap-6">
              <button onClick={togglePlay} className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-colors border border-white/10">
                {isPlaying ? <Pause size={20} className="text-white" /> : <Play size={20} className="text-white" />}
              </button>

              <button onClick={toggleMute} className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-colors border border-white/10">
                {isMuted ? <VolumeX size={20} className="text-white" /> : <Volume2 size={20} className="text-white" />}
              </button>

              <div className="flex-1 flex flex-col gap-1">
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-accent w-[65%] shadow-[0_0_10px_rgba(0,242,255,0.5)]"></div>
                </div>
              </div>

              <button onClick={toggleFullscreen} className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-colors border border-white/10">
                <Maximize size={20} className="text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Frontend', value: 'React 19 + Vite' },
            { label: 'Backend', value: 'Node.js Edge' },
            { label: 'Security', value: 'Vulnerability Scan' },
            { label: 'Deployment', value: 'Instant Vercel' }
          ].map((f, i) => (
            <div key={i} className="bg-white/5 border border-white/5 p-4 rounded-2xl">
              <span className="text-[10px] text-slate-500 uppercase tracking-widest">{f.label}</span>
              <p className="text-white font-bold text-sm">{f.value}</p>
            </div>
          ))}
        </div>

      </div>
    </SlideLayout>
  );
};

export default DemoSlide;