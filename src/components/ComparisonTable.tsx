import React from 'react';
import { Check, X, ShieldCheck, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ComparisonTable: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const comparisons = [
    {
      feature: 'Food Barcode & QR Scanner',
      qla: '100% Free & Unlimited',
      mfp: 'Locked ($79.99/yr)',
      loseit: 'Locked ($39.99/yr)',
      cronometer: 'Limited / Gold ($54.99/yr)',
      isHighlight: true,
    },
    {
      feature: 'Full Nutrients & Micronutrients',
      qla: 'Trans Fat, Cholest., Fiber Free',
      mfp: 'Micros Paywalled',
      loseit: 'Only basic 3 macros',
      cronometer: 'Reports locked behind Gold',
      isHighlight: true,
    },
    {
      feature: 'Custom Gram & % Macro Goals',
      qla: 'Free (Gram/Pct/Deficit)',
      mfp: 'Pre-set only (Pay $9.99/mo)',
      loseit: 'Custom split paywalled',
      cronometer: 'Custom ratios paywalled',
      isHighlight: true,
    },
    {
      feature: 'AI Macro & Body State Adaptation',
      qla: 'Bio-Adaptive workout sync',
      mfp: 'None (Basic calorie bank)',
      loseit: 'None',
      cronometer: 'None',
      isHighlight: true,
    },
    {
      feature: 'Habit Tracking (Water, Weight, Sleep)',
      qla: 'All 4 Habits Included Free',
      mfp: 'Fragmented / Limited',
      loseit: 'Water/habits require Premium',
      cronometer: 'Basic biometrics only',
      isHighlight: false,
    },
    {
      feature: 'Interactive iOS 18 Widgets',
      qla: '30+ Interactive Home/Lock widgets',
      mfp: 'Basic square widget only',
      loseit: 'Limited without Premium',
      cronometer: 'Minimal widgets',
      isHighlight: false,
    },
    {
      feature: 'Data Privacy & In-App Ads',
      qla: '100% Ad-Free, On-Device',
      mfp: 'Fullscreen pop-up ads',
      loseit: 'Video & banner ads',
      cronometer: 'Banner ads on free tier',
      isHighlight: false,
    },
    {
      feature: 'Annual Subscription Cost',
      qla: '$0.00 / year (Free Forever)',
      mfp: '$79.99 – $119.99 / yr',
      loseit: '$39.99 – $59.99 / yr',
      cronometer: '$54.99 / yr',
      isHighlight: true,
    },
  ];

  return (
    <section id="compare" className={`relative py-24 border-t transition-colors duration-300 ${
      isLight ? 'bg-slate-50 border-slate-200' : 'bg-neutral-950 border-neutral-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase mb-3 bg-blue-500/10 border border-blue-500/25 text-blue-500">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OUR MOTTO: TRACK ALL FOR FREE</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight ${
            isLight ? 'text-slate-900' : 'text-white'
          }`}>
            Why pay $80/year to scan an avocado?
          </h2>
          <p className={`mt-4 text-sm sm:text-base leading-relaxed ${
            isLight ? 'text-slate-600' : 'text-neutral-400'
          }`}>
            See how qla.fit compares directly against the top 3 most popular nutrition and fitness apps: <strong>MyFitnessPal</strong>, <strong>Lose It!</strong>, and <strong>Cronometer</strong>.
          </p>
        </div>

        {/* Comparison Table Container */}
        <div className="max-w-5xl mx-auto overflow-x-auto rounded-3xl border shadow-xl transition-colors backdrop-blur-xl">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className={`border-b text-xs font-mono ${
                isLight ? 'bg-white border-slate-200 text-slate-600' : 'bg-[#10121c] border-neutral-800 text-neutral-400'
              }`}>
                <th className="py-4 px-4 w-1/4">CAPABILITY</th>
                
                {/* qla.fit (Champion Column) */}
                <th className={`py-4 px-4 w-1/4 font-bold border-x ${
                  isLight ? 'text-blue-700 bg-blue-500/10 border-blue-200' : 'text-blue-400 bg-blue-500/15 border-blue-500/30'
                }`}>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm">qla.fit</span>
                    <span className="text-[10px] bg-blue-600 text-white px-2 py-0.5 rounded-full font-sans font-bold">FREE</span>
                  </div>
                </th>

                {/* Competitor 1: MyFitnessPal */}
                <th className={`py-4 px-4 w-1/6 font-semibold ${isLight ? 'text-slate-700' : 'text-neutral-300'}`}>
                  <div>MyFitnessPal</div>
                  <div className="text-[10px] font-normal text-rose-500 font-mono">$79.99/yr</div>
                </th>

                {/* Competitor 2: Lose It! */}
                <th className={`py-4 px-4 w-1/6 font-semibold ${isLight ? 'text-slate-700' : 'text-neutral-300'}`}>
                  <div>Lose It!</div>
                  <div className="text-[10px] font-normal text-rose-500 font-mono">$39.99/yr</div>
                </th>

                {/* Competitor 3: Cronometer */}
                <th className={`py-4 px-4 w-1/6 font-semibold ${isLight ? 'text-slate-700' : 'text-neutral-300'}`}>
                  <div>Cronometer</div>
                  <div className="text-[10px] font-normal text-rose-500 font-mono">$54.99/yr</div>
                </th>
              </tr>
            </thead>
            <tbody className={`divide-y text-xs sm:text-sm ${
              isLight ? 'divide-slate-200 bg-white' : 'divide-neutral-800/80 bg-[#0d0f17]'
            }`}>
              {comparisons.map((row, idx) => (
                <tr key={idx} className={`transition-colors ${
                  row.isHighlight
                    ? isLight ? 'bg-blue-50/40' : 'bg-blue-950/15'
                    : isLight ? 'hover:bg-slate-50' : 'hover:bg-neutral-900/40'
                }`}>
                  {/* Feature Name */}
                  <td className={`py-4 px-4 font-semibold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                    {row.feature}
                  </td>

                  {/* qla.fit (Champion Cell) */}
                  <td className={`py-4 px-4 font-bold border-x ${
                    isLight 
                      ? 'bg-blue-500/10 text-blue-900 border-blue-200' 
                      : 'bg-blue-500/15 text-blue-300 border-blue-500/30'
                  }`}>
                    <div className="flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{row.qla}</span>
                    </div>
                  </td>

                  {/* MyFitnessPal Cell */}
                  <td className={`py-4 px-4 ${isLight ? 'text-slate-600' : 'text-neutral-400'}`}>
                    <div className="flex items-center gap-1.5">
                      <X className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                      <span>{row.mfp}</span>
                    </div>
                  </td>

                  {/* Lose It! Cell */}
                  <td className={`py-4 px-4 ${isLight ? 'text-slate-600' : 'text-neutral-400'}`}>
                    <div className="flex items-center gap-1.5">
                      <X className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                      <span>{row.loseit}</span>
                    </div>
                  </td>

                  {/* Cronometer Cell */}
                  <td className={`py-4 px-4 ${isLight ? 'text-slate-600' : 'text-neutral-400'}`}>
                    <div className="flex items-center gap-1.5">
                      <X className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                      <span>{row.cronometer}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Motto Callout Banner */}
        <div className={`mt-10 p-5 rounded-2xl border max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left ${
          isLight 
            ? 'bg-white border-slate-200 text-slate-800 shadow-md' 
            : 'bg-neutral-900 border-neutral-800 text-neutral-200'
        }`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/15 text-blue-500 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-sm">Our Motto: Track All For Free</div>
              <div className={`text-xs ${isLight ? 'text-slate-500' : 'text-neutral-400'}`}>
                Free barcode scanner, free complete nutrients, free custom goals, and free Apple Health integration. Zero paywalls.
              </div>
            </div>
          </div>
          <a
            href="#download"
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl transition-all whitespace-nowrap cursor-pointer shadow-md"
          >
            Start Tracking Free
          </a>
        </div>

      </div>
    </section>
  );
};
