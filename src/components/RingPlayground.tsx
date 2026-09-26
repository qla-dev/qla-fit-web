import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Flame, Timer, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const RingPlayground: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const [move, setMove] = useState(720);
  const [moveGoal, setMoveGoal] = useState(650);

  const [exercise, setExercise] = useState(42);
  const [exerciseGoal, setExerciseGoal] = useState(30);

  const [stand, setStand] = useState(12);
  const [standGoal, setStandGoal] = useState(12);

  const movePct = Math.round((move / moveGoal) * 100);
  const exercisePct = Math.round((exercise / exerciseGoal) * 100);
  const standPct = Math.round((stand / standGoal) * 100);

  const allClosed = movePct >= 100 && exercisePct >= 100 && standPct >= 100;

  const resetPreset = (type: 'light' | 'target' | 'overdrive') => {
    if (type === 'light') {
      setMove(420);
      setExercise(18);
      setStand(8);
    } else if (type === 'target') {
      setMove(650);
      setExercise(30);
      setStand(12);
    } else {
      setMove(980);
      setExercise(65);
      setStand(14);
    }
  };

  return (
    <section className={`relative py-20 border-t transition-colors duration-300 ${
      isLight ? 'bg-slate-100/60 border-slate-200' : 'bg-neutral-950 border-neutral-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className={`text-xs font-mono font-medium uppercase tracking-widest mb-2 ${
            isLight ? 'text-emerald-600' : 'text-emerald-400'
          }`}>
            Interactive Goal Engine
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight ${
            isLight ? 'text-slate-900' : 'text-white'
          }`}>
            Dial your rings in real time.
          </h2>
          <p className={`mt-4 text-sm sm:text-base leading-relaxed ${
            isLight ? 'text-slate-600' : 'text-neutral-400'
          }`}>
            qla.fit recalculates projected completion times, hourly deficit targets, and over-achievement streaks as you move throughout the day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Controls Column */}
          <div className={`lg:col-span-7 p-6 sm:p-8 rounded-3xl border shadow-xl space-y-6 transition-colors ${
            isLight ? 'bg-white border-slate-200' : 'bg-[#10121a] border-neutral-800'
          }`}>
            
            <div className={`flex items-center justify-between border-b pb-4 ${
              isLight ? 'border-slate-200' : 'border-neutral-800'
            }`}>
              <span className={`text-sm font-semibold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                Daily Target Sliders
              </span>
              <div className="flex items-center gap-1.5 text-xs">
                <button
                  onClick={() => resetPreset('light')}
                  className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                    isLight ? 'bg-slate-100 hover:bg-slate-200 text-slate-700' : 'bg-neutral-800 hover:bg-neutral-700 text-neutral-300'
                  }`}
                >
                  Rest Day
                </button>
                <button
                  onClick={() => resetPreset('target')}
                  className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                    isLight ? 'bg-slate-100 hover:bg-slate-200 text-slate-700' : 'bg-neutral-800 hover:bg-neutral-700 text-neutral-300'
                  }`}
                >
                  Target
                </button>
                <button
                  onClick={() => resetPreset('overdrive')}
                  className="px-2.5 py-1 rounded-md bg-rose-500/10 text-rose-500 border border-rose-500/30 hover:bg-rose-500/20 transition-colors cursor-pointer font-medium"
                >
                  Overdrive
                </button>
              </div>
            </div>

            {/* Move Slider */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-2 font-medium text-[#ff2d55]">
                  <Flame className="w-4 h-4" /> Move (Active Calories)
                </span>
                <span className={`font-mono tabular-nums font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                  {move} / {moveGoal} kcal ({movePct}%)
                </span>
              </div>
              <input
                type="range"
                min="100"
                max="1400"
                step="10"
                value={move}
                onChange={(e) => setMove(Number(e.target.value))}
                className={`w-full h-2 rounded-lg appearance-none cursor-pointer accent-[#ff2d55] ${
                  isLight ? 'bg-slate-200' : 'bg-neutral-800'
                }`}
              />
              <div className={`flex justify-between text-[10px] font-mono ${isLight ? 'text-slate-400' : 'text-neutral-500'}`}>
                <span>100 kcal</span>
                <span>Goal: {moveGoal} kcal</span>
                <span>1,400 kcal</span>
              </div>
            </div>

            {/* Exercise Slider */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-2 font-medium text-[#30d158]">
                  <Timer className="w-4 h-4" /> Exercise (Brisk Minutes)
                </span>
                <span className={`font-mono tabular-nums font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                  {exercise} / {exerciseGoal} min ({exercisePct}%)
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="120"
                step="1"
                value={exercise}
                onChange={(e) => setExercise(Number(e.target.value))}
                className={`w-full h-2 rounded-lg appearance-none cursor-pointer accent-[#30d158] ${
                  isLight ? 'bg-slate-200' : 'bg-neutral-800'
                }`}
              />
              <div className={`flex justify-between text-[10px] font-mono ${isLight ? 'text-slate-400' : 'text-neutral-500'}`}>
                <span>0 min</span>
                <span>Goal: {exerciseGoal} min</span>
                <span>120 min</span>
              </div>
            </div>

            {/* Stand Slider */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-2 font-medium text-[#00c7be]">
                  <Award className="w-4 h-4" /> Stand (Active Hours)
                </span>
                <span className={`font-mono tabular-nums font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                  {stand} / {standGoal} hrs ({standPct}%)
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="16"
                step="1"
                value={stand}
                onChange={(e) => setStand(Number(e.target.value))}
                className={`w-full h-2 rounded-lg appearance-none cursor-pointer accent-[#00c7be] ${
                  isLight ? 'bg-slate-200' : 'bg-neutral-800'
                }`}
              />
              <div className={`flex justify-between text-[10px] font-mono ${isLight ? 'text-slate-400' : 'text-neutral-500'}`}>
                <span>0 hrs</span>
                <span>Goal: {standGoal} hrs</span>
                <span>16 hrs</span>
              </div>
            </div>

            {/* Live Status Callout */}
            <div className={`p-3.5 rounded-2xl border transition-all text-xs flex items-center justify-between ${
              allClosed 
                ? isLight ? 'bg-emerald-50 border-emerald-300 text-emerald-800' : 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300' 
                : isLight ? 'bg-slate-50 border-slate-200 text-slate-700' : 'bg-neutral-900 border-neutral-800 text-neutral-300'
            }`}>
              <div className="flex items-center gap-2.5">
                {allClosed ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                ) : (
                  <Sparkles className="w-5 h-5 text-rose-500 shrink-0" />
                )}
                <span>
                  {allClosed 
                    ? 'All three rings closed today! Overachievement badges unlocked in qla.fit.' 
                    : `Need ${Math.max(0, moveGoal - move)} kcal and ${Math.max(0, exerciseGoal - exercise)}m more to complete rings today.`}
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Visual Rings Presentation */}
          <div className={`lg:col-span-5 flex flex-col items-center justify-center p-8 rounded-3xl border shadow-2xl relative transition-colors ${
            isLight 
              ? 'bg-gradient-to-b from-white to-slate-50 border-slate-200' 
              : 'bg-gradient-to-b from-[#141620] to-[#0c0d13] border-neutral-800/80'
          }`}>
            <div className="relative w-64 h-64 flex items-center justify-center">
              {allClosed && (
                <div className={`absolute inset-0 rounded-full blur-2xl animate-pulse ${
                  isLight ? 'bg-gradient-to-tr from-rose-400/20 via-emerald-400/20 to-cyan-400/20' : 'bg-gradient-to-tr from-rose-500/30 via-emerald-500/20 to-cyan-500/30'
                }`} />
              )}

              <svg className="w-64 h-64 -rotate-90 relative z-10" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="80" stroke="#ff2d55" strokeWidth="15" fill="none" opacity={isLight ? '0.12' : '0.15'} />
                <circle cx="100" cy="100" r="58" stroke="#30d158" strokeWidth="15" fill="none" opacity={isLight ? '0.12' : '0.15'} />
                <circle cx="100" cy="100" r="36" stroke="#00c7be" strokeWidth="15" fill="none" opacity={isLight ? '0.12' : '0.15'} />

                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  stroke="#ff2d55"
                  strokeWidth="15"
                  strokeDasharray={2 * Math.PI * 80}
                  strokeDashoffset={2 * Math.PI * 80 * (1 - Math.min(1.5, move / moveGoal))}
                  strokeLinecap="round"
                  fill="none"
                  className="transition-all duration-300"
                />

                <circle
                  cx="100"
                  cy="100"
                  r="58"
                  stroke="#30d158"
                  strokeWidth="15"
                  strokeDasharray={2 * Math.PI * 58}
                  strokeDashoffset={2 * Math.PI * 58 * (1 - Math.min(1.5, exercise / exerciseGoal))}
                  strokeLinecap="round"
                  fill="none"
                  className="transition-all duration-300"
                />

                <circle
                  cx="100"
                  cy="100"
                  r="36"
                  stroke="#00c7be"
                  strokeWidth="15"
                  strokeDasharray={2 * Math.PI * 36}
                  strokeDashoffset={2 * Math.PI * 36 * (1 - Math.min(1.5, stand / standGoal))}
                  strokeLinecap="round"
                  fill="none"
                  className="transition-all duration-300"
                />
              </svg>

              <div className="absolute z-20 flex flex-col items-center justify-center text-center">
                <Flame className={`w-6 h-6 transition-all ${movePct >= 100 ? 'text-[#ff2d55] scale-110' : isLight ? 'text-slate-400' : 'text-neutral-500'}`} />
                <span className={`font-mono text-xs font-bold mt-1 ${isLight ? 'text-slate-900' : 'text-white'}`}>{movePct}%</span>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-4 text-xs font-mono">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff2d55]" />
                <span className={`font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>{move}</span>
                <span className="text-neutral-400 text-[10px]">KCAL</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#30d158]" />
                <span className={`font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>{exercise}</span>
                <span className="text-neutral-400 text-[10px]">MIN</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00c7be]" />
                <span className={`font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>{stand}</span>
                <span className="text-neutral-400 text-[10px]">HRS</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
