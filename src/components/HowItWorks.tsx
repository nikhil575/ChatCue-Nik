import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { MessageSquareText, Sparkles } from 'lucide-react';

// Sample chat that scrolls through the "your chat" column (made-up viewers).
const CHAT: [string, string, string][] = [
  ["mateo_gg", "¡juega Erangel ya!", "#fdba74"],
  ["lukas.de", "spiel als nächstes Erangel", "#7dd3fc"],
  ["camille_fr", "c'est quel téléphone ?", "#f0abfc"],
  ["NeoSniper", "W streamer", "#86efac"],
  ["diego_mx", "¿qué sensibilidad usas?", "#fdba74"],
  ["ethan_x", "play erangel next pls", "#b69cff"],
  ["spam_bot77", "FREE SKINS at skinsdrop dot win", "#fda4af"],
  ["jonas.tv", "welches Handy ist das?", "#7dd3fc"],
  ["emma.live", "what phone is that?", "#b69cff"],
  ["hugo_pro", "quel clutch incroyable", "#f0abfc"],
  ["sofia.gg", "¿qué móvil es ese?", "#fdba74"],
  ["max_k", "Erangel bitte!", "#7dd3fc"],
  ["lea_plays", "on joue Erangel ?", "#f0abfc"],
  ["chloe_plays", "lets gooo", "#86efac"],
];

const Connector: React.FC<{ vertical?: boolean }> = ({ vertical }) => (
  <div
    className={vertical ? 'lg:hidden h-12 w-[2px] rounded-full cc-anim cc-flow-v' : 'hidden lg:block h-[2px] w-16 xl:w-24 rounded-full cc-anim cc-flow-h'}
  />
);

export const HowItWorks: React.FC = () => {
  const [want, setWant] = useState(48);
  const [question, setQuestion] = useState(14);

  useEffect(() => {
    const t = setInterval(() => {
      setWant((v) => (v >= 72 ? 48 : v + 1));
      setQuestion((v) => (Math.random() < 0.45 ? (v >= 22 ? 14 : v + 1) : v));
    }, 1400);
    return () => clearInterval(t);
  }, []);

  const rows = [...CHAT, ...CHAT];

  return (
    <section id="how-it-works" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <style>{'@keyframes cc-scroll{from{transform:translateY(0)}to{transform:translateY(-50%)}}' +
        '@keyframes cc-ring-a{from{transform:rotateX(72deg) rotateZ(0deg)}to{transform:rotateX(72deg) rotateZ(360deg)}}' +
        '@keyframes cc-ring-b{from{transform:rotateY(72deg) rotateZ(0deg)}to{transform:rotateY(72deg) rotateZ(360deg)}}' +
        '@keyframes cc-ring-c{from{transform:rotateX(50deg) rotateY(35deg) rotateZ(360deg)}to{transform:rotateX(50deg) rotateY(35deg) rotateZ(0deg)}}' +
        '@keyframes cc-flow-x{from{background-position:0 0}to{background-position:28px 0}}' +
        '@keyframes cc-flow-y{from{background-position:0 0}to{background-position:0 28px}}' +
        '.cc-scroll{animation:cc-scroll 26s linear infinite}' +
        '.cc-ring-a{animation:cc-ring-a 9s linear infinite}.cc-ring-b{animation:cc-ring-b 12s linear infinite}.cc-ring-c{animation:cc-ring-c 15s linear infinite}' +
        '.cc-flow-h{background:repeating-linear-gradient(90deg,rgba(83,252,24,.95) 0 8px,transparent 8px 14px);background-size:28px 2px;box-shadow:0 0 12px rgba(83,252,24,.5);animation:cc-flow-x .7s linear infinite}' +
        '.cc-flow-v{background:repeating-linear-gradient(180deg,rgba(83,252,24,.95) 0 8px,transparent 8px 14px);background-size:2px 28px;box-shadow:0 0 12px rgba(83,252,24,.5);animation:cc-flow-y .7s linear infinite}' +
        '@media (prefers-reduced-motion: reduce){.cc-anim{animation:none!important}}'}</style>

      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#53FC18]/10 border border-[#53FC18]/30 text-[#53FC18] text-xs font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>How it works</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-white text-balance">
          Hundreds of messages in. <span className="text-[#53FC18]">What matters</span> out.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-neutral-400 leading-relaxed">
          ChatCue reads every message as it arrives, groups what people keep asking for, pulls out the questions and flags abuse. You keep playing.
        </p>
      </div>

      {/* Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-6 lg:gap-4">
        {/* Your chat */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl border border-white/10 bg-[#060D07]/80 overflow-hidden"
        >
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
            <span className="text-xs font-mono font-bold tracking-wider text-neutral-400 uppercase">Your chat</span>
            <span className="flex items-center gap-1.5 text-[11px] font-mono text-neutral-500">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff5d7a] animate-pulse" /> 150 msg/min
            </span>
          </div>
          <div
            className="relative h-60 sm:h-72 overflow-hidden"
            style={{ maskImage: 'linear-gradient(transparent, black 18%, black 82%, transparent)', WebkitMaskImage: 'linear-gradient(transparent, black 18%, black 82%, transparent)' }}
          >
            <div className="cc-anim cc-scroll px-4">
              {rows.map(([name, text, color], i) => (
                <div key={i} className="py-1.5 text-sm truncate">
                  <span className="font-bold mr-2" style={{ color }}>{name}</span>
                  <span className="text-neutral-300">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ChatCue core */}
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <Connector vertical />
          <Connector />
          <div className="relative w-44 h-44 sm:w-52 sm:h-52 mb-8 lg:mb-0 flex items-center justify-center" style={{ perspective: '700px' }}>
            <div className="absolute inset-0 rounded-full bg-[#53FC18]/15 blur-3xl" />
            <div className="absolute inset-0" style={{ transformStyle: 'preserve-3d' }}>
              <div className="absolute inset-2 rounded-full border border-[#53FC18]/40 cc-anim cc-ring-a">
                <span className="absolute -top-1 left-1/2 w-2 h-2 rounded-full bg-[#53FC18] shadow-[0_0_10px_#53FC18]" />
              </div>
              <div className="absolute inset-4 rounded-full border border-[#53FC18]/30 cc-anim cc-ring-b">
                <span className="absolute top-1/2 -left-1 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#ffffff]" />
              </div>
              <div className="absolute inset-0 rounded-full border border-[#53FC18]/20 cc-anim cc-ring-c">
                <span className="absolute -bottom-1 left-1/3 w-2 h-2 rounded-full bg-[#53FC18] shadow-[0_0_10px_#53FC18]" />
              </div>
            </div>
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-br from-[#7DFF4F] to-[#1F8A0A] flex items-center justify-center shadow-[0_0_40px_rgba(83,252,24,0.55)] border border-white/20"
            >
              <MessageSquareText className="w-10 h-10 sm:w-12 sm:h-12 text-[#04120A]" strokeWidth={2.2} />
            </motion.div>
            <span className="absolute -bottom-6 text-[11px] font-mono tracking-widest text-[#53FC18] uppercase">ChatCue AI</span>
          </div>
          <Connector />
          <Connector vertical />
        </div>

        {/* What you see */}
        <div className="space-y-3">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-xl border border-white/10 border-l-4 border-l-[#53FC18] bg-white/[0.035] px-4 py-3"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-[#53FC18]">Chat wants now · #1</span>
              <motion.span key={want} initial={{ scale: 1.35 }} animate={{ scale: 1 }} transition={{ duration: 0.35 }} className="font-mono font-bold text-[#53FC18]">x{want}</motion.span>
            </div>
            <div className="mt-1 font-bold text-white">Play Erangel next</div>
            <div className="text-xs text-neutral-400 truncate">“¡juega Erangel ya!” “spiel als nächstes Erangel” “on joue Erangel ?”</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="rounded-xl border border-white/10 border-l-4 border-l-[#3dd6c4] bg-white/[0.035] px-4 py-3"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-[#3dd6c4]">Question</span>
              <motion.span key={question} initial={{ scale: 1.35 }} animate={{ scale: 1 }} transition={{ duration: 0.35 }} className="font-mono font-bold text-[#3dd6c4]">x{question}</motion.span>
            </div>
            <div className="mt-1 font-bold text-white">Which phone are you using?</div>
            <div className="text-xs text-neutral-400 truncate">“welches Handy ist das?” “c'est quel téléphone ?” “¿qué móvil es ese?”</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="rounded-xl border border-white/10 border-l-4 border-l-[#ff5d7a] bg-white/[0.035] px-4 py-3"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-[#ff5d7a]">Flagged</span>
              <span className="text-[11px] font-mono text-neutral-500">nothing deleted</span>
            </div>
            <div className="mt-1 font-bold text-white">spam_bot77: FREE SKINS at skinsdrop dot win</div>
            <div className="text-xs text-neutral-400">Spam link. You and your mods decide.</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
