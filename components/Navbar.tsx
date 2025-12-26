
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SettlaLogo } from './Logo';

interface NavbarProps {
  onNavigate: (page: 'home' | 'about') => void;
  currentPage: string;
  onAuthOpen: (mode: 'login' | 'signup') => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage, onAuthOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'py-3 bg-white/80 backdrop-blur-md shadow-sm' : 'py-4 bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-2 text-indigo-600 transition-transform hover:scale-105 outline-none relative z-[101]"
            >
              <SettlaLogo className="h-8 w-auto" />
            </button>

            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => onNavigate('home')}
                className={`font-semibold text-sm transition-colors ${currentPage === 'home' ? 'text-indigo-600' : 'text-indigo-900 hover:text-indigo-600'}`}
              >
                Home
              </button>
              <button
                onClick={() => onNavigate('about')}
                className={`font-semibold text-sm transition-colors ${currentPage === 'about' ? 'text-indigo-600' : 'text-indigo-900 hover:text-indigo-600'}`}
              >
                About
              </button>
              <a href="#" className="text-indigo-900 font-semibold text-sm hover:text-indigo-600 transition-colors">Features</a>
              <a href="#" className="text-indigo-900 font-semibold text-sm hover:text-indigo-600 transition-colors">Pricing</a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={() => onAuthOpen('login')}
                className="text-indigo-900 font-bold text-sm px-4 hover:text-indigo-600 transition-colors"
              >
                Log in
              </button>
              <button
                onClick={() => onAuthOpen('signup')}
                className="bg-indigo-600 text-white px-5 py-2 rounded-full font-bold text-sm hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 active:scale-95"
              >
                Sign up
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative z-[101] w-10 h-10 flex items-center justify-center rounded-full bg-indigo-50 text-indigo-900 focus:outline-none"
            >
              <div className="relative w-5 h-5 flex items-center justify-center">
                <span className={`absolute bg-current h-0.5 rounded-full transition-all duration-300 w-full ${isMobileMenuOpen ? 'rotate-45 top-2.5' : 'top-1'}`} />
                <span className={`absolute bg-current h-0.5 rounded-full transition-all duration-300 w-full top-2.5 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`absolute bg-current h-0.5 rounded-full transition-all duration-300 w-full ${isMobileMenuOpen ? '-rotate-45 top-2.5' : 'top-4'}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-[90] bg-white/95 backdrop-blur-xl md:hidden flex flex-col pt-32 px-8"
          >
            <div className="flex flex-col gap-6 text-2xl font-black text-indigo-950">
              <button onClick={() => { onNavigate('home'); setIsMobileMenuOpen(false); }} className="text-left py-2 border-b border-indigo-50">Home</button>
              <button onClick={() => { onNavigate('about'); setIsMobileMenuOpen(false); }} className="text-left py-2 border-b border-indigo-50">About</button>
              <a href="#" className="text-left py-2 border-b border-indigo-50">Features</a>
              <a href="#" className="text-left py-2 border-b border-indigo-50">Pricing</a>
            </div>

            <div className="mt-auto mb-10 space-y-4">
              <button
                onClick={() => { onAuthOpen('login'); setIsMobileMenuOpen(false); }}
                className="w-full text-indigo-900 font-bold text-lg py-4 border border-indigo-100 rounded-2xl"
              >
                Log in
              </button>
              <button
                onClick={() => { onAuthOpen('signup'); setIsMobileMenuOpen(false); }}
                className="w-full bg-indigo-600 text-white font-bold text-lg py-4 rounded-2xl shadow-xl shadow-indigo-200"
              >
                Sign up
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
