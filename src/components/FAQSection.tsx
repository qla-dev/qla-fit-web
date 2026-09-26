import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import type { FAQItem } from '../types/fitness';
import { useTheme } from '../context/ThemeContext';

export const FAQSection: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'Is the food barcode scanner and macro tracking really 100% free?',
      answer:
        'Yes! Our motto is "Track all for free". Unlike competitor apps that lock barcode scanning and custom macro targets behind $80/year subscriptions, qla.fit provides an unlimited food QR and barcode scanner, 5 dedicated macro rings, and custom goal selection completely free without paywalls.',
    },
    {
      question: 'What nutrients and micronutrients does qla.fit track?',
      answer:
        'qla.fit tracks total calories, carbohydrates, lean protein, healthy fats, dietary trans fats, cholesterol, sodium, and fiber. All are visualized through interactive color-coded rings with remaining budget countdowns so you always know your exact metabolic state.',
    },
    {
      question: 'Does qla.fit require creating an account or email signup?',
      answer:
        'No. qla.fit operates completely offline and on-device. When you install the app, it requests permission to read Apple HealthKit locally. There are no remote servers, no databases, and no cloud logins required.',
    },
    {
      question: 'How do the iOS 18 Home Screen and Lock Screen widgets update?',
      answer:
        'qla.fit takes advantage of Apple HealthKit background observers. As soon as your Apple Watch or phone registers new steps, heart rate readings, or closes an activity ring, iOS schedules a widget refresh without waking unnecessary background threads.',
    },
    {
      question: 'Can I test my own screenshots inside the mobile and watch placeholders?',
      answer:
        'Yes! At the top of this page in the Live Devices section, click "Screen Slot / Upload" or the wireframe preset. You can upload any PNG/JPG screenshot to see exactly how your own designs look inside our realistic iPhone 16 Pro and Apple Watch Ultra frames in both dark titanium and white ceramic.',
    },
    {
      question: 'Does qla.fit work with third-party trackers like Garmin, Oura Ring, or Whoop?',
      answer:
        'Yes, as long as those devices sync their workout and vital data into Apple Health (which Garmin Connect, Oura, and Whoop all support natively). qla.fit reads all verified HealthKit records seamlessly.',
    },
    {
      question: 'Can I track my daily calorie deficit and metabolic pacing?',
      answer:
        'Yes! qla.fit automatically calculates your Basal Metabolic Rate (BMR) from your Apple Health profile and combines it with active energy burned and dietary energy recorded to show an accurate, real-time calorie balance.',
    },
    {
      question: 'Does the Apple Watch app work without my iPhone nearby?',
      answer:
        'Absolutely. The watchOS companion is a fully standalone application. You can go for an outdoor trail run, track GPS splits, monitor heart rate zones with haptic pulses, and when you return home, your workouts seamlessly sync into your primary dashboard.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={`relative py-24 border-t transition-colors duration-300 ${
      isLight ? 'bg-slate-100/60 border-slate-200' : 'bg-neutral-950 border-neutral-900'
    }`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className={`text-xs font-mono font-medium uppercase tracking-widest mb-2 ${
            isLight ? 'text-cyan-700' : 'text-cyan-400'
          }`}>
            Frequently Asked Questions
          </div>
          <h2 className={`text-3xl sm:text-4xl font-bold font-display tracking-tight ${
            isLight ? 'text-slate-900' : 'text-white'
          }`}>
            Everything you need to know about qla.fit.
          </h2>
          <p className={`mt-3 text-sm sm:text-base ${
            isLight ? 'text-slate-600' : 'text-neutral-400'
          }`}>
            Clear answers about HealthKit integration, widget performance, and device compatibility.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border overflow-hidden transition-colors ${
                  isLight
                    ? 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                    : 'bg-[#0f1118] border-neutral-800/80 hover:border-neutral-700'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className={`text-base font-semibold pr-4 ${isLight ? 'text-slate-900' : 'text-white'}`}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-rose-500' : isLight ? 'text-slate-400' : 'text-neutral-400'
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className={`px-6 pb-6 pt-1 text-sm leading-relaxed border-t ${
                        isLight ? 'text-slate-600 border-slate-100' : 'text-neutral-400 border-neutral-900'
                      }`}>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
