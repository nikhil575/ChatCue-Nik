import React from 'react';
import { Star, MessageSquareQuote } from 'lucide-react';
import { AVATAR_MALE, AVATAR_FEMALE } from '../constants';

export const CreatorTestimonials: React.FC = () => {
  return (
    <section id="streamers" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#53FC18]/10 border border-[#53FC18]/25 text-[#53FC18] text-xs font-semibold mb-4">
          <MessageSquareQuote className="w-3.5 h-3.5" />
          <span>Streamer Stories</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight text-balance">
          Used by Live Streamers Worldwide
        </h2>
        <p className="mt-4 text-base sm:text-lg text-neutral-400">
          From fast-paced Spanish and Portuguese communities to US, EU, and Asian multi-streamers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Testimonial 1: Spanish / Global Streamer */}
        <div className="bg-[#09130C] border border-[#53FC18]/25 hover:border-[#53FC18]/50 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all shadow-[0_0_30px_rgba(83,252,24,0.06)]">
          <div>
            <div className="flex items-center gap-1 text-[#53FC18] mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>

            <blockquote className="text-base sm:text-lg text-white font-medium leading-relaxed mb-6">
              &ldquo;Transmitir en Kick y YouTube al mismo tiempo era imposible sin perderme los mensajes. ChatCue agrupa al instante cuando 50 personas me piden canciones o preguntan por mi sensibilidad en el juego. El panel de &lsquo;CHAT WANTS NOW&rsquo; con el humor del chat es brutal.&rdquo;
            </blockquote>
          </div>

          <div className="flex items-center gap-4 pt-4 border-t border-neutral-800">
            <img
              src={AVATAR_MALE}
              alt="Mateo Morales - Kick & YouTube Creator"
              className="w-12 h-12 rounded-xl object-cover border border-[#53FC18]/40"
              referrerPolicy="no-referrer"
            />
            <div>
              <div className="text-sm font-bold text-white">Mateo &ldquo;DedsafTeam&rdquo; Morales</div>
              <div className="text-xs text-neutral-400">
                Kick Partner & YouTube Streamer · <span className="text-[#53FC18]">Spain & LATAM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial 2: Global Variety / FPS Streamer */}
        <div className="bg-[#09130C] border border-[#53FC18]/25 hover:border-[#53FC18]/50 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all shadow-[0_0_30px_rgba(83,252,24,0.06)]">
          <div>
            <div className="flex items-center gap-1 text-[#53FC18] mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>

            <blockquote className="text-base sm:text-lg text-white font-medium leading-relaxed mb-6">
              &ldquo;The multi-language support is remarkable. Whether viewers comment in English, Portuguese, Spanish, or regional gamer slang, ChatCue groups the core questions together in seconds. Plus, the 3-minute question tick-off keeps my broadcast feeling like an interactive show.&rdquo;
            </blockquote>
          </div>

          <div className="flex items-center gap-4 pt-4 border-t border-neutral-800">
            <img
              src={AVATAR_FEMALE}
              alt="Sarah Jenkins - Variety Streamer"
              className="w-12 h-12 rounded-xl object-cover border border-[#53FC18]/40"
              referrerPolicy="no-referrer"
            />
            <div>
              <div className="text-sm font-bold text-white">Sarah &ldquo;NeonValkyrie&rdquo; Jenkins</div>
              <div className="text-xs text-neutral-400">
                FPS & Variety Creator · <span className="text-[#53FC18]">Apex Legends & Just Chatting</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
