import React from 'react';
import { ArrowUpRight, Chrome, Sparkles } from 'lucide-react';
import { CHROME_STORE_URL } from '../constants';

export const FoundingStreamer: React.FC = () => {
  return (
    <section id="founding" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
      <div className="bg-[#08120B] border border-[#53FC18]/25 rounded-2xl p-8 sm:p-12 shadow-[0_0_40px_rgba(83,252,24,0.06)] relative overflow-hidden">
        {/* Ambient subtle glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#53FC18]/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#53FC18]/10 border border-[#53FC18]/25 text-[#53FC18] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Early Access</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Be a Founding Streamer
          </h2>

          <p className="text-sm sm:text-base text-neutral-300 max-w-xl mx-auto leading-relaxed">
            ChatCue is new. We&apos;re onboarding our first streamers and building it with their feedback, free.
          </p>

          <div className="pt-2 flex justify-center">
            <a
              href={CHROME_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-bold text-black bg-[#53FC18] hover:bg-[#70FF3F] rounded-xl transition-all duration-200 shadow-[0_0_25px_rgba(83,252,24,0.35)] hover:shadow-[0_0_35px_rgba(83,252,24,0.6)] hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
            >
              <Chrome className="w-4 h-4 stroke-[2.5]" />
              <span>Add to Chrome (Free)</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
