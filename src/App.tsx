import React, { useState } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { NutritionAndScannerSection } from './components/NutritionAndScannerSection';
import { TrainingStoreSection } from './components/TrainingStoreSection';
import { RingPlayground } from './components/RingPlayground';
import { WidgetShowcase } from './components/WidgetShowcase';
import { WatchSection } from './components/WatchSection';
import { BentoFeatures } from './components/BentoFeatures';
import { ComparisonTable } from './components/ComparisonTable';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQSection';
import { DownloadModal } from './components/DownloadModal';
import { Footer } from './components/Footer';

function AppContent() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [modalInitialTab, setModalInitialTab] = useState<'download' | 'qr' | 'beta'>('download');

  const handleOpenDownload = () => {
    setModalInitialTab('download');
    setDownloadModalOpen(true);
  };

  const handleOpenQR = () => {
    setModalInitialTab('qr');
    setDownloadModalOpen(true);
  };

  return (
    <div className={`min-h-screen flex flex-col overflow-x-clip font-sans transition-colors duration-300 selection:bg-blue-600 selection:text-white ${
      isLight ? 'bg-[#f8fafc] text-slate-900' : 'bg-[#08090d] text-neutral-100'
    }`}>
      {/* Navigation with Theme Switcher */}
      <Navbar onOpenDownload={handleOpenDownload} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section with Live iPhone & Apple Watch Mockups and Placeholders */}
        <Hero onOpenDownload={handleOpenDownload} onOpenQR={handleOpenQR} />

        {/* Free Nutrients, Barcode Scanner & Goals Section (Our Motto: Track All For Free) */}
        <div id="nutrition">
          <NutritionAndScannerSection />
        </div>

        {/* Dedicated Training Store Screen & AI Bio-Adaptive Training Studio */}
        <TrainingStoreSection />

        {/* Interactive Ring Simulator */}
        <RingPlayground />

        {/* iOS Widgets Showcase */}
        <WidgetShowcase />

        {/* Apple Watch Showcase */}
        <WatchSection />

        {/* Bento Grid Architecture & Capabilities */}
        <BentoFeatures />

        {/* Honest Comparison Table */}
        <ComparisonTable />

        {/* Athlete Testimonials */}
        <Testimonials />

        {/* Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer onOpenDownload={handleOpenDownload} />

      {/* Download / QR Code Modal */}
      <DownloadModal
        isOpen={downloadModalOpen}
        initialTab={modalInitialTab}
        onClose={() => setDownloadModalOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
