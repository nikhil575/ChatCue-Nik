import React from 'react';

interface ChatCueLogoProps {
  className?: string;
  iconOnly?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const ChatCueIcon: React.FC<{ size?: number; className?: string }> = ({ size = 36, className = '' }) => {
  return (
    <div 
      className={`relative inline-flex items-center justify-center shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Outer ambient glow */}
      <div 
        className="absolute inset-0 rounded-2xl bg-[#53FC18]/30 blur-md transition-all duration-300 group-hover:bg-[#53FC18]/50"
      />
      
      {/* Container SVG */}
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 drop-shadow-md"
      >
        <defs>
          <linearGradient id="bubbleBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#142C17" />
            <stop offset="50%" stopColor="#0A160C" />
            <stop offset="100%" stopColor="#040905" />
          </linearGradient>
          <linearGradient id="borderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#53FC18" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#2E9E0B" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#53FC18" stopOpacity="0.2" />
          </linearGradient>
          <filter id="greenGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Squircle base */}
        <rect 
          x="3" 
          y="3" 
          width="94" 
          height="94" 
          rx="26" 
          fill="url(#bubbleBg)" 
          stroke="url(#borderGrad)" 
          strokeWidth="3.5"
        />

        {/* Subtle glass reflection highlight on top edge */}
        <path 
          d="M12 28 C 12 19, 19 12, 28 12 L 72 12 C 81 12, 88 19, 88 28 C 88 22, 60 20, 12 28 Z" 
          fill="white" 
          fillOpacity="0.08"
        />

        {/* Ambient green radial splash inside */}
        <circle cx="50" cy="46" r="28" fill="#53FC18" fillOpacity="0.16" filter="blur(8px)" />

        {/* Chat speech bubble outline */}
        <path 
          d="M28 32 C23 32 19 36 19 41 L19 61 C19 66 23 70 28 70 L34 70 L34 78 C34 79 35.5 79.5 36.5 78.5 L46 70 L72 70 C77 70 81 66 81 61 L81 41 C81 36 77 32 72 32 Z" 
          fill="none" 
          stroke="#E6FFE9" 
          strokeWidth="6" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />

        {/* First small dot */}
        <circle cx="39" cy="51" r="4.2" fill="#E6FFE9" />

        {/* Second small dot */}
        <circle cx="51" cy="51" r="4.2" fill="#E6FFE9" />

        {/* Third LIVE CUE dot - glowing neon Kick green */}
        <circle cx="64" cy="51" r="6.2" fill="#53FC18" filter="url(#greenGlow)" />
        <circle cx="64" cy="51" r="4" fill="#7DFF4E" />
      </svg>
    </div>
  );
};

export const ChatCueLogo: React.FC<ChatCueLogoProps> = ({ 
  className = '', 
  iconOnly = false,
  size = 'md' 
}) => {
  const iconPixel = size === 'sm' ? 28 : size === 'md' ? 36 : size === 'lg' ? 44 : 56;
  const textSize = size === 'sm' ? 'text-lg' : size === 'md' ? 'text-xl' : size === 'lg' ? 'text-2xl' : 'text-3xl';

  return (
    <div className={`flex items-center gap-2.5 font-display font-extrabold tracking-tight select-none ${className}`}>
      <ChatCueIcon size={iconPixel} />
      {!iconOnly && (
        <span className={`${textSize} leading-none whitespace-nowrap`}>
          <span className="text-white">Chat</span>
          <span className="text-[#53FC18] drop-shadow-[0_0_12px_rgba(83,252,24,0.4)]">Cue</span>
        </span>
      )}
    </div>
  );
};
