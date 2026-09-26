import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Navigation, MapPin, Mountain, Zap, Timer, Flame, CheckCircle2, 
  Share2, Download, ShieldCheck, Compass, ArrowUpRight, TrendingUp, Trophy 
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface RouteSplit {
  km: number;
  pace: string;
  elevation: string;
  heartRate: number;
}

const DEMO_SPLITS: RouteSplit[] = [
  { km: 1, pace: "4'52\"", elevation: "+12m", heartRate: 142 },
  { km: 2, pace: "4'45\"", elevation: "+8m", heartRate: 154 },
  { km: 3, pace: "5'10\"", elevation: "+45m", heartRate: 168 },
  { km: 4, pace: "4'38\"", elevation: "-30m", heartRate: 158 },
  { km: 5, pace: "4'24\"", elevation: "-15m", heartRate: 172 },
];

export const RouteTrackingSection: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const [activeSegment, setActiveSegment] = useState<number>(3);
  const [routeType, setRouteType] = useState<'trail' | 'road' | 'gravel'>('trail');

  return (
    <section id="routes" className={`relative py-24 border-t transition-colors duration-300 ${
      isLight ? 'bg-slate-50/80 border-slate-200' : 'bg-[#090b12] border-neutral-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase mb-3">
            <span className="text-blue-500">FREE STRAVA-LEVEL ROUTE TRACKING</span>
            <span aria-hidden="true" className={isLight ? 'text-slate-300' : 'text-neutral-700'}>·</span>
            <span className={isLight ? 'text-slate-600' : 'text-neutral-400'}>ZERO $80/YR PAYWALLS</span>
          </div>

          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-balance ${
            isLight ? 'text-slate-900' : 'text-white'
          }`}>
            GPS routes, elevation profiles & splits. All free.
          </h2>

          <p className={`mt-4 text-sm sm:text-base leading-relaxed ${
            isLight ? 'text-slate-600' : 'text-neutral-400'
          }`}>
            Why pay $80/year for Strava Summit just to analyze your route segments and grade-adjusted pace? 
            <strong className="text-blue-500 font-semibold"> qla.fit</strong> gives you precision GPS trail maps, 
            kilometer splits, live elevation charts, and GPX export with zero subscriptions.
          </p>
        </div>

        {/* Interactive Route Map & Telemetry Dashboard */}
        <div className={`p-6 sm:p-10 rounded-[36px] border shadow-2xl transition-all ${
          isLight 
            ? 'bg-white border-slate-200 shadow-[0_20px_60px_rgba(0,0,0,0.06)]' 
            : 'bg-[#10131f] border-neutral-800 shadow-[0_25px_70px_rgba(0,0,0,0.7)]'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Interactive GPS Breadcrumb Map Visualizer */}
            <div className="lg:col-span-7 space-y-4">
              {/* Route Mode Switcher & Stats Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-neutral-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                    <Navigation className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className={`text-base font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                      Misty Ridge Trail Loop
                    </h3>
                    <div className="text-[11px] text-neutral-400 font-mono">
                      GPS Satellite Locked · 5.02 km · 23:57
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 p-1 rounded-xl bg-neutral-900/60 border border-neutral-800 text-xs">
                  <button
                    onClick={() => setRouteType('trail')}
                    className={`px-3 py-1 rounded-lg font-medium transition-all cursor-pointer ${
                      routeType === 'trail' ? 'bg-blue-600 text-white font-semibold' : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Trail Run
                  </button>
                  <button
                    onClick={() => setRouteType('road')}
                    className={`px-3 py-1 rounded-lg font-medium transition-all cursor-pointer ${
                      routeType === 'road' ? 'bg-blue-600 text-white font-semibold' : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Road 5K
                  </button>
                  <button
                    onClick={() => setRouteType('gravel')}
                    className={`px-3 py-1 rounded-lg font-medium transition-all cursor-pointer ${
                      routeType === 'gravel' ? 'bg-blue-600 text-white font-semibold' : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Gravel Ride
                  </button>
                </div>
              </div>

              {/* The Stylized Topographical GPS Canvas */}
              <div className="relative w-full h-[280px] sm:h-[320px] rounded-2xl overflow-hidden bg-[#07090e] border border-neutral-800/90 flex items-center justify-center p-4">
                {/* Subtle topographic contour lines background */}
                <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3b82f6" strokeWidth="0.5" strokeOpacity="0.4" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                  <ellipse cx="50%" cy="50%" rx="35%" ry="30%" fill="none" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="3,3" />
                  <ellipse cx="50%" cy="50%" rx="20%" ry="18%" fill="none" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="2,2" />
                </svg>

                {/* Animated GPS Route Path */}
                <svg className="w-full h-full" viewBox="0 0 400 240">
                  {/* Trail Track Shadow */}
                  <path
                    d="M 40 180 Q 90 90, 150 130 T 260 70 T 360 140"
                    fill="none"
                    stroke="#1e293b"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Glowing Trail Route (Electric Blue / Cyan) */}
                  <path
                    d="M 40 180 Q 90 90, 150 130 T 260 70 T 360 140"
                    fill="none"
                    stroke="url(#route-gradient)"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  
                  {/* Segment Markers */}
                  <circle cx="40" cy="180" r="7" fill="#10b981" stroke="#ffffff" strokeWidth="2" />
                  <text x="35" y="202" fill="#10b981" fontSize="10" fontWeight="bold" fontFamily="monospace">START</text>

                  <circle cx="150" cy="130" r="5" fill="#38bdf8" />
                  <text x="145" y="120" fill="#94a3b8" fontSize="9" fontFamily="monospace">KM 2</text>

                  {/* King of Mountain Segment / Peak */}
                  <circle cx="260" cy="70" r="8" fill="#eab308" stroke="#ffffff" strokeWidth="2" className="animate-pulse" />
                  <text x="235" y="55" fill="#facc15" fontSize="10" fontWeight="bold" fontFamily="monospace">👑 KOM SEGMENT</text>

                  <circle cx="360" cy="140" r="7" fill="#2563eb" stroke="#ffffff" strokeWidth="2" />
                  <text x="345" y="162" fill="#38bdf8" fontSize="10" fontWeight="bold" fontFamily="monospace">FINISH</text>

                  <defs>
                    <linearGradient id="route-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="30%" stopColor="#06b6d4" />
                      <stop offset="70%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Overlaid Live Route Badge */}
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md border border-neutral-700/80 px-2.5 py-1.5 rounded-xl text-[11px] font-mono text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>GPS Precision: 1.2m</span>
                  <span className="text-neutral-500">|</span>
                  <span className="text-cyan-400 font-bold">100% Free</span>
                </div>

                <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md border border-neutral-700/80 px-2.5 py-1.5 rounded-xl text-[11px] font-mono text-amber-400 flex items-center gap-1.5">
                  <Trophy className="w-3.5 h-3.5 text-amber-400" />
                  <span>New Segment PR: -14s</span>
                </div>
              </div>

              {/* Elevation Profile Bar Chart */}
              <div className="p-3.5 rounded-2xl bg-neutral-900/60 border border-neutral-800">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-semibold text-neutral-300 flex items-center gap-1.5">
                    <Mountain className="w-3.5 h-3.5 text-blue-400" />
                    <span>Elevation Profile (+184m / -180m)</span>
                  </span>
                  <span className="text-[10px] font-mono text-neutral-400">Min 84m · Max 268m</span>
                </div>
                
                {/* SVG Elevation Area Graph */}
                <div className="h-14 w-full">
                  <svg className="w-full h-full" viewBox="0 0 300 50" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="elevation-fill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0 45 Q 40 38, 80 40 T 150 25 T 210 10 T 260 22 L 300 35 L 300 50 L 0 50 Z"
                      fill="url(#elevation-fill)"
                    />
                    <path
                      d="M 0 45 Q 40 38, 80 40 T 150 25 T 210 10 T 260 22 L 300 35"
                      fill="none"
                      stroke="#38bdf8"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Right: Kilometer Splits & Strava Comparison Box */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-blue-400 uppercase tracking-wider font-semibold">
                    Split Breakdown
                  </span>
                  <h4 className={`text-xl font-bold font-display ${isLight ? 'text-slate-900' : 'text-white'}`}>
                    5.02 km Outdoor Analysis
                  </h4>
                </div>
                <div className="text-right font-mono text-xs">
                  <div className="font-bold text-emerald-400">Avg 4'46"/km</div>
                  <div className="text-neutral-400 text-[10px]">158 avg bpm</div>
                </div>
              </div>

              {/* Splits List */}
              <div className="space-y-1.5">
                {DEMO_SPLITS.map((split) => (
                  <div
                    key={split.km}
                    onClick={() => setActiveSegment(split.km)}
                    className={`p-2.5 rounded-xl border flex items-center justify-between transition-all cursor-pointer ${
                      activeSegment === split.km
                        ? 'bg-blue-600/15 border-blue-500/80 shadow-xs'
                        : isLight 
                          ? 'bg-slate-50 border-slate-200 hover:border-slate-300' 
                          : 'bg-[#141624] border-neutral-800 hover:border-neutral-700'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-lg bg-neutral-800 flex items-center justify-center font-mono text-xs font-bold text-white">
                        {split.km}
                      </span>
                      <div>
                        <div className={`text-xs font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                          Kilometer {split.km}
                        </div>
                        <div className="text-[10px] text-neutral-400 font-mono">
                          Elevation {split.elevation}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 font-mono text-xs">
                      <span className="font-bold text-blue-400">{split.pace}</span>
                      <span className="text-rose-400 text-[11px]">{split.heartRate} bpm</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Strava Comparison Callout */}
              <div className={`p-4 rounded-2xl border text-xs space-y-2.5 ${
                isLight 
                  ? 'bg-blue-50/70 border-blue-200 text-slate-800' 
                  : 'bg-blue-950/20 border-blue-500/30 text-neutral-300'
              }`}>
                <div className="flex items-center justify-between font-bold text-blue-500">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-500" />
                    <span>Free vs. Strava Subscription</span>
                  </span>
                  <span className="font-mono text-[11px] bg-blue-500 text-white px-2 py-0.5 rounded-full">
                    SAVE $80/YR
                  </span>
                </div>
                <p className="text-[11px] leading-relaxed text-neutral-400">
                  Unlike Strava which placed segment leaderboards, route planning, and matched runs behind paywalls, 
                  qla.fit gives you everything without paying a cent.
                </p>
                <div className="grid grid-cols-2 gap-2 text-[10px] font-mono pt-1 border-t border-neutral-800/40">
                  <div className="flex items-center gap-1 text-emerald-400 font-semibold">
                    <span>✓ Free GPX & TCX Export</span>
                  </div>
                  <div className="flex items-center gap-1 text-emerald-400 font-semibold">
                    <span>✓ Segment PR Medals</span>
                  </div>
                  <div className="flex items-center gap-1 text-emerald-400 font-semibold">
                    <span>✓ Grade-Adjusted Pace</span>
                  </div>
                  <div className="flex items-center gap-1 text-emerald-400 font-semibold">
                    <span>✓ 100% On-Device Privacy</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
