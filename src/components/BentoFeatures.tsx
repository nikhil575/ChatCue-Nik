import React, { useState } from 'react';
import { 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Languages, 
  Coins, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  Globe2,
  Clock,
  Users
} from 'lucide-react';
import { CHROME_STORE_URL } from '../constants';

export const BentoFeatures: React.FC = () => {
  const [activeLangTab, setActiveLangTab] = useState<'spanish' | 'english' | 'portuguese' | 'hinglish'>('spanish');

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#53FC18]/10 border border-[#53FC18]/25 text-[#53FC18] text-xs font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Real Streamer-Engineered Architecture</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight text-balance">
          Every Feature Mapped Directly to Your Live Broadcast
        </h2>
        <p className="mt-4 text-base sm:text-lg text-neutral-400">
          Built to solve real streaming headaches across YouTube and Kick, in any language worldwide.
        </p>
      </div>

      {/* Asymmetric Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Card 1: CHAT WANTS NOW & Request Clustering (Col span 7) */}
        <div className="md:col-span-7 bg-[#08120B] border border-[#53FC18]/20 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#53FC18]/40 transition-colors shadow-sm">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-[#53FC18] tracking-wider uppercase font-bold">
                01. CHAT WANTS NOW Engine
              </span>
              <Layers className="w-5 h-5 text-[#53FC18]" />
            </div>

            <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-3">
              Requests Appear in 15s. Drop Off After 3 Quiet Minutes.
            </h3>

            <p className="text-sm text-neutral-300 leading-relaxed mb-6">
              ChatCue detects the instant audience sentiment shifts. When viewers start demanding reactions, song names, or game switches, they appear in your &ldquo;CHAT WANTS NOW&rdquo; box with real-time repeat counts.
            </p>

            {/* Visual replica of CHAT WANTS NOW */}
            <div className="bg-black/60 border border-neutral-800 rounded-xl p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#53FC18] font-mono uppercase">
                  CHAT WANTS NOW
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[#53FC18] text-black font-bold text-[10px] font-mono">
                  chat: divertido
                </span>
              </div>

              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-3 py-1 rounded-lg bg-neutral-900 border border-neutral-700 text-neutral-200">
                  reacciones y risas <strong className="text-[#53FC18] font-mono ml-1">5</strong>
                </span>
                <span className="px-3 py-1 rounded-lg bg-neutral-900 border border-neutral-700 text-neutral-200">
                  mencionando a farfadox <strong className="text-[#53FC18] font-mono ml-1">3</strong>
                </span>
                <span className="px-3 py-1 rounded-lg bg-neutral-900 border border-neutral-700 text-neutral-200">
                  chistes de wachas <strong className="text-[#53FC18] font-mono ml-1">3</strong>
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-[#53FC18]">
            <CheckCircle2 className="w-4 h-4" />
            <span>Stops chat spam before it derails your focus</span>
          </div>
        </div>

        {/* Card 2: QUESTIONS Queue & 3-Min Tick Off (Col span 5) */}
        <div className="md:col-span-5 bg-[#08120B] border border-neutral-800 hover:border-[#53FC18]/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-colors">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-[#52E3C2] tracking-wider uppercase font-bold">
                02. Questions (3 Min Queue)
              </span>
              <Clock className="w-5 h-5 text-[#52E3C2]" />
            </div>

            <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-3">
              Tick Off Questions As You Answer Them Live
            </h3>

            <p className="text-sm text-neutral-300 leading-relaxed mb-6">
              Viewer questions from the last 3 minutes sit in your queue. Once you answer on stream, hit the checkmark to dismiss it and remove it from your OBS HUD.
            </p>

            <div className="space-y-2">
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-black/50 border border-neutral-800 text-xs">
                <div>
                  <span className="font-bold text-white">KS_Laure_912:</span> &ldquo;¿sensibilidad en dpi?&rdquo;
                  <span className="text-[#53FC18] font-mono ml-2 font-bold">×4</span>
                </div>
                <div className="w-5 h-5 rounded bg-[#53FC18]/20 text-[#53FC18] flex items-center justify-center font-bold text-[10px]">
                  ✓
                </div>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-black/50 border border-neutral-800 text-xs">
                <div>
                  <span className="font-bold text-white">CyberSam:</span> &ldquo;what audio mixer is that?&rdquo;
                  <span className="text-[#53FC18] font-mono ml-2 font-bold">×3</span>
                </div>
                <div className="w-5 h-5 rounded border border-neutral-700 text-neutral-500 flex items-center justify-center text-[10px]">
                  ·
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-neutral-800/80 text-xs text-neutral-400">
            Never leaves chat waiting or asking the same question 20 times.
          </div>
        </div>

        {/* Card 3: Worldwide Multi-Language & Slang AI (Col span 7) */}
        <div className="md:col-span-7 bg-[#08120B] border border-[#53FC18]/20 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#53FC18]/40 transition-colors">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-[#53FC18] tracking-wider uppercase font-bold">
                03. Worldwide Multi-Language & Slang AI
              </span>
              <Globe2 className="w-5 h-5 text-[#53FC18]" />
            </div>

            <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-3">
              Understands Regional Gaming Slang Across All Continents
            </h3>

            <p className="text-sm text-neutral-300 leading-relaxed mb-4">
              ChatCue isn&apos;t just for English or Hinglish—it natively supports Spanish (ES/LATAM), Portuguese (Brazil), German, French, Japanese, and esports colloquialisms like &ldquo;SAJ&rdquo;, &ldquo;xdd&rdquo;, &ldquo;guacha&rdquo;, &ldquo;farfadox&rdquo;, &ldquo;mira code&rdquo;, and &ldquo;op clutch&rdquo;.
            </p>

            {/* Multilingual Interactive Showcase Tabs */}
            <div className="bg-black/60 border border-neutral-800 rounded-xl p-3.5 space-y-3">
              <div className="flex flex-wrap items-center gap-1.5 pb-2 border-b border-neutral-800">
                {(['spanish', 'english', 'portuguese', 'hinglish'] as const).map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveLangTab(tab)}
                    className={`px-3 py-1 text-xs rounded-md font-semibold transition-colors uppercase ${
                      activeLangTab === tab
                        ? 'bg-[#53FC18] text-black'
                        : 'text-neutral-400 hover:text-white bg-neutral-900'
                    }`}
                  >
                    {tab === 'spanish' ? '🇪🇸 Spanish / LATAM' : tab === 'english' ? '🇺🇸 English' : tab === 'portuguese' ? '🇧🇷 Portuguese' : '🇮🇳 Hinglish'}
                  </button>
                ))}
              </div>

              <div className="text-xs space-y-1.5">
                {activeLangTab === 'spanish' && (
                  <div>
                    <div className="text-neutral-300 font-mono text-[11px]">
                      <span className="text-[#53FC18] font-bold">Live Input:</span> &ldquo;nestor3359: te va conseguir guacha // fernandoGR20: xdd ×8&rdquo;
                    </div>
                    <div className="text-neutral-400 text-[11px] pt-1">
                      ↳ <span className="text-white font-medium">Categorized as:</span> [CHAT WANTS NOW: reacciones y risas / chistes de wachas]
                    </div>
                  </div>
                )}
                {activeLangTab === 'english' && (
                  <div>
                    <div className="text-neutral-300 font-mono text-[11px]">
                      <span className="text-[#53FC18] font-bold">Live Input:</span> &ldquo;drop spotify playlist link please // what song is playing?&rdquo;
                    </div>
                    <div className="text-neutral-400 text-[11px] pt-1">
                      ↳ <span className="text-white font-medium">Categorized as:</span> [CHAT WANTS NOW: drop playlist link (x18)]
                    </div>
                  </div>
                )}
                {activeLangTab === 'portuguese' && (
                  <div>
                    <div className="text-neutral-300 font-mono text-[11px]">
                      <span className="text-[#53FC18] font-bold">Live Input:</span> &ldquo;qual é o código da sua mira no jogo? // manda salve pro Brasil!&rdquo;
                    </div>
                    <div className="text-neutral-400 text-[11px] pt-1">
                      ↳ <span className="text-white font-medium">Categorized as:</span> [QUESTIONS: Crosshair & Settings (x6)]
                    </div>
                  </div>
                )}
                {activeLangTab === 'hinglish' && (
                  <div>
                    <div className="text-neutral-300 font-mono text-[11px]">
                      <span className="text-[#53FC18] font-bold">Live Input:</span> &ldquo;bhai sensitivity kya hai mouse ki? // op gameplay tha bro&rdquo;
                    </div>
                    <div className="text-neutral-400 text-[11px] pt-1">
                      ↳ <span className="text-white font-medium">Categorized as:</span> [QUESTIONS: Mouse Sensitivity (x7)]
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between pt-4 border-t border-neutral-800">
            <span className="text-xs text-neutral-400">
              Zero training or manual regex required. Ready out of the box.
            </span>
            <a
              href={CHROME_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-[#53FC18] hover:underline inline-flex items-center gap-1"
            >
              Add to Chrome <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Card 4: FLAGGED & PEOPLE Radar (Col span 5) */}
        <div className="md:col-span-5 bg-[#08120B] border border-neutral-800 hover:border-[#53FC18]/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-colors">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-red-400 tracking-wider uppercase font-bold">
                04. FLAGGED & PEOPLE RADAR
              </span>
              <Users className="w-5 h-5 text-red-400" />
            </div>

            <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-3">
              Flags Never Delete Anything; You and Mods Decide
            </h3>

            <p className="text-sm text-neutral-300 leading-relaxed mb-6">
              Keeps dangerous or toxic comments isolated without muting valid banter. Tracks your most active chatters, first-time viewers, and high-value Super Chats.
            </p>

            <div className="space-y-2">
              <div className="p-2.5 rounded-lg bg-red-950/20 border border-red-800/40 text-xs">
                <div className="flex justify-between font-bold text-red-300 text-[11px]">
                  <span>FLAGGED ISOLATION</span>
                  <span className="font-mono text-neutral-400">Flagged 2x</span>
                </div>
                <div className="text-neutral-400 text-[10px] mt-0.5">
                  Flags abusive spammers while preserving moderation autonomy.
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-black/60 border border-neutral-800 text-xs">
                <div className="flex justify-between font-bold text-white text-[11px]">
                  <span>PEOPLE: MOST ACTIVE</span>
                  <span className="text-[#53FC18] font-mono">18 msgs</span>
                </div>
                <div className="text-neutral-400 text-[10px] mt-0.5">
                  Identifies regular community members and top supporters.
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-[#53FC18]">
            <CheckCircle2 className="w-4 h-4" />
            <span>Zero CPU hit on OBS or gaming PC</span>
          </div>
        </div>
      </div>
    </section>
  );
};
