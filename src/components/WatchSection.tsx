import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BellRing, BatteryCharging, Zap, Heart } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const WatchSection: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const [activeFace, setActiveFace] = useState<'ultra' | 'modular' | 'minimal'>('ultra');

  return (
    <section id="watch" className={`relative py-24 border-t transition-colors duration-300 ${
      isLight ? 'bg-slate-100/50 border-slate-200' : 'bg-neutral-950 border-neutral-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`text-xs font-mono font-medium uppercase tracking-widest mb-2 ${
            isLight ? 'text-rose-600' : 'text-rose-400'
          }`}>
            Independent watchOS Experience
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight ${
            isLight ? 'text-slate-900' : 'text-white'
          }`}>
            Engineered for Apple Watch Ultra & Series.
          </h2>
          <p className={`mt-4 text-sm sm:text-base leading-relaxed ${
            isLight ? 'text-slate-600' : 'text-neutral-400'
          }`}>
            Leave your phone at home. Track CrossFit WODs, lifting sets, split times, and live heart rate zones directly from your wrist with standalone watchOS execution and tailored haptics.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className={`p-6 rounded-3xl border shadow-lg transition-all ${
            isLight ? 'bg-white border-slate-200 hover:border-slate-300' : 'bg-[#11131c] border-neutral-800 hover:border-neutral-700'
          }`}>
            <div className="w-10 h-10 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-500 flex items-center justify-center mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className={`text-lg font-bold mb-2 ${isLight ? 'text-slate-900' : 'text-white'}`}>Standalone Execution</h3>
            <p className={`text-sm leading-relaxed ${isLight ? 'text-slate-600' : 'text-neutral-400'}`}>
              No tethered iPhone needed. Complete workout tracking with instant sensor polling directly in watchOS.
            </p>
          </div>

          <div className={`p-6 rounded-3xl border shadow-lg transition-all ${
            isLight ? 'bg-white border-slate-200 hover:border-slate-300' : 'bg-[#11131c] border-neutral-800 hover:border-neutral-700'
          }`}>
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 flex items-center justify-center mb-4">
              <BellRing className="w-5 h-5" />
            </div>
            <h3 className={`text-lg font-bold mb-2 ${isLight ? 'text-slate-900' : 'text-white'}`}>Haptic Zone Alerts</h3>
            <p className={`text-sm leading-relaxed ${isLight ? 'text-slate-600' : 'text-neutral-400'}`}>
              Subtle, distinct wrist taps when shifting between Zone 2 aerobic base, Zone 4 lactate threshold, or maximum effort.
            </p>
          </div>

          <div className={`p-6 rounded-3xl border shadow-lg transition-all ${
            isLight ? 'bg-white border-slate-200 hover:border-slate-300' : 'bg-[#11131c] border-neutral-800 hover:border-neutral-700'
          }`}>
            <div className="w-10 h-10 rounded-2xl bg-[#00c7be]/10 border border-[#00c7be]/20 text-[#00c7be] flex items-center justify-center mb-4">
              <BatteryCharging className="w-5 h-5" />
            </div>
            <h3 className={`text-lg font-bold mb-2 ${isLight ? 'text-slate-900' : 'text-white'}`}>OLED Always-On Efficiency</h3>
            <p className={`text-sm leading-relaxed ${isLight ? 'text-slate-600' : 'text-neutral-400'}`}>
              Architected with deep true blacks and 1Hz wrist-down refresh so battery life lasts long ultras and trail days.
            </p>
          </div>
        </div>

        {/* Interactive Watch Complication Face Switcher */}
        <div className={`p-8 sm:p-12 rounded-[36px] border shadow-2xl transition-colors ${
          isLight
            ? 'bg-gradient-to-br from-white via-slate-50 to-slate-100 border-slate-200'
            : 'bg-gradient-to-br from-[#131622] via-[#0d0f17] to-[#08090d] border-neutral-800'
        }`}>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            
            <div className="space-y-6 max-w-lg">
              <div className={`text-xs font-mono tracking-wider ${isLight ? 'text-cyan-700' : 'text-cyan-400'}`}>
                COMPLICATIONS ENGINE
              </div>
              <h3 className={`text-2xl sm:text-3xl font-bold font-display ${isLight ? 'text-slate-900' : 'text-white'}`}>
                12 Complication families designed for your favorite face.
              </h3>
              <p className={`text-sm leading-relaxed ${isLight ? 'text-slate-600' : 'text-neutral-300'}`}>
                Whether you use the Wayfinder bezel on Apple Watch Ultra or Modular Duo on Series 10, 
                qla.fit complications give you instant glanceable readings without opening the app.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                <button
                  onClick={() => setActiveFace('ultra')}
                  className={`px-4 py-2 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
                    activeFace === 'ultra'
                      ? 'bg-rose-500 text-white border-rose-500 shadow-md'
                      : isLight ? 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50' : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-white'
                  }`}
                >
                  Ultra Modular
                </button>
                <button
                  onClick={() => setActiveFace('modular')}
                  className={`px-4 py-2 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
                    activeFace === 'modular'
                      ? 'bg-rose-500 text-white border-rose-500 shadow-md'
                      : isLight ? 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50' : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-white'
                  }`}
                >
                  Infograph Rings
                </button>
                <button
                  onClick={() => setActiveFace('minimal')}
                  className={`px-4 py-2 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
                    activeFace === 'minimal'
                      ? 'bg-rose-500 text-white border-rose-500 shadow-md'
                      : isLight ? 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50' : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-white'
                  }`}
                >
                  Pace & Heart Bezel
                </button>
              </div>
            </div>

            {/* Interactive Face Preview */}
            <div className={`relative w-72 h-84 rounded-[48px] border-4 p-5 shadow-2xl flex flex-col justify-between select-none ${
              isLight ? 'bg-black text-white border-slate-400' : 'bg-black text-white border-neutral-700/80'
            }`}>
              <div className="absolute -right-3 top-16 w-3 h-12 bg-neutral-600 rounded-r-md" />

              <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                <span className="text-white font-bold">10:09</span>
                <span className="text-emerald-400">QLA</span>
              </div>

              {activeFace === 'ultra' && (
                <div className="space-y-2 py-2">
                  <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-left font-mono">
                    <div className="text-[10px] text-neutral-400">ACTIVE CALORIES</div>
                    <div className="text-xl font-bold text-[#ff2d55]">740 KCAL</div>
                    <div className="text-[9px] text-emerald-400">+90 over target</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-center font-mono">
                    <div className="p-2 rounded-xl bg-neutral-900 border border-neutral-800">
                      <div className="text-[9px] text-neutral-400">HRV</div>
                      <div className="text-sm font-bold text-white">64 ms</div>
                    </div>
                    <div className="p-2 rounded-xl bg-neutral-900 border border-neutral-800">
                      <div className="text-[9px] text-neutral-400">STEPS</div>
                      <div className="text-sm font-bold text-amber-400">11.2k</div>
                    </div>
                  </div>
                </div>
              )}

              {activeFace === 'modular' && (
                <div className="flex flex-col items-center justify-center py-2 space-y-2">
                  <div className="relative w-28 h-28 flex items-center justify-center">
                    <svg className="w-28 h-28 -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="38" stroke="#ff2d55" strokeWidth="8" fill="none" opacity="0.25" />
                      <circle cx="50" cy="50" r="28" stroke="#30d158" strokeWidth="8" fill="none" opacity="0.25" />
                      <circle cx="50" cy="50" r="18" stroke="#00c7be" strokeWidth="8" fill="none" opacity="0.25" />
                      <circle cx="50" cy="50" r="38" stroke="#ff2d55" strokeWidth="8" strokeDasharray={238} strokeDashoffset={30} strokeLinecap="round" fill="none" />
                      <circle cx="50" cy="50" r="28" stroke="#30d158" strokeWidth="8" strokeDasharray={175} strokeDashoffset={20} strokeLinecap="round" fill="none" />
                      <circle cx="50" cy="50" r="18" stroke="#00c7be" strokeWidth="8" strokeDasharray={113} strokeDashoffset={15} strokeLinecap="round" fill="none" />
                    </svg>
                  </div>
                  <div className="text-center font-mono text-xs text-white font-bold">Closed: 2 of 3</div>
                </div>
              )}

              {activeFace === 'minimal' && (
                <div className="space-y-3 py-2 text-center font-mono">
                  <div className="p-3 rounded-2xl bg-neutral-900 border border-neutral-800">
                    <div className="flex items-center justify-center gap-1.5 text-rose-500 text-xs">
                      <Heart className="w-4 h-4 animate-pulse" />
                      <span className="font-bold">Zone 2</span>
                    </div>
                    <div className="text-2xl font-bold text-white mt-0.5">142 <span className="text-xs text-neutral-400">BPM</span></div>
                  </div>
                  <div className="text-[10px] text-neutral-400">Optimal Aerobic Pacing</div>
                </div>
              )}

              <div className="flex justify-between text-[10px] font-mono text-neutral-500 pt-1 border-t border-neutral-900">
                <span>49MM TITANIUM</span>
                <span>qla.fit OS</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
