import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface FooterProps {
  onOpenDownload: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDownload }) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <footer className={`border-t text-xs transition-colors duration-300 ${
      isLight ? 'bg-slate-50 border-slate-200 text-slate-500' : 'bg-[#050608] border-neutral-800 text-neutral-400'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className={`flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b ${
          isLight ? 'border-slate-200' : 'border-neutral-900'
        }`}>
          {/* Brand */}
          <div className="space-y-2">
            <a href="#" className={`flex items-center gap-2 font-logo font-extrabold text-2xl tracking-tight ${
              isLight ? 'text-slate-900' : 'text-white'
            }`}>
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.7)]" />
              <span style={{ fontFamily: "'Syne', sans-serif" }} className="font-extrabold tracking-tight">qla.fit</span>
            </a>
            <p className={isLight ? 'text-slate-600 max-w-sm' : 'text-neutral-500 max-w-sm'}>
              The high-precision health & fitness dashboard for iPhone and Apple Watch. 100% on-device HealthKit processing.
            </p>
          </div>

          {/* Nav Links */}
          <div className={`flex flex-wrap gap-8 font-medium ${isLight ? 'text-slate-700' : 'text-neutral-300'}`}>
            <a href="#nutrition" className={`transition-colors ${isLight ? 'hover:text-slate-950' : 'hover:text-white'}`}>Free Nutrients</a>
            <a href="#routes" className={`transition-colors ${isLight ? 'hover:text-slate-950 text-amber-600 font-semibold' : 'hover:text-white text-amber-400 font-semibold'}`}>Free Strava Routes</a>
            <a href="#watch" className={`transition-colors ${isLight ? 'hover:text-slate-950' : 'hover:text-white'}`}>Apple Watch & CrossFit</a>
            <a href="#devices" className={`transition-colors ${isLight ? 'hover:text-slate-950' : 'hover:text-white'}`}>Live Devices</a>
            <a href="#widgets" className={`transition-colors ${isLight ? 'hover:text-slate-950' : 'hover:text-white'}`}>Widgets</a>
            <a href="#privacy" className={`transition-colors ${isLight ? 'hover:text-slate-950' : 'hover:text-white'}`}>Privacy Manifesto</a>
            <a href="#faq" className={`transition-colors ${isLight ? 'hover:text-slate-950' : 'hover:text-white'}`}>FAQ</a>
            <button
              onClick={onOpenDownload}
              className="text-blue-500 hover:text-blue-400 transition-colors font-semibold flex items-center gap-1 cursor-pointer"
            >
              <span>Download App</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Legal & Trademark notices */}
        <div className={`pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 ${
          isLight ? 'text-slate-500' : 'text-neutral-500'
        }`}>
          <div>
            © {new Date().getFullYear()} qla.fit. All rights reserved.
          </div>
          <div className={`text-[11px] max-w-lg text-center sm:text-right ${isLight ? 'text-slate-400' : 'text-neutral-600'}`}>
            Apple, Apple Watch, iPhone, and HealthKit are registered trademarks of Apple Inc. 
            qla.fit is an independent application designed to visualize Apple Health data.
          </div>
        </div>

      </div>
    </footer>
  );
};
