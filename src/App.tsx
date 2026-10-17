import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { HowItWorks } from './components/HowItWorks';
import { BentoFeatures } from './components/BentoFeatures';
import { ObsOverlayShowcase } from './components/ObsOverlayShowcase';
import { FoundingStreamer } from './components/FoundingStreamer';
import { FaqSection } from './components/FaqSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#040805] text-[#EDEDED] relative overflow-x-hidden selection:bg-[#53FC18] selection:text-black">
      {/* Subtle cyber grid ambient background */}
      <div className="fixed inset-0 cyber-grid pointer-events-none opacity-40 z-0" />
      
      {/* Top ambient radial spotlight */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(83,252,24,0.12),transparent_70%)] pointer-events-none z-0" />

      {/* Main content wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <HeroSection />
          <HowItWorks />
          <BentoFeatures />
          <ObsOverlayShowcase />
          <FoundingStreamer />
          <FaqSection />
          <CtaBanner />
        </main>
        <Footer />
      </div>
    </div>
  );
}
