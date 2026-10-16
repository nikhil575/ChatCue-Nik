import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Globe2 } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: 'Is ChatCue a global tool? Which languages and regions are supported?',
    answer:
      'ChatCue is 100% global and supports all major languages and regional dialects, including Spanish (Spain & Latin America), Portuguese (Brazil & Portugal), English, French, German, Japanese, and Hinglish. It recognizes colloquial streamer slang, regional memes (e.g., "guacha", "farfadox", "SAJ", "xdd", "op clutch"), and Romanized text effortlessly.'
  },
  {
    question: 'How do "CHAT WANTS NOW" and "QUESTIONS" work on the dashboard?',
    answer:
      'CHAT WANTS NOW detects audience sentiment and groups repeated viewer requests within 15 seconds, automatically dropping off after 3 minutes of inactivity. The QUESTIONS panel isolates questions asked in the last 3 minutes and gives you a one-click checkmark to mark them answered on stream.'
  },
  {
    question: 'Does ChatCue cause frame drops or lag in OBS Studio or my game?',
    answer:
      "No. ChatCue reads your open chat tab in the browser and the AI runs on ChatCue's servers, so nothing heavy runs on your PC and there's nothing to install in OBS."
  },
  {
    question: 'Do I need to enter stream keys, passwords, or developer API tokens?',
    answer:
      'Never. ChatCue requires zero API keys, no passwords, and no bot authorizations. You simply install the Chrome extension and keep your regular YouTube Live, Kick, or Twitch chat tab open.'
  },
  {
    question: 'How does the "FLAGGED" moderation box protect my stream?',
    answer:
      'Flags in ChatCue never delete or ban anything automatically. You and your mods remain in complete control. It simply isolates flagged toxic or abusive messages into a dedicated sidebar with repeat offender counts (e.g. "Flagged 3x") so you don\'t get distracted mid-match.'
  },
  {
    question: 'How do I add the live requests overlay into OBS Studio or Streamlabs?',
    answer:
      'Click "Copy OBS overlay link" on the dashboard, then in OBS add a Browser Source and paste the link. It shows the top 3 chat requests live.'
  }
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#53FC18]/10 border border-[#53FC18]/25 text-[#53FC18] text-xs font-semibold mb-4">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Streamer FAQ</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight text-balance">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-base sm:text-lg text-neutral-400">
          Everything you need to know about setting up ChatCue for your global live broadcasts.
        </p>
      </div>

      <div className="space-y-3.5">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={faq.question}
              className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? 'bg-[#0A140D] border-[#53FC18]/40 shadow-[0_0_20px_rgba(83,252,24,0.08)]'
                  : 'bg-[#070D08] border-neutral-800/80 hover:border-neutral-700'
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-5 text-left text-white font-display font-bold text-base sm:text-lg focus:outline-none"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#53FC18] transition-transform duration-200 shrink-0 ml-4 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/60">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
