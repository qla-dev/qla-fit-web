import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Mail } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'qr' | 'download' | 'beta';
}

export const DownloadModal: React.FC<DownloadModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'download',
}) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const [tab, setTab] = useState<'qr' | 'download' | 'beta'>(initialTab);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleBetaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please provide a valid athlete email.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className={`relative w-full max-w-lg border rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden transition-colors ${
          isLight ? 'bg-white border-slate-200 text-slate-900' : 'bg-[#0e1017] border-neutral-800 text-white'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-5 right-5 p-2 rounded-full transition-colors cursor-pointer ${
            isLight ? 'text-slate-400 hover:text-slate-800 hover:bg-slate-100' : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
          }`}
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-500 flex items-center justify-center mb-3">
            <span className="font-display font-black text-xl">QL</span>
          </div>
          <h3 className={`text-2xl font-bold font-display ${isLight ? 'text-slate-900' : 'text-white'}`}>Get qla.fit</h3>
          <p className={`text-xs mt-1 ${isLight ? 'text-slate-500' : 'text-neutral-400'}`}>
            Available for iPhone (iOS 17+) and Apple Watch (watchOS 10+)
          </p>
        </div>

        {/* Tabs */}
        <div className={`flex rounded-xl p-1 mb-6 border ${isLight ? 'bg-slate-100 border-slate-200' : 'bg-neutral-900 border-neutral-800'}`}>
          <button
            onClick={() => setTab('download')}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              tab === 'download' ? 'bg-blue-600 text-white shadow-sm' : isLight ? 'text-slate-600 hover:text-slate-900' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Direct Links
          </button>
          <button
            onClick={() => setTab('qr')}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              tab === 'qr' ? 'bg-blue-600 text-white shadow-sm' : isLight ? 'text-slate-600 hover:text-slate-900' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Scan QR Code
          </button>
          <button
            onClick={() => setTab('beta')}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              tab === 'beta' ? 'bg-blue-600 text-white shadow-sm' : isLight ? 'text-slate-600 hover:text-slate-900' : 'text-neutral-400 hover:text-white'
            }`}
          >
            TestFlight Beta
          </button>
        </div>

        {/* Tab 1: Direct Download */}
        {tab === 'download' && (
          <div className="space-y-3">
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noreferrer"
              className={`flex items-center justify-between p-4 rounded-2xl border transition-all group ${
                isLight
                  ? 'bg-slate-50 border-slate-200 hover:border-blue-500/50 hover:bg-slate-100'
                  : 'bg-neutral-900 border-neutral-800 hover:border-blue-500/50 hover:bg-neutral-800/80'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  isLight ? 'bg-black text-white' : 'bg-white text-black'
                }`}>
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.42c.67-.82 1.13-1.95.99-3.09-1 .04-2.16.67-2.84 1.47-.6.69-1.12 1.83-.98 2.94 1.11.09 2.19-.57 2.83-1.32z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className={`text-sm font-semibold ${isLight ? 'text-slate-900' : 'text-white'}`}>Apple App Store</div>
                  <div className={`text-xs ${isLight ? 'text-slate-500' : 'text-neutral-400'}`}>Download for iOS & watchOS</div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
            </a>

            <div className={`p-3.5 rounded-2xl border text-xs flex items-center gap-2 ${
              isLight ? 'bg-slate-50 border-slate-200 text-slate-600' : 'bg-neutral-900/60 border-neutral-800 text-neutral-400'
            }`}>
              <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Free download with fully customizable core dashboard and free widgets.</span>
            </div>
          </div>
        )}

        {/* Tab 2: Scan QR */}
        {tab === 'qr' && (
          <div className="text-center py-2 space-y-4">
            <div className="p-5 bg-white rounded-3xl inline-block shadow-2xl mx-auto border border-slate-200">
              <svg className="w-44 h-44" viewBox="0 0 100 100" fill="black">
                <rect x="5" y="5" width="25" height="25" fill="black" rx="3" />
                <rect x="9" y="9" width="17" height="17" fill="white" rx="2" />
                <rect x="13" y="13" width="9" height="9" fill="black" />

                <rect x="70" y="5" width="25" height="25" fill="black" rx="3" />
                <rect x="74" y="9" width="17" height="17" fill="white" rx="2" />
                <rect x="78" y="13" width="9" height="9" fill="black" />

                <rect x="5" y="70" width="25" height="25" fill="black" rx="3" />
                <rect x="9" y="74" width="17" height="17" fill="white" rx="2" />
                <rect x="13" y="78" width="9" height="9" fill="black" />

                <rect x="36" y="12" width="6" height="6" />
                <rect x="48" y="8" width="6" height="6" />
                <rect x="58" y="18" width="6" height="6" />
                <rect x="12" y="38" width="6" height="6" />
                <rect x="22" y="48" width="6" height="6" />
                <rect x="38" y="38" width="8" height="8" rx="2" fill="#2563eb" />
                <rect x="52" y="38" width="6" height="6" />
                <rect x="42" y="54" width="6" height="6" />
                <rect x="62" y="48" width="6" height="6" />
                <rect x="76" y="38" width="6" height="6" />
                <rect x="84" y="52" width="6" height="6" />
                <rect x="44" y="72" width="6" height="6" />
                <rect x="56" y="82" width="6" height="6" />
                <rect x="72" y="74" width="6" height="6" />
                <rect x="82" y="84" width="6" height="6" />
              </svg>
            </div>
            <p className={`text-xs ${isLight ? 'text-slate-600' : 'text-neutral-400'}`}>
              Point your iPhone camera at this code to open the App Store page immediately.
            </p>
          </div>
        )}

        {/* Tab 3: TestFlight */}
        {tab === 'beta' && (
          <div>
            {submitted ? (
              <div className="p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <div className={`font-bold text-base ${isLight ? 'text-slate-900' : 'text-white'}`}>You're on the priority list!</div>
                <div className={`text-xs ${isLight ? 'text-slate-600' : 'text-neutral-300'}`}>
                  We sent a TestFlight invitation code to <span className="font-mono text-emerald-600 font-bold">{email}</span>.
                </div>
              </div>
            ) : (
              <form onSubmit={handleBetaSubmit} className="space-y-3">
                <p className={`text-xs ${isLight ? 'text-slate-600' : 'text-neutral-400'}`}>
                  Get early access to upcoming features like AI Recovery Forecasting, Lactate Threshold modeling, and Custom Watch Face complication builders.
                </p>
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="athlete@example.com"
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-blue-500 transition-colors ${
                      isLight
                        ? 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                        : 'bg-neutral-900 border-neutral-800 text-white placeholder-neutral-500'
                    }`}
                  />
                  {error && <p className="text-rose-500 text-xs mt-1">{error}</p>}
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-xl shadow-md transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Request TestFlight Beta Slot</span>
                </button>
              </form>
            )}
          </div>
        )}

      </motion.div>
    </div>
  );
};
