import React, { useRef, useState } from 'react';
import SlideLayout from '../SlideLayout';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';

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
    <SlideLayout title="Live Demo" subtitle="vAi in Action" slideNumber={slideNum} totalSlides={total}>
      <div className="flex flex-col h-full gap-4">

        {/* Video Container */}
        <div className="flex-1 bg-black border border-slate-700 relative flex items-center justify-center shadow-2xl overflow-hidden group">

          {/* Video Element */}
          <video
            ref={videoRef}
            className="w-full h-full object-contain"
            src="/demo-video.mp4"
            muted={isMuted}
            loop
            playsInline
            onClick={togglePlay}
          />

          {/* Play Overlay (shown when paused) */}
          {!isPlaying && (
            <div
              className="absolute inset-0 bg-black/60 flex items-center justify-center cursor-pointer transition-opacity"
              onClick={togglePlay}
            >
              <div className="w-24 h-24 rounded-full bg-brand-accent/20 border-2 border-brand-accent flex items-center justify-center hover:bg-brand-accent/30 transition-all hover:scale-110">
                <Play size={40} className="text-brand-accent ml-2" fill="currentColor" />
              </div>
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-brand-accent font-mono text-sm tracking-widest uppercase">
                Click to Play Demo
              </div>
            </div>
          )}

          {/* Video Controls (shown on hover when playing) */}
          <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 transition-opacity ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
            <div className="flex items-center gap-4">
              <button
                onClick={togglePlay}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                {isPlaying ? (
                  <Pause size={20} className="text-white" />
                ) : (
                  <Play size={20} className="text-white" />
                )}
              </button>

              <button
                onClick={toggleMute}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                {isMuted ? (
                  <VolumeX size={20} className="text-white" />
                ) : (
                  <Volume2 size={20} className="text-white" />
                )}
              </button>

              <div className="flex-1" />

              <button
                onClick={toggleFullscreen}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <Maximize size={20} className="text-white" />
              </button>
            </div>
          </div>

          {/* Corner decorations */}
          <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-brand-accent/50 pointer-events-none" />
          <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-brand-accent/50 pointer-events-none" />
          <div className="absolute bottom-16 left-4 w-4 h-4 border-b-2 border-l-2 border-brand-accent/50 pointer-events-none" />
          <div className="absolute bottom-16 right-4 w-4 h-4 border-b-2 border-r-2 border-brand-accent/50 pointer-events-none" />
        </div>

        {/* Status Footer */}
        <div className="h-16 bg-slate-900/50 border border-slate-700 flex items-center px-6 gap-8 backdrop-blur-sm">
          <div className="flex flex-col">
            <span className="text-[10px] text-slate-500 uppercase tracking-widest">Demo</span>
            <span className="text-white font-mono">vAi Builder Platform</span>
          </div>
          <div className="h-8 w-px bg-slate-700" />
          <div className="flex flex-col">
            <span className="text-[10px] text-slate-500 uppercase tracking-widest">Recorded</span>
            <span className="text-slate-300 font-mono">Dec 2025</span>
          </div>
          <div className="flex-1 flex justify-end">
            <div className="bg-brand-accent/10 border border-brand-accent/50 px-4 py-2 text-brand-accent text-xs font-bold tracking-widest uppercase">
              Product Demo
            </div>
          </div>
        </div>

      </div>
    </SlideLayout>
  );
};

export default DemoSlide;