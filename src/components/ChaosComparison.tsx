import React from 'react';
import { XCircle, CheckCircle2, AlertTriangle, Sparkles, TrendingUp, HeartHandshake } from 'lucide-react';
import { CHROME_STORE_URL } from '../constants';

export const ChaosComparison: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#53FC18]/10 border border-[#53FC18]/25 text-[#53FC18] text-xs font-semibold mb-4">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>Before vs After</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight text-balance">
          Why Stream With ChatCue
        </h2>
        <p className="mt-4 text-base sm:text-lg text-neutral-400">
          The difference between a stressed streamer squinting at an unreadable scroll, and an interactive broadcast where the community feels heard.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* Without ChatCue */}
        <div className="bg-[#120808] border border-red-900/40 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-red-400 font-bold text-sm uppercase tracking-wider mb-4">
              <XCircle className="w-5 h-5 text-red-500" />
              <span>Streaming with Raw Chat Alone</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Chat Chaos & Missed Super Chats
            </h3>

            <ul className="space-y-4 text-sm text-neutral-300">
              <li className="flex items-start gap-3">
                <span className="text-red-500 shrink-0 font-bold">✕</span>
                <span>
                  <strong className="text-white">Messages fly by in milliseconds:</strong> Real viewer questions get buried while concentrating on gameplay.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 shrink-0 font-bold">✕</span>
                <span>
                  <strong className="text-white">Viewers feel completely ignored:</strong> 40 people ask for your music playlist, get no answer, and eventually leave the stream.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 shrink-0 font-bold">✕</span>
                <span>
                  <strong className="text-white">Buried Super Chats & Tips:</strong> A $25 tip scrolls off screen during a gunfight and you forget to shout them out.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 shrink-0 font-bold">✕</span>
                <span>
                  <strong className="text-white">Toxicity ruins focus:</strong> A toxic troll spams insults that catch your eye right in the middle of a tournament clutch.
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-4 border-t border-red-900/30 text-xs text-red-400/80 italic">
            Result: Exhausted streamer, frustrated chatters, lower viewer retention.
          </div>
        </div>

        {/* With ChatCue */}
        <div className="bg-[#08150C] border border-[#53FC18]/40 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-[0_0_35px_rgba(83,252,24,0.12)] relative overflow-hidden">
          {/* Subtle green ambient accent glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#53FC18]/10 rounded-full blur-3xl pointer-events-none" />

          <div>
            <div className="flex items-center gap-2 text-[#53FC18] font-bold text-sm uppercase tracking-wider mb-4">
              <CheckCircle2 className="w-5 h-5 text-[#53FC18]" />
              <span>Streaming with ChatCue</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Instant Clarity, Nothing Missed
            </h3>

            <ul className="space-y-4 text-sm text-neutral-300">
              <li className="flex items-start gap-3">
                <span className="text-[#53FC18] shrink-0 font-bold">✓</span>
                <span>
                  <strong className="text-white">Clean AI Aggregation:</strong> 50 chatters asking for DPI are bundled into 1 actionable card with live count (x50).
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#53FC18] shrink-0 font-bold">✓</span>
                <span>
                  <strong className="text-white">Interactive OBS Overlay:</strong> Viewers see their requests appear on stream, motivating more chat interaction.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#53FC18] shrink-0 font-bold">✓</span>
                <span>
                  <strong className="text-white">Tips Never Get Lost:</strong> Super Chats and tips get their own filter and People tab, so you can thank everyone after a fight.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#53FC18] shrink-0 font-bold">✓</span>
                <span>
                  <strong className="text-white">Flagged Panel:</strong> Abusive messages and repeat offenders collect in their own Flagged panel. Nothing is deleted; you and your mods decide.
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-4 border-t border-[#53FC18]/25 flex items-center justify-between">
            <span className="text-xs font-semibold text-[#53FC18]">
              Result: Effortless multi-stream chat mastery.
            </span>
            <a
              href={CHROME_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-black bg-[#53FC18] hover:bg-[#70FF3F] px-3 py-1.5 rounded-lg transition-colors"
            >
              Get Free
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
