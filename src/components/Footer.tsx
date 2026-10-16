import React from 'react';
import { ChatCueLogo } from './ChatCueLogo';
import { CHROME_STORE_URL } from '../constants';
import { Chrome, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-neutral-900 bg-[#030604] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand & Tagline */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <ChatCueLogo size="md" />
          <span className="text-xs text-neutral-400">
            Live chat dashboard & cue engine for YouTube & Kick streamers.
          </span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400 font-medium">
          <a href="#simulator" className="hover:text-[#53FC18] transition-colors">
            Simulator
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
          © {new Date().getFullYear()} ChatCue. All rights reserved. Built for creators.
        </div>
        <div className="text-[11px] text-neutral-400">
          YouTube and Kick are registered trademarks of their respective owners. ChatCue is an independent extension.
        </div>
      </div>
    </footer>
  );
};
