import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Chrome, Zap, Shield, Sparkles, Globe2, Smartphone, Copy, Check } from 'lucide-react';
import { CHROME_STORE_URL, HERO_IMAGE, PHONE_DASHBOARD_URL } from '../constants';
import { ChatCueLogo } from './ChatCueLogo';
import dashboardFull from '../../dashboard-full.webp';

// Phones can't install Chrome extensions, so phone visitors get a way to move
// to their computer, and Kick/Twitch streamers can start from the phone itself.
export const PhoneNote: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard?.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(() => {});
  };
  return (
    <div className="md:hidden rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-left text-sm text-neutral-300 space-y-2.5">
      <div className="flex items-start gap-2.5">
        <Smartphone className="w-4 h-4 mt-0.5 text-[#53FC18] shrink-0" />
        <p>On your phone? The extension installs on a computer. Copy this link and open it on your PC.</p>
      </div>
      <div className="flex flex-wrap gap-2 pl-[26px]">
        <button
          type="button"
          onClick={copy}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-700 text-xs font-semibold text-white"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-[#53FC18]" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? 'Link copied' : 'Copy link'}</span>
        </button>
        <a
          href={PHONE_DASHBOARD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#53FC18]/40 text-xs font-semibold text-[#53FC18]"
        >
          <span>Kick or Twitch? Start on your phone</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background ambient neon glow aura */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#53FC18]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column (7 cols): Copy, Value Prop & CTAs */}
        <div className="lg:col-span-12 max-w-3xl mx-auto space-y-6 text-center">
          {/* Unboxed clean metadata kicker with platform support */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm text-neutral-400">
            <span className="font-semibold text-white">Live chat dashboard</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#53FC18] font-medium">YouTube, Kick & Twitch</span>
            <span aria-hidden="true">·</span>
            <span>Chrome Extension</span>
          </div>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-white text-balance leading-[1.08]"
          >
            Never miss what <span className="text-[#53FC18] drop-shadow-[0_0_25px_rgba(83,252,24,0.4)]">your chat</span> is asking for.
          </motion.h1>

          {/* Value Proposition Description */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed"
          >
            ChatCue reads your YouTube, Kick or Twitch chat and shows what viewers keep asking for, their questions and their tips, all on one screen. Free Chrome extension. Works with Hinglish, English, Spanish, Portuguese and more.
          </motion.p>

          {/* Supported platform & global language tags */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1">
            {/* Kick Badge with Cute Logo */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0E1A11]/90 border border-[#53FC18]/35 text-xs font-semibold text-[#53FC18] shadow-[0_0_15px_rgba(83,252,24,0.08)] hover:scale-105 transition-transform duration-200">
              <div className="w-5 h-5 rounded-lg bg-[#53FC18]/20 border border-[#53FC18]/40 flex items-center justify-center shrink-0 shadow-sm">
                <svg className="w-3 h-3 fill-[#53FC18]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 3h4.8v5.6L14 3h5.6l-6.8 7.6 7.4 10.4h-5.8l-5.6-8.2V21H4V3z"/>
                </svg>
              </div>
              <span>Kick Chat</span>
            </div>

            {/* Twitch Badge with Cute Glitch Logo */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#150E24]/90 border border-purple-500/35 text-xs font-semibold text-purple-300 shadow-[0_0_15px_rgba(145,70,255,0.12)] hover:scale-105 transition-transform duration-200">
              <div className="w-5 h-5 rounded-lg bg-[#9146FF]/25 border border-purple-500/50 flex items-center justify-center shrink-0 shadow-sm">
                <svg className="w-3.5 h-3.5 fill-[#C499FF]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.149 0L.537 4.11v16.143h5.373v3.747h4.032l3.763-3.747h4.301L23.463 11V0H2.149zm19.074 10.222l-2.687 2.687h-4.301l-2.687 2.687V12.91H6.985V2.149h14.238v8.073zM16.478 5.642h-2.149v5.373h2.149V5.642zm-5.373 0H8.956v5.373h2.149V5.642z"/>
                </svg>
              </div>
              <span>Twitch Live Chat</span>
            </div>

            {/* YouTube Badge with Cute Play Logo */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#1F0E10]/90 border border-red-500/35 text-xs font-semibold text-red-400 shadow-[0_0_15px_rgba(255,0,51,0.08)] hover:scale-105 transition-transform duration-200">
              <div className="w-5 h-5 rounded-lg bg-red-600/20 border border-red-500/40 flex items-center justify-center shrink-0 shadow-sm">
                <svg className="w-3.5 h-3.5 fill-red-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
              <span>YouTube Live</span>
            </div>

            {/* Global Slang Badge with Cute Globe Logo */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/70 border border-neutral-800 text-xs font-medium text-neutral-300 hover:scale-105 transition-transform duration-200">
              <div className="w-5 h-5 rounded-lg bg-[#53FC18]/15 border border-[#53FC18]/30 flex items-center justify-center shrink-0 shadow-sm">
                <Globe2 className="w-3.5 h-3.5 text-[#53FC18]" />
              </div>
              <span>Any language</span>
            </div>
          </div>

          {/* CTA Cluster */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center sm:justify-center gap-4 pt-3"
          >
            <a
              href={CHROME_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-7 py-3.5 text-base font-extrabold text-black bg-[#53FC18] hover:bg-[#70FF3F] rounded-xl transition-all duration-200 shadow-[0_0_30px_rgba(83,252,24,0.4)] hover:shadow-[0_0_40px_rgba(83,252,24,0.65)] hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
            >
              <Chrome className="w-5 h-5 stroke-[2.5]" />
              <span>Add to Chrome, it's free</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>

            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-neutral-200 hover:text-white bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 hover:border-[#53FC18]/40 rounded-xl transition-all whitespace-nowrap"
            >
              <Zap className="w-4 h-4 text-[#53FC18]" />
              <span>See how it works</span>
            </a>
          </motion.div>

          <PhoneNote />

          {/* Trust Strip */}
          <div className="pt-4 border-t border-neutral-800/80 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-neutral-400">
            <div className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-[#53FC18]" />
              <span>Zero Setup · No API Keys</span>
            </div>
            <span aria-hidden="true" className="hidden sm:inline text-neutral-700">|</span>
            <div className="flex items-center gap-1.5">
              <Globe2 className="w-3.5 h-3.5 text-[#53FC18]" />
              <span>Free, no account needed</span>
            </div>
          </div>
        </div>

        {/* Product shot: the full real ChatCue dashboard (sample chat, no real viewers) */}
        <div className="lg:col-span-12 relative mt-2 sm:mt-6">
          <div className="absolute -inset-x-8 -inset-y-10 rounded-[48px] bg-[#53FC18]/10 blur-3xl pointer-events-none" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Phones: the full dashboard is too small to read, so show the Chat wants now panel up close */}
            <div className="sm:hidden relative overflow-hidden rounded-2xl border border-[#53FC18]/30 bg-[#060D07] shadow-[0_0_60px_rgba(83,252,24,0.18)] aspect-[0.98]">
              <img
                src={dashboardFull}
                alt="ChatCue's Chat wants now panel: chat requests ranked by how many people ask"
                className="absolute top-0 left-0 max-w-none w-[308%]"
              />
            </div>
            <div className="hidden sm:block relative overflow-hidden rounded-2xl border border-[#53FC18]/30 bg-[#060D07] shadow-[0_0_60px_rgba(83,252,24,0.18)] origin-top transition-transform duration-700 ease-out lg:[transform:perspective(2200px)_rotateX(5deg)] lg:hover:[transform:perspective(2200px)_rotateX(0deg)]">
              <div className="flex items-center gap-2 border-b border-white/10 bg-black/40 px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-3 rounded-md bg-white/5 px-3 py-0.5 text-[11px] font-mono text-neutral-400">ChatCue dashboard</span>
              </div>
              <div className="relative">
                <img
                  src={dashboardFull}
                  alt="The full ChatCue dashboard: ranked chat requests, open questions, every message, flagged messages and people"
                  width={2400}
                  height={1350}
                  className="block w-full h-auto"
                />
                <span className="absolute -translate-x-1/2 -translate-y-1/2 flex h-6 w-6 sm:h-8 sm:w-8" style={{ left: '13.6%', top: '13.2%' }}>
                  <span className="absolute inset-0 rounded-full bg-[#53FC18]/50 animate-ping" />
                  <span className="relative flex h-full w-full items-center justify-center rounded-full bg-[#53FC18] text-[#060D07] text-xs sm:text-sm font-extrabold shadow-[0_0_0_4px_rgba(83,252,24,0.25)]">1</span>
                </span>
                <span className="absolute -translate-x-1/2 -translate-y-1/2 flex h-6 w-6 sm:h-8 sm:w-8" style={{ left: '10.2%', top: '62.4%' }}>
                  <span className="absolute inset-0 rounded-full bg-[#53FC18]/50 animate-ping" />
                  <span className="relative flex h-full w-full items-center justify-center rounded-full bg-[#53FC18] text-[#060D07] text-xs sm:text-sm font-extrabold shadow-[0_0_0_4px_rgba(83,252,24,0.25)]">2</span>
                </span>
                <span className="absolute -translate-x-1/2 -translate-y-1/2 flex h-6 w-6 sm:h-8 sm:w-8" style={{ left: '79.9%', top: '12.9%' }}>
                  <span className="absolute inset-0 rounded-full bg-[#53FC18]/50 animate-ping" />
                  <span className="relative flex h-full w-full items-center justify-center rounded-full bg-[#53FC18] text-[#060D07] text-xs sm:text-sm font-extrabold shadow-[0_0_0_4px_rgba(83,252,24,0.25)]">3</span>
                </span>
              </div>
            </div>
            <div className="mt-6 hidden sm:grid gap-3 sm:grid-cols-3">
              <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[#53FC18] text-[#060D07] text-xs font-extrabold">1</span>
                <span className="text-sm text-neutral-200 leading-snug">Top requests, ranked by how many people ask</span>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[#53FC18] text-[#060D07] text-xs font-extrabold">2</span>
                <span className="text-sm text-neutral-200 leading-snug">Questions you haven't answered yet</span>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[#53FC18] text-[#060D07] text-xs font-extrabold">3</span>
                <span className="text-sm text-neutral-200 leading-snug">Abuse flagged for you. Nothing gets deleted</span>
              </div>
            </div>
            <p className="mt-3 text-center text-xs text-neutral-500">The real ChatCue dashboard, shown with sample chat.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
