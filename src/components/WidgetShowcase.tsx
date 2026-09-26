import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Flame, Heart, Footprints, Moon, Shield } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const WidgetShowcase: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const [selectedSize, setSelectedSize] = useState<'small' | 'medium' | 'large' | 'lockscreen'>('medium');

  return (
    <section id="widgets" className={`relative py-24 border-t transition-colors duration-300 ${
      isLight ? 'bg-white border-slate-200' : 'bg-[#08090d] border-neutral-800/80'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className={`text-xs font-mono font-medium uppercase tracking-widest mb-2 ${
            isLight ? 'text-cyan-700' : 'text-cyan-400'
          }`}>
            iOS 18 & Lock Screen Architecture
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight ${
            isLight ? 'text-slate-900' : 'text-white'
          }`}>
            Over 30 glanceable widgets for every screen.
          </h2>
          <p className={`mt-4 text-sm sm:text-base leading-relaxed ${
            isLight ? 'text-slate-600' : 'text-neutral-400'
          }`}>
            From quick glance Lock Screen rings to deep multi-metric Home Screen clusters. 
            Updated automatically via HealthKit background refresh without waking battery-draining apps.
          </p>

          {/* Size Filter Segmented Control */}
          <div className={`mt-8 inline-flex items-center p-1.5 border rounded-2xl transition-colors ${
            isLight ? 'bg-slate-100 border-slate-300' : 'bg-neutral-900 border-neutral-800'
          }`}>
            <button
              onClick={() => setSelectedSize('small')}
              className={`px-4 py-2 text-xs font-medium rounded-xl transition-all cursor-pointer ${
                selectedSize === 'small'
                  ? 'bg-rose-500 text-white shadow-md'
                  : isLight ? 'text-slate-600 hover:text-slate-900' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Small (2×2)
            </button>
            <button
              onClick={() => setSelectedSize('medium')}
              className={`px-4 py-2 text-xs font-medium rounded-xl transition-all cursor-pointer ${
                selectedSize === 'medium'
                  ? 'bg-rose-500 text-white shadow-md'
                  : isLight ? 'text-slate-600 hover:text-slate-900' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Medium (4×2)
            </button>
            <button
              onClick={() => setSelectedSize('large')}
              className={`px-4 py-2 text-xs font-medium rounded-xl transition-all cursor-pointer ${
                selectedSize === 'large'
                  ? 'bg-rose-500 text-white shadow-md'
                  : isLight ? 'text-slate-600 hover:text-slate-900' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Large (4×4)
            </button>
            <button
              onClick={() => setSelectedSize('lockscreen')}
              className={`px-4 py-2 text-xs font-medium rounded-xl transition-all cursor-pointer ${
                selectedSize === 'lockscreen'
                  ? 'bg-rose-500 text-white shadow-md'
                  : isLight ? 'text-slate-600 hover:text-slate-900' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Lock Screen
            </button>
          </div>
        </div>

        {/* Widgets Interactive Display Grid */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {selectedSize === 'medium' && (
              <motion.div
                key={`medium-widgets-${theme}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {/* Medium Widget 1: Activity Rings & Details */}
                <div className={`p-5 rounded-[28px] border shadow-xl transition-all ${
                  isLight
                    ? 'bg-white border-slate-200 hover:border-slate-300 shadow-slate-200/50'
                    : 'bg-neutral-900/90 border-neutral-800 hover:border-neutral-700'
                }`}>
                  <div className={`flex items-center justify-between text-xs mb-3 ${isLight ? 'text-slate-500' : 'text-neutral-400'}`}>
                    <span className={`font-semibold ${isLight ? 'text-slate-800' : 'text-neutral-300'}`}>Daily Rings & Calorie Burn</span>
                    <span className={`font-mono text-[10px] px-2 py-0.5 rounded text-rose-500 ${isLight ? 'bg-slate-100' : 'bg-neutral-800'}`}>qla.fit</span>
                  </div>
                  
                  <div className="flex items-center justify-between gap-4">
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ff2d55]" />
                        <span className={isLight ? 'text-slate-600' : 'text-neutral-400'}>Move:</span>
                        <span className={`font-mono font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>740 / 650 kcal</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#30d158]" />
                        <span className={isLight ? 'text-slate-600' : 'text-neutral-400'}>Exercise:</span>
                        <span className={`font-mono font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>46 / 30 min</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#00c7be]" />
                        <span className={isLight ? 'text-slate-600' : 'text-neutral-400'}>Stand:</span>
                        <span className={`font-mono font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>11 / 12 hrs</span>
                      </div>
                    </div>

                    <div className="relative w-20 h-20 flex items-center justify-center">
                      <svg className="w-20 h-20 -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="38" stroke="#ff2d55" strokeWidth="8" fill="none" opacity={isLight ? '0.12' : '0.2'} />
                        <circle cx="50" cy="50" r="28" stroke="#30d158" strokeWidth="8" fill="none" opacity={isLight ? '0.12' : '0.2'} />
                        <circle cx="50" cy="50" r="18" stroke="#00c7be" strokeWidth="8" fill="none" opacity={isLight ? '0.12' : '0.2'} />
                        <circle cx="50" cy="50" r="38" stroke="#ff2d55" strokeWidth="8" strokeDasharray={238} strokeDashoffset={25} strokeLinecap="round" fill="none" />
                        <circle cx="50" cy="50" r="28" stroke="#30d158" strokeWidth="8" strokeDasharray={175} strokeDashoffset={10} strokeLinecap="round" fill="none" />
                        <circle cx="50" cy="50" r="18" stroke="#00c7be" strokeWidth="8" strokeDasharray={113} strokeDashoffset={20} strokeLinecap="round" fill="none" />
                      </svg>
                      <Flame className="w-3.5 h-3.5 text-rose-500 absolute" />
                    </div>
                  </div>
                </div>

                {/* Medium Widget 2: Heart & Vitals Trend */}
                <div className={`p-5 rounded-[28px] border shadow-xl transition-all ${
                  isLight
                    ? 'bg-white border-slate-200 hover:border-slate-300 shadow-slate-200/50'
                    : 'bg-neutral-900/90 border-neutral-800 hover:border-neutral-700'
                }`}>
                  <div className={`flex items-center justify-between text-xs mb-2 ${isLight ? 'text-slate-500' : 'text-neutral-400'}`}>
                    <span className={`font-semibold ${isLight ? 'text-slate-800' : 'text-neutral-300'}`}>Vitals & Resting HR</span>
                    <Heart className="w-3.5 h-3.5 text-rose-500 animate-pulse" />
                  </div>
                  
                  <div className="flex items-baseline justify-between mt-1">
                    <div className="flex items-baseline gap-1">
                      <span className={`text-3xl font-mono font-bold tabular-nums ${isLight ? 'text-slate-900' : 'text-white'}`}>74</span>
                      <span className="text-xs text-rose-500 font-mono">BPM</span>
                    </div>
                    <div className="text-right text-xs font-mono">
                      <span className="text-emerald-600 font-bold">54 BPM</span>
                      <span className="text-neutral-400 block text-[10px]">7-DAY RESTING AVG</span>
                    </div>
                  </div>

                  {/* Hourly spark bars */}
                  <div className="flex items-end justify-between h-10 gap-1.5 mt-3">
                    {[58, 62, 59, 74, 82, 110, 138, 92, 76, 72, 70, 74].map((hr, idx) => (
                      <div 
                        key={idx} 
                        className={`w-full rounded-t-sm ${
                          idx === 6 ? 'bg-rose-500' : isLight ? 'bg-slate-200' : 'bg-neutral-700'
                        }`}
                        style={{ height: `${(hr / 140) * 100}%` }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {selectedSize === 'small' && (
              <motion.div
                key={`small-widgets-${theme}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4"
              >
                {/* Small Widget 1: Steps */}
                <div className={`p-4 rounded-[26px] border aspect-square flex flex-col justify-between shadow-lg ${
                  isLight ? 'bg-white border-slate-200' : 'bg-neutral-900 border-neutral-800'
                }`}>
                  <div className={`flex items-center justify-between text-xs ${isLight ? 'text-slate-500' : 'text-neutral-400'}`}>
                    <span>Steps</span>
                    <Footprints className="w-3.5 h-3.5 text-amber-500" />
                  </div>
                  <div className="my-auto">
                    <div className={`text-2xl font-mono font-bold tabular-nums ${isLight ? 'text-slate-900' : 'text-white'}`}>11,280</div>
                    <div className="text-[10px] text-emerald-600 font-semibold mt-0.5">Goal: 10,000 (112%)</div>
                  </div>
                  <div className={`h-1.5 w-full rounded-full overflow-hidden ${isLight ? 'bg-slate-100' : 'bg-neutral-800'}`}>
                    <div className="h-full bg-amber-400 rounded-full w-full" />
                  </div>
                </div>

                {/* Small Widget 2: Rings Mini */}
                <div className={`p-4 rounded-[26px] border aspect-square flex flex-col justify-between shadow-lg ${
                  isLight ? 'bg-white border-slate-200' : 'bg-neutral-900 border-neutral-800'
                }`}>
                  <div className={`flex items-center justify-between text-xs ${isLight ? 'text-slate-500' : 'text-neutral-400'}`}>
                    <span>Activity</span>
                    <Flame className="w-3.5 h-3.5 text-rose-500" />
                  </div>
                  <div className="flex items-center justify-center py-1">
                    <div className="relative w-16 h-16 flex items-center justify-center">
                      <svg className="w-16 h-16 -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="38" stroke="#ff2d55" strokeWidth="9" fill="none" opacity={isLight ? '0.12' : '0.2'} />
                        <circle cx="50" cy="50" r="26" stroke="#30d158" strokeWidth="9" fill="none" opacity={isLight ? '0.12' : '0.2'} />
                        <circle cx="50" cy="50" r="14" stroke="#00c7be" strokeWidth="9" fill="none" opacity={isLight ? '0.12' : '0.2'} />
                        <circle cx="50" cy="50" r="38" stroke="#ff2d55" strokeWidth="9" strokeDasharray={238} strokeDashoffset={20} strokeLinecap="round" fill="none" />
                        <circle cx="50" cy="50" r="26" stroke="#30d158" strokeWidth="9" strokeDasharray={163} strokeDashoffset={15} strokeLinecap="round" fill="none" />
                        <circle cx="50" cy="50" r="14" stroke="#00c7be" strokeWidth="9" strokeDasharray={88} strokeDashoffset={10} strokeLinecap="round" fill="none" />
                      </svg>
                    </div>
                  </div>
                  <div className={`text-center font-mono text-[11px] font-bold ${isLight ? 'text-slate-800' : 'text-neutral-300'}`}>740 kcal</div>
                </div>

                {/* Small Widget 3: Heart Rate */}
                <div className={`p-4 rounded-[26px] border aspect-square flex flex-col justify-between shadow-lg ${
                  isLight ? 'bg-white border-slate-200' : 'bg-neutral-900 border-neutral-800'
                }`}>
                  <div className={`flex items-center justify-between text-xs ${isLight ? 'text-slate-500' : 'text-neutral-400'}`}>
                    <span>Heart Rate</span>
                    <Heart className="w-3.5 h-3.5 text-rose-500" />
                  </div>
                  <div className="my-auto">
                    <div className={`text-2xl font-mono font-bold tabular-nums ${isLight ? 'text-slate-900' : 'text-white'}`}>
                      74 <span className="text-xs text-rose-500 font-normal">BPM</span>
                    </div>
                    <div className={`text-[10px] mt-0.5 ${isLight ? 'text-slate-500' : 'text-neutral-400'}`}>Resting: 54 bpm</div>
                  </div>
                  <div className="text-[10px] font-mono text-emerald-600 font-semibold">HRV: 64ms (Optimal)</div>
                </div>

                {/* Small Widget 4: Sleep */}
                <div className={`p-4 rounded-[26px] border aspect-square flex flex-col justify-between shadow-lg ${
                  isLight ? 'bg-white border-slate-200' : 'bg-neutral-900 border-neutral-800'
                }`}>
                  <div className={`flex items-center justify-between text-xs ${isLight ? 'text-slate-500' : 'text-neutral-400'}`}>
                    <span>Sleep</span>
                    <Moon className="w-3.5 h-3.5 text-indigo-500" />
                  </div>
                  <div className="my-auto">
                    <div className={`text-2xl font-mono font-bold tabular-nums ${isLight ? 'text-slate-900' : 'text-white'}`}>
                      7<span className="text-sm font-normal text-neutral-400">h</span> 48<span className="text-sm font-normal text-neutral-400">m</span>
                    </div>
                    <div className="text-[10px] text-indigo-500 mt-0.5">Deep: 1h 42m</div>
                  </div>
                  <div className="text-[10px] font-mono text-emerald-600 font-semibold">Quality: 91%</div>
                </div>
              </motion.div>
            )}

            {selectedSize === 'large' && (
              <motion.div
                key={`large-widgets-${theme}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.2 }}
                className={`max-w-xl mx-auto p-6 rounded-[34px] border shadow-2xl space-y-5 ${
                  isLight ? 'bg-white border-slate-200' : 'bg-neutral-900/95 border-neutral-800'
                }`}
              >
                <div className={`flex items-center justify-between border-b pb-3 ${isLight ? 'border-slate-200' : 'border-neutral-800'}`}>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <span className={`text-sm font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>Full Biometric Command</span>
                  </div>
                  <span className={`text-xs font-mono ${isLight ? 'text-slate-400' : 'text-neutral-400'}`}>Updated 2m ago</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className={`p-3.5 rounded-2xl border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-neutral-950 border-neutral-800'}`}>
                    <div className={`text-xs ${isLight ? 'text-slate-500' : 'text-neutral-400'}`}>Active Energy</div>
                    <div className="text-2xl font-mono font-bold text-[#ff2d55] mt-1 tabular-nums">740 <span className="text-xs text-neutral-400">kcal</span></div>
                    <div className="text-[10px] text-emerald-600 font-semibold mt-0.5">+14% above target</div>
                  </div>
                  <div className={`p-3.5 rounded-2xl border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-neutral-950 border-neutral-800'}`}>
                    <div className={`text-xs ${isLight ? 'text-slate-500' : 'text-neutral-400'}`}>Exercise Duration</div>
                    <div className="text-2xl font-mono font-bold text-[#30d158] mt-1 tabular-nums">46 <span className="text-xs text-neutral-400">mins</span></div>
                    <div className="text-[10px] text-emerald-600 font-semibold mt-0.5">Goal surpassed</div>
                  </div>
                  <div className={`p-3.5 rounded-2xl border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-neutral-950 border-neutral-800'}`}>
                    <div className={`text-xs ${isLight ? 'text-slate-500' : 'text-neutral-400'}`}>Total Steps</div>
                    <div className="text-2xl font-mono font-bold text-amber-500 mt-1 tabular-nums">11,280</div>
                    <div className={`text-[10px] mt-0.5 ${isLight ? 'text-slate-500' : 'text-neutral-500'}`}>8.42 km walked</div>
                  </div>
                  <div className={`p-3.5 rounded-2xl border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-neutral-950 border-neutral-800'}`}>
                    <div className={`text-xs ${isLight ? 'text-slate-500' : 'text-neutral-400'}`}>Cardio VO2 Max</div>
                    <div className="text-2xl font-mono font-bold text-[#00c7be] mt-1 tabular-nums">51.4</div>
                    <div className="text-[10px] text-emerald-600 font-semibold mt-0.5">Superior bracket</div>
                  </div>
                </div>

                <div className={`p-3 rounded-2xl border flex items-center justify-between text-xs ${
                  isLight ? 'bg-slate-50 border-slate-200' : 'bg-neutral-950 border-neutral-800'
                }`}>
                  <span className={isLight ? 'text-slate-600' : 'text-neutral-400'}>Apple HealthKit Status</span>
                  <span className="text-emerald-600 font-mono font-medium flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5" /> Direct Local Sandbox
                  </span>
                </div>
              </motion.div>
            )}

            {selectedSize === 'lockscreen' && (
              <motion.div
                key={`lockscreen-widgets-${theme}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.2 }}
                className={`max-w-2xl mx-auto p-6 rounded-[34px] border shadow-2xl ${
                  isLight ? 'bg-slate-900 text-white border-slate-800' : 'bg-neutral-950 text-white border-neutral-800/90'
                }`}
              >
                <div className="text-center font-mono text-neutral-400 text-xs mb-4">
                  iOS 18 Lock Screen Preview (Always-On OLED)
                </div>

                <div className="bg-black/60 p-4 rounded-2xl border border-white/10 flex flex-wrap items-center justify-center gap-6">
                  <div className="w-16 h-16 rounded-full border border-neutral-700 bg-black flex items-center justify-center relative">
                    <svg className="w-12 h-12 -rotate-90" viewBox="0 0 50 50">
                      <circle cx="25" cy="25" r="18" stroke="#555" strokeWidth="4" fill="none" opacity="0.3" />
                      <circle cx="25" cy="25" r="18" stroke="#fff" strokeWidth="4" strokeDasharray={113} strokeDashoffset={20} strokeLinecap="round" fill="none" />
                    </svg>
                    <Flame className="w-4 h-4 text-white absolute" />
                  </div>

                  <div className="px-4 py-2 rounded-xl border border-neutral-700 bg-black text-left font-mono">
                    <div className="text-[10px] text-neutral-400 uppercase tracking-wider">qla.fit Deficit</div>
                    <div className="text-sm font-bold text-white">-420 kcal</div>
                    <div className="text-[9px] text-neutral-500">Target deficit met</div>
                  </div>

                  <div className="w-16 h-16 rounded-full border border-neutral-700 bg-black flex flex-col items-center justify-center">
                    <Heart className="w-3.5 h-3.5 text-white" />
                    <span className="font-mono text-xs font-bold text-white mt-0.5">74</span>
                    <span className="text-[8px] text-neutral-400">BPM</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
