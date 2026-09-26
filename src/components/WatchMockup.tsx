import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Flame, Heart, Upload, RotateCcw } from 'lucide-react';
import type { ScreenPreset, FitnessMetrics, ThemeMode } from '../types/fitness';

interface WatchMockupProps {
  preset: ScreenPreset;
  metrics: FitnessMetrics;
  customImage: string | null;
  themeMode?: ThemeMode;
  onUploadImage?: (dataUrl: string) => void;
  onClearCustomImage?: () => void;
  className?: string;
}

export const WatchMockup: React.FC<WatchMockupProps> = ({
  preset,
  metrics,
  customImage,
  themeMode = 'dark',
  onUploadImage,
  onClearCustomImage,
  className = '',
}) => {
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const isLight = themeMode === 'light';

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onUploadImage) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          onUploadImage(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const movePct = Math.min(100, Math.round((metrics.moveCurrent / metrics.moveTarget) * 100));
  const exercisePct = Math.min(100, Math.round((metrics.exerciseCurrent / metrics.exerciseTarget) * 100));
  const standPct = Math.min(100, Math.round((metrics.standCurrent / metrics.standTarget) * 100));

  return (
    <div className={`relative mx-auto select-none transition-all duration-300 ${className}`}>
      {/* Watch Straps (Top & Bottom) */}
      <div className={`absolute left-1/2 -top-12 -translate-x-1/2 w-32 h-14 rounded-t-2xl shadow-inner border-t transition-colors ${
        isLight
          ? 'bg-gradient-to-b from-[#e2e8f0] to-[#cbd5e1] border-slate-300'
          : 'bg-gradient-to-b from-[#252834] to-[#1c1e27] border-white/10'
      }`} />
      <div className={`absolute left-1/2 -bottom-12 -translate-x-1/2 w-32 h-14 rounded-b-2xl shadow-inner border-b transition-colors ${
        isLight
          ? 'bg-gradient-to-t from-[#e2e8f0] to-[#cbd5e1] border-slate-300'
          : 'bg-gradient-to-t from-[#252834] to-[#1c1e27] border-white/10'
      }`} />

      {/* Titanium Watch Case */}
      <div className={`relative w-[240px] sm:w-[260px] h-[290px] sm:h-[310px] rounded-[52px] p-[10px] ring-1 transition-all duration-300 ${
        isLight
          ? 'bg-[#d8dfea] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.18),0_0_0_1px_rgba(0,0,0,0.06)] ring-slate-300'
          : 'bg-[#22242e] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.18)] ring-white/10'
      }`}>
        
        {/* Digital Crown on Right */}
        <div className={`absolute -right-3 top-14 w-3.5 h-14 rounded-r-md border-y border-r flex items-center justify-center ${
          isLight
            ? 'bg-gradient-to-r from-[#cbd5e1] via-[#e2e8f0] to-[#94a3b8] border-slate-400'
            : 'bg-gradient-to-r from-[#2c2f3b] via-[#4a4d5d] to-[#1a1c24] border-neutral-600'
        }`}>
          <div className="w-1 h-8 bg-rose-500 rounded-full" />
        </div>

        {/* Side Button on Right */}
        <div className={`absolute -right-2 bottom-16 w-2.5 h-12 rounded-r-sm border ${
          isLight ? 'bg-[#cbd5e1] border-slate-400' : 'bg-[#2d303d] border-neutral-600'
        }`} />

        {/* Action Button on Left (Ultra Orange) */}
        <div className="absolute -left-2.5 top-20 w-3 h-14 bg-gradient-to-l from-[#e65100] to-[#ff6d00] rounded-l-md border-y border-l border-orange-400 shadow-[0_0_10px_rgba(255,109,0,0.3)]" />

        {/* Watch Screen Glass */}
        <div className={`relative w-full h-full rounded-[42px] overflow-hidden p-3.5 flex flex-col justify-between font-sans border transition-colors ${
          isLight
            ? 'bg-white text-slate-900 border-slate-300'
            : 'bg-black text-white border-neutral-800'
        }`}>
          
          {/* Top Status */}
          <div className="flex items-center justify-between text-[11px] font-mono px-1">
            <span className={`font-bold ${isLight ? 'text-emerald-600' : 'text-emerald-400'}`}>09:41</span>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
              <span className={`text-[10px] font-sans ${isLight ? 'text-slate-500' : 'text-neutral-400'}`}>qla.fit</span>
            </div>
          </div>

          {/* Screen Content / Placeholder */}
          <div className="relative flex-1 flex flex-col justify-center my-1 overflow-hidden">
            {customImage ? (
              <div className="relative w-full h-full flex flex-col items-center justify-center">
                <img 
                  src={customImage} 
                  alt="Custom Watch Complication" 
                  className="w-full h-full object-cover rounded-2xl" 
                />
                <button
                  onClick={onClearCustomImage}
                  className="absolute bottom-2 bg-black/80 hover:bg-black text-white text-[10px] px-2.5 py-1 rounded-full border border-white/20 flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-2.5 h-2.5" />
                  <span>Reset</span>
                </button>
              </div>
            ) : (
              <AnimatePresence mode="wait">
                {preset === 'workout' ? (
                  <motion.div
                    key={`watch-workout-${themeMode}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-1.5 text-center"
                  >
                    <div className="text-[10px] text-rose-500 font-semibold tracking-wide uppercase">CrossFit WOD</div>
                    <div className={`text-3xl font-mono font-bold tabular-nums tracking-tight ${isLight ? 'text-slate-900' : 'text-white'}`}>
                      24:18
                    </div>
                    <div className="grid grid-cols-2 gap-1 px-1 pt-1 font-mono text-[11px]">
                      <div className={`rounded-lg p-1 border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-neutral-900/90 border-neutral-800'}`}>
                        <div className={`text-[9px] ${isLight ? 'text-slate-500' : 'text-neutral-400'}`}>HEART</div>
                        <div className="text-rose-500 font-bold">{metrics.heartRateCurrent} BPM</div>
                      </div>
                      <div className={`rounded-lg p-1 border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-neutral-900/90 border-neutral-800'}`}>
                        <div className={`text-[9px] ${isLight ? 'text-slate-500' : 'text-neutral-400'}`}>WOD</div>
                        <div className="text-[#00c7be] font-bold">Rd 4 · Cindy</div>
                      </div>
                    </div>
                  </motion.div>
                ) : preset === 'heart' ? (
                  <motion.div
                    key={`watch-heart-${themeMode}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-1.5 text-center"
                  >
                    <div className={`flex items-center justify-center gap-1 text-[11px] ${isLight ? 'text-slate-500' : 'text-neutral-400'}`}>
                      <Heart className="w-3.5 h-3.5 text-rose-500 animate-pulse" />
                      <span>Heart Rate</span>
                    </div>
                    <div className={`text-3xl font-mono font-bold tabular-nums ${isLight ? 'text-slate-900' : 'text-white'}`}>
                      {metrics.heartRateCurrent} <span className="text-xs text-rose-500">BPM</span>
                    </div>
                    <div className="text-[10px] text-emerald-600 font-mono font-semibold">
                      Zone 2 · Aerobic Base
                    </div>
                    <div className={`text-[9px] ${isLight ? 'text-slate-500' : 'text-neutral-400'}`}>
                      HRV: {metrics.hrvMs}ms · 56 bpm resting
                    </div>
                  </motion.div>
                ) : preset === 'wireframe' ? (
                  <motion.div
                    key={`watch-wireframe-${themeMode}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className={`h-full flex flex-col justify-between py-2 text-center border border-dashed rounded-2xl p-2 ${
                      isLight ? 'border-slate-300 bg-slate-50' : 'border-neutral-700 bg-neutral-900/40'
                    }`}
                  >
                    <div className={`text-[10px] font-medium ${isLight ? 'text-slate-800' : 'text-neutral-300'}`}>Watch Screen Slot</div>
                    <div className={`text-[9px] font-mono ${isLight ? 'text-slate-500' : 'text-neutral-400'}`}>410 × 502 px (49mm)</div>
                    <input 
                      type="file" 
                      ref={fileInputRef} 
                      onChange={handleFileChange} 
                      accept="image/*" 
                      className="hidden" 
                    />
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className={`w-full py-1.5 font-medium text-[10px] rounded-lg border transition-colors flex items-center justify-center gap-1 cursor-pointer ${
                        isLight ? 'bg-white hover:bg-slate-100 text-slate-800 border-slate-300' : 'bg-neutral-800 hover:bg-neutral-700 text-white border-neutral-700'
                      }`}
                    >
                      <Upload className="w-3 h-3 text-rose-500" />
                      <span>Upload Watch Face</span>
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key={`watch-activity-${themeMode}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col items-center justify-center"
                  >
                    <div className="relative w-24 h-24 flex items-center justify-center">
                      <svg className="w-24 h-24 -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="38" stroke="#ff2d55" strokeWidth="8" fill="none" opacity={isLight ? '0.12' : '0.2'} />
                        <circle cx="50" cy="50" r="28" stroke="#30d158" strokeWidth="8" fill="none" opacity={isLight ? '0.12' : '0.2'} />
                        <circle cx="50" cy="50" r="18" stroke="#00c7be" strokeWidth="8" fill="none" opacity={isLight ? '0.12' : '0.2'} />

                        <circle
                          cx="50"
                          cy="50"
                          r="38"
                          stroke="#ff2d55"
                          strokeWidth="8"
                          strokeDasharray={2 * Math.PI * 38}
                          strokeDashoffset={2 * Math.PI * 38 * (1 - movePct / 100)}
                          strokeLinecap="round"
                          fill="none"
                          className="transition-all duration-700"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="28"
                          stroke="#30d158"
                          strokeWidth="8"
                          strokeDasharray={2 * Math.PI * 28}
                          strokeDashoffset={2 * Math.PI * 28 * (1 - exercisePct / 100)}
                          strokeLinecap="round"
                          fill="none"
                          className="transition-all duration-700"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="18"
                          stroke="#00c7be"
                          strokeWidth="8"
                          strokeDasharray={2 * Math.PI * 18}
                          strokeDashoffset={2 * Math.PI * 18 * (1 - standPct / 100)}
                          strokeLinecap="round"
                          fill="none"
                          className="transition-all duration-700"
                        />
                      </svg>
                      <Flame className="w-3.5 h-3.5 text-rose-500 absolute" />
                    </div>

                    <div className={`font-mono text-[11px] font-bold mt-1 tabular-nums ${isLight ? 'text-slate-900' : 'text-white'}`}>
                      {metrics.moveCurrent} <span className="text-[9px] text-neutral-400 font-normal">CAL</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </div>

          {/* Bottom Complications */}
          <div className={`flex items-center justify-between text-[10px] font-mono px-1 pt-1 border-t ${
            isLight ? 'border-slate-200 text-slate-600' : 'border-neutral-900 text-neutral-400'
          }`}>
            <span className="text-amber-500 font-semibold">{metrics.steps.toLocaleString()} st</span>
            <span className="text-[#00c7be] font-semibold">{metrics.standCurrent}/12h</span>
          </div>
        </div>
      </div>
    </div>
  );
};
