import React, { useState, useEffect } from 'react';
import { ChatCueLogo } from './ChatCueLogo';
import { CHROME_STORE_URL } from '../constants';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#040805]/90 backdrop-blur-md border-b border-[#53FC18]/15 py-3.5 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single element Brand Zone */}
          <a
            href="#"
            className="flex items-center gap-2 text-white hover:opacity-90 transition-opacity whitespace-nowrap shrink-0 group"
          >
            <ChatCueLogo size="md" />
          </a>

          {/* Zone 2: 4-5 concise single-line nav links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
            <a
              href="#simulator"
              className="hover:text-[#53FC18] transition-colors whitespace-nowrap shrink-0"
            >
              Live Simulator
            </a>
            <a
              href="#features"
              className="hover:text-[#53FC18] transition-colors whitespace-nowrap shrink-0"
            >
              Key Features
            </a>
            <a
              href="#obs-overlay"
              className="hover:text-[#53FC18] transition-colors whitespace-nowrap shrink-0"
            >
              OBS Overlay
            </a>
            <a
              href="#streamers"
              className="hover:text-[#53FC18] transition-colors whitespace-nowrap shrink-0"
            >
              Streamers
            </a>
            <a
              href="#faq"
              className="hover:text-[#53FC18] transition-colors whitespace-nowrap shrink-0"
            >
              FAQ
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={CHROME_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold text-black bg-[#53FC18] hover:bg-[#70FF3F] rounded-lg transition-all duration-200 shadow-[0_0_20px_rgba(83,252,24,0.35)] hover:shadow-[0_0_28px_rgba(83,252,24,0.6)] hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap shrink-0"
            >
              <span>Add to Chrome</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>

            {/* Mobile hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-400 hover:text-white rounded-lg focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A120D] border-b border-[#53FC18]/20 px-6 py-5 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4 text-sm font-medium text-neutral-200">
            <a
              href="#simulator"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#53FC18] transition-colors"
            >
              Live Simulator
            </a>
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#53FC18] transition-colors"
            >
              Key Features
            </a>
            <a
              href="#obs-overlay"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#53FC18] transition-colors"
            >
              OBS Overlay
            </a>
            <a
              href="#streamers"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#53FC18] transition-colors"
            >
              Streamers
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#53FC18] transition-colors"
            >
              FAQ
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
