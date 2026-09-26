import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Flame, Utensils, Wheat, Fish, Droplets, Heart, Scale, Wine, Sun, Moon, 
  ChevronRight, ChevronUp, ChevronDown, CheckSquare, BarChart2, LayoutGrid, 
  Sparkles, Search, Check, QrCode, Camera, ArrowLeft, Star, RotateCcw, 
  Upload, Battery, Wifi, Dumbbell, ShieldCheck, Zap, Timer
} from 'lucide-react';
import type { ScreenPreset, FitnessMetrics, NutritionMetrics, ThemeMode, ScannedFood } from '../types/fitness';

const SAMPLE_FOODS: ScannedFood[] = [
  {
    id: 'food-1',
    name: 'Greek Yogurt 0%',
    brand: 'FAGE Total',
    serving: '170g container',
    calories: 100,
    protein: 18,
    carbs: 6,
    fat: 0,
    cholesterol: 10,
    transFat: 0,
    barcode: '0 13426 00021 4'
  },
  {
    id: 'food-2',
    name: 'Wild Atlantic Salmon',
    brand: 'Fresh Catch',
    serving: '150g fillet',
    calories: 280,
    protein: 34,
    carbs: 0,
    fat: 15,
    cholesterol: 75,
    transFat: 0,
    barcode: '7 89123 45678 9'
  },
  {
    id: 'food-3',
    name: 'Rolled Oats & Chia',
    brand: 'Bobs Red Mill',
    serving: '80g dry',
    calories: 300,
    protein: 11,
    carbs: 52,
    fat: 5,
    cholesterol: 0,
    transFat: 0,
    barcode: '0 39978 00123 6'
  }
];

interface PhoneMockupProps {
  preset: ScreenPreset;
  metrics: FitnessMetrics;
  nutrition?: NutritionMetrics;
  customImage: string | null;
  themeMode?: ThemeMode;
  onUploadImage?: (dataUrl: string) => void;
  onClearCustomImage?: () => void;
  onPresetChange?: (preset: ScreenPreset) => void;
  className?: string;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  preset,
  metrics,
  customImage,
  themeMode = 'dark',
  onUploadImage,
  onClearCustomImage,
  onPresetChange,
  className = '',
}) => {
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const isLight = themeMode === 'light';

  // Local interactive state for screen interactions
  const [internalPreset, setInternalPreset] = useState<ScreenPreset>(preset);
  const [goalsTimeframe, setGoalsTimeframe] = useState<'D' | 'W' | 'M' | '6M' | 'Y'>('W');
  const [storeCategory, setStoreCategory] = useState<'all' | 'glutes' | 'core' | 'upper'>('all');
  const [selectedProgramDetail, setSelectedProgramDetail] = useState<boolean>(false);
  const [scannerActive, setScannerActive] = useState<boolean>(false);
  const [lastScanned, setLastScanned] = useState<ScannedFood | null>(null);

  // Nutrition state that updates when items are scanned
  const [eatenCalories, setEatenCalories] = useState<number>(0);
  const [eatenCarbs, setEatenCarbs] = useState<number>(0);
  const [eatenProtein, setEatenProtein] = useState<number>(0);
  const [eatenFat, setEatenFat] = useState<number>(0);
  const [eatenTransFat, setEatenTransFat] = useState<number>(0);
  const [eatenCholesterol, setEatenCholesterol] = useState<number>(0);

  // Sync when prop preset changes
  React.useEffect(() => {
    setInternalPreset(preset);
  }, [preset]);

  const handleNavigate = (newPreset: ScreenPreset) => {
    setInternalPreset(newPreset);
    if (onPresetChange) {
      onPresetChange(newPreset);
    }
  };

  const handleSimulateScan = (food: ScannedFood) => {
    setLastScanned(food);
    setEatenCalories((prev) => prev + food.calories);
    setEatenCarbs((prev) => prev + food.carbs);
    setEatenProtein((prev) => prev + food.protein);
    setEatenFat((prev) => prev + food.fat);
    setEatenTransFat((prev) => prev + food.transFat);
    setEatenCholesterol((prev) => prev + food.cholesterol);
    
    // Return to tracker after brief scan success
    setTimeout(() => {
      setInternalPreset('tracker');
      setScannerActive(false);
    }, 1200);
  };

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

  const caloriesTarget = 2000;
  const caloriesBurned = 7;
  const caloriesLeft = Math.max(0, caloriesTarget - eatenCalories);
  const arcProgress = Math.min(1, eatenCalories / caloriesTarget);

  return (
    <div className={`relative mx-auto select-none transition-all duration-300 ${className}`}>
      {/* Outer Titanium Chassis */}
      <div 
        className={`relative w-[320px] sm:w-[350px] md:w-[380px] h-[670px] sm:h-[720px] md:h-[780px] rounded-[54px] p-[10px] transition-all duration-300 ${
          isLight
            ? 'bg-[#dbe0ea] shadow-[0_25px_70px_-15px_rgba(0,0,0,0.18),0_0_0_1px_rgba(0,0,0,0.08)] ring-1 ring-slate-300'
            : 'bg-[#1a1b23] shadow-[0_25px_70px_-15px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.15)] ring-1 ring-white/10'
        }`}
      >
        {/* Buttons */}
        <div className={`absolute -left-[13px] top-[140px] w-[3px] h-[34px] rounded-l-sm ${isLight ? 'bg-[#b8c2d1]' : 'bg-[#333544]'}`} />
        <div className={`absolute -left-[13px] top-[190px] w-[3px] h-[58px] rounded-l-sm ${isLight ? 'bg-[#b8c2d1]' : 'bg-[#333544]'}`} />
        <div className={`absolute -left-[13px] top-[260px] w-[3px] h-[58px] rounded-l-sm ${isLight ? 'bg-[#b8c2d1]' : 'bg-[#333544]'}`} />
        <div className={`absolute -right-[13px] top-[210px] w-[3px] h-[80px] rounded-r-sm ${isLight ? 'bg-[#b8c2d1]' : 'bg-[#333544]'}`} />

        {/* Inner Glass Screen */}
        <div 
          className={`relative w-full h-full rounded-[44px] overflow-hidden flex flex-col justify-between font-sans transition-colors duration-300 ${
            isLight
              ? 'bg-black text-white' // The app uses an ultra-clean AMOLED dark UI with vivid nutrient indicators
              : 'bg-black text-white'
          }`}
        >
          {/* Status Bar */}
          <div className="relative z-30 pt-3 px-7 flex items-center justify-between text-[11px] font-semibold tracking-tight text-neutral-300">
            <span className="tabular-nums">14:19</span>
            
            {/* Dynamic Island */}
            <div className="w-24 h-[22px] bg-[#111217] rounded-full flex items-center justify-between px-2.5 shadow-inner">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <div className="text-[9px] text-neutral-400 font-mono flex items-center gap-1">
                <span>qla.fit</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-neutral-300 text-[10px]">
              <span className="font-mono">LTE</span>
              <span className="bg-amber-500/20 text-amber-400 px-1 rounded text-[9px]">12</span>
              <Battery className="w-4 h-4 text-neutral-300" />
            </div>
          </div>

          {/* Screen Content Body */}
          <div className="relative flex-1 overflow-y-auto px-4 pt-2 pb-2 scrollbar-none">
            {customImage ? (
              <div className="relative w-full h-full flex flex-col items-center justify-center">
                <img 
                  src={customImage} 
                  alt="Custom qla.fit App Screenshot" 
                  className="w-full h-full object-cover rounded-2xl" 
                />
                <button
                  onClick={onClearCustomImage}
                  className="absolute bottom-4 bg-black/80 hover:bg-black text-white text-xs px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset Mockup</span>
                </button>
              </div>
            ) : (
              <AnimatePresence mode="wait">
                
                {/* ---------------------------------------------------- */}
                {/* 1. ACTIVITY RINGS & WORKOUTS (MAIN / FIRST SCREEN)   */}
                {/* ---------------------------------------------------- */}
                {internalPreset === 'activity' && (
                  <motion.div
                    key="activity-screen"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="space-y-4 pt-1"
                  >
                    {/* Top Row: Date Pill & Actions */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#1b1c24] rounded-full text-xs font-medium text-neutral-200 cursor-pointer">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Today</span>
                        <ChevronDown className="w-3 h-3 text-neutral-400" />
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1 px-2.5 py-1 bg-[#1b1c24] rounded-full text-[11px] font-mono font-bold text-amber-400">
                          <Flame className="w-3.5 h-3.5 fill-current" />
                          <span>14d Streak</span>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-blue-600/30 border border-blue-500/50 flex items-center justify-center text-white text-xs font-bold font-mono">
                          K
                        </div>
                      </div>
                    </div>

                    {/* Section Title */}
                    <div className="flex items-end justify-between">
                      <div>
                        <h2 className="text-3xl font-extrabold tracking-tight text-white font-sans">
                          Activities
                        </h2>
                        <div className="text-xs text-neutral-400 mt-0.5 flex items-center gap-1.5 font-medium">
                          <span className="text-blue-400">Apple HealthKit</span>
                          <span>·</span>
                          <span className="text-emerald-400 font-semibold">3 of 3 Rings Closed</span>
                        </div>
                      </div>
                      <button 
                        onClick={() => handleNavigate('tracker')}
                        className="text-xs text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-0.5 cursor-pointer pb-1"
                      >
                        <span>Nutrition</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Activity Rings Hero Card with The 3 Concentric Rings */}
                    <div className="p-4 rounded-3xl bg-[#11131c] border border-neutral-800 shadow-xl space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider">
                          Daily Rings
                        </span>
                        <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                          114% OF TARGET
                        </span>
                      </div>

                      {/* 3 Rings Visualizer */}
                      <div className="relative flex items-center justify-center py-2">
                        <div className="relative w-44 h-44 flex items-center justify-center">
                          <svg className="w-44 h-44 -rotate-90" viewBox="0 0 160 160">
                            {/* Track Rings */}
                            <circle cx="80" cy="80" r="66" stroke="#ff2d55" strokeWidth="12" fill="none" opacity="0.18" />
                            <circle cx="80" cy="80" r="50" stroke="#30d158" strokeWidth="12" fill="none" opacity="0.18" />
                            <circle cx="80" cy="80" r="34" stroke="#00c7be" strokeWidth="12" fill="none" opacity="0.18" />

                            {/* Outer: Move (Red/Coral) */}
                            <circle
                              cx="80"
                              cy="80"
                              r="66"
                              stroke="#ff2d55"
                              strokeWidth="12"
                              fill="none"
                              strokeDasharray={2 * Math.PI * 66}
                              strokeDashoffset={2 * Math.PI * 66 * (1 - Math.min(1.2, metrics.moveCurrent / metrics.moveTarget))}
                              strokeLinecap="round"
                              className="transition-all duration-1000"
                            />

                            {/* Middle: Exercise (Green/Lime) */}
                            <circle
                              cx="80"
                              cy="80"
                              r="50"
                              stroke="#30d158"
                              strokeWidth="12"
                              fill="none"
                              strokeDasharray={2 * Math.PI * 50}
                              strokeDashoffset={2 * Math.PI * 50 * (1 - Math.min(1.3, metrics.exerciseCurrent / metrics.exerciseTarget))}
                              strokeLinecap="round"
                              className="transition-all duration-1000"
                            />

                            {/* Inner: Stand (Cyan/Blue) */}
                            <circle
                              cx="80"
                              cy="80"
                              r="34"
                              stroke="#00c7be"
                              strokeWidth="12"
                              fill="none"
                              strokeDasharray={2 * Math.PI * 34}
                              strokeDashoffset={2 * Math.PI * 34 * (1 - Math.min(1.0, metrics.standCurrent / metrics.standTarget))}
                              strokeLinecap="round"
                              className="transition-all duration-1000"
                            />
                          </svg>

                          {/* Center stats icon */}
                          <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                            <Flame className="w-5 h-5 text-rose-500 animate-pulse" />
                            <span className="text-xs font-mono font-bold text-white mt-0.5 tabular-nums">
                              {metrics.moveCurrent}
                            </span>
                            <span className="text-[8px] text-neutral-400 font-mono">KCAL</span>
                          </div>
                        </div>
                      </div>

                      {/* 3 Metric Breakdown Bars */}
                      <div className="grid grid-cols-3 gap-2 text-center pt-1 border-t border-neutral-800/80">
                        {/* Move */}
                        <div className="p-2 rounded-xl bg-[#161824] border border-rose-500/20">
                          <div className="flex items-center justify-center gap-1 text-[10px] text-rose-400 font-semibold mb-0.5">
                            <Flame className="w-3 h-3" />
                            <span>MOVE</span>
                          </div>
                          <div className="text-xs font-mono font-bold text-white tabular-nums">
                            {metrics.moveCurrent} <span className="text-[9px] text-neutral-400">/{metrics.moveTarget}</span>
                          </div>
                          <div className="w-full bg-neutral-800 h-1 rounded-full mt-1.5 overflow-hidden">
                            <div className="bg-rose-500 h-full rounded-full" style={{ width: `${Math.min(100, (metrics.moveCurrent/metrics.moveTarget)*100)}%` }} />
                          </div>
                        </div>

                        {/* Exercise */}
                        <div className="p-2 rounded-xl bg-[#161824] border border-emerald-500/20">
                          <div className="flex items-center justify-center gap-1 text-[10px] text-emerald-400 font-semibold mb-0.5">
                            <Timer className="w-3 h-3" />
                            <span>EXERCISE</span>
                          </div>
                          <div className="text-xs font-mono font-bold text-white tabular-nums">
                            {metrics.exerciseCurrent} <span className="text-[9px] text-neutral-400">/{metrics.exerciseTarget}m</span>
                          </div>
                          <div className="w-full bg-neutral-800 h-1 rounded-full mt-1.5 overflow-hidden">
                            <div className="bg-emerald-500 h-full rounded-full" style={{ width: `${Math.min(100, (metrics.exerciseCurrent/metrics.exerciseTarget)*100)}%` }} />
                          </div>
                        </div>

                        {/* Stand */}
                        <div className="p-2 rounded-xl bg-[#161824] border border-cyan-500/20">
                          <div className="flex items-center justify-center gap-1 text-[10px] text-cyan-400 font-semibold mb-0.5">
                            <Zap className="w-3 h-3" />
                            <span>STAND</span>
                          </div>
                          <div className="text-xs font-mono font-bold text-white tabular-nums">
                            {metrics.standCurrent} <span className="text-[9px] text-neutral-400">/{metrics.standTarget}h</span>
                          </div>
                          <div className="w-full bg-neutral-800 h-1 rounded-full mt-1.5 overflow-hidden">
                            <div className="bg-cyan-400 h-full rounded-full" style={{ width: `${Math.min(100, (metrics.standCurrent/metrics.standTarget)*100)}%` }} />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Today's Workouts / Activities */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-white flex items-center gap-1.5">
                          <Dumbbell className="w-3.5 h-3.5 text-blue-400" />
                          <span>Today's Workouts</span>
                        </span>
                        <span className="text-[11px] text-blue-400 font-semibold flex items-center gap-0.5 cursor-pointer">
                          2 Sessions <ChevronRight className="w-3 h-3" />
                        </span>
                      </div>

                      {/* Workout 1: Outdoor Run */}
                      <div className="p-3 rounded-2xl bg-[#11131c] border border-neutral-800 hover:border-neutral-700 transition-colors flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 text-sm">
                            🏃
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white flex items-center gap-1.5">
                              <span>Outdoor Run</span>
                              <span className="text-[9px] bg-emerald-500/20 text-emerald-400 px-1.5 rounded font-mono">GPS</span>
                            </div>
                            <div className="text-[10px] text-neutral-400 mt-0.5">
                              5.24 km · 28:14 · 5'23"/km pace
                            </div>
                          </div>
                        </div>
                        <div className="text-right font-mono">
                          <div className="text-xs font-bold text-rose-500">384 kcal</div>
                          <div className="text-[10px] text-neutral-400">152 avg bpm</div>
                        </div>
                      </div>

                      {/* Workout 2: Functional Core */}
                      <div className="p-3 rounded-2xl bg-[#11131c] border border-neutral-800 hover:border-neutral-700 transition-colors flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 text-sm">
                            ⚡
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white flex items-center gap-1.5">
                              <span>Functional Strength</span>
                            </div>
                            <div className="text-[10px] text-neutral-400 mt-0.5">
                              35 min · 4 sets hip thrust & core
                            </div>
                          </div>
                        </div>
                        <div className="text-right font-mono">
                          <div className="text-xs font-bold text-rose-500">245 kcal</div>
                          <div className="text-[10px] text-neutral-400">128 avg bpm</div>
                        </div>
                      </div>
                    </div>

                    {/* Vitals Summary Strip */}
                    <div className="grid grid-cols-3 gap-2 pt-1">
                      <div className="p-2.5 rounded-2xl bg-[#11131c] border border-neutral-800 text-center">
                        <div className="text-[10px] text-neutral-400">Steps</div>
                        <div className="text-sm font-bold font-mono text-cyan-400 mt-0.5 tabular-nums">
                          {metrics.steps.toLocaleString()}
                        </div>
                      </div>
                      <div className="p-2.5 rounded-2xl bg-[#11131c] border border-neutral-800 text-center">
                        <div className="text-[10px] text-neutral-400">Resting HR</div>
                        <div className="text-sm font-bold font-mono text-rose-400 mt-0.5 tabular-nums">
                          54 bpm
                        </div>
                      </div>
                      <div className="p-2.5 rounded-2xl bg-[#11131c] border border-neutral-800 text-center">
                        <div className="text-[10px] text-neutral-400">Sleep</div>
                        <div className="text-sm font-bold font-mono text-indigo-400 mt-0.5 tabular-nums">
                          7h 48m
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* ---------------------------------------------------- */}
                {/* 2. TRACKER & NUTRITION SCREEN (2ND SCREEN)           */}
                {/* ---------------------------------------------------- */}
                {internalPreset === 'tracker' && (
                  <motion.div
                    key="tracker-screen"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="space-y-4 pt-1"
                  >
                    {/* Top Row: Date Pill & Action Icons */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 px-3 py-1.5 bg-[#1b1c24] rounded-full text-xs font-medium text-neutral-200 cursor-pointer">
                        <span>Today</span>
                        <ChevronDown className="w-3 h-3 text-neutral-400" />
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-[#1b1c24] flex items-center justify-center text-neutral-300">
                          <Flame className="w-4 h-4 text-emerald-400" />
                        </div>
                        <div className="w-8 h-8 rounded-full bg-blue-600/30 border border-blue-500/50 flex items-center justify-center text-white text-xs font-bold font-mono">
                          K
                        </div>
                      </div>
                    </div>

                    {/* Tracker Title */}
                    <div>
                      <h2 className="text-3xl font-extrabold tracking-tight text-white font-sans">
                        Tracker
                      </h2>
                      <div className="flex items-center justify-between text-xs mt-1 text-neutral-400">
                        <span>Need help in your optimal metrics?</span>
                        <span className="text-blue-400 font-medium flex items-center gap-0.5 cursor-pointer hover:underline">
                          Ask AI <ChevronRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>

                    {/* Nutrition Card with Upright Semicircular Arc Gauge & Macros */}
                    <div className="p-4 rounded-3xl bg-[#11131c] border border-neutral-800/90 shadow-lg space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-base font-bold text-white">Nutrition</span>
                        <span className="text-xs text-neutral-400 flex items-center gap-1 cursor-pointer">
                          All macros <ChevronUp className="w-3.5 h-3.5" />
                        </span>
                      </div>

                      {/* Perfectly Aligned Arch: Sides OUTSIDE, Main INSIDE Circle */}
                      <div className="flex items-center justify-between gap-1 px-1 py-1">
                        
                        {/* Left: Eaten (Completely outside on the left) */}
                        <div className="flex flex-col items-center text-center min-w-[55px] pt-8">
                          <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-1">
                            <Utensils className="w-4 h-4" />
                          </div>
                          <div className="text-base font-bold text-white font-mono tabular-nums leading-none">
                            {eatenCalories}
                          </div>
                          <div className="text-[10px] text-neutral-400 font-medium mt-0.5">Eaten</div>
                        </div>

                        {/* Center: Upright Dome Arch Gauge with Main Calories Inside */}
                        <div className="relative w-[170px] h-[110px] flex items-center justify-center shrink-0">
                          <svg className="w-[170px] h-[110px]" viewBox="0 0 200 120">
                            {/* Background track arc */}
                            <path
                              d="M 22 108 A 78 78 0 0 1 178 108"
                              fill="none"
                              stroke="#1e2230"
                              strokeWidth="14"
                              strokeLinecap="round"
                            />
                            {/* Inner guideline arc */}
                            <path
                              d="M 34 108 A 66 66 0 0 1 166 108"
                              fill="none"
                              stroke="#141724"
                              strokeWidth="3"
                              strokeLinecap="round"
                            />
                            {/* Progress arc, filling from bottom-left clockwise up over the top */}
                            <path
                              d="M 22 108 A 78 78 0 0 1 178 108"
                              fill="none"
                              stroke="#0ea5e9"
                              strokeWidth="14"
                              strokeDasharray={245.04}
                              strokeDashoffset={245.04 * (1 - Math.max(0.04, arcProgress))}
                              strokeLinecap="round"
                              className="transition-all duration-700"
                            />
                          </svg>

                          {/* Center Calories Text inside the arch */}
                          <div className="absolute inset-0 flex flex-col items-center justify-center pt-7 text-center pointer-events-none">
                            <span className="text-3xl font-extrabold text-[#38bdf8] font-mono tracking-tight tabular-nums leading-none">
                              {caloriesLeft.toLocaleString()}
                            </span>
                            <span className="text-[10px] text-neutral-400 mt-1 font-medium">
                              kcal left of {caloriesTarget.toLocaleString()}
                            </span>
                          </div>
                        </div>

                        {/* Right: Burned (Completely outside on the right) */}
                        <div className="flex flex-col items-center text-center min-w-[55px] pt-8">
                          <div className="w-8 h-8 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-500 mb-1">
                            <Flame className="w-4 h-4" />
                          </div>
                          <div className="text-base font-bold text-rose-500 font-mono tabular-nums leading-none">
                            {caloriesBurned}
                          </div>
                          <div className="text-[10px] text-neutral-400 font-medium mt-0.5">Burned</div>
                        </div>

                      </div>

                      {/* 5 Distinct Macro Pill Rings (Trans Fat, Carbs, Protein, Fat, Cholesterol) */}
                      <div className="flex items-center justify-between gap-1 overflow-x-auto pb-1 scrollbar-none pt-2">
                        {/* 1. Trans Fat */}
                        <div className="flex flex-col items-center min-w-[54px]">
                          <Droplets className="w-3.5 h-3.5 text-rose-500 mb-1" />
                          <div className="w-11 h-11 rounded-full border-2 border-rose-500/40 bg-[#161822] flex items-center justify-center text-[11px] font-bold text-white font-mono">
                            {eatenTransFat}g
                          </div>
                          <span className="text-[9px] text-rose-400 mt-1 font-medium">Trans Fat</span>
                        </div>

                        {/* 2. Carbs */}
                        <div className="flex flex-col items-center min-w-[54px]">
                          <Wheat className="w-3.5 h-3.5 text-purple-400 mb-1" />
                          <div className="w-11 h-11 rounded-full border-2 border-purple-500/50 bg-[#161822] flex items-center justify-center text-[11px] font-bold text-white font-mono">
                            {eatenCarbs}g
                          </div>
                          <span className="text-[9px] text-purple-300 mt-1 font-medium">Carbs</span>
                          <span className="text-[8px] text-neutral-500 font-mono">{Math.max(0, 250 - eatenCarbs)}g left</span>
                        </div>

                        {/* 3. Protein */}
                        <div className="flex flex-col items-center min-w-[54px]">
                          <Fish className="w-3.5 h-3.5 text-emerald-400 mb-1" />
                          <div className="w-11 h-11 rounded-full border-2 border-emerald-500/50 bg-[#161822] flex items-center justify-center text-[11px] font-bold text-white font-mono">
                            {eatenProtein}g
                          </div>
                          <span className="text-[9px] text-emerald-300 mt-1 font-medium">Protein</span>
                          <span className="text-[8px] text-neutral-500 font-mono">{Math.max(0, 100 - eatenProtein)}g left</span>
                        </div>

                        {/* 4. Fat */}
                        <div className="flex flex-col items-center min-w-[54px]">
                          <Droplets className="w-3.5 h-3.5 text-amber-400 mb-1" />
                          <div className="w-11 h-11 rounded-full border-2 border-amber-500/50 bg-[#161822] flex items-center justify-center text-[11px] font-bold text-white font-mono">
                            {eatenFat}g
                          </div>
                          <span className="text-[9px] text-amber-300 mt-1 font-medium">Fat</span>
                          <span className="text-[8px] text-neutral-500 font-mono">{Math.max(0, 67 - eatenFat)}g left</span>
                        </div>

                        {/* 5. Cholesterol */}
                        <div className="flex flex-col items-center min-w-[54px]">
                          <Heart className="w-3.5 h-3.5 text-cyan-400 mb-1" />
                          <div className="w-11 h-11 rounded-full border-2 border-cyan-500/50 bg-[#161822] flex items-center justify-center text-[10px] font-bold text-white font-mono">
                            {eatenCholesterol}mg
                          </div>
                          <span className="text-[9px] text-cyan-300 mt-1 font-medium">Cholest.</span>
                        </div>
                      </div>
                    </div>

                    {/* Habits 2x2 Grid (Weight, Water, Wake Up, Bedtime) */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-neutral-300">Keep a track of your habits</span>
                        <span className="text-cyan-400 flex items-center gap-0.5 text-[11px] cursor-pointer">
                          More <ChevronRight className="w-3 h-3" />
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2.5">
                        {/* Weight */}
                        <div className="p-3 rounded-2xl bg-[#11131c] border border-neutral-800">
                          <div className="flex items-center justify-between text-[10px] text-neutral-500">
                            <span>No today record</span>
                            <span>—</span>
                          </div>
                          <div className="flex items-center gap-2 mt-2">
                            <div className="w-8 h-8 rounded-xl bg-neutral-800/80 flex items-center justify-center text-neutral-300">
                              <Scale className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-base font-bold font-mono text-white">100 kg</div>
                              <div className="text-[10px] text-neutral-400">Weight</div>
                            </div>
                          </div>
                        </div>

                        {/* Water */}
                        <div className="p-3 rounded-2xl bg-[#11131c] border border-neutral-800">
                          <div className="flex items-center justify-between text-[10px] text-neutral-500">
                            <span>Goal 1,000 ml</span>
                            <span>—</span>
                          </div>
                          <div className="flex items-center gap-2 mt-2">
                            <div className="w-8 h-8 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                              <Wine className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-base font-bold font-mono text-white">0 ml</div>
                              <div className="text-[10px] text-neutral-400">Water</div>
                            </div>
                          </div>
                        </div>

                        {/* Wake Up */}
                        <div className="p-3 rounded-2xl bg-[#11131c] border border-neutral-800">
                          <div className="flex items-center justify-between text-[10px] text-neutral-500">
                            <span>No today record</span>
                            <span>—</span>
                          </div>
                          <div className="flex items-center gap-2 mt-2">
                            <div className="w-8 h-8 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400">
                              <Sun className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-base font-bold font-mono text-neutral-400">—</div>
                              <div className="text-[10px] text-neutral-400">Wake Up</div>
                            </div>
                          </div>
                        </div>

                        {/* Bedtime */}
                        <div className="p-3 rounded-2xl bg-[#11131c] border border-neutral-800">
                          <div className="flex items-center justify-between text-[10px] text-neutral-500">
                            <span>No today record</span>
                            <span>—</span>
                          </div>
                          <div className="flex items-center gap-2 mt-2">
                            <div className="w-8 h-8 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                              <Moon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-base font-bold font-mono text-neutral-400">—</div>
                              <div className="text-[10px] text-neutral-400">Bedtime</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* ---------------------------------------------------- */}
                {/* 2. FREE QR & BARCODE FOOD SCANNER SCREEN             */}
                {/* ---------------------------------------------------- */}
                {internalPreset === 'scanner' && (
                  <motion.div
                    key="scanner-screen"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    className="h-full flex flex-col justify-between py-2 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <button 
                        onClick={() => handleNavigate('tracker')}
                        className="p-1.5 rounded-full bg-neutral-800 text-neutral-300 hover:text-white"
                      >
                        <ArrowLeft className="w-4 h-4" />
                      </button>
                      <div className="text-xs font-bold text-white flex items-center gap-1.5">
                        <QrCode className="w-4 h-4 text-emerald-400" />
                        <span>Free QR & Barcode Scanner</span>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                        FREE
                      </span>
                    </div>

                    {/* Camera Viewfinder Box with Laser Animation */}
                    <div className="relative flex-1 min-h-[220px] rounded-3xl bg-[#090b11] border-2 border-neutral-800 overflow-hidden flex flex-col items-center justify-center p-4">
                      {/* Grid background */}
                      <div className="absolute inset-0 bg-mesh-dark opacity-30" />

                      {/* Corner Target Brackets */}
                      <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-emerald-400 rounded-tl-lg" />
                      <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-emerald-400 rounded-tr-lg" />
                      <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-emerald-400 rounded-bl-lg" />
                      <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-emerald-400 rounded-br-lg" />

                      {/* Moving laser scan beam */}
                      <div className="absolute inset-x-8 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_12px_rgba(52,211,153,0.9)] animate-bounce" />

                      {/* Simulated Barcode graphic in center */}
                      <div className="p-3 bg-white rounded-xl shadow-lg flex flex-col items-center z-10">
                        <div className="flex items-center gap-0.5 h-10 w-32 px-1">
                          {[3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 1, 3, 2, 4, 1, 2, 3].map((w, i) => (
                            <div key={i} className="bg-black h-full" style={{ width: `${w * 2}px` }} />
                          ))}
                        </div>
                        <span className="font-mono text-[9px] text-black tracking-widest mt-1">
                          0 13426 00021 4
                        </span>
                      </div>

                      <div className="mt-4 text-center z-10">
                        <div className="text-xs font-semibold text-white">Align barcode or nutritional QR</div>
                        <div className="text-[10px] text-neutral-400">Zero subscription paywall · 100% free</div>
                      </div>
                    </div>

                    {/* Interactive Scan Test Buttons */}
                    <div className="space-y-1.5">
                      <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                        Tap item to simulate free scan:
                      </div>
                      <div className="space-y-1.5 max-h-36 overflow-y-auto">
                        {SAMPLE_FOODS.map((food) => (
                          <button
                            key={food.id}
                            onClick={() => handleSimulateScan(food)}
                            className="w-full p-2 rounded-xl bg-[#141622] hover:bg-[#1e2235] border border-neutral-800 text-left flex items-center justify-between text-xs transition-colors cursor-pointer"
                          >
                            <div>
                              <div className="font-bold text-white text-[11px]">{food.name}</div>
                              <div className="text-[9px] text-neutral-400">{food.brand} · {food.serving}</div>
                            </div>
                            <div className="text-right font-mono">
                              <span className="text-emerald-400 font-bold text-xs">+{food.protein}g protein</span>
                              <div className="text-[9px] text-neutral-400">{food.calories} kcal</div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {lastScanned && (
                      <div className="p-2 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs text-center flex items-center justify-center gap-1.5">
                        <Check className="w-3.5 h-3.5" />
                        <span>Logged {lastScanned.name} into Nutrition!</span>
                      </div>
                    )}
                  </motion.div>
                )}

                {/* ---------------------------------------------------- */}
                {/* 3. GOALS SCREEN (Matches IMG_6390)                  */}
                {/* ---------------------------------------------------- */}
                {internalPreset === 'goals' && (
                  <motion.div
                    key="goals-screen"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="space-y-4 pt-1"
                  >
                    {/* Top Row: Goals Header with Icons */}
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 rounded-full bg-[#1b1c24] flex items-center justify-center text-neutral-300">
                        <div className="w-4 h-4 rounded-full border-2 border-neutral-400 flex items-center justify-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-[#1b1c24] flex items-center justify-center text-neutral-300">
                          <Flame className="w-4 h-4 text-emerald-400" />
                        </div>
                        <div className="w-8 h-8 rounded-full bg-[#1b1c24] flex items-center justify-center text-neutral-300 text-xs font-bold">
                          K
                        </div>
                      </div>
                    </div>

                    <h2 className="text-3xl font-extrabold tracking-tight text-white font-sans">
                      Goals
                    </h2>

                    {/* Timeframe Segmented Control: [ D ] [ W ] [ M ] [ 6M ] [ Y ] */}
                    <div className="flex items-center p-1 bg-[#1b1c24] rounded-xl justify-between">
                      {(['D', 'W', 'M', '6M', 'Y'] as const).map((tf) => (
                        <button
                          key={tf}
                          onClick={() => setGoalsTimeframe(tf)}
                          className={`flex-1 py-1 text-xs font-bold rounded-lg transition-all ${
                            goalsTimeframe === tf
                              ? 'bg-[#373a48] text-white shadow-sm'
                              : 'text-neutral-400 hover:text-white'
                          }`}
                        >
                          {tf}
                        </button>
                      ))}
                    </div>

                    {/* Card 1: Steps Goal with Teal Bar Chart */}
                    <div className="p-4 rounded-3xl bg-[#11131c] border border-neutral-800 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs font-bold text-white">
                          <div className="text-cyan-400">🏃</div>
                          <span>Steps</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-cyan-400" />
                      </div>

                      <p className="text-sm font-semibold text-neutral-200">
                        Your daily step average for this period was 3,417.
                      </p>

                      <div className="text-2xl font-bold font-mono text-cyan-400 tabular-nums">
                        3,417
                      </div>

                      {/* Teal 7-Day Bar Chart with Horizontal Target Line */}
                      <div className="relative pt-4 pb-1">
                        {/* Target horizontal line */}
                        <div className="absolute inset-x-0 top-7 h-[1px] bg-cyan-400 z-10" />

                        <div className="flex items-end justify-between gap-1.5 h-16">
                          {[3200, 1800, 2400, 4800, 3900, 5200, 3417].map((val, idx) => (
                            <div key={idx} className="flex-1 bg-cyan-900/60 rounded-xs hover:bg-cyan-800 transition-colors" style={{ height: `${(val / 5500) * 100}%` }} />
                          ))}
                        </div>
                      </div>

                      <div className="text-xs font-semibold text-cyan-400 pt-1">
                        Last 7 days
                      </div>
                    </div>

                    {/* Card 2: Weight Goal */}
                    <div className="p-4 rounded-3xl bg-[#11131c] border border-neutral-800 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs font-bold text-white">
                          <Scale className="w-4 h-4 text-purple-400" />
                          <span>Weight</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-purple-400" />
                      </div>

                      <p className="text-sm font-semibold text-neutral-200">
                        Your average recorded weight was 100 kg.
                      </p>

                      <div className="text-2xl font-bold font-mono text-purple-400 tabular-nums">
                        100 kg
                      </div>
                    </div>

                    {/* Free Goal Selection Badge */}
                    <div className="p-3 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-transparent border border-emerald-500/30 text-xs text-neutral-300 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>All custom macro & habit goals are 100% free forever.</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* ---------------------------------------------------- */}
                {/* 4. STORE & WORKOUT PROGRAMS (Matches IMG_6391 & 6392) */}
                {/* ---------------------------------------------------- */}
                {internalPreset === 'programs' && (
                  <motion.div
                    key="programs-screen"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="space-y-4 pt-1"
                  >
                    {/* Program Detail View if clicked */}
                    {selectedProgramDetail ? (
                      <div className="space-y-3">
                        <button
                          onClick={() => setSelectedProgramDetail(false)}
                          className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white"
                        >
                          <ArrowLeft className="w-3.5 h-3.5" />
                          <span>Glutes for Days</span>
                        </button>

                        <div className="p-4 rounded-3xl bg-[#11131c] border border-neutral-800 space-y-3">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="text-xl font-bold text-white">Glutes for Days</h3>
                              <p className="text-xs text-neutral-400">Sparky Strength Lab</p>
                            </div>
                            <span className="px-3 py-1.5 bg-blue-600 rounded-xl text-xs font-bold text-white">
                              Start Free
                            </span>
                          </div>

                          <div className="grid grid-cols-3 gap-2 text-center text-xs py-2 border-y border-neutral-800">
                            <div>
                              <div className="text-[10px] text-neutral-500">2841 ratings</div>
                              <div className="font-bold text-white flex items-center justify-center gap-0.5 mt-0.5">
                                4.9 <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                              </div>
                            </div>
                            <div>
                              <div className="text-[10px] text-neutral-500">LEVEL</div>
                              <div className="font-bold text-white mt-0.5">Intermediate</div>
                            </div>
                            <div>
                              <div className="text-[10px] text-neutral-500">LENGTH</div>
                              <div className="font-bold text-white mt-0.5">8 wk · 4x/wk</div>
                            </div>
                          </div>

                          <p className="text-xs text-neutral-300 leading-relaxed">
                            Eight weeks built around heavy hip extension and honest volume. Two heavy days drive the hip thrust and squat up, zero junk volume.
                          </p>

                          <div className="space-y-1.5 text-xs">
                            <div className="font-bold text-white text-[11px]">What you'll get</div>
                            <div className="flex items-center gap-2 text-neutral-300 text-[11px]">
                              <Check className="w-3.5 h-3.5 text-blue-400" />
                              <span>Hip thrust progression from bar to bodyweight</span>
                            </div>
                            <div className="flex items-center gap-2 text-neutral-300 text-[11px]">
                              <Check className="w-3.5 h-3.5 text-blue-400" />
                              <span>Two heavy days, two pump days</span>
                            </div>
                          </div>

                          {/* AI Adaptive Sync Callout */}
                          <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/25 text-[11px] space-y-1">
                            <div className="flex items-center gap-1.5 font-bold text-blue-400 font-mono text-[10px]">
                              <Sparkles className="w-3 h-3" />
                              <span>AI BIO-SYNC ACTIVE</span>
                            </div>
                            <p className="text-[10px] text-neutral-300 leading-snug">
                              Sets and loads dynamically calibrate to your 100 kg body mass & today's calorie/protein balance.
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <>
                        {/* Store Header */}
                        <div className="flex items-center justify-between">
                          <div className="w-8 h-8 rounded-full bg-[#1b1c24] flex items-center justify-center text-neutral-300">
                            <div className="space-y-1 w-4">
                              <div className="h-0.5 bg-white rounded-full" />
                              <div className="h-0.5 bg-white rounded-full" />
                              <div className="h-0.5 bg-white rounded-full" />
                            </div>
                          </div>
                          <span className="text-sm font-bold text-white">Store</span>
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-[#1b1c24] flex items-center justify-center text-neutral-300">
                              <Flame className="w-4 h-4 text-emerald-400" />
                            </div>
                            <div className="w-8 h-8 rounded-full bg-[#1b1c24] flex items-center justify-center text-neutral-300 text-xs font-bold">
                              K
                            </div>
                          </div>
                        </div>

                        {/* Search Bar */}
                        <div className="relative">
                          <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-2.5" />
                          <input
                            type="text"
                            placeholder="Search programs..."
                            readOnly
                            className="w-full bg-[#1b1c24] text-xs text-white placeholder-neutral-500 rounded-xl pl-9 pr-3 py-2 border border-neutral-800"
                          />
                        </div>

                        {/* AI Bio-Adaptive Store Banner */}
                        <div className="p-2.5 rounded-2xl bg-gradient-to-r from-blue-600/20 via-sky-500/10 to-transparent border border-blue-500/30 flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                            <span className="text-[10px] text-neutral-200 font-medium">Trainings adjusted with AI to macros & body</span>
                          </div>
                          <span className="text-[9px] font-mono text-blue-400 bg-blue-500/15 border border-blue-500/30 px-1.5 py-0.5 rounded font-bold">
                            AI SYNC
                          </span>
                        </div>

                        {/* Filter categories */}
                        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs">
                          <button
                            onClick={() => setStoreCategory('all')}
                            className={`px-3 py-1 rounded-full whitespace-nowrap font-medium ${
                              storeCategory === 'all' ? 'bg-blue-600 text-white' : 'bg-[#1b1c24] text-neutral-400'
                            }`}
                          >
                            All
                          </button>
                          <button
                            onClick={() => setStoreCategory('glutes')}
                            className={`px-3 py-1 rounded-full whitespace-nowrap font-medium ${
                              storeCategory === 'glutes' ? 'bg-blue-600 text-white' : 'bg-[#1b1c24] text-neutral-400'
                            }`}
                          >
                            Glutes
                          </button>
                          <button
                            onClick={() => setStoreCategory('core')}
                            className={`px-3 py-1 rounded-full whitespace-nowrap font-medium ${
                              storeCategory === 'core' ? 'bg-blue-600 text-white' : 'bg-[#1b1c24] text-neutral-400'
                            }`}
                          >
                            Core
                          </button>
                          <button
                            onClick={() => setStoreCategory('upper')}
                            className={`px-3 py-1 rounded-full whitespace-nowrap font-medium ${
                              storeCategory === 'upper' ? 'bg-blue-600 text-white' : 'bg-[#1b1c24] text-neutral-400'
                            }`}
                          >
                            Upper body
                          </button>
                        </div>

                        {/* Featured Banner: Glutes for Days */}
                        <div 
                          onClick={() => setSelectedProgramDetail(true)}
                          className="relative rounded-3xl bg-[#141622] border border-neutral-800 p-4 overflow-hidden cursor-pointer hover:border-neutral-700 transition-all group"
                        >
                          <div className="text-[10px] text-blue-400 font-mono font-bold tracking-wider uppercase mb-1">
                            FEATURED PROGRAM
                          </div>
                          <h3 className="text-xl font-extrabold text-white">Glutes for Days</h3>
                          <p className="text-xs text-neutral-400 mt-0.5">Build the shelf. Keep the strength.</p>
                          <div className="flex items-center justify-between mt-3">
                            <span className="px-3 py-1 bg-white text-black font-bold text-xs rounded-full">
                              Start
                            </span>
                            <span className="text-[10px] text-neutral-400">8 weeks · 22 exercises</span>
                          </div>
                        </div>

                        {/* List: Build Serious Muscle */}
                        <div className="space-y-2">
                          <div className="text-xs font-bold text-white">Build Serious Muscle</div>
                          <div className="text-[10px] text-neutral-400">Size and strength, session by session</div>

                          {[
                            { title: 'Glutes for Days', tag: 'Glutes · 8 wks · 4x/wk', level: 'Intermediate' },
                            { title: 'Iron Chest Protocol', tag: 'Upper body · 10 wks · 3x/wk', level: 'Advanced' },
                            { title: 'Legs That Never Quit', tag: 'Legs · 10 wks · 4x/wk', level: 'Advanced' },
                          ].map((prog, idx) => (
                            <div 
                              key={idx}
                              onClick={() => setSelectedProgramDetail(true)}
                              className="p-2.5 rounded-2xl bg-[#11131c] border border-neutral-800 flex items-center justify-between hover:bg-[#181a26] transition-colors cursor-pointer"
                            >
                              <div className="flex items-center gap-2.5">
                                <div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center text-neutral-300">
                                  <Dumbbell className="w-5 h-5 text-rose-500" />
                                </div>
                                <div>
                                  <div className="font-bold text-white text-xs">{prog.title}</div>
                                  <div className="text-[10px] text-neutral-400">{prog.tag}</div>
                                  <div className="text-[9px] text-neutral-500">{prog.level}</div>
                                </div>
                              </div>
                              <span className="px-2.5 py-1 bg-neutral-800 text-white text-[11px] font-bold rounded-lg">
                                Start
                              </span>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </motion.div>
                )}

                {/* ---------------------------------------------------- */}
                {/* 5. WIREFRAME SCREEN SLOT (Upload custom screenshot)  */}
                {/* ---------------------------------------------------- */}
                {internalPreset === 'wireframe' && (
                  <motion.div
                    key="wireframe-screen"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full flex flex-col justify-between py-6 px-3 text-center border-2 border-dashed border-neutral-700/80 rounded-3xl bg-neutral-900/40"
                  >
                    <div className="space-y-2">
                      <div className="w-12 h-12 mx-auto rounded-2xl bg-neutral-800 flex items-center justify-center text-neutral-400">
                        <Upload className="w-6 h-6 text-rose-500" />
                      </div>
                      <div className="font-semibold text-white text-sm">Mobile Screen Slot</div>
                      <div className="text-xs text-neutral-400 max-w-[200px] mx-auto">
                        Aspect ratio 19.5:9 (1179 x 2556 px) placeholder ready for your design screenshots.
                      </div>
                    </div>

                    <div className="p-3 bg-neutral-800/70 rounded-xl border border-neutral-700 text-left font-mono text-[10px] text-neutral-300 space-y-1">
                      <div>// PLACEHOLDER: Mobile Screen</div>
                      <div className="text-neutral-400">app: qla.fit - Track all for free</div>
                      <div className="text-emerald-400 font-semibold">status: active_render_frame</div>
                    </div>

                    <div className="space-y-2">
                      <input 
                        type="file" 
                        ref={fileInputRef} 
                        onChange={handleFileChange} 
                        accept="image/*" 
                        className="hidden" 
                      />
                      <button
                        onClick={() => fileInputRef.current?.click()}
                        className="w-full py-2.5 bg-rose-500 hover:bg-rose-600 text-white font-medium text-xs rounded-xl transition-colors shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Upload className="w-3.5 h-3.5" />
                        <span>Upload Custom Screenshot</span>
                      </button>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            )}
          </div>

          {/* -------------------------------------------------------- */}
          {/* AUTHENTIC BOTTOM DOCK NAV (Matches IMG_6389, 6390, 6391) */}
          {/* -------------------------------------------------------- */}
          <div className="relative z-30 px-3 pb-2 pt-1 bg-black/95 border-t border-neutral-900">
            <div className="flex items-center justify-between">
              
              {/* Tab 1: Activities (The Main Ring Circle) */}
              <button 
                onClick={() => handleNavigate('activity')}
                className={`flex flex-col items-center gap-1 py-1 px-2.5 rounded-2xl transition-all cursor-pointer ${
                  internalPreset === 'activity' 
                    ? 'bg-[#292b36] text-white shadow-sm' 
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                <div className="w-4 h-4 rounded-full border border-rose-500 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full border border-emerald-400 flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-cyan-400" />
                  </div>
                </div>
                <span className="text-[9px] font-semibold">Activities</span>
              </button>

              {/* Tab 2: Tracker (Selected pill style from screenshot) */}
              <button 
                onClick={() => handleNavigate('tracker')}
                className={`flex flex-col items-center gap-1 py-1 px-2.5 rounded-2xl transition-all cursor-pointer ${
                  internalPreset === 'tracker'
                    ? 'bg-[#292b36] text-white shadow-sm'
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                <Utensils className="w-4 h-4 text-cyan-400" />
                <span className="text-[9px] font-semibold">Tracker</span>
              </button>

              {/* Tab 3: Goals */}
              <button 
                onClick={() => handleNavigate('goals')}
                className={`flex flex-col items-center gap-1 py-1 px-2.5 rounded-2xl transition-all cursor-pointer ${
                  internalPreset === 'goals'
                    ? 'bg-[#292b36] text-white shadow-sm'
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                <BarChart2 className="w-4 h-4 text-cyan-400" />
                <span className="text-[9px] font-semibold">Goals</span>
              </button>

              {/* Tab 4: Store */}
              <button 
                onClick={() => handleNavigate('programs')}
                className={`flex flex-col items-center gap-1 py-1 px-2.5 rounded-2xl transition-all cursor-pointer ${
                  internalPreset === 'programs'
                    ? 'bg-[#292b36] text-white shadow-sm'
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                <LayoutGrid className="w-4 h-4 text-neutral-300" />
                <span className="text-[9px] font-semibold">Store</span>
              </button>

              {/* Action Button: Free QR Barcode Food Scanner Floating Button */}
              <button
                onClick={() => handleNavigate('scanner')}
                className={`w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg transition-transform active:scale-95 cursor-pointer ${
                  internalPreset === 'scanner'
                    ? 'bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.6)]'
                    : 'bg-[#1b2238] hover:bg-[#253052] border border-blue-500/30'
                }`}
                title="Free QR Barcode Food Scanner"
              >
                <QrCode className="w-4 h-4 text-blue-400" />
              </button>
            </div>

            {/* Home indicator bar */}
            <div className="w-32 h-1 bg-neutral-700 rounded-full mx-auto mt-2" />
          </div>

        </div>
      </div>
    </div>
  );
};
