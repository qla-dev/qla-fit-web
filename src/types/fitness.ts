export type ScreenPreset = 
  | 'tracker'     // IMG_6389: Nutrition arc gauge, macros, habits, free QR button
  | 'scanner'     // Free QR / barcode scanner interface
  | 'goals'       // IMG_6390: Step average bar chart, weight, free goal selection
  | 'programs'    // IMG_6391 & 6392: Store workout programs (Glutes for Days, etc.)
  | 'activity'    // Apple Activity rings
  | 'heart'       // Cardio & Vitals
  | 'workout'     // Outdoor run & workout splits
  | 'crossfit'    // High-intensity CrossFit WOD & AMRAP tracking
  | 'sleep'       // Sleep architecture
  | 'wireframe';  // Custom upload slot

export type ThemeMode = 'dark' | 'light';

export interface NutritionMetrics {
  caloriesTarget: number;
  caloriesEaten: number;
  caloriesBurned: number;
  carbsCurrent: number;
  carbsTarget: number;
  proteinCurrent: number;
  proteinTarget: number;
  fatCurrent: number;
  fatTarget: number;
  transFatG: number;
  cholesterolMg: number;
  weightKg: number;
  waterMl: number;
  waterTargetMl: number;
  wakeUpTime: string;
  bedTime: string;
}

export interface FitnessMetrics {
  moveCurrent: number;
  moveTarget: number;
  exerciseCurrent: number;
  exerciseTarget: number;
  standCurrent: number;
  standTarget: number;
  steps: number;
  distanceKm: number;
  heartRateCurrent: number;
  hrvMs: number;
  activeBurnKcal: number;
  sleepHours: number;
  vo2Max: number;
}

export interface ScannedFood {
  id: string;
  name: string;
  brand: string;
  serving: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  cholesterol: number;
  transFat: number;
  barcode: string;
}

export interface WidgetPreset {
  id: string;
  name: string;
  size: 'small' | 'medium' | 'large' | 'lockscreen';
  category: 'rings' | 'heart' | 'workout' | 'recovery';
  title: string;
  subtitle: string;
  previewType: 'rings' | 'graph' | 'gauge' | 'splits';
}

export interface FAQItem {
  question: string;
  answer: string;
}
