import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check, 
  Copy, 
  Smartphone, 
  MessageSquare, 
  ShieldAlert, 
  Sparkles, 
  Globe2, 
  Flame,
  CheckCircle2,
  DollarSign,
  Users,
  AlertCircle
} from 'lucide-react';
import { ChatCueLogo } from './ChatCueLogo';
import { SupportedLanguage } from '../types';

interface DashboardMessage {
  id: string;
  time: string;
  author: string;
  text: string;
  badge: string;
  repeat: number;
  color: string;
  isQuestion?: boolean;
  isSuper?: boolean;
  isMember?: boolean;
}

interface DashboardViewProps {
  interactive?: boolean;
  activeLanguage?: SupportedLanguage;
  onLanguageChange?: (lang: SupportedLanguage) => void;
  speedMultiplier?: number;
}

export const RealDashboardView: React.FC<DashboardViewProps> = ({
  interactive = true,
  activeLanguage = 'global',
  onLanguageChange,
  speedMultiplier = 1
}) => {
  const [activeTab, setActiveTab] = useState<'All' | 'Questions' | 'Flagged' | 'Super Chats' | 'Members'>('All');
  const [peopleTab, setPeopleTab] = useState<'Just joined' | 'Most active' | 'Super Chats'>('Most active');
  const [selectedLang, setSelectedLang] = useState<SupportedLanguage>(activeLanguage);
  const [copiedOverlay, setCopiedOverlay] = useState(false);

  // Live questions state
  const [questions, setQuestions] = useState([
    {
      id: 'q-1',
      author: 'KS_Laure_912',
      text: '¿Cuál es tu sensibilidad del mouse en este juego?',
      lang: 'Spanish (ES/LATAM)',
      repeat: 7,
      minutesAgo: 1,
      isAnswered: false,
      platform: 'kick'
    },
    {
      id: 'q-2',
      author: 'CyberStriker',
      text: 'What audio mixer do you use for dual streaming?',
      lang: 'English (US/UK)',
      repeat: 5,
      minutesAgo: 2,
      isAnswered: false,
      platform: 'youtube'
    },
    {
      id: 'q-3',
      author: 'Rohan_Gamer',
      text: 'bhai background song ka playlist name kya hai?',
      lang: 'Hinglish (India)',
      repeat: 4,
      minutesAgo: 2,
      isAnswered: false,
      platform: 'youtube'
    },
    {
      id: 'q-4',
      author: 'Thiago_BR',
      text: 'qual é o código da sua mira no jogo?',
      lang: 'Portuguese (Brazil)',
      repeat: 6,
      minutesAgo: 3,
      isAnswered: false,
      platform: 'kick'
    }
  ]);

  // Chat wants now (AI Request clusters)
  const [chatWants, setChatWants] = useState([
    { id: 'w-1', text: 'reacciones y risas', count: 18, category: 'fun' },
    { id: 'w-2', text: 'drop playlist link', count: 14, category: 'music' },
    { id: 'w-3', text: 'mencionando a farfadox', count: 9, category: 'collab' },
    { id: 'w-4', text: 'switch game next match', count: 8, category: 'game' },
    { id: 'w-5', text: 'chistes de wachas', count: 6, category: 'banter' }
  ]);

  // Flagged messages state
  const [flaggedMessages, setFlaggedMessages] = useState([
    {
      id: 'flag-1',
      author: 'TrollBot_99',
      text: 'You are so bad at this game delete channel [AUTO-MUTED]',
      repeat: 3,
      time: '10:36 AM'
    }
  ]);

  // Messages list in the center column
  const [messages, setMessages] = useState<DashboardMessage[]>([
    { id: 'm-1', time: '10:36 AM', author: 'fernandoGR20', text: 'xdd jajaja tremenda jugada', badge: '', repeat: 8, color: '#A78BFA' },
    { id: 'm-2', time: '10:36 AM', author: 'KS_Laure_912', text: '¿sensibilidad en dpi?', badge: 'REPEAT', repeat: 4, color: '#F472B6', isQuestion: true },
    { id: 'm-3', time: '10:36 AM', author: 'kartobar', text: 'xdd SAJ', badge: '', repeat: 1, color: '#38BDF8' },
    { id: 'm-4', time: '10:35 AM', author: 'Aarav_YT', text: 'Super Chat $20.00: Bhai next level clutch!', badge: 'SUPER CHAT', repeat: 1, color: '#FBBF24', isSuper: true },
    { id: 'm-5', time: '10:35 AM', author: 'nestor3359', text: 'te va conseguir guacha', badge: '', repeat: 1, color: '#34D399' },
    { id: 'm-6', time: '10:35 AM', author: 'Zirenx', text: 'un furryfacto SAJ', badge: '', repeat: 1, color: '#818CF8' },
    { id: 'm-7', time: '10:35 AM', author: 'Sleexppy', text: 'GG clan W W W', badge: 'MEMBER', repeat: 2, color: '#53FC18', isMember: true },
    { id: 'm-8', time: '10:35 AM', author: 'R_odrig0', text: 'bana SAJ', badge: '', repeat: 1, color: '#FB923C' },
    { id: 'm-9', time: '10:34 AM', author: 'Lucas_V', text: 'manda salve pro Brasil!', badge: '', repeat: 1, color: '#4ADE80' },
    { id: 'm-10', time: '10:34 AM', author: 'Kenji_JP', text: 'ナイスプレイ！ (Nice play!)', badge: '', repeat: 1, color: '#F43F5E' }
  ]);

  const [sentiment, setSentiment] = useState('chat: divertido');
  const [velocity, setVelocity] = useState(48);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Sync external language changes
  useEffect(() => {
    setSelectedLang(activeLanguage);
  }, [activeLanguage]);

  // Periodically simulate incoming multi-lingual chat
  useEffect(() => {
    if (!interactive) return;

    const pool = [
      { author: 'Diego_MX', text: '¿Qué gráfica tienes montada en la PC?', lang: 'spanish', isQuestion: true, badge: 'REPEAT' },
      { author: 'SarahFPS', text: 'Can you show your audio levels? game is slightly loud', lang: 'english', isQuestion: true, badge: '' },
      { author: 'Manish_IN', text: 'bhai mouse pad konsa use karte ho?', lang: 'hinglish', isQuestion: true, badge: '' },
      { author: 'Gabriel_SP', text: 'KICK TIP $10: Manda um salve pro Rio!', lang: 'portuguese', isSuper: true, badge: 'SUPER CHAT' },
      { author: 'Alonso_98', text: 'farfadox en el chat xdd', lang: 'spanish', badge: '' },
      { author: 'NeonVibe', text: 'Drop Spotify playlist please!!', lang: 'english', badge: 'REPEAT' },
      { author: 'ChronoGamer', text: 'New channel member joined!', lang: 'global', badge: 'MEMBER', isMember: true },
      { author: 'ToxicTroll', text: 'You are so bad at this game delete [FLAGGED]', lang: 'global', isFlagged: true, badge: '' }
    ];

    let index = 0;
    const interval = setInterval(() => {
      const item = pool[index % pool.length];
      index++;

      const now = new Date();
      const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      if (item.isFlagged) {
        setFlaggedMessages(prev => [
          {
            id: `flag-${Date.now()}`,
            author: item.author,
            text: item.text,
            repeat: 2,
            time: timeStr
          },
          ...prev.slice(0, 3)
        ]);
        return;
      }

      setMessages(prev => [
        {
          id: `m-${Date.now()}`,
          time: timeStr,
          author: item.author,
          text: item.text,
          badge: (item.badge as '' | 'REPEAT' | 'MEMBER' | 'SUPER CHAT') || '',
          repeat: item.badge === 'REPEAT' ? Math.floor(Math.random() * 5) + 2 : 1,
          color: ['#A78BFA', '#F472B6', '#38BDF8', '#34D399', '#53FC18', '#FB923C'][Math.floor(Math.random() * 6)],
          isQuestion: item.isQuestion,
          isSuper: item.isSuper,
          isMember: item.isMember
        },
        ...prev.slice(0, 25)
      ]);

      // If question, add or bump question
      if (item.isQuestion) {
        setQuestions(prev => {
          const exists = prev.find(q => q.author === item.author);
          if (exists) {
            return prev.map(q => q.id === exists.id ? { ...q, repeat: q.repeat + 1 } : q);
          }
          return [
            {
              id: `q-${Date.now()}`,
              author: item.author,
              text: item.text,
              lang: item.lang === 'spanish' ? 'Spanish' : item.lang === 'hinglish' ? 'Hinglish' : 'English',
              repeat: 2,
              minutesAgo: 0,
              isAnswered: false,
              platform: Math.random() > 0.5 ? 'kick' : 'youtube'
            },
            ...prev.slice(0, 4)
          ];
        });
      }

      // Bump chat wants
      if (item.text.toLowerCase().includes('playlist')) {
        setChatWants(prev => prev.map(w => w.id === 'w-2' ? { ...w, count: w.count + 1 } : w));
      }

      setVelocity(Math.floor(Math.random() * 30) + 40);
    }, 2800 / speedMultiplier);

    return () => clearInterval(interval);
  }, [interactive, speedMultiplier]);

  const handleCopyOverlay = () => {
    navigator.clipboard.writeText('https://chatcue.app/overlay/live-obs-stream');
    setCopiedOverlay(true);
    setTimeout(() => setCopiedOverlay(false), 2000);
  };

  const handleAnswerQuestion = (qId: string) => {
    setQuestions(prev => prev.map(q => q.id === qId ? { ...q, isAnswered: !q.isAnswered } : q));
  };

  // Filter messages based on center tab
  const filteredMessages = messages.filter(m => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Questions') return m.isQuestion;
    if (activeTab === 'Super Chats') return m.isSuper;
    if (activeTab === 'Members') return m.isMember;
    if (activeTab === 'Flagged') return false;
    return true;
  });

  return (
    <div className="w-full bg-[#030704] text-neutral-200 border border-[#53FC18]/25 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.9)] font-sans">
      {/* 1. REAL DASHBOARD TOP NAVIGATION BAR */}
      <div className="bg-[#060D07] px-4 py-3 border-b border-[#53FC18]/15 flex flex-wrap items-center justify-between gap-4">
        {/* Left: ChatCue Logo + Live Stream Title */}
        <div className="flex items-center gap-3 min-w-0">
          <ChatCueLogo size="sm" />
          
          <div className="flex items-center gap-2 pl-2 border-l border-neutral-800 truncate">
            <span className="w-2.5 h-2.5 rounded-full bg-[#53FC18] animate-pulse shrink-0" />
            <span className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-wider shrink-0">
              LAST CHAT 1M AGO
            </span>
            <span className="text-xs font-bold text-white tracking-wide truncate">
              DEDSAFIO DIA 22 | CASA TEAM MAFIA | (Global Stream)
            </span>
          </div>
        </div>

        {/* Center: Live Stream Metrics & Velocity Bar */}
        <div className="flex items-center gap-4 sm:gap-6 text-center text-xs font-mono">
          <div>
            <div className="text-[10px] text-neutral-400 uppercase font-sans">WATCHING</div>
            <div className="font-bold text-white">1,420</div>
          </div>

          <div>
            <div className="text-[10px] text-neutral-400 uppercase font-sans">PER MIN</div>
            <div className="font-bold text-[#53FC18]">{velocity}</div>
            <div className="w-12 h-1 bg-neutral-800 rounded-full overflow-hidden mt-0.5">
              <div 
                className="h-full bg-[#53FC18] transition-all duration-300"
                style={{ width: `${Math.min(100, velocity * 1.5)}%` }}
              />
            </div>
          </div>

          <div>
            <div className="text-[10px] text-neutral-400 uppercase font-sans">MESSAGES</div>
            <div className="font-bold text-white tabular-nums">482</div>
          </div>

          <div>
            <div className="text-[10px] text-neutral-400 uppercase font-sans">CHATTERS</div>
            <div className="font-bold text-white tabular-nums">389</div>
          </div>

          <div>
            <div className="text-[10px] text-neutral-400 uppercase font-sans">SUPER CHATS</div>
            <div className="font-bold text-amber-400 tabular-nums">12</div>
          </div>
        </div>

        {/* Right: Real Dashboard Action Buttons */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleCopyOverlay}
            className="px-3 py-1.5 text-xs font-medium rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-neutral-200 hover:text-white transition-colors flex items-center gap-1.5"
          >
            {copiedOverlay ? <Check className="w-3.5 h-3.5 text-[#53FC18]" /> : <Copy className="w-3.5 h-3.5 text-[#53FC18]" />}
            <span>{copiedOverlay ? 'Copied Link' : 'Copy OBS overlay link'}</span>
          </button>

          <button className="px-3 py-1.5 text-xs font-medium rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-neutral-300 transition-colors flex items-center gap-1.5 hidden sm:flex">
            <Smartphone className="w-3.5 h-3.5 text-neutral-400" />
            <span>Phone</span>
          </button>

          <button className="px-3 py-1.5 text-xs font-medium rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-neutral-300 transition-colors hidden sm:block">
            Sign in
          </button>

          <button className="px-3 py-1.5 text-xs font-medium rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-neutral-300 transition-colors hidden md:block">
            Send feedback
          </button>
        </div>
      </div>

      {/* 2. REAL DASHBOARD STATUS STRIP (Active listening notice) */}
      <div className="bg-[#121B13]/90 border-b border-[#53FC18]/20 px-4 py-2 flex items-center justify-between text-xs text-neutral-300">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#53FC18]" />
          <span>
            Connected to <strong>Kick & YouTube live chat tabs</strong>. Real-time global AI multi-language clustering active.
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-neutral-400 hidden sm:flex font-mono">
          <Globe2 className="w-3.5 h-3.5 text-[#53FC18]" />
          <span>Understanding: ES · EN · HI · PT · FR · DE · JP</span>
        </div>
      </div>

      {/* 3. THREE-COLUMN REAL DASHBOARD BODY */}
      <div className="p-4 grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* LEFT COLUMN: CHAT WANTS NOW & QUESTIONS (3 cols) */}
        <div className="lg:col-span-3 space-y-4 flex flex-col justify-between">
          {/* Box 1: CHAT WANTS NOW */}
          <div className="bg-[#071109] border border-[#53FC18]/25 rounded-xl p-4 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-[#53FC18] tracking-wider uppercase font-mono">
                  CHAT WANTS NOW
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[#53FC18] text-black font-bold text-[10px] font-mono">
                  {sentiment}
                </span>
              </div>

              <p className="text-[11px] text-neutral-400 leading-snug mb-3">
                Requests show up here within 15 seconds of chat asking, and drop off after 3 quiet minutes.
              </p>

              {/* Tag clusters with counts exactly like user screenshot */}
              <div className="flex flex-wrap gap-1.5">
                {chatWants.map(want => (
                  <span
                    key={want.id}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/60 border border-neutral-800 text-xs text-neutral-200 hover:border-[#53FC18]/50 transition-colors"
                  >
                    <span>{want.text}</span>
                    <strong className="text-[#53FC18] font-mono">{want.count}</strong>
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-[10px] text-neutral-400">
              <span>Automatic 3-min dropoff</span>
              <span className="text-[#53FC18]">Updated live</span>
            </div>
          </div>

          {/* Box 2: QUESTIONS */}
          <div className="bg-[#071109] border border-neutral-800 rounded-xl p-4 flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-[#52E3C2] tracking-wider uppercase font-mono">
                  QUESTIONS
                </span>
                <span className="text-[10px] font-mono text-neutral-400">
                  {questions.filter(q => !q.isAnswered).length} active
                </span>
              </div>

              <p className="text-[11px] text-neutral-400 leading-snug mb-3">
                Questions from the last 3 minutes show up here. Tick one off once you&apos;ve answered it on stream.
              </p>

              {/* Question list with tick box */}
              <div className="space-y-2">
                {questions.map(q => (
                  <div
                    key={q.id}
                    className={`p-2.5 rounded-lg border transition-all ${
                      q.isAnswered
                        ? 'bg-neutral-900/30 border-neutral-800 opacity-40 line-through'
                        : 'bg-black/50 border-neutral-800 hover:border-[#52E3C2]/40'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-1.5 text-[10px] text-neutral-400 mb-1">
                          <span className="font-semibold text-white">{q.author}</span>
                          <span>·</span>
                          <span className="text-[#53FC18] font-mono font-bold">×{q.repeat}</span>
                          <span>·</span>
                          <span className="text-neutral-400">{q.lang}</span>
                        </div>
                        <div className="text-xs text-neutral-100 font-medium leading-snug">
                          {q.text}
                        </div>
                      </div>

                      <button
                        onClick={() => handleAnswerQuestion(q.id)}
                        className={`w-6 h-6 rounded flex items-center justify-center shrink-0 border transition-all ${
                          q.isAnswered
                            ? 'bg-neutral-800 border-neutral-700 text-neutral-400'
                            : 'bg-[#53FC18]/15 border-[#53FC18]/50 hover:bg-[#53FC18] text-[#53FC18] hover:text-black'
                        }`}
                        title="Mark answered on stream"
                      >
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-3 pt-2 border-t border-neutral-800/80 text-[10px] text-neutral-400">
              Ticks remove item from OBS live HUD
            </div>
          </div>
        </div>

        {/* CENTER COLUMN: EVERY MESSAGE FEED (6 cols) */}
        <div className="lg:col-span-6 bg-[#071109] border border-neutral-800 rounded-xl flex flex-col h-[540px] overflow-hidden">
          {/* Header & Filter Tabs */}
          <div className="p-3 border-b border-neutral-800 flex flex-wrap items-center justify-between gap-2 bg-[#050C07]">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-300 font-mono">
              EVERY MESSAGE
            </span>

            {/* Exact filter pills like user screenshot: All, Questions, Flagged, Super Chats, Members */}
            <div className="flex items-center gap-1 text-xs">
              {(['All', 'Questions', 'Flagged', 'Super Chats', 'Members'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors whitespace-nowrap ${
                    activeTab === tab
                      ? 'bg-white text-black font-bold shadow-sm'
                      : 'text-neutral-400 hover:text-white bg-neutral-900/60'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Messages list with exact timestamp, username color, badges, repeat pill */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2 text-xs font-sans scrollbar-thin scrollbar-thumb-neutral-800">
            <AnimatePresence initial={false}>
              {filteredMessages.map(msg => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.15 }}
                  className="flex items-baseline gap-2 py-1 px-2 rounded hover:bg-neutral-900/60 transition-colors"
                >
                  {/* Timestamp */}
                  <span className="text-[10px] font-mono text-neutral-400 shrink-0">
                    {msg.time}
                  </span>

                  {/* Username with authentic color */}
                  <span 
                    className="font-bold shrink-0 text-xs"
                    style={{ color: msg.color }}
                  >
                    {msg.author}
                  </span>

                  {/* Badges: MEMBER / REPEAT / SUPER CHAT */}
                  {msg.badge && (
                    <span 
                      className={`text-[9px] font-mono font-bold px-1.5 py-0.2 rounded uppercase shrink-0 ${
                        msg.badge === 'MEMBER'
                          ? 'bg-[#53FC18]/20 text-[#53FC18] border border-[#53FC18]/40'
                          : msg.badge === 'REPEAT'
                          ? 'bg-neutral-800 text-neutral-300 border border-neutral-700'
                          : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                      }`}
                    >
                      {msg.badge}
                    </span>
                  )}

                  {/* Repeat multiplier if repeated */}
                  {msg.repeat > 1 && (
                    <span className="text-[10px] font-mono text-[#53FC18] font-bold shrink-0">
                      ×{msg.repeat}
                    </span>
                  )}

                  {/* Message body */}
                  <span className="text-neutral-200 break-words flex-1 leading-snug">
                    {msg.text}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
            <div ref={messagesEndRef} />
          </div>

          {/* Quick status bar at bottom of center feed */}
          <div className="px-3 py-2 border-t border-neutral-800 bg-[#050C07] flex items-center justify-between text-[11px] text-neutral-400">
            <span>Showing live stream chat (YouTube & Kick)</span>
            <span className="text-[#53FC18] font-mono">Real-time sync</span>
          </div>
        </div>

        {/* RIGHT COLUMN: FLAGGED & PEOPLE (3 cols) */}
        <div className="lg:col-span-3 space-y-4 flex flex-col justify-between">
          {/* Box 1: FLAGGED (Red header) */}
          <div className="bg-[#0B0707] border border-red-900/40 rounded-xl p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-red-400 tracking-wider uppercase font-mono flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5 text-red-400" />
                  FLAGGED
                </span>
                <span className="text-[10px] font-mono text-red-400 bg-red-950/60 px-2 py-0.5 rounded border border-red-800/40">
                  {flaggedMessages.length} flagged
                </span>
              </div>

              <p className="text-[11px] text-neutral-400 leading-snug mb-3">
                Flags never delete anything; you and your mods decide.
              </p>

              {flaggedMessages.length === 0 ? (
                <div className="p-3 text-center text-xs text-neutral-400 bg-black/40 rounded-lg">
                  Nothing flagged. Chat is clean.
                </div>
              ) : (
                <div className="space-y-2">
                  {flaggedMessages.map(f => (
                    <div
                      key={f.id}
                      className="p-2.5 rounded-lg bg-red-950/30 border border-red-800/40 text-xs space-y-1"
                    >
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="font-bold text-red-300">{f.author}</span>
                        <span className="text-neutral-400 font-mono">Flagged {f.repeat}x</span>
                      </div>
                      <p className="text-red-200 text-[11px] line-clamp-2">{f.text}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-3 pt-2 border-t border-neutral-800/80 text-[10px] text-neutral-400">
              Repeat offenders highlighted automatically
            </div>
          </div>

          {/* Box 2: PEOPLE (Tabbed: Just joined, Most active, Super Chats) */}
          <div className="bg-[#071109] border border-neutral-800 rounded-xl p-4 flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-white tracking-wider uppercase font-mono">
                  PEOPLE
                </span>

                {/* Tabs: Just joined, Most active, Super Chats */}
                <div className="flex items-center gap-1 text-[11px]">
                  {(['Just joined', 'Most active', 'Super Chats'] as const).map(pTab => (
                    <button
                      key={pTab}
                      onClick={() => setPeopleTab(pTab)}
                      className={`px-2 py-0.5 rounded text-[10px] font-medium transition-colors ${
                        peopleTab === pTab
                          ? 'bg-neutral-800 text-white font-bold'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      {pTab}
                    </button>
                  ))}
                </div>
              </div>

              {/* People list matching user screenshot */}
              <div className="space-y-2 mt-3">
                {[
                  { name: 'R_odrig0', time: '10:35 AM', quote: 'bana SAJ', count: 18 },
                  { name: 'Byzek3', time: '10:35 AM', quote: 'xdd tremendo clutch', count: 14 },
                  { name: 'gigil燦yu', time: '10:35 AM', quote: 'GG clan', count: 11 },
                  { name: 'KS_Laure_912', time: '10:34 AM', quote: '¿sensibilidad en dpi?', count: 9 }
                ].map(person => (
                  <div
                    key={person.name}
                    className="p-2 rounded-lg bg-black/50 border border-neutral-800 flex items-center justify-between text-xs"
                  >
                    <div>
                      <div className="font-bold text-white text-[11px]">{person.name}</div>
                      <div className="text-[10px] text-neutral-400 italic">
                        &ldquo;{person.quote}&rdquo;
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-mono text-neutral-400 block">{person.time}</span>
                      <span className="text-[10px] font-mono font-bold text-[#53FC18]">{person.count} msgs</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-3 pt-2 border-t border-neutral-800/80 text-[10px] text-neutral-400">
              Tracks high-energy chatters & VIPs
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
