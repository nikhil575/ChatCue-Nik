import React from 'react';
import { ChatCueLogo } from './ChatCueLogo';
import { CHROME_STORE_URL, PRIVACY_URL, INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../constants';
import { Chrome, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-neutral-900 bg-[#030604] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand & Tagline */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <ChatCueLogo size="md" />
          <span className="text-xs text-neutral-400">
            Live chat dashboard & cue engine for YouTube, Kick & Twitch streamers.
          </span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400 font-medium">
          <a href="#how-it-works" className="hover:text-[#53FC18] transition-colors">
            How it works
          </a>
          <a href="#features" className="hover:text-[#53FC18] transition-colors">
            Features
          </a>
          <a href="#obs-overlay" className="hover:text-[#53FC18] transition-colors">
            OBS Overlay
          </a>
          <a href="#faq" className="hover:text-[#53FC18] transition-colors">
            FAQ
          </a>
          <a href={PRIVACY_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#53FC18] transition-colors">
            Privacy
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#53FC18] transition-colors flex items-center gap-1"
          >
            <Instagram className="w-3.5 h-3.5" />
            <span>Instagram</span>
          </a>
          <a
            href={CHROME_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#53FC18] transition-colors flex items-center gap-1 text-[#53FC18]"
          >
            <Chrome className="w-3.5 h-3.5" />
            <span>Chrome Web Store</span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-neutral-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 text-center sm:text-left">
        <div>
          © {new Date().getFullYear()} ChatCue. All rights reserved. Questions? DM{' '}
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-[#53FC18]">
            {INSTAGRAM_HANDLE}
          </a>{' '}
          on Instagram.
        </div>
        <div className="text-[11px] text-neutral-400">
          YouTube, Kick, and Twitch are registered trademarks of their respective owners. ChatCue is an independent extension.
        </div>
      </div>
    </footer>
  );
};
