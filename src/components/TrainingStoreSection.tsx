import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Dumbbell, Sparkles, Zap, Flame, ShieldCheck, Check, ArrowRight, 
  Star, ShoppingBag, Sliders, Scale, Utensils, Moon, Sun, Heart, 
  RefreshCw, Cpu, Award, Lock, ChevronRight, CheckCircle2, Play,
  BarChart3, Clock, UserCheck, Droplets
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface TrainingProgram {
  id: string;
  title: string;
  tagline: string;
  coach: string;
  coachRole: string;
  rating: number;
  ratingsCount: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  frequency: string;
  price: number;
  category: 'glutes' | 'hypertrophy' | 'endurance' | 'recomp';
  badge?: string;
  description: string;
  highlights: string[];
  baseWorkout: {
    name: string;
    exercises: {
      name: string;
      baseSets: number;
      baseReps: string;
      baseWeightKg: number;
      baseRestSec: number;
      targetMuscles: string;
    }[];
  };
}

const STORE_PROGRAMS: TrainingProgram[] = [
  {
    id: 'glutes-for-days',
    title: 'Glutes for Days',
    tagline: 'Build the shelf. Keep the strength.',
    coach: 'qla.fit Strength Lab',
    coachRole: 'Biomechanics & Hypertrophy Specialist',
    rating: 4.9,
    ratingsCount: 2841,
    level: 'Intermediate',
    duration: '8 weeks',
    frequency: '4x / week',
    price: 19.99,
    category: 'glutes',
    badge: 'FEATURED PROGRAM',
    description: 'Eight weeks built around heavy hip extension and honest volume. Two heavy days drive the hip thrust and squat up, zero junk volume.',
    highlights: [
      'Hip thrust progression from baseline to 1.5x bodyweight',
      'Two heavy neural days, two metabolic hypertrophy days',
      'AI dynamic load scaling based on daily protein and sleep'
    ],
    baseWorkout: {
      name: 'Day 1: Heavy Posterior Chain & Hip Thrust Engine',
      exercises: [
        {
          name: 'Barbell Hip Thrust',
          baseSets: 4,
          baseReps: '8-10',
          baseWeightKg: 100,
          baseRestSec: 120,
          targetMuscles: 'Gluteus Maximus, Hamstrings'
        },
        {
          name: 'Romanian Deadlift (RDL)',
          baseSets: 3,
          baseReps: '10-12',
          baseWeightKg: 80,
          baseRestSec: 90,
          targetMuscles: 'Hamstrings, Glutes, Erector Spinae'
        },
        {
          name: 'Bulgarian Split Squat',
          baseSets: 3,
          baseReps: '12 / leg',
          baseWeightKg: 20,
          baseRestSec: 75,
          targetMuscles: 'Gluteus Medius, Quads'
        },
        {
          name: 'Cable Glute Kickbacks (45° Arc)',
          baseSets: 3,
          baseReps: '15-20',
          baseWeightKg: 15,
          baseRestSec: 60,
          targetMuscles: 'Upper Glute Shelf'
        }
      ]
    }
  },
  {
    id: 'ppl-hypertrophy',
    title: 'Push Pull Legs: Hypertrophy Protocol',
    tagline: 'Pure muscle hypertrophy with zero junk volume.',
    coach: 'Apex Science Athletics',
    coachRole: 'IFBB Pro & Exercise Scientist',
    rating: 5.0,
    ratingsCount: 4120,
    level: 'Advanced',
    duration: '10 weeks',
    frequency: '5x / week',
    price: 24.99,
    category: 'hypertrophy',
    badge: 'BESTSELLER',
    description: 'A scientifically periodized PPL protocol designed for maximum muscle protein synthesis with RPE-governed progressive overload.',
    highlights: [
      'Mesocycle wave loading for sustained progressive overload',
      'Full upper-body mechanical tension calibration',
      'AI adjusts daily volume if caloric deficit exceeds 400 kcal'
    ],
    baseWorkout: {
      name: 'Day 1: Upper Push Dominance & Anterior Delts',
      exercises: [
        {
          name: 'Incline Dumbbell Press (30°)',
          baseSets: 4,
          baseReps: '6-8',
          baseWeightKg: 36,
          baseRestSec: 120,
          targetMuscles: 'Clavicular Pectoralis, Anterior Delts'
        },
        {
          name: 'Weighted Chest Dips',
          baseSets: 3,
          baseReps: '8-10',
          baseWeightKg: 20,
          baseRestSec: 90,
          targetMuscles: 'Lower Chest, Triceps'
        },
        {
          name: 'Cable Lateral Raises (Behind Back)',
          baseSets: 4,
          baseReps: '12-15',
          baseWeightKg: 12,
          baseRestSec: 60,
          targetMuscles: 'Lateral Deltoids'
        },
        {
          name: 'Overhead Cable Triceps Extensions',
          baseSets: 3,
          baseReps: '10-12',
          baseWeightKg: 25,
          baseRestSec: 75,
          targetMuscles: 'Triceps Long Head'
        }
      ]
    }
  },
  {
    id: 'zone-2-hyrox',
    title: 'Zone 2 Engine & Hyrox Prep',
    tagline: 'Build an unbreakable mitochondrial aerobic base.',
    coach: 'Elena Rostova',
    coachRole: 'Endurance Pro & Hyrox Master Coach',
    rating: 4.8,
    ratingsCount: 1930,
    level: 'Intermediate',
    duration: '12 weeks',
    frequency: '4x / week',
    price: 21.99,
    category: 'endurance',
    badge: 'NEW RELEASE',
    description: 'Developed for hybrid athletes, runners, and Hyrox competitors looking to lift heavy while keeping a razor-sharp lactate clearance rate.',
    highlights: [
      'Heart rate zone lock for 100% true Zone 2 conditioning',
      'Sled push and ergometer pacing templates',
      'AI syncs workout duration with sleep score and resting HR'
    ],
    baseWorkout: {
      name: 'Day 1: Threshold Sleds & Steady Aerobic Engine',
      exercises: [
        {
          name: 'Zone 2 Ergometer Row',
          baseSets: 1,
          baseReps: '30 mins @ 132 bpm',
          baseWeightKg: 0,
          baseRestSec: 60,
          targetMuscles: 'Aerobic Mitochondria, Posterior Chain'
        },
        {
          name: 'Sled Push (Continuous Pacing)',
          baseSets: 5,
          baseReps: '50m pacing',
          baseWeightKg: 110,
          baseRestSec: 90,
          targetMuscles: 'Quads, Calves, Cardiovascular'
        },
        {
          name: 'Farmer Walk Grip Carries',
          baseSets: 4,
          baseReps: '60s hold',
          baseWeightKg: 32,
          baseRestSec: 90,
          targetMuscles: 'Forearms, Traps, Core'
        }
      ]
    }
  },
  {
    id: 'functional-recomp',
    title: 'Functional Recomp & Core Engine',
    tagline: 'Drop body fat, bulletproof your joints, build athleticism.',
    coach: 'Marcus Vance',
    coachRole: 'Strength & Conditioning Specialist',
    rating: 4.9,
    ratingsCount: 3450,
    level: 'Beginner',
    duration: '6 weeks',
    frequency: '3x / week',
    price: 18.99,
    category: 'recomp',
    description: 'Designed for rapid body composition changes. Pairs compound strength movements with anti-rotational core work and high-output density.',
    highlights: [
      'Joint-friendly progression suitable for any body mass',
      'Anti-rotational core stabilization',
      'AI automatically dials reps based on daily carb availability'
    ],
    baseWorkout: {
      name: 'Day 1: Total Body Power & Core Stability',
      exercises: [
        {
          name: 'Kettlebell Goblet Squat',
          baseSets: 4,
          baseReps: '10-12',
          baseWeightKg: 32,
          baseRestSec: 90,
          targetMuscles: 'Quads, Core, Glutes'
        },
        {
          name: 'Neutral Grip Pull-Up / Lat Pulldown',
          baseSets: 3,
          baseReps: '8-10',
          baseWeightKg: 0,
          baseRestSec: 90,
          targetMuscles: 'Latissimus Dorsi, Biceps'
        },
        {
          name: 'Pallof Press Core Hold',
          baseSets: 3,
          baseReps: '30s hold / side',
          baseWeightKg: 15,
          baseRestSec: 60,
          targetMuscles: 'Transverse Abdominis, Obliques'
        }
      ]
    }
  }
];

export const TrainingStoreSection: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  // Selected Program
  const [selectedProgram, setSelectedProgram] = useState<TrainingProgram>(STORE_PROGRAMS[0]);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  // User's Current State of Body & Macros (The Inputs)
  const [bodyWeightKg, setBodyWeightKg] = useState<number>(100); // 100 kg to match user screenshot
  const [calorieState, setCalorieState] = useState<'deficit' | 'maintenance' | 'surplus'>('deficit');
  const [proteinIntake, setProteinIntake] = useState<'high' | 'moderate' | 'low'>('high'); // e.g. 180g
  const [carbsIntake, setCarbsIntake] = useState<'high' | 'moderate' | 'low'>('low'); // e.g. 6g eaten in user screenshot
  const [recoveryState, setRecoveryState] = useState<'rested' | 'normal' | 'fatigued'>('normal');
  const [isAiProcessing, setIsAiProcessing] = useState<boolean>(false);
  const [purchasedPrograms, setPurchasedPrograms] = useState<string[]>([]);
  const [purchaseModalOpen, setPurchaseModalOpen] = useState<boolean>(false);

  // Filtered Programs
  const filteredPrograms = useMemo(() => {
    if (activeCategory === 'all') return STORE_PROGRAMS;
    return STORE_PROGRAMS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  // AI-Adjusted Workout Computation based on Body State & Macros
  const aiAdjustedWorkout = useMemo(() => {
    const base = selectedProgram.baseWorkout;
    
    // Weight leverage multiplier (relative to 75kg standard)
    const weightMultiplier = bodyWeightKg / 75;

    // Macro adjustment logic:
    // If in deficit with low carbs: reduce eccentric volume (fewer reps, lower sets) but maintain intensity to preserve muscle
    // If in surplus with high protein: increase working load & add progressive volume
    let volumeNote = '';
    let loadMultiplier = 1.0;
    let restDeltaSec = 0;

    if (calorieState === 'deficit') {
      if (carbsIntake === 'low') {
        volumeNote = 'Calorie deficit (-500 kcal) & low carbs (6g): Reduced volume by 20% to prevent glycogen depletion and cortisol surge. Kept load high (RPE 8.5) to preserve muscle mass.';
        loadMultiplier = 1.05 * (weightMultiplier * 0.9);
        restDeltaSec = +30; // Longer rest for ATP-CP recovery
      } else {
        volumeNote = 'Moderate deficit: Volume stabilized with focused concentric power and strict 90s rest periods.';
        loadMultiplier = 1.02 * (weightMultiplier * 0.95);
        restDeltaSec = +15;
      }
    } else if (calorieState === 'surplus') {
      volumeNote = 'Caloric surplus (+400 kcal) & high protein (180g+): Maximum muscle protein synthesis. Added progressive overload (+2.5 kg) and high-threshold volume.';
      loadMultiplier = 1.12 * weightMultiplier;
      restDeltaSec = 0;
    } else {
      volumeNote = 'Caloric maintenance: Hypertrophy baseline. Balanced tension with steady progressive overload.';
      loadMultiplier = 1.05 * weightMultiplier;
      restDeltaSec = 0;
    }

    if (recoveryState === 'fatigued') {
      volumeNote += ' [Fatigue Alert: HRV is low — capped working sets to prevent CNS burnout].';
      restDeltaSec += 20;
    }

    const adjustedExercises = base.exercises.map((ex) => {
      let finalSets = ex.baseSets;
      let finalReps = ex.baseReps;
      
      // Calculate adjusted weight rounded to nearest 2.5 kg
      let adjustedWeight = Math.round((ex.baseWeightKg * loadMultiplier) / 2.5) * 2.5;
      if (ex.baseWeightKg === 0) adjustedWeight = 0; // bodyweight

      if (calorieState === 'deficit' && carbsIntake === 'low' && finalSets > 3) {
        finalSets = Math.max(3, finalSets - 1);
      }

      if (recoveryState === 'fatigued' && finalSets > 3) {
        finalSets = 3;
      }

      const finalRest = Math.max(60, ex.baseRestSec + restDeltaSec);

      return {
        name: ex.name,
        targetMuscles: ex.targetMuscles,
        originalWeight: ex.baseWeightKg,
        adjustedWeight,
        originalSets: ex.baseSets,
        adjustedSets: finalSets,
        originalReps: ex.baseReps,
        adjustedReps: finalReps,
        originalRest: ex.baseRestSec,
        adjustedRest: finalRest,
        adjustmentReason: adjustedWeight > ex.baseWeightKg 
          ? `+${adjustedWeight - ex.baseWeightKg}kg leverage for ${bodyWeightKg}kg bodyweight` 
          : 'Optimized for current metabolic state'
      };
    });

    return {
      workoutName: base.name,
      volumeNote,
      exercises: adjustedExercises
    };
  }, [selectedProgram, bodyWeightKg, calorieState, proteinIntake, carbsIntake, recoveryState]);

  // Simulate re-running AI adjustment
  const handleTriggerAiAdjustment = () => {
    setIsAiProcessing(true);
    setTimeout(() => {
      setIsAiProcessing(false);
    }, 450);
  };

  const handleBuyProgram = (program: TrainingProgram) => {
    setSelectedProgram(program);
    setPurchaseModalOpen(true);
  };

  const handleConfirmPurchase = () => {
    if (!purchasedPrograms.includes(selectedProgram.id)) {
      setPurchasedPrograms([...purchasedPrograms, selectedProgram.id]);
    }
    setPurchaseModalOpen(false);
  };

  return (
    <section id="training-store" className={`relative py-24 border-t transition-colors duration-300 ${
      isLight ? 'bg-[#f8fafc] border-slate-200' : 'bg-[#090b12] border-neutral-800/80'
    }`}>
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-blue-600/10 via-cyan-500/10 to-indigo-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-500 text-xs font-mono font-bold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>QLA.FIT TRAINING STORE · AI BIO-ADAPTIVE ENGINE</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display mb-4 ${
            isLight ? 'text-slate-900' : 'text-white'
          }`}>
            The Training Store.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400">
              Adapted with AI to Your Body & Macros.
            </span>
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${isLight ? 'text-slate-600' : 'text-neutral-400'}`}>
            Buy battle-tested programs crafted by world-class coaches. Then watch qla.fit's AI engine automatically calibrate every set, rep, weight load, and rest interval to your live macros, body mass, and recovery score.
          </p>
        </div>

        {/* ======================================================== */}
        {/* PART 1: THE STORE SCREEN INTERFACE & CATALOG             */}
        {/* ======================================================== */}
        <div className="space-y-6 mb-16">
          
          {/* Store Controls Bar: Categories & Search */}
          <div className={`flex flex-col sm:flex-row items-center justify-between gap-4 p-3 rounded-2xl border backdrop-blur-xl ${
            isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-[#10121c] border-neutral-800'
          }`}>
            <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto p-1 scrollbar-none">
              {[
                { id: 'all', label: 'All Trainings' },
                { id: 'glutes', label: 'Glutes & Posterior' },
                { id: 'hypertrophy', label: 'Hypertrophy & PPL' },
                { id: 'endurance', label: 'Endurance & Hyrox' },
                { id: 'recomp', label: 'Functional Recomp' }
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-blue-600 text-white shadow-sm'
                      : isLight
                        ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                        : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
              <span className="flex items-center gap-1 text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                <ShieldCheck className="w-3.5 h-3.5" /> AI Macro-Sync Included
              </span>
            </div>
          </div>

          {/* Program Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredPrograms.map((prog) => {
              const isSelected = selectedProgram.id === prog.id;
              const isOwned = purchasedPrograms.includes(prog.id);

              return (
                <div
                  key={prog.id}
                  onClick={() => setSelectedProgram(prog)}
                  className={`relative rounded-3xl p-5 border transition-all duration-300 flex flex-col justify-between cursor-pointer group ${
                    isSelected
                      ? isLight
                        ? 'bg-white border-blue-500 shadow-xl ring-2 ring-blue-500/20'
                        : 'bg-[#131522] border-blue-500 shadow-[0_0_30px_rgba(37,99,235,0.25)] ring-1 ring-blue-500/50'
                      : isLight
                        ? 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                        : 'bg-[#10121c] border-neutral-800/90 hover:border-neutral-700'
                  }`}
                >
                  {/* Badge */}
                  {prog.badge && (
                    <div className="absolute top-4 right-4">
                      <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/30">
                        {prog.badge}
                      </span>
                    </div>
                  )}

                  <div>
                    {/* Coach & Ratings */}
                    <div className="flex items-center gap-1.5 text-xs text-neutral-400 mb-2">
                      <span className="font-semibold text-neutral-300">{prog.coach}</span>
                      <span>·</span>
                      <div className="flex items-center gap-0.5 text-amber-400 font-bold text-[11px]">
                        <Star className="w-3 h-3 fill-current" />
                        <span>{prog.rating}</span>
                      </div>
                    </div>

                    {/* Program Title */}
                    <h3 className={`text-xl font-bold tracking-tight font-display mb-1 ${
                      isLight ? 'text-slate-900' : 'text-white'
                    }`}>
                      {prog.title}
                    </h3>
                    <p className={`text-xs leading-relaxed mb-4 ${isLight ? 'text-slate-500' : 'text-neutral-400'}`}>
                      {prog.tagline}
                    </p>

                    {/* Stats Pill Strip */}
                    <div className="flex items-center gap-2 text-[11px] font-mono text-neutral-400 mb-4 pb-3 border-b border-neutral-800/60">
                      <span className="bg-neutral-800/60 px-2 py-0.5 rounded-md text-neutral-300">
                        {prog.duration}
                      </span>
                      <span className="bg-neutral-800/60 px-2 py-0.5 rounded-md text-neutral-300">
                        {prog.frequency}
                      </span>
                      <span className="text-blue-400 font-medium">
                        {prog.level}
                      </span>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-1.5 mb-5 text-[11px] text-neutral-300">
                      {prog.highlights.slice(0, 2).map((hl, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing & CTA */}
                  <div className="pt-3 border-t border-neutral-800/60 flex items-center justify-between gap-2">
                    <div>
                      <div className="text-[10px] text-neutral-500 uppercase tracking-wider font-mono">Store Price</div>
                      <div className="text-lg font-bold font-mono text-white">
                        ${prog.price}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProgram(prog);
                        }}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-blue-600 text-white shadow-sm'
                            : 'bg-neutral-800 hover:bg-neutral-700 text-neutral-200'
                        }`}
                      >
                        {isSelected ? 'Selected' : 'Select'}
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleBuyProgram(prog);
                        }}
                        className="p-1.5 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 border border-blue-500/30 cursor-pointer"
                        title="Buy training program"
                      >
                        <ShoppingBag className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* ======================================================== */}
        {/* PART 2: THE AI BIO-ADAPTIVE ENGINE STUDIO                */}
        {/* ======================================================== */}
        <div className={`p-6 sm:p-8 rounded-[36px] border shadow-2xl transition-all duration-300 ${
          isLight ? 'bg-white border-slate-200' : 'bg-[#0f111b] border-neutral-800'
        }`}>
          
          {/* Header of AI Engine */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-neutral-800/80">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-7 h-7 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Cpu className="w-4 h-4" />
                </div>
                <h3 className={`text-xl sm:text-2xl font-bold tracking-tight font-display ${
                  isLight ? 'text-slate-900' : 'text-white'
                }`}>
                  AI Bio-Adaptive Engine
                </h3>
                <span className="text-[10px] font-mono bg-blue-600/10 text-blue-400 border border-blue-500/30 px-2 py-0.5 rounded-full font-bold">
                  ACTIVE SYNC
                </span>
              </div>
              <p className={`text-xs sm:text-sm ${isLight ? 'text-slate-500' : 'text-neutral-400'}`}>
                Currently adapting: <strong className="text-blue-400">{selectedProgram.title}</strong> by {selectedProgram.coach}
              </p>
            </div>

            <button
              onClick={handleTriggerAiAdjustment}
              disabled={isAiProcessing}
              className="px-4 py-2.5 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white rounded-xl text-xs font-bold font-mono flex items-center gap-2 shadow-lg transition-all cursor-pointer self-start lg:self-center"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isAiProcessing ? 'animate-spin' : ''}`} />
              <span>{isAiProcessing ? 'Calibrating Biometrics...' : 'Re-run AI Biometric Adaptation'}</span>
            </button>
          </div>

          {/* 2-Column Studio: Left = User's State & Macros / Right = Adjusted Workout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
            
            {/* Left Column: Biometric & Macro Tuners (The Inputs) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold mb-3 flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-blue-400" />
                  <span>1. Your Body State & Macro Inputs</span>
                </h4>
                <p className="text-xs text-neutral-500 mb-4">
                  Adjust below to simulate how your training changes when you drop weight, cut carbs, or increase sleep.
                </p>
              </div>

              {/* Input 1: Body Weight Slider */}
              <div className="p-4 rounded-2xl bg-[#141624] border border-neutral-800 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-neutral-300 font-medium flex items-center gap-1.5">
                    <Scale className="w-4 h-4 text-purple-400" />
                    <span>Current Body Weight</span>
                  </span>
                  <span className="text-base font-bold font-mono text-white tabular-nums">
                    {bodyWeightKg} kg
                  </span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="130"
                  step="1"
                  value={bodyWeightKg}
                  onChange={(e) => setBodyWeightKg(Number(e.target.value))}
                  className="w-full h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-[10px] text-neutral-500 font-mono">
                  <span>50 kg</span>
                  <span>Leverage baseline: 75 kg</span>
                  <span>130 kg</span>
                </div>
              </div>

              {/* Input 2: Caloric State & Energy Balance */}
              <div className="p-4 rounded-2xl bg-[#141624] border border-neutral-800 space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-neutral-300 font-medium flex items-center gap-1.5">
                    <Flame className="w-4 h-4 text-rose-500" />
                    <span>Today's Caloric Balance</span>
                  </span>
                  <span className={`text-[11px] font-mono font-bold ${
                    calorieState === 'deficit' ? 'text-rose-400' : calorieState === 'surplus' ? 'text-emerald-400' : 'text-blue-400'
                  }`}>
                    {calorieState === 'deficit' ? 'Deficit (-500 kcal)' : calorieState === 'surplus' ? 'Surplus (+400 kcal)' : 'Maintenance'}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-1.5 p-1 bg-neutral-900 rounded-xl">
                  {[
                    { id: 'deficit', label: 'Deficit (-500)' },
                    { id: 'maintenance', label: 'Maintain' },
                    { id: 'surplus', label: 'Surplus (+400)' }
                  ].map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setCalorieState(s.id as any)}
                      className={`py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                        calorieState === s.id
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input 3: Macros (Protein & Carbs Availability) */}
              <div className="grid grid-cols-2 gap-3">
                {/* Protein */}
                <div className="p-3.5 rounded-2xl bg-[#141624] border border-neutral-800 space-y-2">
                  <div className="text-xs text-neutral-300 font-medium flex items-center gap-1.5">
                    <Utensils className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Protein Level</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    {[
                      { id: 'high', label: 'High (180g+)' },
                      { id: 'moderate', label: 'Optimal (130g)' },
                      { id: 'low', label: 'Low (<80g)' }
                    ].map((p) => (
                      <button
                        key={p.id}
                        onClick={() => setProteinIntake(p.id as any)}
                        className={`py-1 px-2 text-[11px] font-medium rounded-lg text-left transition-all cursor-pointer ${
                          proteinIntake === p.id
                            ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold'
                            : 'text-neutral-400 hover:text-neutral-200'
                        }`}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Carbs */}
                <div className="p-3.5 rounded-2xl bg-[#141624] border border-neutral-800 space-y-2">
                  <div className="text-xs text-neutral-300 font-medium flex items-center gap-1.5">
                    <Droplets className="w-3.5 h-3.5 text-purple-400" />
                    <span>Carbs / Glycogen</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    {[
                      { id: 'high', label: 'High (250g+)' },
                      { id: 'moderate', label: 'Mod (120g)' },
                      { id: 'low', label: 'Low (6g Fasted)' }
                    ].map((c) => (
                      <button
                        key={c.id}
                        onClick={() => setCarbsIntake(c.id as any)}
                        className={`py-1 px-2 text-[11px] font-medium rounded-lg text-left transition-all cursor-pointer ${
                          carbsIntake === c.id
                            ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40 font-bold'
                            : 'text-neutral-400 hover:text-neutral-200'
                        }`}
                      >
                        {c.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Input 4: Recovery & Sleep State */}
              <div className="p-4 rounded-2xl bg-[#141624] border border-neutral-800 space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-neutral-300 font-medium flex items-center gap-1.5">
                    <Moon className="w-4 h-4 text-indigo-400" />
                    <span>HRV & Sleep Score</span>
                  </span>
                  <span className={`text-[11px] font-mono font-bold ${
                    recoveryState === 'rested' ? 'text-emerald-400' : recoveryState === 'fatigued' ? 'text-amber-400' : 'text-blue-400'
                  }`}>
                    {recoveryState === 'rested' ? '8.4h (HRV 72ms)' : recoveryState === 'fatigued' ? '5.2h (HRV 31ms)' : '7.1h (HRV 54ms)'}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-1.5 p-1 bg-neutral-900 rounded-xl">
                  {[
                    { id: 'rested', label: 'Rested' },
                    { id: 'normal', label: 'Normal' },
                    { id: 'fatigued', label: 'Fatigued' }
                  ].map((r) => (
                    <button
                      key={r.id}
                      onClick={() => setRecoveryState(r.id as any)}
                      className={`py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                        recoveryState === r.id
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      {r.label}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: The AI Adjusted Workout (The Output) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                  <span>2. Live AI Adapted Prescription</span>
                </h4>
                <span className="text-xs text-blue-400 font-mono font-semibold">
                  Today's Session
                </span>
              </div>

              {/* AI Strategic Rationale Callout Card */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-600/15 via-cyan-500/10 to-transparent border border-blue-500/30 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-400 font-mono">
                  <Zap className="w-4 h-4 fill-current" />
                  <span>AI BIOMETRIC REASONING</span>
                </div>
                <p className="text-xs text-neutral-200 leading-relaxed">
                  {aiAdjustedWorkout.volumeNote}
                </p>
              </div>

              {/* The Live Exercise List with AI Modifications */}
              <div className="space-y-3">
                {aiAdjustedWorkout.exercises.map((ex, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-2xl bg-[#141624] border border-neutral-800 hover:border-neutral-700 transition-all space-y-2.5"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-blue-600/20 text-blue-400 text-xs font-mono font-bold flex items-center justify-center">
                            {idx + 1}
                          </span>
                          <h5 className="text-sm font-bold text-white">
                            {ex.name}
                          </h5>
                        </div>
                        <div className="text-[11px] text-neutral-400 mt-0.5 ml-7">
                          Target: {ex.targetMuscles}
                        </div>
                      </div>

                      {/* AI Delta Badge */}
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-full font-semibold shrink-0">
                        {ex.adjustmentReason}
                      </span>
                    </div>

                    {/* Before vs After Comparison Row */}
                    <div className="grid grid-cols-3 gap-2 pt-2 border-t border-neutral-800/80 text-center text-xs">
                      {/* Sets & Reps */}
                      <div className="p-2 rounded-xl bg-neutral-900/80">
                        <div className="text-[10px] text-neutral-500 font-mono uppercase">Sets × Reps</div>
                        <div className="font-mono font-bold text-white mt-0.5">
                          {ex.adjustedSets} × {ex.adjustedReps}
                        </div>
                        {ex.originalSets !== ex.adjustedSets && (
                          <div className="text-[9px] text-amber-400 font-mono">
                            Base: {ex.originalSets} sets
                          </div>
                        )}
                      </div>

                      {/* Weight Load */}
                      <div className="p-2 rounded-xl bg-neutral-900/80">
                        <div className="text-[10px] text-neutral-500 font-mono uppercase">Working Load</div>
                        <div className="font-mono font-bold text-cyan-400 mt-0.5">
                          {ex.adjustedWeight > 0 ? `${ex.adjustedWeight} kg` : 'Bodyweight'}
                        </div>
                        {ex.originalWeight !== ex.adjustedWeight && ex.originalWeight > 0 && (
                          <div className="text-[9px] text-neutral-400 font-mono line-through">
                            Base: {ex.originalWeight} kg
                          </div>
                        )}
                      </div>

                      {/* Rest Interval */}
                      <div className="p-2 rounded-xl bg-neutral-900/80">
                        <div className="text-[10px] text-neutral-500 font-mono uppercase">Rest Interval</div>
                        <div className="font-mono font-bold text-white mt-0.5">
                          {ex.adjustedRest}s
                        </div>
                        {ex.originalRest !== ex.adjustedRest && (
                          <div className="text-[9px] text-blue-400 font-mono">
                            +{ex.adjustedRest - ex.originalRest}s for ATP
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Action Strip */}
              <div className="p-4 rounded-2xl bg-[#141624] border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs text-neutral-300">
                  <span>Ready to train? Push this AI-calibrated routine to your </span>
                  <strong className="text-white">Apple Watch & HealthKit</strong>.
                </div>
                <button
                  onClick={() => handleBuyProgram(selectedProgram)}
                  className="w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold font-mono flex items-center justify-center gap-1.5 shadow-lg shadow-blue-600/30 transition-all cursor-pointer whitespace-nowrap"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Buy & Sync Training (${selectedProgram.price})</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Purchase & Activation Modal */}
      <AnimatePresence>
        {purchaseModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-md p-6 rounded-3xl bg-[#12141f] border border-neutral-800 shadow-2xl space-y-5 text-white"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center mx-auto">
                <Dumbbell className="w-6 h-6" />
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold font-display">{selectedProgram.title}</h3>
                <p className="text-xs text-neutral-400 mt-1">By {selectedProgram.coach} · {selectedProgram.duration}</p>
                <div className="text-2xl font-bold font-mono text-blue-400 mt-2">${selectedProgram.price}</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-neutral-900 border border-neutral-800 text-xs space-y-2">
                <div className="flex items-center gap-2 text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Full {selectedProgram.duration} progressive overload schedule</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Real-time AI Bio-Adaptive sync with Apple Health macros</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Instant Apple Watch complication & offline haptic logging</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setPurchaseModalOpen(false)}
                  className="flex-1 py-3 text-xs font-semibold rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirmPurchase}
                  className="flex-1 py-3 text-xs font-bold rounded-xl bg-blue-600 hover:bg-blue-500 text-white shadow-lg transition-colors cursor-pointer"
                >
                  Confirm & Sync
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
