import React, { useState } from 'react';
import { 
  Sparkles, 
  Eye, 
  Radio, 
  Globe2, 
  Gauge, 
  Send, 
  HelpCircle,
  Flame,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { RealDashboardView } from './RealDashboardView';
import { SupportedLanguage } from '../types';
import { CHROME_STORE_URL } from '../constants';

export const StreamSimulator: React.FC = () => {
  const [viewMode, setViewMode] = useState<'dashboard' | 'obs'>('dashboard');
  const [activeLang, setActiveLang] = useState<SupportedLanguage>('global');
  const [speedMultiplier, setSpeedMultiplier] = useState<number>(1);
  const [testComment, setTestComment] = useState('');
  const [injectedMessage, setInjectedMessage] = useState<string | null>(null);

  const handleInjectComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!testComment.trim()) return;
    setInjectedMessage(testComment);
    setTestComment('');
    setTimeout(() => setInjectedMessage(null), 4000);
  };

  return (
    <section id="simulator" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background ambient radial neon aura */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-[#53FC18]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#53FC18]/10 border border-[#53FC18]/25 text-[#53FC18] text-xs font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive Real Dashboard Simulator</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight text-balance">
          The Real ChatCue Streamer Cockpit
        </h2>
        <p className="mt-4 text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto">
          Built for high-velocity global streams across YouTube, Kick & Twitch. Watch incoming Spanish, English, Portuguese, Hinglish, and regional slang get parsed into clear priorities in real time.
        </p>
      </div>

      {/* Simulator Control Toolbar */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4 p-3.5 bg-[#09130C] border border-[#53FC18]/20 rounded-xl shadow-lg">
        {/* Left: View Mode Toggle */}
        <div className="flex items-center gap-1.5 p-1 bg-black/60 rounded-lg border border-neutral-800">
          <button
            onClick={() => setViewMode('dashboard')}
            className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-bold rounded-md transition-all whitespace-nowrap ${
              viewMode === 'dashboard'
                ? 'bg-[#53FC18] text-black shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Radio className="w-3.5 h-3.5" />
            Live Dashboard View
          </button>
          <button
            onClick={() => setViewMode('obs')}
            className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-bold rounded-md transition-all whitespace-nowrap ${
              viewMode === 'obs'
                ? 'bg-[#53FC18] text-black shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            OBS HUD Overlay Preview
          </button>
        </div>

        {/* Center: Global Language / Region Switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-black/60 rounded-lg border border-neutral-800">
          <span className="text-[11px] text-neutral-400 px-2 hidden sm:inline flex items-center gap-1">
            <Globe2 className="w-3.5 h-3.5 text-[#53FC18]" />
            Region:
          </span>
          {[
            { id: 'global', label: 'Global (All)' },
            { id: 'spanish', label: 'Spanish (ES/LATAM)' },
            { id: 'english', label: 'English (US/UK)' },
            { id: 'hinglish', label: 'Hinglish (India)' },
            { id: 'portuguese', label: 'Portuguese (BR)' }
          ].map(lang => (
            <button
              key={lang.id}
              onClick={() => setActiveLang(lang.id as SupportedLanguage)}
              className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                activeLang === lang.id
                  ? 'bg-neutral-800 text-[#53FC18] font-bold border border-[#53FC18]/30'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>

        {/* Right: Simulation Speed */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-xs">
            <span className="text-neutral-400 mr-1 hidden md:inline">Velocity:</span>
            <button
              onClick={() => setSpeedMultiplier(1)}
              className={`px-2.5 py-1 rounded text-xs transition-colors ${
                speedMultiplier === 1
                  ? 'bg-neutral-800 text-[#53FC18] font-bold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Normal
            </button>
            <button
              onClick={() => setSpeedMultiplier(2.5)}
              className={`px-2.5 py-1 rounded text-xs transition-colors ${
                speedMultiplier === 2.5
                  ? 'bg-neutral-800 text-[#53FC18] font-bold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              2.5x Raid
            </button>
          </div>
        </div>
      </div>

      {/* Main View Area */}
      {viewMode === 'dashboard' ? (
        <div className="space-y-4">
          {/* Authentic Real Dashboard Replica */}
          <RealDashboardView
            interactive={true}
            activeLanguage={activeLang}
            speedMultiplier={speedMultiplier}
          />

          {/* Interactive Comment Injector Bar */}
          <div className="bg-[#08120B] border border-[#53FC18]/20 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex-1 w-full">
              <div className="text-xs font-bold text-white mb-1 flex items-center gap-2">
                <Send className="w-3.5 h-3.5 text-[#53FC18]" />
                Test the Global AI Parser with your own chat message:
              </div>
              <form onSubmit={handleInjectComment} className="flex gap-2">
                <input
                  type="text"
                  value={testComment}
                  onChange={e => setTestComment(e.target.value)}
                  placeholder="Type any message: '¿qué sensibilidad usas?' or 'bhai song name?' or 'qual a sua mira?'"
                  className="flex-1 bg-black/80 border border-neutral-800 focus:border-[#53FC18] text-xs text-white rounded-lg px-3 py-2 outline-none"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#53FC18] hover:bg-[#70FF3F] text-black font-bold text-xs rounded-lg transition-colors whitespace-nowrap"
                >
                  Send to Feed
                </button>
              </form>
            </div>

            {/* Quick multilingual sample buttons */}
            <div className="flex flex-wrap gap-1.5 shrink-0">
              <button
                onClick={() => setTestComment('¿Cuál es tu sensibilidad del mouse?')}
                className="px-2 py-1 bg-black/50 hover:bg-neutral-800 border border-neutral-700 text-[11px] text-neutral-300 rounded transition-colors"
              >
                + Spanish Q
              </button>
              <button
                onClick={() => setTestComment('What playlist are you playing right now?')}
                className="px-2 py-1 bg-black/50 hover:bg-neutral-800 border border-neutral-700 text-[11px] text-neutral-300 rounded transition-colors"
              >
                + English Req
              </button>
              <button
                onClick={() => setTestComment('bhai sensitivity kya hai mouse ki?')}
                className="px-2 py-1 bg-black/50 hover:bg-neutral-800 border border-neutral-700 text-[11px] text-neutral-300 rounded transition-colors"
              >
                + Hinglish Q
              </button>
              <button
                onClick={() => setTestComment('qual o código da mira bro?')}
                className="px-2 py-1 bg-black/50 hover:bg-neutral-800 border border-neutral-700 text-[11px] text-neutral-300 rounded transition-colors"
              >
                + Portuguese Q
              </button>
            </div>
          </div>

          {injectedMessage && (
            <div className="p-2.5 rounded-lg bg-[#53FC18]/15 border border-[#53FC18]/40 text-xs text-[#53FC18] font-medium flex items-center gap-2 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4" />
              <span>
                Injected &ldquo;{injectedMessage}&rdquo; — automatically categorized into Questions and active chat feed!
              </span>
            </div>
          )}
        </div>
      ) : (
        /* OBS Overlay HUD Mockup */
        <div className="relative rounded-2xl border border-[#53FC18]/30 overflow-hidden bg-black/95 p-6 sm:p-10 min-h-[500px] flex flex-col justify-between shadow-[0_0_50px_rgba(0,0,0,0.8)]">
          {/* Subtle grid backdrop */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#53FC18_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

          {/* Transparent Live HUD Widget */}
          <div className="relative z-10 max-w-sm bg-[#061108]/90 border border-[#53FC18]/40 backdrop-blur-xl p-5 rounded-2xl shadow-[0_0_40px_rgba(83,252,24,0.25)]">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#53FC18]/20">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#53FC18] animate-ping" />
                <span className="text-xs font-bold text-white uppercase tracking-wider font-display">
                  TOP CHAT REQUESTS (OBS)
                </span>
              </div>
              <span className="text-[10px] font-mono font-bold text-[#53FC18] px-2 py-0.5 bg-[#53FC18]/15 rounded border border-[#53FC18]/30">
                LIVE CUE
              </span>
            </div>

            <div className="space-y-2">
              {[
                { title: 'reacciones y risas (laughs/react)', count: 24 },
                { title: 'playlist link / song name', count: 18 },
                { title: 'crosshair code & sensitivity', count: 14 }
              ].map((item, idx) => (
                <div
                  key={item.title}
                  className="flex items-center justify-between gap-3 p-2.5 bg-black/60 border border-neutral-800 rounded-xl"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="text-xs font-mono font-extrabold text-[#53FC18] w-4 shrink-0">
                      #{idx + 1}
                    </span>
                    <span className="text-xs font-semibold text-white truncate">
                      {item.title}
                    </span>
                  </div>
                  <span className="text-xs font-mono font-extrabold text-[#53FC18] bg-[#53FC18]/20 px-2 py-0.5 rounded shrink-0 tabular-nums">
                    {item.count}×
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-3 text-[10px] text-neutral-400 text-center">
              Generated via ChatCue Browser Source · Auto-syncs with real dashboard
            </div>
          </div>

          <div className="relative z-10 text-right mt-6 sm:mt-0">
            <p className="text-xs text-neutral-400 max-w-sm ml-auto">
              This transparent widget embeds directly into OBS Studio / Streamlabs. Viewers see their requests acknowledged live without covering gameplay!
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
