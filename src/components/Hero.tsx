import React from 'react';
import { motion } from 'motion/react';
import { QrCode, Shield, Star, Sparkles, CheckCircle2 } from 'lucide-react';
import { InteractiveDeviceSection } from './InteractiveDeviceSection';
import { useTheme } from '../context/ThemeContext';

interface HeroProps {
  onOpenDownload: () => void;
  onOpenQR: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDownload, onOpenQR }) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden transition-colors duration-300">
      {/* Top subtle grid pattern */}
      <div className={`absolute inset-0 pointer-events-none ${
        isLight ? 'bg-mesh-light opacity-50' : 'bg-mesh-dark opacity-40'
      }`} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Eyebrow */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider mb-4 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>OUR MOTTO: TRACK ALL FOR FREE</span>
            <span aria-hidden="true">·</span>
            <span>ZERO PAYWALLS</span>
          </div>

          {/* Marquee Headline */}
          <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-display tracking-tight max-w-4xl mx-auto leading-[1.08] text-balance transition-colors ${
            isLight ? 'text-slate-900' : 'text-white'
          }`}>
            Your nutrients, macros & activities.{' '}
            <span className="bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-300 bg-clip-text text-transparent">
              Track all for free.
            </span>
          </h1>

          {/* Subtitle */}
          <p className={`mt-6 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-sans transition-colors ${
            isLight ? 'text-slate-600' : 'text-neutral-300'
          }`}>
            While other apps lock food barcode scanning and custom macro targets behind $80/year paywalls, 
            <strong className="text-blue-500 font-semibold"> qla.fit</strong> gives you full activity rings, 
            a free food QR scanner, complete micronutrients (trans fat, cholesterol, fiber), free goal selection, and Apple Health integration.
          </p>

          {/* Key Value Badges */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-xs font-mono">
            <span className={`px-2.5 py-1 rounded-lg border flex items-center gap-1.5 ${
              isLight ? 'bg-slate-100 border-slate-300 text-slate-800' : 'bg-neutral-900 border-neutral-800 text-neutral-300'
            }`}>
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" /> Activity Rings & Workouts
            </span>
            <span className={`px-2.5 py-1 rounded-lg border flex items-center gap-1.5 ${
              isLight ? 'bg-slate-100 border-slate-300 text-slate-800' : 'bg-neutral-900 border-neutral-800 text-neutral-300'
            }`}>
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" /> Free QR & Barcode Scanner
            </span>
            <span className={`px-2.5 py-1 rounded-lg border flex items-center gap-1.5 ${
              isLight ? 'bg-slate-100 border-slate-300 text-slate-800' : 'bg-neutral-900 border-neutral-800 text-neutral-300'
            }`}>
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" /> Free Macro & Nutrient Rings
            </span>
            <span className={`px-2.5 py-1 rounded-lg border flex items-center gap-1.5 ${
              isLight ? 'bg-slate-100 border-slate-300 text-slate-800' : 'bg-neutral-900 border-neutral-800 text-neutral-300'
            }`}>
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" /> Free Custom Goals & Trends
            </span>
          </div>

          {/* Primary Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={onOpenDownload}
              className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-2xl shadow-[0_0_25px_rgba(37,99,235,0.45)] hover:shadow-[0_0_35px_rgba(37,99,235,0.6)] transition-all flex items-center gap-2.5 active:scale-95 cursor-pointer"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.42c.67-.82 1.13-1.95.99-3.09-1 .04-2.16.67-2.84 1.47-.6.69-1.12 1.83-.98 2.94 1.11.09 2.19-.57 2.83-1.32z" />
              </svg>
              <span>Download Free on App Store</span>
            </button>

            <button
              onClick={onOpenQR}
              className={`px-5 py-3.5 font-medium text-sm rounded-2xl border transition-all flex items-center gap-2 cursor-pointer ${
                isLight
                  ? 'bg-white hover:bg-slate-50 text-slate-800 border-slate-300 shadow-sm'
                  : 'bg-neutral-900/90 hover:bg-neutral-800 text-neutral-200 hover:text-white border-neutral-700/80'
              }`}
            >
              <QrCode className="w-4 h-4 text-blue-400" />
              <span>Scan QR with iPhone</span>
            </button>
          </div>

          {/* Social Proof Line */}
          <div className={`mt-8 flex flex-wrap items-center justify-center gap-4 text-xs ${
            isLight ? 'text-slate-500' : 'text-neutral-400'
          }`}>
            <div className="flex items-center gap-1 text-amber-500 font-semibold font-mono">
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
              <span className={`ml-1 ${isLight ? 'text-slate-800' : 'text-white'}`}>4.9 / 5.0</span>
            </div>
            <span aria-hidden="true" className={isLight ? 'text-slate-300' : 'text-neutral-700'}>·</span>
            <span>$0.00 Subscription Fee</span>
            <span aria-hidden="true" className={isLight ? 'text-slate-300' : 'text-neutral-700'}>·</span>
            <span className={`flex items-center gap-1 ${isLight ? 'text-slate-700' : 'text-neutral-300'}`}>
              <Shield className="w-3.5 h-3.5 text-emerald-500" />
              100% on-device privacy guarantee
            </span>
          </div>
        </div>

        {/* Interactive Device Mockups Showcase with Placeholders */}
        <div id="devices" className="mt-8">
          <InteractiveDeviceSection />
        </div>

      </div>
    </section>
  );
};
