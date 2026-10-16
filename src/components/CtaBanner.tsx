import React from 'react';
import { ArrowUpRight, Chrome, ShieldCheck, Sparkles } from 'lucide-react';
import { CHROME_STORE_URL } from '../constants';
import { ChatCueLogo } from './ChatCueLogo';

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-3xl overflow-hidden border border-[#53FC18]/30 bg-gradient-to-b from-[#0C1A0F] to-[#050C07] p-8 sm:p-14 text-center shadow-[0_0_80px_rgba(83,252,24,0.18)]">
        {/* Glow circle behind */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#53FC18]/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          <div className="flex justify-center">
            <ChatCueLogo size="xl" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight text-balance leading-tight">
            Ready to Turn Chat Chaos Into Stream Gold?
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 max-w-xl mx-auto">
            Stop losing donations in the scroll. Join Kick and YouTube streamers who answer top questions in seconds and keep viewers hooked.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={CHROME_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-base sm:text-lg font-extrabold text-black bg-[#53FC18] hover:bg-[#70FF3F] rounded-xl transition-all duration-200 shadow-[0_0_35px_rgba(83,252,24,0.5)] hover:shadow-[0_0_50px_rgba(83,252,24,0.8)] hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              <Chrome className="w-5 h-5 stroke-[2.5]" />
              <span>Add ChatCue to Chrome (Free)</span>
              <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400 pt-3">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#53FC18]" />
              <span>No Registration Required</span>
            </div>
            <span aria-hidden="true" className="text-neutral-700">·</span>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#53FC18]" />
              <span>Works with YouTube & Kick</span>
            </div>
            <span aria-hidden="true" className="text-neutral-700">·</span>
            <span>Zero API Keys</span>
          </div>
        </div>
      </div>
    </section>
  );
};
