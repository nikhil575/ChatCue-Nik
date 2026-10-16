import React, { useState } from 'react';
import { Monitor, Copy, Check, Sparkles, Layers, Sliders, Palette } from 'lucide-react';
import { HERO_IMAGE } from '../constants';

export const ObsOverlayShowcase: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState<'kick-green' | 'dark-stealth' | 'glass-minimal'>('kick-green');
  const [displayCount, setDisplayCount] = useState<number>(3);

  const mockUrl = 'https://chatcue.app/overlay/v1?token=cc_live_stream_99';

  const handleCopy = () => {
    navigator.clipboard.writeText(mockUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="obs-overlay" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column (5 cols): Description and Customizer */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#53FC18]/10 border border-[#53FC18]/25 text-[#53FC18] text-xs font-semibold">
            <Monitor className="w-3.5 h-3.5" />
            <span>OBS & Streamlabs Native Integration</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight text-balance">
            Show Viewers Their Requests Matter on Stream
          </h2>

          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            Generate a transparent Browser Source overlay that displays the Top 3 chat requests right on your stream screen. When viewers see their questions hit the leaderboard, engagement explodes.
          </p>

          {/* Overlay Customizer Controls */}
          <div className="bg-[#0A120D] border border-neutral-800 rounded-xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-300 flex items-center gap-2">
                <Palette className="w-3.5 h-3.5 text-[#53FC18]" />
                HUD Color Accent
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedTheme('kick-green')}
                  className={`w-6 h-6 rounded-full bg-[#53FC18] border-2 transition-all ${
                    selectedTheme === 'kick-green' ? 'border-white scale-110' : 'border-transparent opacity-60'
                  }`}
                  title="Kick Neon Lime"
                />
                <button
                  onClick={() => setSelectedTheme('dark-stealth')}
                  className={`w-6 h-6 rounded-full bg-neutral-700 border-2 transition-all ${
                    selectedTheme === 'dark-stealth' ? 'border-white scale-110' : 'border-transparent opacity-60'
                  }`}
                  title="Dark Stealth"
                />
                <button
                  onClick={() => setSelectedTheme('glass-minimal')}
                  className={`w-6 h-6 rounded-full bg-neutral-300 border-2 transition-all ${
                    selectedTheme === 'glass-minimal' ? 'border-white scale-110' : 'border-transparent opacity-60'
                  }`}
                  title="Glass Minimal"
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-neutral-800/80">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-300 flex items-center gap-2">
                <Sliders className="w-3.5 h-3.5 text-[#53FC18]" />
                Visible Cues
              </span>
              <div className="flex items-center gap-1.5 bg-black/60 p-1 rounded-lg border border-neutral-800">
                {[2, 3, 4].map(n => (
                  <button
                    key={n}
                    onClick={() => setDisplayCount(n)}
                    className={`px-2.5 py-0.5 text-xs font-mono font-bold rounded transition-colors ${
                      displayCount === n ? 'bg-[#53FC18] text-black' : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Top {n}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Copy Browser Source URL Box */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-neutral-400 block">
              One-click OBS Browser Source Link:
            </label>
            <div className="flex items-center gap-2 p-2 bg-black/70 border border-neutral-800 rounded-xl">
              <input
                type="text"
                readOnly
                value={mockUrl}
                className="flex-1 bg-transparent text-xs font-mono text-neutral-300 px-2 select-all focus:outline-none truncate"
              />
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#53FC18] hover:bg-[#70FF3F] text-black font-bold text-xs transition-colors shrink-0"
              >
                {copied ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : <Copy className="w-3.5 h-3.5 stroke-[2]" />}
                <span>{copied ? 'Copied URL!' : 'Copy'}</span>
              </button>
            </div>
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
              className={`absolute top-6 right-6 max-w-xs w-full p-4 rounded-xl backdrop-blur-md border transition-all duration-300 shadow-2xl ${
                selectedTheme === 'kick-green'
                  ? 'bg-[#061108]/90 border-[#53FC18]/50 shadow-[0_0_30px_rgba(83,252,24,0.25)]'
                  : selectedTheme === 'dark-stealth'
                  ? 'bg-black/90 border-neutral-700 shadow-xl'
                  : 'bg-white/10 border-white/20 shadow-xl'
              }`}
            >
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-neutral-800">
                <div className="flex items-center gap-1.5">
                  <Sparkles
                    className={`w-3.5 h-3.5 ${
                      selectedTheme === 'kick-green' ? 'text-[#53FC18]' : 'text-neutral-300'
                    }`}
                  />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-white font-display">
                    TOP CHAT REQUESTS
                  </span>
                </div>
                <span
                  className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded ${
                    selectedTheme === 'kick-green'
                      ? 'bg-[#53FC18]/20 text-[#53FC18]'
                      : 'bg-neutral-800 text-neutral-300'
                  }`}
                >
                  LIVE
                </span>
              </div>

              {/* Stacked list of cues on the OBS widget */}
              <div className="space-y-2">
                {[
                  { text: 'Song name / playlist link', count: 64 },
                  { text: 'Crosshair settings & sens', count: 42 },
                  { text: 'Switch to GTA RP next game', count: 31 },
                  { text: 'Facecam zoom please', count: 18 }
                ]
                  .slice(0, displayCount)
                  .map((item, i) => (
                    <div
                      key={item.text}
                      className="flex items-center justify-between gap-2 p-2 rounded-lg bg-black/60 border border-neutral-800 text-xs"
                    >
                      <div className="flex items-center gap-2 truncate">
                        <span
                          className={`font-mono font-extrabold text-[11px] ${
                            selectedTheme === 'kick-green' ? 'text-[#53FC18]' : 'text-neutral-400'
                          }`}
                        >
                          #{i + 1}
                        </span>
                        <span className="text-white truncate font-medium text-[11px]">
                          {item.text}
                        </span>
                      </div>
                      <span
                        className={`font-mono font-bold text-[10px] px-1.5 py-0.5 rounded shrink-0 ${
                          selectedTheme === 'kick-green'
                            ? 'bg-[#53FC18]/15 text-[#53FC18]'
                            : 'bg-neutral-800 text-neutral-300'
                        }`}
                      >
                        {item.count}x
                      </span>
                    </div>
                  ))}
              </div>
            </div>

            {/* Bottom info pill on OBS canvas */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] text-neutral-400 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-neutral-800">
              <span>Resolution: 1920x1080 · 60 FPS</span>
              <span className="text-[#53FC18] font-medium">ChatCue Extension Active</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
