import React from 'react';
import { ShieldCheck, Sparkles } from 'lucide-react';
import { ChatCueLogo } from './ChatCueLogo';
import { MainCtaButton } from './MainCtaButton';

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#0C1A0F] to-[#050C07] p-8 sm:p-14 text-center shadow-[0_0_80px_rgba(0,0,0,0.8)]">
        {/* Soft glow circle behind */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#53FC18]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          <div className="flex justify-center">
            <ChatCueLogo size="xl" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight text-balance leading-tight">
            Stop scrolling back through chat.
          </h2>

          <p className="text-sm sm:text-base text-neutral-300 max-w-xl mx-auto leading-relaxed">
            Built for YouTube, Kick and Twitch streamers who want to answer top questions in seconds and keep viewers hooked.
          </p>

          <div className="pt-2 flex justify-center">
            <MainCtaButton size="lg" />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400 pt-3">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#53FC18]" />
              <span>No registration required</span>
            </div>
            <span aria-hidden="true" className="text-white/20">·</span>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#53FC18]" />
              <span>Works with YouTube, Kick & Twitch</span>
            </div>
            <span aria-hidden="true" className="text-white/20">·</span>
            <span>Zero API keys</span>
          </div>
        </div>
      </div>
    </section>
  );
};
