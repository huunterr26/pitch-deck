import React, { useState, useEffect, useCallback } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import ParticleSwarm from './ParticleSwarm';
import TitleSlide from './slides/01_TitleSlide';
import ProblemSlide from './slides/02_ProblemSlide';
import SolutionSlide from './slides/03_SolutionSlide';
import DemoSlide from './slides/04_DemoSlide';
import AgentSystemSlide from './slides/05_AgentSystemSlide';
import MarketSlide from './slides/06_MarketSlide';
import CompetitionSlide from './slides/07_CompetitionSlide';
import BusinessModelSlide from './slides/08_BusinessModelSlide';
import TractionSlide from './slides/09_TractionSlide';
import TeamSlide from './slides/10_TeamSlide';
import AskSlide from './slides/11_AskSlide';
import ClosingSlide from './slides/12_ClosingSlide';

const Deck: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    TitleSlide,
    ProblemSlide,
    SolutionSlide,
    DemoSlide,
    AgentSystemSlide,
    MarketSlide,
    CompetitionSlide,
    BusinessModelSlide,
    TractionSlide,
    TeamSlide,
    AskSlide,
    ClosingSlide
  ];

  const totalSlides = slides.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide(curr => Math.min(curr + 1, totalSlides - 1));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(curr => Math.max(curr - 1, 0));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="w-screen h-screen bg-black text-white flex flex-col relative font-sans overflow-hidden">
      {/* Global Brand Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/brand-background.png"
          alt="Ghost Brand Background"
          className="w-full h-full object-cover opacity-30 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60"></div>
      </div>

      {/* Global Particle Layer - Subtle */}
      <div className="absolute inset-0 z-1 opacity-40">
        <ParticleSwarm />
      </div>

      {/* Viewport */}
      <div className="flex-1 overflow-hidden relative z-10 flex flex-col">
        <CurrentSlideComponent slideNum={currentSlide + 1} total={totalSlides} />
      </div>

      {/* Navigation Controls - Bottom Right */}
      <div className="absolute bottom-8 right-8 z-50 flex items-center gap-6 text-brand-accent text-sm font-medium glass-panel px-6 py-3 rounded-lg border-l-4 border-l-brand-accent shadow-2xl backdrop-blur-xl bg-black/40 border border-white/10">
        <div className="flex items-center gap-3">
          <span className="text-white font-bold tracking-wide">GHOST.OS.X</span>
          <span className="text-brand-accent/50">|</span>
          <span className="text-brand-accent">Q1 2026</span>
        </div>

        <div className="h-4 w-px bg-brand-accent/30"></div>

        <div className="flex items-center gap-2 font-mono text-brand-accent">
          <span>{currentSlide + 1}</span>
          <span className="text-white">/</span>
          <span>{totalSlides}</span>
        </div>

        <div className="flex items-center gap-2 ml-2">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="p-1.5 hover:bg-brand-accent/20 rounded-full hover:text-white disabled:opacity-30 text-brand-accent transition-all active:scale-95"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            className="p-1.5 hover:bg-brand-accent/20 rounded-full hover:text-white disabled:opacity-30 text-brand-accent transition-all active:scale-95"
            aria-label="Next Slide"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Progress Bar - Cyan */}
      <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gray-900 z-50">
        <div
          className="h-full bg-brand-accent transition-all duration-500 ease-out shadow-[0_0_10px_rgba(0,242,255,0.8)]"
          style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default Deck;