import React from 'react';
import { Star } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Testimonials: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const testimonials = [
    {
      name: 'Marcus Vance',
      role: 'Sub-3:00 Marathoner & Data Architect',
      city: 'Portland, OR',
      quote:
        'Apple Health has all the data locked inside nested submenus. qla.fit surfaces my weekly mileage, pace-to-heart-rate decoupling, and resting HR trend right onto my lock screen widget. I shaved 4 minutes off my marathon split by pacing properly in Zone 2.',
      rating: 5,
      metric: '-4 min marathon PR',
    },
    {
      name: 'Dr. Elena Rostova',
      role: 'Sports Cardiologist',
      city: 'Zurich',
      quote:
        'I recommend qla.fit to patients who need to monitor heart rate recovery and HRV trends. The visual clarity of the hypnogram and resting cardiac dip is unmatched, and the fact that 0% of patient data leaves their local device is critical for health compliance.',
      rating: 5,
      metric: '0 cloud data leaks',
    },
    {
      name: 'Tariq Al-Mansoor',
      role: 'CrossFit Athlete & Triathlete',
      city: 'Dubai',
      quote:
        'The standalone Apple Watch Ultra complications are what sold me. During open water swims and track intervals, I can glance at my split times and active energy burn without fumbling with an iPhone.',
      rating: 5,
      metric: '18,000 active calories/wk',
    },
  ];

  return (
    <section className={`relative py-24 border-t transition-colors duration-300 ${
      isLight ? 'bg-white border-slate-200' : 'bg-[#090a0f] border-neutral-800/80'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`text-xs font-mono font-medium uppercase tracking-widest mb-2 ${
            isLight ? 'text-amber-600' : 'text-amber-400'
          }`}>
            Verified Athlete Proof
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight ${
            isLight ? 'text-slate-900' : 'text-white'
          }`}>
            Trusted by athletes who care about the numbers.
          </h2>
          <p className={`mt-4 text-sm sm:text-base leading-relaxed ${
            isLight ? 'text-slate-600' : 'text-neutral-400'
          }`}>
            Over 12,000 athletes use qla.fit to bridge the gap between raw biometrics and peak performance.
          </p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className={`p-7 rounded-[30px] border flex flex-col justify-between shadow-xl transition-all group ${
                isLight ? 'bg-slate-50 border-slate-200 hover:border-slate-300' : 'bg-neutral-900/80 border-neutral-800 hover:border-neutral-700'
              }`}
            >
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className={`ml-2 font-mono text-xs ${isLight ? 'text-slate-500' : 'text-neutral-400'}`}>
                    Verified App Store Review
                  </span>
                </div>

                <p className={`text-sm leading-relaxed italic mb-6 ${isLight ? 'text-slate-700' : 'text-neutral-300'}`}>
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className={`pt-4 border-t ${isLight ? 'border-slate-200' : 'border-neutral-800'}`}>
                <div className={`font-semibold text-sm ${isLight ? 'text-slate-900' : 'text-white'}`}>
                  {item.name}
                </div>
                <div className={`text-xs mt-0.5 ${isLight ? 'text-slate-500' : 'text-neutral-400'}`}>
                  {item.role}
                </div>
                <div className={`flex items-center gap-2 text-[11px] font-mono mt-1 ${isLight ? 'text-slate-500' : 'text-neutral-500'}`}>
                  <span>{item.city}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-emerald-600 font-bold">{item.metric}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
