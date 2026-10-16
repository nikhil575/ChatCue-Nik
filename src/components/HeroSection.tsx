import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Star, Chrome, Zap, Shield, Sparkles, Globe2 } from 'lucide-react';
import { CHROME_STORE_URL, HERO_IMAGE } from '../constants';
import { ChatCueLogo } from './ChatCueLogo';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background ambient neon glow aura */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#53FC18]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column (7 cols): Copy, Value Prop & CTAs */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* Unboxed clean metadata kicker with platform support */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-400">
            <span className="font-semibold text-white">Live Stream AI Cockpit</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#53FC18] font-medium">Global Multi-Language Support</span>
            <span aria-hidden="true">·</span>
            <span>Kick & YouTube</span>
          </div>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-white text-balance leading-[1.08]"
          >
            Never Miss a Critical Question in a <span className="text-[#53FC18] drop-shadow-[0_0_25px_rgba(83,252,24,0.4)]">1,000 Msg/Min Flood.</span>
          </motion.h1>

          {/* Value Proposition Description */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-base sm:text-lg text-neutral-300 max-w-xl leading-relaxed"
          >
            ChatCue turns chaotic live stream chats into an organized, prioritized cue cockpit. Group repeated viewer requests, catch questions in the last 3 minutes, isolate Super Chats & Kick tips, and project real-time requests onto your OBS overlay in any language worldwide.
          </motion.p>

          {/* Supported platform & global language tags */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0E1A11] border border-[#53FC18]/30 text-xs font-semibold text-[#53FC18]">
              <span className="w-2 h-2 rounded-full bg-[#53FC18]" />
              Kick Pop-outs & Channels
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1F0E10] border border-red-500/30 text-xs font-semibold text-red-400">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              YouTube Live Chat Pop-outs
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/60 border border-neutral-800 text-xs font-medium text-neutral-300">
              <Globe2 className="w-3.5 h-3.5 text-[#53FC18]" />
              All Languages & Slang
            </div>
          </div>

          {/* CTA Cluster */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3"
          >
            <a
              href={CHROME_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-7 py-3.5 text-base font-extrabold text-black bg-[#53FC18] hover:bg-[#70FF3F] rounded-xl transition-all duration-200 shadow-[0_0_30px_rgba(83,252,24,0.4)] hover:shadow-[0_0_40px_rgba(83,252,24,0.65)] hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
            >
              <Chrome className="w-5 h-5 stroke-[2.5]" />
              <span>Add to Chrome - Free</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>

            <a
              href="#simulator"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-neutral-200 hover:text-white bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 hover:border-[#53FC18]/40 rounded-xl transition-all whitespace-nowrap"
            >
              <Zap className="w-4 h-4 text-[#53FC18]" />
              <span>Test Real Cockpit Demo</span>
            </a>
          </motion.div>

          {/* Social Proof & Trust Strip */}
          <div className="pt-4 border-t border-neutral-800/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-neutral-400">
            <div className="flex items-center gap-1.5">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="font-semibold text-white">5.0 Star Rating</span>
            </div>
            <span aria-hidden="true" className="text-neutral-700">|</span>
            <div className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-[#53FC18]" />
              <span>Zero Setup · No API Keys</span>
            </div>
            <span aria-hidden="true" className="text-neutral-700">|</span>
            <div className="flex items-center gap-1.5">
              <Globe2 className="w-3.5 h-3.5 text-[#53FC18]" />
              <span>Worldwide Regional AI</span>
            </div>
          </div>
        </div>

        {/* Right Column (5 cols): Authentic Dashboard Mini Preview Card */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-2xl overflow-hidden border border-[#53FC18]/30 bg-[#060D07] shadow-[0_0_50px_rgba(83,252,24,0.18)] p-4 sm:p-5">
            {/* Top real dashboard mini bar */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-800 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#53FC18] animate-pulse" />
                <span className="text-white font-bold text-xs truncate">
                  DEDSAFIO DIA 22
                </span>
              </div>
              <div className="flex items-center gap-3 text-[11px] text-neutral-400">
                <span>PER MIN: <strong className="text-[#53FC18]">48</strong></span>
                <span>MESSAGES: <strong className="text-white">482</strong></span>
              </div>
            </div>

            {/* Mini 3-column replica representation */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              {/* Chat Wants Now */}
              <div className="p-3 rounded-xl bg-black/60 border border-[#53FC18]/30 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-[#53FC18] font-mono uppercase">
                    CHAT WANTS NOW
                  </span>
                  <span className="text-[9px] bg-[#53FC18] text-black font-bold px-1.5 py-0.2 rounded-full">
                    divertido
                  </span>
                </div>
                <div className="space-y-1 pt-1">
                  <div className="flex justify-between items-center text-[11px] bg-neutral-900/80 px-2 py-1 rounded">
                    <span className="truncate">reacciones y risas</span>
                    <strong className="text-[#53FC18] font-mono">5</strong>
                  </div>
                  <div className="flex justify-between items-center text-[11px] bg-neutral-900/80 px-2 py-1 rounded">
                    <span className="truncate">drop playlist link</span>
                    <strong className="text-[#53FC18] font-mono">4</strong>
                  </div>
                </div>
              </div>

              {/* Questions */}
              <div className="p-3 rounded-xl bg-black/60 border border-neutral-800 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-[#52E3C2] font-mono uppercase">
                    QUESTIONS (3 MIN)
                  </span>
                  <span className="text-[9px] text-[#53FC18] font-mono">TICK OFF</span>
                </div>
                <div className="space-y-1 pt-1">
                  <div className="p-1.5 rounded bg-neutral-900/80 text-[10px] text-neutral-200 truncate flex items-center justify-between">
                    <span className="truncate">¿sensibilidad en dpi?</span>
                    <span className="text-[#53FC18] font-mono">×4</span>
                  </div>
                  <div className="p-1.5 rounded bg-neutral-900/80 text-[10px] text-neutral-200 truncate flex items-center justify-between">
                    <span className="truncate">what audio mixer?</span>
                    <span className="text-[#53FC18] font-mono">×3</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Every Message Stream snippet */}
            <div className="mt-3 p-2.5 rounded-xl bg-black/70 border border-neutral-800 space-y-1.5">
              <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 pb-1 border-b border-neutral-800">
                <span className="text-white font-bold">EVERY MESSAGE</span>
                <span className="text-[#53FC18]">All · Questions · Flagged · Super Chats</span>
              </div>
              <div className="space-y-1 text-[11px]">
                <div className="flex items-center gap-2 text-neutral-300">
                  <span className="text-neutral-500 font-mono text-[9px]">10:35</span>
                  <span className="text-purple-400 font-bold">fernandoGR20:</span>
                  <span className="truncate">xdd jajaja tremenda jugada</span>
                  <span className="text-[9px] text-[#53FC18] font-mono">×8</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-300">
                  <span className="text-neutral-500 font-mono text-[9px]">10:35</span>
                  <span className="text-amber-400 font-bold">Aarav_YT:</span>
                  <span className="truncate text-amber-200 font-medium">Super Chat $20.00: Great stream!</span>
                </div>
              </div>
            </div>

            {/* Bottom verified indicator */}
            <div className="mt-3 flex items-center justify-between text-[11px] text-neutral-400">
              <span className="flex items-center gap-1.5">
                <Globe2 className="w-3.5 h-3.5 text-[#53FC18]" />
                Spanish, English, Hinglish, Portuguese & more
              </span>
              <span className="text-[#53FC18] font-semibold">Live Cockpit</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
