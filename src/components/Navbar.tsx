import React, { useState } from 'react';
import { Menu, X, ArrowDownToLine, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenDownload: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDownload }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';

  return (
    <header className={`sticky top-0 z-50 w-full backdrop-blur-md transition-colors duration-300 ${
      isLight ? 'bg-white/85 border-b border-slate-200 shadow-xs' : 'bg-[#08090d]/85 border-b border-neutral-800/80'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Zone 1: Brand Wordmark */}
        <a href="#" className={`flex items-center gap-2 group text-xl font-bold font-display tracking-tight ${
          isLight ? 'text-slate-900' : 'text-white'
        }`}>
          <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.7)] group-hover:scale-125 transition-transform" />
          <span>qla.fit</span>
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className={`hidden md:flex items-center gap-7 text-sm font-medium ${
          isLight ? 'text-slate-600' : 'text-neutral-300'
        }`}>
          <a href="#nutrition" className={`transition-colors flex items-center gap-1.5 ${isLight ? 'text-blue-600 hover:text-blue-800 font-semibold' : 'text-blue-400 hover:text-blue-300 font-semibold'}`}>
            <span>Free Nutrients</span>
            <span className="text-[10px] bg-blue-500/15 border border-blue-500/30 px-1.5 py-0.5 rounded text-blue-400 font-mono">0$</span>
          </a>
          <a href="#training-store" className={`transition-colors flex items-center gap-1.5 ${isLight ? 'hover:text-slate-900' : 'hover:text-white'}`}>
            <span>Training Store</span>
            <span className="text-[10px] bg-blue-500/15 border border-blue-500/30 px-1.5 py-0.5 rounded text-blue-400 font-mono">AI</span>
          </a>
          <a href="#features" className={`transition-colors ${isLight ? 'hover:text-slate-900' : 'hover:text-white'}`}>Features</a>
          <a href="#devices" className={`transition-colors ${isLight ? 'hover:text-slate-900' : 'hover:text-white'}`}>Live Devices</a>
          <a href="#widgets" className={`transition-colors ${isLight ? 'hover:text-slate-900' : 'hover:text-white'}`}>Widgets</a>
          <a href="#watch" className={`transition-colors ${isLight ? 'hover:text-slate-900' : 'hover:text-white'}`}>Apple Watch</a>
          <a href="#privacy" className={`transition-colors ${isLight ? 'hover:text-slate-900' : 'hover:text-white'}`}>Privacy</a>
          <a href="#faq" className={`transition-colors ${isLight ? 'hover:text-slate-900' : 'hover:text-white'}`}>FAQ</a>
        </nav>

        {/* Zone 3: Primary actions + Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          {/* Light / Dark Mode Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-xl border transition-all cursor-pointer flex items-center gap-1.5 text-xs font-medium ${
              isLight 
                ? 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300' 
                : 'bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border-neutral-800'
            }`}
            title={`Switch to ${isLight ? 'Dark' : 'Light'} Mode`}
            aria-label="Toggle Theme"
          >
            {isLight ? (
              <>
                <Moon className="w-4 h-4 text-indigo-600" />
                <span className="hidden lg:inline text-[11px]">Dark</span>
              </>
            ) : (
              <>
                <Sun className="w-4 h-4 text-amber-400" />
                <span className="hidden lg:inline text-[11px]">Light</span>
              </>
            )}
          </button>

          <button
            onClick={onOpenDownload}
            className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.35)] hover:shadow-[0_0_25px_rgba(37,99,235,0.55)] flex items-center gap-1.5 whitespace-nowrap cursor-pointer active:scale-95"
          >
            <ArrowDownToLine className="w-3.5 h-3.5" />
            <span>Get qla.fit</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg border text-xs ${
              isLight ? 'bg-slate-100 text-slate-800 border-slate-300' : 'bg-neutral-900 text-neutral-300 border-neutral-800'
            }`}
            aria-label="Toggle Theme"
          >
            {isLight ? <Moon className="w-4 h-4 text-indigo-600" /> : <Sun className="w-4 h-4 text-amber-400" />}
          </button>
          <button
            onClick={onOpenDownload}
            className="px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 rounded-lg whitespace-nowrap cursor-pointer"
          >
            Download
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg focus:outline-none ${isLight ? 'text-slate-600' : 'text-neutral-400'}`}
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={`md:hidden px-5 pt-3 pb-6 space-y-3 border-b transition-colors ${
          isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0d0e14] border-neutral-800'
        }`}>
          <a
            href="#nutrition"
            onClick={() => setMobileMenuOpen(false)}
            className={`block text-sm font-semibold py-1.5 flex items-center justify-between ${isLight ? 'text-blue-700 hover:text-blue-900' : 'text-blue-400 hover:text-blue-300'}`}
          >
            <span>Free Nutrients & Scanner</span>
            <span className="text-[10px] bg-blue-500/15 border border-blue-500/30 px-1.5 py-0.5 rounded text-blue-400 font-mono">100% Free</span>
          </a>
          <a
            href="#training-store"
            onClick={() => setMobileMenuOpen(false)}
            className={`block text-sm font-medium py-1.5 flex items-center justify-between ${isLight ? 'text-slate-700 hover:text-slate-950' : 'text-neutral-300 hover:text-white'}`}
          >
            <span>Training Store & AI Adaptive</span>
            <span className="text-[10px] bg-blue-500/15 border border-blue-500/30 px-1.5 py-0.5 rounded text-blue-400 font-mono">AI</span>
          </a>
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className={`block text-sm font-medium py-1.5 ${isLight ? 'text-slate-700 hover:text-slate-950' : 'text-neutral-300 hover:text-white'}`}
          >
            Features
          </a>
          <a
            href="#devices"
            onClick={() => setMobileMenuOpen(false)}
            className={`block text-sm font-medium py-1.5 ${isLight ? 'text-slate-700 hover:text-slate-950' : 'text-neutral-300 hover:text-white'}`}
          >
            Live Devices & Mockups
          </a>
          <a
            href="#widgets"
            onClick={() => setMobileMenuOpen(false)}
            className={`block text-sm font-medium py-1.5 ${isLight ? 'text-slate-700 hover:text-slate-950' : 'text-neutral-300 hover:text-white'}`}
          >
            iOS Widgets
          </a>
          <a
            href="#watch"
            onClick={() => setMobileMenuOpen(false)}
            className={`block text-sm font-medium py-1.5 ${isLight ? 'text-slate-700 hover:text-slate-950' : 'text-neutral-300 hover:text-white'}`}
          >
            Apple Watch Companion
          </a>
          <a
            href="#privacy"
            onClick={() => setMobileMenuOpen(false)}
            className={`block text-sm font-medium py-1.5 ${isLight ? 'text-slate-700 hover:text-slate-950' : 'text-neutral-300 hover:text-white'}`}
          >
            100% On-Device Privacy
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className={`block text-sm font-medium py-1.5 ${isLight ? 'text-slate-700 hover:text-slate-950' : 'text-neutral-300 hover:text-white'}`}
          >
            FAQ
          </a>
        </div>
      )}
    </header>
  );
};
