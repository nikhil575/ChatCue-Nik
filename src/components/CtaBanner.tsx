import React from 'react';
import { ShieldCheck, Sparkles, Chrome, ArrowUpRight } from 'lucide-react';
import { ChatCueLogo } from './ChatCueLogo';
import { PhoneNote } from './HeroSection';
import { CHROME_STORE_URL } from '../constants';

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
            <a
              href={CHROME_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-extrabold text-black bg-[#53FC18] hover:bg-[#70FF3F] rounded-xl transition-all duration-200 shadow-[0_0_30px_rgba(83,252,24,0.4)] hover:shadow-[0_0_40px_rgba(83,252,24,0.65)] hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
            >
              <Chrome className="w-5 h-5 stroke-[2.5]" />
              <span>Add to Chrome, it's free</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>

          <PhoneNote />

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400 pt-3">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#53FC18]" />
              <span>No account needed</span>
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
