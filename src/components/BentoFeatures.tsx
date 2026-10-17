import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Layers, HelpCircle, ShieldAlert, Users, Globe2, Sparkles } from 'lucide-react';
import dashboardFull from '../../dashboard-full.webp';

// Layout units of the dashboard screenshot (dashboard-full.webp is 2400x1350, same 16:9 layout).
const SHOT_W = 2000;
const SHOT_H = 1125;
const FRAME_ASPECT = 4 / 3;
const ADVANCE_MS = 5500;

interface Stop {
  label: string;
  title: string;
  body: string;
  icon: React.ElementType;
  color: string;
  // Panel position in the screenshot: x, y, width, height in layout units.
  panel: [number, number, number, number];
}

const STOPS: Stop[] = [
  {
    label: 'Chat wants now',
    title: 'Requests, ranked by how many people ask',
    body: 'When viewers keep asking for the same thing, a song, a map, a reaction, it becomes one card with a count. New requests show up in about 15 seconds and drop off after 3 quiet minutes.',
    icon: Layers,
    color: '#53FC18',
    panel: [20, 117, 605, 538],
  },
  {
    label: 'Questions',
    title: "Questions you haven't answered yet",
    body: 'Questions from the last 3 minutes, grouped when people ask the same thing. Answer it on stream and tick it off.',
    icon: HelpCircle,
    color: '#52E3C2',
    panel: [20, 675, 605, 430],
  },
  {
    label: 'Flagged',
    title: 'Abuse goes to its own panel',
    body: "Insults and spam are pulled out of the way so they don't catch your eye mid-game. Nothing is deleted. You and your mods decide.",
    icon: ShieldAlert,
    color: '#FF5D7A',
    panel: [1430, 117, 550, 538],
  },
  {
    label: 'People & Super Chats',
    title: "See who's in your chat",
    body: "Who just joined, who's most active, and every Super Chat, so you can thank people after the fight.",
    icon: Users,
    color: '#A970FF',
    panel: [1430, 675, 550, 430],
  },
];

const pct = (n: number) => n * 100 + '%';

// The part of the screenshot to show: the panel plus a margin, widened to the
// frame's shape and kept inside the image. Also where the spotlight sits in it.
function framing([px, py, pw, ph]: Stop['panel']) {
  const pad = 28;
  let x = px - pad;
  let y = py - pad;
  let w = pw + pad * 2;
  let h = ph + pad * 2;
  if (w / h > FRAME_ASPECT) {
    const nh = w / FRAME_ASPECT;
    y -= (nh - h) / 2;
    h = nh;
  } else {
    const nw = h * FRAME_ASPECT;
    x -= (nw - w) / 2;
    w = nw;
  }
  x = Math.max(0, Math.min(x, SHOT_W - w));
  y = Math.max(0, Math.min(y, SHOT_H - h));
  return {
    image: { width: pct(SHOT_W / w), left: pct(-x / w), top: pct(-y / h) },
    spot: { left: pct((px - x) / w), top: pct((py - y) / h), width: pct(pw / w), height: pct(ph / h) },
  };
}

export const BentoFeatures: React.FC = () => {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const running = auto && !paused && !reduceMotion;

  useEffect(() => {
    if (!running) return;
    const t = setTimeout(() => setActive((i) => (i + 1) % STOPS.length), ADVANCE_MS);
    return () => clearTimeout(t);
  }, [active, running]);

  // Once someone picks a stop themselves, the tour stops moving on its own.
  const pick = (i: number) => {
    setActive(i);
    setAuto(false);
  };

  const stop = STOPS[active];
  const frame = framing(stop.panel);
  const move = { duration: reduceMotion ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] };

  return (
    <section id="features" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#53FC18]/10 border border-[#53FC18]/25 text-[#53FC18] text-xs font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Features</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight text-balance">
          What's on your dashboard
        </h2>
        <p className="mt-4 text-base sm:text-lg text-neutral-400">
          A quick tour of the real ChatCue dashboard, shown with sample chat.
        </p>
      </div>

      <div
        className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Tour stops */}
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-2.5" role="tablist" aria-label="Dashboard tour">
            {STOPS.map((s, i) => {
              const on = i === active;
              const Icon = s.icon;
              return (
                <button
                  key={s.label}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  onClick={() => pick(i)}
                  className={[
                    'relative overflow-hidden text-left rounded-xl border px-3.5 py-3 lg:px-5 lg:py-4 transition-colors duration-200',
                    on
                      ? 'bg-[#0A140D] border-[#53FC18]/45 shadow-[0_0_24px_rgba(83,252,24,0.10)]'
                      : 'bg-[#070D08] border-neutral-800/80 hover:border-neutral-700',
                  ].join(' ')}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-colors duration-200"
                      style={{
                        color: s.color,
                        borderColor: on ? s.color : 'rgba(255,255,255,0.1)',
                        background: on ? s.color + '1f' : 'transparent',
                      }}
                    >
                      <Icon className="w-4 h-4" />
                    </span>
                    <div className="min-w-0">
                      <div
                        className="text-[11px] font-mono font-bold uppercase tracking-wider leading-tight"
                        style={{ color: on ? s.color : '#8a8a8a' }}
                      >
                        <span className="hidden lg:inline">0{i + 1} · </span>
                        {s.label}
                      </div>
                      <div
                        className={[
                          'hidden lg:block mt-0.5 font-display font-bold text-base',
                          on ? 'text-white' : 'text-neutral-300',
                        ].join(' ')}
                      >
                        {s.title}
                      </div>
                    </div>
                  </div>

                  <AnimatePresence initial={false}>
                    {on && (
                      <motion.div
                        key="body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="hidden lg:block overflow-hidden"
                      >
                        <p className="pt-2 pl-11 text-sm text-neutral-300 leading-relaxed">{s.body}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {on && running && (
                    <motion.span
                      key={'bar-' + active}
                      aria-hidden="true"
                      className="absolute bottom-0 left-0 h-[2px]"
                      style={{ background: s.color }}
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: ADVANCE_MS / 1000, ease: 'linear' }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Phones: the active stop's text sits under the buttons */}
          <div className="lg:hidden mt-4 px-1" aria-live="polite">
            <div className="font-display font-bold text-lg text-white">{stop.title}</div>
            <p className="mt-1 text-sm text-neutral-300 leading-relaxed">{stop.body}</p>
          </div>
        </div>

        {/* The real dashboard, zoomed onto the active panel */}
        <div className="lg:col-span-7 order-1 lg:order-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#53FC18]/30 bg-[#060D07] shadow-[0_0_60px_rgba(83,252,24,0.15)]">
            <motion.img
              src={dashboardFull}
              alt="The ChatCue dashboard with sample chat"
              draggable={false}
              className="absolute max-w-none h-auto select-none"
              initial={false}
              animate={frame.image}
              transition={move}
            />
            <motion.div
              aria-hidden="true"
              className="absolute rounded-2xl border-2 pointer-events-none"
              initial={false}
              animate={{
                ...frame.spot,
                borderColor: stop.color,
                boxShadow: '0 0 0 9999px rgba(2,6,3,0.55), 0 0 32px ' + stop.color + '80',
              }}
              transition={move}
            />
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-start sm:items-center justify-center gap-2 text-sm text-neutral-400 text-center">
        <Globe2 className="w-4 h-4 mt-0.5 sm:mt-0 text-[#53FC18] shrink-0" />
        <span>Works in Spanish, Portuguese, English, Hinglish, French, German and more, even when one chat mixes them.</span>
      </div>
    </section>
  );
};
