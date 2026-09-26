import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Database, Share2, Activity } from 'lucide-react';
import lifestyleImg from '../assets/images/hero_fitness_lifestyle_1790338284183.jpg';
import { useTheme } from '../context/ThemeContext';

export const BentoFeatures: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <section id="features" className={`relative py-24 border-t transition-colors duration-300 ${
      isLight ? 'bg-white border-slate-200' : 'bg-[#090a0f] border-neutral-800/80'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`text-xs font-mono font-medium uppercase tracking-widest mb-2 ${
            isLight ? 'text-rose-600' : 'text-rose-400'
          }`}>
            Engineering Specifications
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight ${
            isLight ? 'text-slate-900' : 'text-white'
          }`}>
            Designed for serious athletes and quantified-self minds.
          </h2>
          <p className={`mt-4 text-sm sm:text-base leading-relaxed ${
            isLight ? 'text-slate-600' : 'text-neutral-400'
          }`}>
            Every screen, complication, and calculation is crafted to surface what matters without fluff, paywalled metrics, or cloud vulnerabilities.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: 2-column Marquee (Lifestyle + HealthKit Engine) */}
          <div className={`md:col-span-2 relative overflow-hidden rounded-[32px] border shadow-xl group ${
            isLight ? 'bg-slate-50 border-slate-200' : 'bg-neutral-900 border-neutral-800'
          }`}>
            <div className="relative h-64 sm:h-72 overflow-hidden">
              <img
                src={lifestyleImg}
                alt="Runner monitoring vitals at sunrise"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${
                isLight ? 'from-slate-50 via-slate-50/60 to-transparent' : 'from-neutral-900 via-neutral-900/60 to-transparent'
              }`} />
              
              <div className="absolute top-4 left-4 font-mono text-[11px] text-emerald-400 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                01. DIRECT HEALTHKIT PIPELINE
              </div>
            </div>

            <div className="p-6 sm:p-8 relative -mt-6">
              <h3 className={`text-xl sm:text-2xl font-bold mb-2 ${isLight ? 'text-slate-900' : 'text-white'}`}>
                Sub-millisecond local HealthKit reads. No middleman.
              </h3>
              <p className={`text-sm leading-relaxed max-w-xl ${isLight ? 'text-slate-600' : 'text-neutral-400'}`}>
                qla.fit hooks directly into Apple's local HealthKit database sandbox on your device. 
                Your workouts, heart rate telemetry, and step cadences render instantly with zero network roundtrips.
              </p>
            </div>
          </div>

          {/* Card 2: 1-column Privacy Fortress */}
          <div id="privacy" className={`rounded-[32px] p-6 sm:p-8 border shadow-xl flex flex-col justify-between ${
            isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0e1017] border-neutral-800'
          }`}>
            <div>
              <div className="font-mono text-[11px] text-rose-500 mb-4">
                02. SOVEREIGN PRIVACY
              </div>
              <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-500 flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className={`text-xl font-bold mb-2 ${isLight ? 'text-slate-900' : 'text-white'}`}>
                Zero Cloud Accounts. Zero Trackers.
              </h3>
              <p className={`text-sm leading-relaxed ${isLight ? 'text-slate-600' : 'text-neutral-400'}`}>
                We believe health data is personal sovereignty. We don't have servers to store your heartbeat, 
                we don't run analytics SDKs, and we never sell your data to insurers or brokers.
              </p>
            </div>

            <div className={`mt-6 pt-4 border-t text-xs font-mono text-emerald-600 flex items-center gap-1.5 ${
              isLight ? 'border-slate-200' : 'border-neutral-800'
            }`}>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Apple Sandbox Verified</span>
            </div>
          </div>

          {/* Card 3: 45+ Metrics Engine */}
          <div className={`rounded-[32px] p-6 sm:p-8 border shadow-xl ${
            isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0e1017] border-neutral-800'
          }`}>
            <div className={`font-mono text-[11px] mb-4 ${isLight ? 'text-cyan-700' : 'text-cyan-400'}`}>
              03. DEPTH OF MEASURE
            </div>
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-[#00c7be] flex items-center justify-center mb-5">
              <Database className="w-6 h-6" />
            </div>
            <h3 className={`text-xl font-bold mb-2 ${isLight ? 'text-slate-900' : 'text-white'}`}>
              45+ Deep Biometrics
            </h3>
            <p className={`text-sm leading-relaxed mb-4 ${isLight ? 'text-slate-600' : 'text-neutral-400'}`}>
              From Heart Rate Variability (SDNN) and Cardio Recovery to Running Power, Cadence Asymmetry, and Blood Oxygen saturation.
            </p>
            <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
              <span className={`px-2 py-0.5 rounded ${isLight ? 'bg-slate-200 text-slate-700' : 'bg-neutral-800 text-neutral-300'}`}>VO2 Max</span>
              <span className={`px-2 py-0.5 rounded ${isLight ? 'bg-slate-200 text-slate-700' : 'bg-neutral-800 text-neutral-300'}`}>Resting HR</span>
              <span className={`px-2 py-0.5 rounded ${isLight ? 'bg-slate-200 text-slate-700' : 'bg-neutral-800 text-neutral-300'}`}>Stride Length</span>
              <span className={`px-2 py-0.5 rounded ${isLight ? 'bg-slate-200 text-slate-700' : 'bg-neutral-800 text-neutral-300'}`}>Sleep Debt</span>
            </div>
          </div>

          {/* Card 4: Granular Workout Splits */}
          <div className={`rounded-[32px] p-6 sm:p-8 border shadow-xl ${
            isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0e1017] border-neutral-800'
          }`}>
            <div className="font-mono text-[11px] text-emerald-600 mb-4">
              04. PERFORMANCE ANALYTICS
            </div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 flex items-center justify-center mb-5">
              <Activity className="w-6 h-6" />
            </div>
            <h3 className={`text-xl font-bold mb-2 ${isLight ? 'text-slate-900' : 'text-white'}`}>
              Automatic Split Engine
            </h3>
            <p className={`text-sm leading-relaxed ${isLight ? 'text-slate-600' : 'text-neutral-400'}`}>
              Every outdoor run, cycle ride, or swim automatically breaks down into kilometer and mile splits with elevation adjustments and heart rate zones.
            </p>
          </div>

          {/* Card 5: Export & Data Freedom */}
          <div className={`rounded-[32px] p-6 sm:p-8 border shadow-xl ${
            isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0e1017] border-neutral-800'
          }`}>
            <div className="font-mono text-[11px] text-amber-500 mb-4">
              05. DATA FREEDOM
            </div>
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-500 flex items-center justify-center mb-5">
              <Share2 className="w-6 h-6" />
            </div>
            <h3 className={`text-xl font-bold mb-2 ${isLight ? 'text-slate-900' : 'text-white'}`}>
              Full CSV & JSON Exports
            </h3>
            <p className={`text-sm leading-relaxed ${isLight ? 'text-slate-600' : 'text-neutral-400'}`}>
              Export your historical workouts, daily averages, and vitals to clean CSV spreadsheets or JSON files at any time with a single tap.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
