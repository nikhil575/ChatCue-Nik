import React, { useState } from 'react';
import { Monitor, Sparkles } from 'lucide-react';
import { HERO_IMAGE } from '../constants';

export const ObsOverlayShowcase: React.FC = () => {
  const [platform, setPlatform] = useState<'kick' | 'youtube' | 'twitch'>('kick');

  const platformStyles = {
    kick: {
      accent: '#53FC18',
      textAccent: 'text-[#53FC18]',
      bgAccent: 'bg-[#53FC18]/20',
      border: 'border-[#53FC18]/50',
      shadow: 'shadow-[0_0_30px_rgba(83,252,24,0.25)]',
      label: 'Kick Green'
    },
    youtube: {
      accent: '#FF0033',
      textAccent: 'text-red-500',
      bgAccent: 'bg-red-500/20',
      border: 'border-red-500/50',
      shadow: 'shadow-[0_0_30px_rgba(255,0,51,0.25)]',
      label: 'YouTube Red'
    },
    twitch: {
      accent: '#9146FF',
      textAccent: 'text-[#A970FF]',
      bgAccent: 'bg-[#9146FF]/20',
      border: 'border-purple-500/50',
      shadow: 'shadow-[0_0_30px_rgba(145,70,255,0.25)]',
      label: 'Twitch Purple'
    }
  };

  const activeStyle = platformStyles[platform];

  return (
    <section id="obs-overlay" className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column (5 cols): Description and Platform Toggle */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#53FC18]/10 border border-[#53FC18]/30 text-[#53FC18] text-xs font-semibold">
            <Monitor className="w-3.5 h-3.5 text-[#53FC18]" />
            <span>Works with OBS & Streamlabs</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight text-balance">
            Show viewers their requests on stream
          </h2>

          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            Add a transparent Browser Source that shows your top 3 chat requests on stream. Viewers see their requests up there and know you&apos;re reading chat.
          </p>

          {/* Platform Toggle */}
          <div className="bg-[#0A120D] border border-neutral-800 rounded-xl p-5 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                Platform: Kick / YouTube / Twitch
              </span>
              <div className="flex items-center gap-1.5 bg-black/60 p-1 rounded-lg border border-neutral-800">
                {(['kick', 'youtube', 'twitch'] as const).map(p => (
                  <button
                    key={p}
                    onClick={() => setPlatform(p)}
                    className={`px-3 py-1 text-xs font-bold rounded capitalize transition-all ${
                      platform === p
                        ? p === 'kick'
                          ? 'bg-[#53FC18] text-black shadow-sm'
                          : p === 'youtube'
                          ? 'bg-[#FF0033] text-white shadow-sm'
                          : 'bg-[#9146FF] text-white shadow-sm'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
            <p className="text-[11px] text-neutral-400">
              Accent color follows the platform automatically: Kick green (#53fc18), YouTube red (#ff0033), Twitch purple (#9146ff).
            </p>
          </div>

          {/* Overlay Link Notice */}
          <div className="p-4 rounded-xl bg-black/60 border border-neutral-800 text-xs text-neutral-400 leading-relaxed">
            <p className="text-neutral-300 font-medium">
              Your personal overlay link is on your ChatCue dashboard &rarr; click &ldquo;Copy OBS overlay link&rdquo;.
            </p>
            <p className="text-[11px] text-neutral-400 mt-2">
              Shows the top 3 chat requests live with counts. Questions are kept on your private dashboard.
            </p>
          </div>
        </div>

        {/* Right Column (7 cols): Live Visual OBS Canvas Simulation */}
        <div className="lg:col-span-7">
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-[#53FC18]/30 shadow-[0_0_40px_rgba(83,252,24,0.15)] bg-black">
            {/* Streamer backdrop representing live broadcast game feed */}
            <img
              src={HERO_IMAGE}
              alt="Stream broadcast backdrop"
              className="w-full h-full object-cover filter brightness-75"
              referrerPolicy="no-referrer"
            />

            {/* Dark overlay scrim to simulate broadcast frame */}
            <div className="absolute inset-0 bg-black/40" />

            {/* LIVE watermark in top-left */}
            <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-red-500/40">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                OBS STUDIO PREVIEW
              </span>
            </div>

            {/* The Active OBS Browser Source Widget mounted on stream screen */}
            <div
              className={`absolute top-6 right-6 max-w-xs w-full p-4 rounded-xl backdrop-blur-md border transition-all duration-300 ${activeStyle.border} ${activeStyle.shadow} bg-black/85`}
            >
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-neutral-800">
                <div className="flex items-center gap-1.5">
                  <Sparkles className={`w-3.5 h-3.5 ${activeStyle.textAccent}`} />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-white font-display">
                    TOP CHAT REQUESTS
                  </span>
                </div>
                <span className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded ${activeStyle.bgAccent} ${activeStyle.textAccent}`}>
                  LIVE
                </span>
              </div>

              {/* Strict Top 3 chat requests list */}
              <div className="space-y-2">
                {[
                  { text: 'reacciones y risas', count: 18 },
                  { text: 'Song name / playlist link', count: 14 },
                  { text: 'mencionando a farfadox', count: 9 }
                ].map((item, i) => (
                  <div
                    key={item.text}
                    className="flex items-center justify-between gap-2 p-2 rounded-lg bg-black/60 border border-neutral-800 text-xs"
                  >
                    <div className="flex items-center gap-2 truncate">
                      <span className={`font-mono font-extrabold text-[11px] ${activeStyle.textAccent}`}>
                        #{i + 1}
                      </span>
                      <span className="text-white truncate font-medium text-[11px]">
                        {item.text}
                      </span>
                    </div>
                    <span className={`font-mono font-bold text-[10px] px-1.5 py-0.5 rounded shrink-0 ${activeStyle.bgAccent} ${activeStyle.textAccent}`}>
                      {item.count}x
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom info pill on OBS canvas */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] text-neutral-400 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-neutral-800">
              <span>Resolution: 1920x1080 · 60 FPS</span>
              <span className="text-[#53FC18] font-medium">ChatCue Browser Source Active</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
