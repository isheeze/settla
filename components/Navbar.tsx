
import React, { useState, useEffect } from 'react';
import { SettlaLogo } from './Logo';

interface NavbarProps {
  onNavigate: (page: 'home' | 'about') => void;
  currentPage: string;
  onAuthOpen: (mode: 'login' | 'signup') => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage, onAuthOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
      isScrolled ? 'py-4 bg-white/80 backdrop-blur-md shadow-sm' : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 text-indigo-600 transition-transform hover:scale-105 outline-none"
          >
            <SettlaLogo className="h-10 w-auto" />
          </button>
          
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => onNavigate('home')}
              className={`font-semibold transition-colors ${currentPage === 'home' ? 'text-indigo-600' : 'text-indigo-900 hover:text-indigo-600'}`}
            >
              Home
            </button>
            <button 
              onClick={() => onNavigate('about')}
              className={`font-semibold transition-colors ${currentPage === 'about' ? 'text-indigo-600' : 'text-indigo-900 hover:text-indigo-600'}`}
            >
              About
            </button>
            <a href="#" className="text-indigo-900 font-semibold hover:text-indigo-600 transition-colors">Features</a>
            <a href="#" className="text-indigo-900 font-semibold hover:text-indigo-600 transition-colors">Pricing</a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => onAuthOpen('login')}
            className="hidden sm:block text-indigo-900 font-bold px-4 hover:text-indigo-600 transition-colors"
          >
            Log in
          </button>
          <button 
            onClick={() => onAuthOpen('signup')}
            className="bg-indigo-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 active:scale-95"
          >
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
