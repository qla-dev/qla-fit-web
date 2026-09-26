import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PhoneMockup } from './PhoneMockup';
import { WatchMockup } from './WatchMockup';
import { 
  Sliders, Utensils, QrCode, BarChart2, Dumbbell, Image as ImageIcon, 
  RotateCcw, Palette, ShieldCheck, Sparkles, Check, Flame, Heart, Navigation, Watch
} from 'lucide-react';
import type { ScreenPreset, FitnessMetrics, ThemeMode } from '../types/fitness';
import { useTheme } from '../context/ThemeContext';

const INITIAL_METRICS: FitnessMetrics = {
  moveCurrent: 740,
  moveTarget: 650,
  exerciseCurrent: 46,
  exerciseTarget: 30,
  standCurrent: 11,
  standTarget: 12,
  steps: 11280,
  distanceKm: 8.4,
  heartRateCurrent: 72,
  hrvMs: 64,
  activeBurnKcal: 740,
  sleepHours: 7.8,
  vo2Max: 51.4,
};

export const InteractiveDeviceSection: React.FC = () => {
  const { theme } = useTheme();
  const [deviceTheme, setDeviceTheme] = useState<ThemeMode>(theme);
  const [activePreset, setActivePreset] = useState<ScreenPreset>('activity');
  const [watchPreset, setWatchPreset] = useState<ScreenPreset>('crossfit');
  const [metrics, setMetrics] = useState<FitnessMetrics>(INITIAL_METRICS);
  const [phoneCustomImage, setPhoneCustomImage] = useState<string | null>(null);
  const [watchCustomImage, setWatchCustomImage] = useState<string | null>(null);
  const [showTuningDrawer, setShowTuningDrawer] = useState<boolean>(false);

  React.useEffect(() => {
    setDeviceTheme(theme);
  }, [theme]);

  // Synchronize watch with phone presets automatically
  React.useEffect(() => {
    if (activePreset === 'crossfit') {
      setWatchPreset('crossfit');
    } else if (activePreset === 'tracker') {
      setWatchPreset('tracker');
    } else if (activePreset === 'activity') {
      setWatchPreset('activity');
    } else if (activePreset === 'goals') {
      setWatchPreset('heart');
    } else if (activePreset === 'wireframe') {
      setWatchPreset('wireframe');
    }
  }, [activePreset]);

  const resetAll = () => {
    setMetrics(INITIAL_METRICS);
    setPhoneCustomImage(null);
    setWatchCustomImage(null);
    setActivePreset('activity');
    setWatchPreset('crossfit');
  };

  const isLight = theme === 'light';
  const isDeviceLight = deviceTheme === 'light';

  return (
    <div className="relative py-8 md:py-16">
      {/* Background ambient radial aura */}
      <div 
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] blur-[130px] pointer-events-none rounded-full transition-opacity duration-500 ${
          isLight 
            ? 'bg-gradient-to-tr from-blue-500/15 via-sky-400/10 to-cyan-400/15 opacity-70' 
            : 'bg-gradient-to-tr from-blue-600/20 via-sky-500/15 to-indigo-600/15 opacity-100'
        }`} 
      />

      {/* Preset Controls Bar */}
      <div className="max-w-4xl mx-auto px-4 mb-8">
        
        {/* Core Value Kicker Badge above controls */}
        <div className="flex items-center justify-center gap-2 mb-3 text-xs font-mono">
          <span className="text-blue-500 font-bold flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" /> Track All For Free:
          </span>
          <span className={isLight ? 'text-slate-600' : 'text-neutral-400'}>
            Activity Rings · Free QR Food Scanner · Free Macros & Goals
          </span>
        </div>

        <div className={`flex flex-col sm:flex-row items-center justify-between gap-4 p-2 backdrop-blur-xl rounded-2xl shadow-xl transition-colors duration-300 ${
          isLight ? 'bg-white/90 border border-slate-200' : 'bg-neutral-900/90 border border-neutral-800'
        }`}>
          {/* Preset Buttons matching the actual app screens */}
          <div className="flex items-center gap-1 overflow-x-auto w-full sm:w-auto p-1 scrollbar-none">
            
            {/* 1. Activity Rings & Workouts (MAIN SCREEN / The Iconic Circles) */}
            <button
              onClick={() => setActivePreset('activity')}
              className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                activePreset === 'activity'
                  ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.45)] font-bold'
                  : isLight
                    ? 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
              }`}
            >
              <div className="w-3.5 h-3.5 rounded-full border border-rose-500 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full border border-emerald-400 flex items-center justify-center">
                  <div className="w-0.5 h-0.5 rounded-full bg-cyan-400" />
                </div>
              </div>
              <span>Activity & Rings</span>
            </button>

            {/* 2. Tracker & Nutrition (2nd Screen: IMG_6389) */}
            <button
              onClick={() => setActivePreset('tracker')}
              className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                activePreset === 'tracker'
                  ? 'bg-cyan-600 text-white shadow-[0_0_15px_rgba(8,145,178,0.4)] font-bold'
                  : isLight
                    ? 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
              }`}
            >
              <Utensils className="w-3.5 h-3.5 text-cyan-400" />
              <span>Nutrition & Macros</span>
            </button>

            {/* 3. Free QR Scanner */}
            <button
              onClick={() => setActivePreset('scanner')}
              className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                activePreset === 'scanner'
                  ? 'bg-emerald-600 text-white shadow-[0_0_15px_rgba(5,150,105,0.4)] font-bold'
                  : isLight
                    ? 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
              }`}
            >
              <QrCode className="w-3.5 h-3.5 text-emerald-400" />
              <span>Free QR Scanner</span>
            </button>

            {/* 4. Goals (IMG_6390) */}
            <button
              onClick={() => setActivePreset('goals')}
              className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                activePreset === 'goals'
                  ? 'bg-indigo-600 text-white shadow-[0_0_15px_rgba(79,70,229,0.4)] font-bold'
                  : isLight
                    ? 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
              }`}
            >
              <BarChart2 className="w-3.5 h-3.5 text-indigo-400" />
              <span>Goals & Trends</span>
            </button>

            {/* 5. Store & Programs (IMG_6391 & 6392) */}
            <button
              onClick={() => setActivePreset('programs')}
              className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                activePreset === 'programs'
                  ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)] font-bold'
                  : isLight
                    ? 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
              }`}
            >
              <Dumbbell className="w-3.5 h-3.5 text-blue-400" />
              <span>Store Programs</span>
            </button>

            {/* 6. CrossFit WOD (Apple Watch & Intervals) */}
            <button
              onClick={() => setActivePreset('crossfit')}
              className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                activePreset === 'crossfit'
                  ? 'bg-amber-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.4)] font-bold'
                  : isLight
                    ? 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
              }`}
            >
              <Flame className="w-3.5 h-3.5 text-amber-500" />
              <span>CrossFit WOD</span>
            </button>

            {/* 7. Custom Upload Slot */}
            <button
              onClick={() => setActivePreset('wireframe')}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                activePreset === 'wireframe'
                  ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                  : isLight
                    ? 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Screenshot Slot</span>
            </button>
          </div>

          {/* Quick Controls: Device Theme & Reset */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setDeviceTheme(isDeviceLight ? 'dark' : 'light')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors flex items-center gap-1.5 cursor-pointer ${
                isLight
                  ? 'bg-slate-100 text-slate-800 border-slate-300 hover:bg-slate-200'
                  : 'bg-neutral-800 text-neutral-300 border-neutral-700 hover:bg-neutral-700'
              }`}
              title={`Switch phone chassis finish to ${isDeviceLight ? 'Dark Titanium' : 'White Ceramic'}`}
            >
              <Palette className="w-3.5 h-3.5 text-cyan-400" />
              <span>{isDeviceLight ? 'White Ceramic' : 'Dark Titanium'}</span>
            </button>

            {(phoneCustomImage || watchCustomImage || metrics !== INITIAL_METRICS) && (
              <button
                onClick={resetAll}
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  isLight ? 'text-slate-500 hover:text-slate-900 hover:bg-slate-200' : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
                }`}
                title="Reset all"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Side-by-side Dual Device Stage */}
      <div className="relative max-w-5xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12">
        {/* iPhone Stage */}
        <div className="relative group">
          <div className={`absolute -inset-1 rounded-[58px] blur-xl transition duration-1000 ${
            isLight
              ? 'bg-gradient-to-r from-cyan-400/20 to-emerald-400/20 opacity-40 group-hover:opacity-60'
              : 'bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 opacity-50 group-hover:opacity-80'
          }`} />
          <PhoneMockup
            preset={activePreset}
            metrics={metrics}
            customImage={phoneCustomImage}
            themeMode={deviceTheme}
            onUploadImage={(img) => setPhoneCustomImage(img)}
            onClearCustomImage={() => setPhoneCustomImage(null)}
            onPresetChange={(p) => setActivePreset(p)}
          />
          <div className="mt-4 text-center">
            <div className={`text-xs font-semibold ${isLight ? 'text-slate-800' : 'text-neutral-300'}`}>
              iPhone 16 Pro · {isDeviceLight ? 'Silver Titanium' : 'Black Titanium'}
            </div>
            <div className={`text-[11px] font-mono ${isLight ? 'text-slate-500' : 'text-neutral-500'}`}>
              Showing authentic qla.fit Tracker, Nutrients & Free QR Scanner
            </div>
          </div>
        </div>

        {/* Apple Watch Stage */}
        <div className="relative lg:mt-16 group flex flex-col items-center">
          <div className={`absolute -inset-1 rounded-[58px] blur-xl transition duration-1000 ${
            isLight
              ? 'bg-gradient-to-r from-cyan-400/15 to-emerald-400/15 opacity-40 group-hover:opacity-60'
              : 'bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 opacity-40 group-hover:opacity-75'
          }`} />

          {/* Watch Face Quick Switcher Bar */}
          <div className="mb-4 flex flex-wrap items-center justify-center gap-1.5 z-10">
            <button
              onClick={() => setWatchPreset('crossfit')}
              className={`px-2.5 py-1 text-[11px] font-mono rounded-lg border transition-all cursor-pointer flex items-center gap-1 ${
                watchPreset === 'crossfit'
                  ? 'bg-amber-500 text-black border-amber-500 font-bold shadow-xs'
                  : isLight ? 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50' : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-white'
              }`}
              title="Show CrossFit WOD on watch"
            >
              <Flame className="w-3 h-3 text-amber-500" />
              <span>CrossFit WOD</span>
            </button>

            <button
              onClick={() => setWatchPreset('tracker')}
              className={`px-2.5 py-1 text-[11px] font-mono rounded-lg border transition-all cursor-pointer flex items-center gap-1 ${
                watchPreset === 'tracker'
                  ? 'bg-cyan-600 text-white border-cyan-500 font-bold shadow-xs'
                  : isLight ? 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50' : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-white'
              }`}
              title="Track nutrients on watch"
            >
              <Utensils className="w-3 h-3 text-cyan-400" />
              <span>Wrist Nutrients</span>
            </button>

            <button
              onClick={() => setWatchPreset('activity')}
              className={`px-2.5 py-1 text-[11px] font-mono rounded-lg border transition-all cursor-pointer flex items-center gap-1 ${
                watchPreset === 'activity'
                  ? 'bg-rose-600 text-white border-rose-500 font-bold shadow-xs'
                  : isLight ? 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50' : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-white'
              }`}
              title="Show activity rings on watch"
            >
              <span>Activity Rings</span>
            </button>

            <button
              onClick={() => setWatchPreset('workout')}
              className={`px-2.5 py-1 text-[11px] font-mono rounded-lg border transition-all cursor-pointer flex items-center gap-1 ${
                watchPreset === 'workout'
                  ? 'bg-blue-600 text-white border-blue-500 font-bold shadow-xs'
                  : isLight ? 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50' : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-white'
              }`}
              title="Show outdoor run & Strava GPS"
            >
              <Navigation className="w-3 h-3 text-blue-400" />
              <span>Strava Run</span>
            </button>
          </div>

          <WatchMockup
            preset={watchPreset}
            metrics={metrics}
            customImage={watchCustomImage}
            themeMode={deviceTheme}
            onUploadImage={(img) => setWatchCustomImage(img)}
            onClearCustomImage={() => setWatchCustomImage(null)}
          />

          <div className="mt-8 text-center">
            <div className={`text-xs font-semibold ${isLight ? 'text-slate-800' : 'text-neutral-300'}`}>
              Apple Watch Ultra 2 · {isDeviceLight ? 'Starlight Alpine' : 'Midnight Trail'}
            </div>
            <div className={`text-[11px] font-mono ${isLight ? 'text-slate-500' : 'text-neutral-500'} mt-0.5`}>
              {watchPreset === 'crossfit' && '🔥 Live CrossFit WOD tracking with AMRAP & rep counts'}
              {watchPreset === 'tracker' && '🥗 Glanceable wrist nutrients & tap +250ml water logging'}
              {watchPreset === 'workout' && '🏃 Standalone GPS route & Strava-compatible run tracking'}
              {watchPreset === 'activity' && '⭕ Triple Activity rings (Move, Exercise, Stand)'}
              {watchPreset === 'heart' && '❤️ Continuous optical heart rate & aerobic zone tracking'}
              {watchPreset === 'wireframe' && '📸 Custom uploaded Apple Watch face preview'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
