
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/Hero';
import RemoteConnectivity from './components/RemoteConnectivity';
import CurrencyConverter from './components/CurrencyConverter';
import SettlaSecure from './components/SettlaSecure';
import FutureRoadmap from './components/FutureRoadmap';
import HowItWorks from './components/HowItWorks';
import VideoSection from './components/VideoSection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import AuthModal from './components/AuthModal';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'about'>('home');
  const [authModal, setAuthModal] = useState<{ isOpen: boolean; mode: 'login' | 'signup' }>({
    isOpen: false,
    mode: 'login',
  });

  // Simple scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const openAuth = (mode: 'login' | 'signup') => {
    setAuthModal({ isOpen: true, mode });
  };

  return (
    <div className="min-h-screen selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar
        onNavigate={setCurrentPage}
        currentPage={currentPage}
        onAuthOpen={openAuth}
      />
      <main>
        {currentPage === 'home' ? (
          <>
            <HeroSection />
            <RemoteConnectivity />
            <CurrencyConverter />
            <SettlaSecure />
            <FutureRoadmap />
            <HowItWorks />
            <VideoSection />
            <FAQ />

            {/* Final CTA Section */}
            <section className="bg-indigo-50 py-24 text-center px-6 relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-30 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[60%] bg-indigo-200 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[60%] bg-blue-100 rounded-full blur-[120px]"></div>
              </div>

              <div className="max-w-4xl mx-auto relative z-10">
                <div className="inline-block px-4 py-1.5 bg-indigo-600/10 rounded-full mb-6">
                  <span className="text-indigo-600 font-black text-[10px] uppercase tracking-[0.3em]">Join the Movement</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-indigo-950 leading-[0.95]">
                  Ready to join the <br /> <span className="text-indigo-600">revolution?</span>
                </h2>
                <p className="text-indigo-900/60 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
                  Join over 10 million users worldwide who trust Settla for their global transactions.
                  Sign up today and get your first transfer free.
                </p>
                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                  <button
                    onClick={() => openAuth('signup')}
                    className="bg-indigo-600 text-white px-8 py-4 rounded-full font-bold text-base hover:bg-indigo-700 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-indigo-200"
                  >
                    Open Free Account
                  </button>
                  <button className="bg-white border-2 border-indigo-100 text-indigo-950 px-8 py-4 rounded-full font-bold text-base hover:border-indigo-200 transition-all">
                    Contact Sales
                  </button>
                </div>
              </div>
            </section>
          </>
        ) : (
          <AboutPage />
        )}
      </main>
      <Footer />

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModal.isOpen}
        mode={authModal.mode}
        onClose={() => setAuthModal({ ...authModal, isOpen: false })}
        setMode={(mode) => setAuthModal({ ...authModal, mode })}
      />
    </div>
  );
};

export default App;
