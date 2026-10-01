import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  QrCode, Utensils, Droplets, Wheat, Fish, Heart, Scale, Wine, 
  CheckCircle2, XCircle, Sparkles, ShieldCheck, Zap, ArrowRight,
  Sun, Moon, Plus, ChevronRight, ChevronDown, Flame, RotateCcw
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import type { ScannedFood } from '../types/fitness';

const DEMO_ITEMS: ScannedFood[] = [
  {
    id: 'food-greek-yogurt',
    name: 'Greek Yogurt 0%',
    brand: 'FAGE Total',
    serving: '170g single tub',
    calories: 100,
    protein: 18,
    carbs: 6,
    fat: 0,
    cholesterol: 10,
    transFat: 0,
    barcode: '0 13426 00021 4'
  },
  {
    id: 'food-salmon',
    name: 'Wild Atlantic Salmon',
    brand: 'Fresh Catch',
    serving: '150g grilled fillet',
    calories: 280,
    protein: 34,
    carbs: 0,
    fat: 15,
    cholesterol: 75,
    transFat: 0,
    barcode: '7 89123 45678 9'
  },
  {
    id: 'food-avocado',
    name: 'Hass Avocado (Medium)',
    brand: 'Organic Produce',
    serving: '136g raw',
    calories: 218,
    protein: 3,
    carbs: 12,
    fat: 20,
    cholesterol: 0,
    transFat: 0,
    barcode: '0 40110 00000 0'
  }
];

export const NutritionAndScannerSection: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const [scannedItems, setScannedItems] = useState<ScannedFood[]>([DEMO_ITEMS[0]]);
  const [activeTab, setActiveTab] = useState<string>(DEMO_ITEMS[0].id);
  const [waterMl, setWaterMl] = useState<number>(250);

  const handleAddWater = () => {
    setWaterMl((prev) => (prev >= 2000 ? 250 : prev + 250));
  };

  const totalCalories = scannedItems.reduce((acc, item) => acc + item.calories, 0);
  const totalProtein = scannedItems.reduce((acc, item) => acc + item.protein, 0);
  const totalCarbs = scannedItems.reduce((acc, item) => acc + item.carbs, 0);
  const totalFat = scannedItems.reduce((acc, item) => acc + item.fat, 0);
  const totalTransFat = scannedItems.reduce((acc, item) => acc + item.transFat, 0);
  const totalCholesterol = scannedItems.reduce((acc, item) => acc + item.cholesterol, 0);

  const targetCalories = 2000;
  const caloriesLeft = Math.max(0, targetCalories - totalCalories);
  const arcProgress = Math.min(1, totalCalories / targetCalories);

  const handleAddItem = (item: ScannedFood) => {
    setActiveTab(item.id);
    if (!scannedItems.some((i) => i.id === item.id)) {
      setScannedItems([...scannedItems, item]);
    }
  };

  const handleReset = () => {
    setScannedItems([]);
  };

  return (
    <section className={`relative py-24 border-t transition-colors duration-300 ${
      isLight ? 'bg-white border-slate-200' : 'bg-[#08090d] border-neutral-800/80'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase mb-3">
            <span className="text-blue-500">OUR MOTTO: TRACK ALL FOR FREE</span>
            <span aria-hidden="true" className={isLight ? 'text-slate-300' : 'text-neutral-700'}>·</span>
            <span className={isLight ? 'text-cyan-700' : 'text-cyan-400'}>ZERO SUBSCRIPTION PAYWALL</span>
          </div>

          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-balance ${
            isLight ? 'text-slate-900' : 'text-white'
          }`}>
            Every nutrient. Free barcode scanner. Free custom goals.
          </h2>

          <p className={`mt-4 text-sm sm:text-base leading-relaxed ${
            isLight ? 'text-slate-600' : 'text-neutral-400'
          }`}>
            Other apps locked food barcode scanning and custom macro targets behind $80/year subscriptions. 
            At <span className="font-bold text-blue-500">qla.fit</span>, we believe understanding what enters your body is a fundamental right. 
            Track all nutrients, macros, and habits completely for free.
          </p>
        </div>

        {/* 4 Feature Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          {/* Card 1: Free QR & Barcode Scanner */}
          <div className={`p-6 rounded-3xl border shadow-xl flex flex-col justify-between transition-all ${
            isLight ? 'bg-slate-50 border-slate-200 hover:border-slate-300' : 'bg-[#10121a] border-neutral-800 hover:border-neutral-700'
          }`}>
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center mb-4">
                <QrCode className="w-6 h-6" />
              </div>
              <h3 className={`text-lg font-bold mb-1.5 ${isLight ? 'text-slate-900' : 'text-white'}`}>
                Free Food Barcode & QR Scanner
              </h3>
              <p className={`text-xs leading-relaxed ${isLight ? 'text-slate-600' : 'text-neutral-400'}`}>
                Point your iPhone camera at any food label or restaurant QR code. Instant macro recognition with zero daily caps and zero subscriptions.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-neutral-800/40 text-[11px] font-mono text-emerald-500 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> 100% Free Forever
            </div>
          </div>

          {/* Card 2: Deep Nutrients Spectrum */}
          <div className={`p-6 rounded-3xl border shadow-xl flex flex-col justify-between transition-all ${
            isLight ? 'bg-slate-50 border-slate-200 hover:border-slate-300' : 'bg-[#10121a] border-neutral-800 hover:border-neutral-700'
          }`}>
            <div>
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4">
                <Utensils className="w-6 h-6" />
              </div>
              <h3 className={`text-lg font-bold mb-1.5 ${isLight ? 'text-slate-900' : 'text-white'}`}>
                Full Nutrients & Micronutrients
              </h3>
              <p className={`text-xs leading-relaxed ${isLight ? 'text-slate-600' : 'text-neutral-400'}`}>
                Not just carbs, protein, and fat. Monitor trans fats, cholesterol, sodium, fiber, and saturated fats to protect cardiovascular health.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-neutral-800/40 text-[11px] font-mono text-cyan-500 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> 5 Dedicated Macro Rings
            </div>
          </div>

          {/* Card 3: Free Custom Goals Selection */}
          <div className={`p-6 rounded-3xl border shadow-xl flex flex-col justify-between transition-all ${
            isLight ? 'bg-slate-50 border-slate-200 hover:border-slate-300' : 'bg-[#10121a] border-neutral-800 hover:border-neutral-700'
          }`}>
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-4">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className={`text-lg font-bold mb-1.5 ${isLight ? 'text-slate-900' : 'text-white'}`}>
                Free Custom Goals Selection
              </h3>
              <p className={`text-xs leading-relaxed ${isLight ? 'text-slate-600' : 'text-neutral-400'}`}>
                Set custom caloric deficit targets, keto macro ratios, weekly step goals, and target body weights without paying $9.99/month.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-neutral-800/40 text-[11px] font-mono text-purple-400 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> D / W / M / 6M / Y Trends
            </div>
          </div>

          {/* Card 4: Daily Habits System */}
          <div className={`p-6 rounded-3xl border shadow-xl flex flex-col justify-between transition-all ${
            isLight ? 'bg-slate-50 border-slate-200 hover:border-slate-300' : 'bg-[#10121a] border-neutral-800 hover:border-neutral-700'
          }`}>
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-500 flex items-center justify-center mb-4">
                <Wine className="w-6 h-6" />
              </div>
              <h3 className={`text-lg font-bold mb-1.5 ${isLight ? 'text-slate-900' : 'text-white'}`}>
                Habits & Hydration Tracking
              </h3>
              <p className={`text-xs leading-relaxed ${isLight ? 'text-slate-600' : 'text-neutral-400'}`}>
                Log your daily hydration intake, weight scales, wake up morning hours, and bedtime sleep routines on one unified home screen.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-neutral-800/40 text-[11px] font-mono text-amber-500 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> All-in-One Dashboard
            </div>
          </div>

        </div>

        {/* Interactive "Try the Free QR Barcode Scanner" Simulator Box */}
        <div className={`p-6 sm:p-10 rounded-[36px] border shadow-2xl transition-colors ${
          isLight 
            ? 'bg-gradient-to-br from-slate-50 via-white to-slate-100 border-slate-200' 
            : 'bg-gradient-to-br from-[#11131c] via-[#0d0f17] to-[#08090d] border-neutral-800'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Simulator Controls & Item Selectors */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold">
                <QrCode className="w-3.5 h-3.5" />
                <span>INTERACTIVE FREE SCANNER DEMO</span>
              </div>

              <h3 className={`text-2xl sm:text-3xl font-extrabold font-display ${isLight ? 'text-slate-900' : 'text-white'}`}>
                Scan food items and watch your nutrition gauge adapt instantly.
              </h3>

              <p className={`text-xs sm:text-sm leading-relaxed ${isLight ? 'text-slate-600' : 'text-neutral-400'}`}>
                Click on any food below to simulate our lightning-fast barcode scanner. 
                See how qla.fit immediately computes your remaining calorie budget, protein targets, and micronutrients.
              </p>

              {/* Sample Food Buttons */}
              <div className="space-y-2">
                {DEMO_ITEMS.map((item) => {
                  const isAdded = scannedItems.some((i) => i.id === item.id);
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleAddItem(item)}
                      className={`w-full p-3.5 rounded-2xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                        activeTab === item.id
                          ? 'border-emerald-500/80 bg-emerald-500/10 shadow-sm'
                          : isLight 
                            ? 'bg-white border-slate-200 hover:border-slate-300' 
                            : 'bg-[#161824] border-neutral-800 hover:border-neutral-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-black text-white flex items-center justify-center font-mono text-[10px]">
                          <QrCode className="w-4 h-4 text-emerald-400" />
                        </div>
                        <div>
                          <div className={`font-bold text-xs ${isLight ? 'text-slate-900' : 'text-white'}`}>
                            {item.name}
                          </div>
                          <div className="text-[10px] text-neutral-400">
                            {item.brand} · {item.serving} · <span className="font-mono">{item.barcode}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="text-right font-mono text-xs">
                          <span className="font-bold text-emerald-500">+{item.protein}g protein</span>
                          <span className="block text-[10px] text-neutral-400">{item.calories} kcal</span>
                        </div>
                        <span className={`px-2.5 py-1 text-[11px] font-bold rounded-lg ${
                          isAdded 
                            ? 'bg-emerald-500 text-white' 
                            : isLight ? 'bg-slate-100 text-slate-800' : 'bg-neutral-800 text-neutral-300'
                        }`}>
                          {isAdded ? 'Logged' : 'Scan'}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {scannedItems.length > 0 && (
                <button
                  onClick={handleReset}
                  className="text-xs text-rose-500 hover:underline flex items-center gap-1 cursor-pointer font-medium"
                >
                  <span>Reset logged demo items</span>
                </button>
              )}
            </div>

            {/* Right: Live Re-creation of qla.fit Nutrition Card INSIDE TABLET */}
            <div className="lg:col-span-6">
              {/* Tablet Outer Chassis (iPad Pro Style with Slim Bezel & Camera) */}
              <div className={`relative mx-auto rounded-[38px] p-3 sm:p-4 shadow-2xl transition-all duration-300 ${
                isLight 
                  ? 'bg-gradient-to-b from-[#e2e8f0] to-[#cbd5e1] ring-1 ring-slate-300 shadow-[0_20px_50px_rgba(0,0,0,0.12)]' 
                  : 'bg-gradient-to-b from-[#222533] via-[#181a24] to-[#12131b] ring-1 ring-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.8)]'
              }`}>
                {/* Tablet Frame Antenna bands & Camera dot */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-neutral-700/80 border border-neutral-600 z-30" />

                {/* Inner Tablet Display Screen */}
                <div className={`relative rounded-[28px] overflow-hidden shadow-inner p-4 sm:p-5 space-y-4 transition-colors duration-300 ${
                  isLight ? 'bg-[#f8fafc] text-slate-900 border border-slate-200' : 'bg-black text-white border border-neutral-900'
                }`}>
                  
                  {/* Tablet App Top Bar */}
                  <div className={`flex items-center justify-between border-b pb-3 ${
                    isLight ? 'border-slate-200' : 'border-neutral-900'
                  }`}>
                    <div className="flex items-center gap-2">
                      <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                        isLight ? 'bg-white border border-slate-200 text-slate-800 shadow-xs' : 'bg-[#1a1c26] text-neutral-200'
                      }`}>
                        <span>Today</span>
                        <ChevronDown className="w-3 h-3 text-neutral-400" />
                      </div>
                      <div className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono font-bold ${
                        isLight ? 'bg-amber-50 border border-amber-200 text-amber-700' : 'bg-[#1a1c26] text-amber-400'
                      }`}>
                        <Flame className="w-3 h-3 fill-current text-amber-500" />
                        <span>14d</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-emerald-600 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-full font-semibold">
                        TABLET VIEW
                      </span>
                      <div className="w-7 h-7 rounded-full bg-blue-600/30 border border-blue-500/40 flex items-center justify-center text-blue-600 text-xs font-bold font-mono">
                        K
                      </div>
                    </div>
                  </div>

                  {/* Tablet Nutrition Card */}
                  <div className={`p-4 sm:p-5 rounded-2xl border shadow-lg space-y-3 transition-colors ${
                    isLight ? 'bg-white border-slate-200 text-slate-900 shadow-slate-200/50' : 'bg-[#10121b] border-neutral-800 text-white'
                  }`}>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <span className={`text-base font-bold tracking-tight ${isLight ? 'text-slate-900' : 'text-white'}`}>Nutrition</span>
                        <span className={`text-xs ml-2 font-mono ${isLight ? 'text-slate-500' : 'text-neutral-400'}`}>Daily Calorie Balance</span>
                      </div>
                      <span className="text-xs text-blue-500 flex items-center gap-1 font-medium cursor-pointer">
                        All macros <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>

                    {/* Perfectly Aligned Arch: Sides OUTSIDE, Main INSIDE Circle */}
                    <div className="flex items-center justify-between gap-1 sm:gap-2 px-1 py-1">
                      
                      {/* Left: Eaten (Completely outside the circle on the left) */}
                      <div className="flex flex-col items-center text-center min-w-[56px] sm:min-w-[70px] pt-8 sm:pt-10">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-1 ${
                          isLight ? 'bg-cyan-50 border border-cyan-200 text-cyan-600' : 'bg-cyan-500/10 border border-cyan-500/20 text-cyan-400'
                        }`}>
                          <Utensils className="w-4 h-4" />
                        </div>
                        <div className={`text-lg sm:text-xl font-bold font-mono tabular-nums leading-none ${
                          isLight ? 'text-slate-900' : 'text-white'
                        }`}>
                          {totalCalories}
                        </div>
                        <div className={`text-[11px] font-medium mt-0.5 ${isLight ? 'text-slate-500' : 'text-neutral-400'}`}>Eaten</div>
                      </div>

                      {/* Center: Upright Dome Arch Gauge with Main Calories Inside */}
                      <div className="relative w-[150px] sm:w-[220px] h-[96px] sm:h-[130px] flex items-center justify-center shrink-0">
                        <svg className="w-[150px] sm:w-[220px] h-[96px] sm:h-[130px]" viewBox="0 0 220 125">
                          {/* Background Arc Track */}
                          <path
                            d="M 25 115 A 85 85 0 0 1 195 115"
                            fill="none"
                            stroke={isLight ? '#e2e8f0' : '#1a1d29'}
                            strokeWidth="14"
                            strokeLinecap="round"
                          />
                          {/* Inner Concentric Guideline */}
                          <path
                            d="M 38 115 A 72 72 0 0 1 182 115"
                            fill="none"
                            stroke={isLight ? '#f1f5f9' : '#131520'}
                            strokeWidth="3"
                            strokeLinecap="round"
                          />
                          {/* Animated Progress Arc: Fills from left (25, 115) clockwise over dome */}
                          <path
                            d="M 25 115 A 85 85 0 0 1 195 115"
                            fill="none"
                            stroke="#0ea5e9"
                            strokeWidth="14"
                            strokeDasharray={267.04}
                            strokeDashoffset={267.04 * (1 - Math.max(0.04, arcProgress))}
                            strokeLinecap="round"
                            className="transition-all duration-700"
                          />
                        </svg>

                        {/* Main Metric: Centered cleanly INSIDE the dome */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center pt-7 sm:pt-8 text-center pointer-events-none">
                          <span className={`text-3xl sm:text-4xl font-extrabold font-mono tracking-tight tabular-nums leading-none ${
                            isLight ? 'text-sky-600' : 'text-[#38bdf8]'
                          }`}>
                            {caloriesLeft.toLocaleString()}
                          </span>
                          <span className={`text-[10px] sm:text-[11px] font-medium mt-1 ${
                            isLight ? 'text-slate-500' : 'text-neutral-400'
                          }`}>
                            kcal left of {targetCalories.toLocaleString()}
                          </span>
                        </div>
                      </div>

                      {/* Right: Burned (Completely outside the circle on the right) */}
                      <div className="flex flex-col items-center text-center min-w-[56px] sm:min-w-[70px] pt-8 sm:pt-10">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-1 ${
                          isLight ? 'bg-rose-50 border border-rose-200 text-rose-600' : 'bg-rose-500/10 border border-rose-500/20 text-rose-500'
                        }`}>
                          <Zap className="w-4 h-4" />
                        </div>
                        <div className="text-lg sm:text-xl font-bold text-rose-500 font-mono tabular-nums leading-none">
                          7
                        </div>
                        <div className={`text-[11px] font-medium mt-0.5 ${isLight ? 'text-slate-500' : 'text-neutral-400'}`}>Burned</div>
                      </div>

                    </div>

                    {/* 5 Distinct Macro Rings */}
                    <div className={`grid grid-cols-5 gap-1 pt-2 border-t text-center ${
                      isLight ? 'border-slate-100' : 'border-neutral-900'
                    }`}>
                      {/* Trans Fat */}
                      <div className="flex flex-col items-center">
                        <Droplets className="w-3 h-3 text-rose-500 mb-1" />
                        <div className={`w-10 h-10 rounded-full border-2 border-rose-500/50 flex items-center justify-center text-xs font-bold font-mono ${
                          isLight ? 'bg-slate-50 text-slate-800' : 'bg-[#161824] text-white'
                        }`}>
                          {totalTransFat}g
                        </div>
                        <span className={`text-[9px] mt-1 font-medium ${isLight ? 'text-rose-600' : 'text-rose-400'}`}>Trans Fat</span>
                      </div>

                      {/* Carbs */}
                      <div className="flex flex-col items-center">
                        <Wheat className="w-3 h-3 text-purple-500 mb-1" />
                        <div className={`w-10 h-10 rounded-full border-2 border-purple-500/50 flex items-center justify-center text-xs font-bold font-mono ${
                          isLight ? 'bg-slate-50 text-slate-800' : 'bg-[#161824] text-white'
                        }`}>
                          {totalCarbs}g
                        </div>
                        <span className={`text-[9px] mt-1 font-medium ${isLight ? 'text-purple-700' : 'text-purple-300'}`}>Carbs</span>
                        <span className="text-[8px] text-neutral-400 font-mono">{Math.max(0, 250 - totalCarbs)}g left</span>
                      </div>

                      {/* Protein */}
                      <div className="flex flex-col items-center">
                        <Fish className="w-3 h-3 text-emerald-500 mb-1" />
                        <div className={`w-10 h-10 rounded-full border-2 border-emerald-500/50 flex items-center justify-center text-xs font-bold font-mono ${
                          isLight ? 'bg-slate-50 text-slate-800' : 'bg-[#161824] text-white'
                        }`}>
                          {totalProtein}g
                        </div>
                        <span className={`text-[9px] mt-1 font-medium ${isLight ? 'text-emerald-700' : 'text-emerald-300'}`}>Protein</span>
                        <span className="text-[8px] text-neutral-400 font-mono">{Math.max(0, 100 - totalProtein)}g left</span>
                      </div>

                      {/* Fat */}
                      <div className="flex flex-col items-center">
                        <Droplets className="w-3 h-3 text-amber-500 mb-1" />
                        <div className={`w-10 h-10 rounded-full border-2 border-amber-500/50 flex items-center justify-center text-xs font-bold font-mono ${
                          isLight ? 'bg-slate-50 text-slate-800' : 'bg-[#161824] text-white'
                        }`}>
                          {totalFat}g
                        </div>
                        <span className={`text-[9px] mt-1 font-medium ${isLight ? 'text-amber-700' : 'text-amber-300'}`}>Fat</span>
                        <span className="text-[8px] text-neutral-400 font-mono">{Math.max(0, 67 - totalFat)}g left</span>
                      </div>

                      {/* Cholesterol */}
                      <div className="flex flex-col items-center">
                        <Heart className="w-3 h-3 text-cyan-500 mb-1" />
                        <div className={`w-10 h-10 rounded-full border-2 border-cyan-500/50 flex items-center justify-center text-[10px] font-bold font-mono ${
                          isLight ? 'bg-slate-50 text-slate-800' : 'bg-[#161824] text-white'
                        }`}>
                          {totalCholesterol}mg
                        </div>
                        <span className={`text-[9px] mt-1 font-medium ${isLight ? 'text-cyan-700' : 'text-cyan-300'}`}>Cholest.</span>
                      </div>
                    </div>

                  </div>

                  {/* HABITS GRID DIRECTLY UNDER NUTRITION CARD (Weight, Water, Wake Up, Bedtime) */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs px-1">
                      <span className={`font-semibold flex items-center gap-1.5 ${isLight ? 'text-slate-700' : 'text-neutral-300'}`}>
                        <span>Keep a track of your habits</span>
                      </span>
                      <span className="text-blue-500 flex items-center gap-0.5 text-[11px] cursor-pointer hover:underline">
                        Manage <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      {/* 1. Weight Habit */}
                      <div className={`p-3 rounded-2xl border ${
                        isLight ? 'bg-white border-slate-200 shadow-xs' : 'bg-[#10121b] border-neutral-800'
                      }`}>
                        <div className="flex items-center justify-between text-[10px] text-neutral-400">
                          <span>Today target: 92 kg</span>
                          <span className="text-emerald-500 font-mono font-bold">-0.4 kg</span>
                        </div>
                        <div className="flex items-center gap-2.5 mt-2">
                          <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                            isLight ? 'bg-slate-100 text-slate-700' : 'bg-neutral-800/80 text-neutral-300'
                          }`}>
                            <Scale className="w-4 h-4 text-blue-500" />
                          </div>
                          <div>
                            <div className={`text-base font-bold font-mono leading-none ${isLight ? 'text-slate-900' : 'text-white'}`}>
                              100 kg
                            </div>
                            <div className={`text-[10px] mt-0.5 ${isLight ? 'text-slate-500' : 'text-neutral-400'}`}>Current Weight</div>
                          </div>
                        </div>
                      </div>

                      {/* 2. Hydration Water Habit (Interactive!) */}
                      <div className={`p-3 rounded-2xl border ${
                        isLight ? 'bg-white border-slate-200 shadow-xs' : 'bg-[#10121b] border-neutral-800'
                      }`}>
                        <div className="flex items-center justify-between text-[10px]">
                          <span className={isLight ? 'text-slate-500' : 'text-neutral-400'}>Goal: 2,000 ml</span>
                          <button
                            onClick={handleAddWater}
                            className={`text-[10px] font-mono px-1.5 py-0.5 rounded cursor-pointer transition-colors font-bold ${
                              isLight ? 'bg-cyan-50 border border-cyan-200 text-cyan-700 hover:bg-cyan-100' : 'bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:text-cyan-300'
                            }`}
                            title="Click to add water"
                          >
                            +250ml
                          </button>
                        </div>
                        <div className="flex items-center gap-2.5 mt-2">
                          <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                            isLight ? 'bg-cyan-50 text-cyan-600' : 'bg-cyan-500/10 text-cyan-400'
                          }`}>
                            <Wine className="w-4 h-4" />
                          </div>
                          <div className="flex-1">
                            <div className={`text-base font-bold font-mono leading-none ${isLight ? 'text-slate-900' : 'text-white'}`}>
                              {waterMl} ml
                            </div>
                            <div className={`text-[10px] mt-0.5 ${isLight ? 'text-slate-500' : 'text-neutral-400'}`}>Water Tracked</div>
                          </div>
                        </div>
                        {/* Mini water progress bar */}
                        <div className={`w-full h-1 rounded-full mt-2 overflow-hidden ${isLight ? 'bg-slate-200' : 'bg-neutral-800'}`}>
                          <div 
                            className="bg-cyan-500 h-full rounded-full transition-all duration-300"
                            style={{ width: `${Math.min(100, (waterMl / 2000) * 100)}%` }}
                          />
                        </div>
                      </div>

                      {/* 3. Wake Up Habit */}
                      <div className={`p-3 rounded-2xl border ${
                        isLight ? 'bg-white border-slate-200 shadow-xs' : 'bg-[#10121b] border-neutral-800'
                      }`}>
                        <div className="flex items-center justify-between text-[10px] text-neutral-400">
                          <span>Morning alert</span>
                          <span className="text-amber-500 font-mono font-bold">Synced</span>
                        </div>
                        <div className="flex items-center gap-2.5 mt-2">
                          <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                            isLight ? 'bg-amber-50 text-amber-600' : 'bg-amber-500/10 text-amber-400'
                          }`}>
                            <Sun className="w-4 h-4" />
                          </div>
                          <div>
                            <div className={`text-base font-bold font-mono leading-none ${isLight ? 'text-slate-900' : 'text-white'}`}>
                              07:30
                            </div>
                            <div className={`text-[10px] mt-0.5 ${isLight ? 'text-slate-500' : 'text-neutral-400'}`}>Wake Up Routine</div>
                          </div>
                        </div>
                      </div>

                      {/* 4. Bedtime Habit */}
                      <div className={`p-3 rounded-2xl border ${
                        isLight ? 'bg-white border-slate-200 shadow-xs' : 'bg-[#10121b] border-neutral-800'
                      }`}>
                        <div className="flex items-center justify-between text-[10px] text-neutral-400">
                          <span>Target 8 hrs</span>
                          <span className="text-indigo-500 font-mono font-bold">Good</span>
                        </div>
                        <div className="flex items-center gap-2.5 mt-2">
                          <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                            isLight ? 'bg-indigo-50 text-indigo-600' : 'bg-indigo-500/10 text-indigo-400'
                          }`}>
                            <Moon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className={`text-base font-bold font-mono leading-none ${isLight ? 'text-slate-900' : 'text-white'}`}>
                              23:00
                            </div>
                            <div className={`text-[10px] mt-0.5 ${isLight ? 'text-slate-500' : 'text-neutral-400'}`}>Bedtime Sleep</div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Tablet Bottom Status Bar & Home Indicator */}
                  <div className={`pt-2 border-t flex items-center justify-between text-[11px] ${
                    isLight ? 'border-slate-200 text-slate-500' : 'border-neutral-900 text-neutral-400'
                  }`}>
                    <span>Logged items: <strong className={`font-mono ${isLight ? 'text-slate-900' : 'text-white'}`}>{scannedItems.length}</strong></span>
                    <span className="text-emerald-500 font-mono font-bold">100% Free Forever</span>
                  </div>

                  {/* Tablet Home Bar */}
                  <div className={`w-32 h-1 rounded-full mx-auto mt-1 ${isLight ? 'bg-slate-300' : 'bg-neutral-700/80'}`} />

                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
