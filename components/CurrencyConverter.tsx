
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const CURRENCIES = [
  { code: 'USD', name: 'US Dollar', flag: '🇺🇸' },
  { code: 'EUR', name: 'Euro', flag: '🇪🇺' },
  { code: 'GBP', name: 'British Pound', flag: '🇬🇧' },
  { code: 'JPY', name: 'Japanese Yen', flag: '🇯🇵' },
  { code: 'AUD', name: 'Australian Dollar', flag: '🇦🇺' },
  { code: 'CAD', name: 'Canadian Dollar', flag: '🇨🇦' },
  { code: 'CHF', name: 'Swiss Franc', flag: '🇨🇭' },
  { code: 'CNY', name: 'Chinese Yuan', flag: '🇨🇳' },
  { code: 'INR', name: 'Indian Rupee', flag: '🇮🇳' },
];

interface DropdownProps {
  selected: string;
  onSelect: (code: string) => void;
  label: string;
}

const CustomDropdown: React.FC<DropdownProps> = ({ selected, onSelect, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const current = CURRENCIES.find(c => c.code === selected) || CURRENCIES[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 bg-white border-2 border-indigo-100 hover:border-indigo-600 px-4 py-3 rounded-2xl transition-all shadow-sm hover:shadow-md group"
      >
        <span className="text-2xl">{current.flag}</span>
        <span className="font-bold text-indigo-950">{current.code}</span>
        <svg 
          className={`w-4 h-4 text-indigo-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute right-0 mt-2 w-64 bg-white border border-indigo-50 rounded-[2rem] shadow-2xl z-50 overflow-hidden py-3"
          >
            <div className="px-5 py-2 text-[10px] font-black uppercase tracking-widest text-indigo-300 border-b border-indigo-50 mb-2">
              Select {label}
            </div>
            <div className="max-h-64 overflow-y-auto custom-scrollbar">
              {CURRENCIES.map((c) => (
                <button
                  key={c.code}
                  onClick={() => {
                    onSelect(c.code);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-5 py-3 hover:bg-indigo-50 transition-colors ${selected === c.code ? 'bg-indigo-50/50' : ''}`}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xl">{c.flag}</span>
                    <div className="text-left">
                      <div className="font-bold text-indigo-950 text-sm">{c.code}</div>
                      <div className="text-[10px] text-indigo-400 font-medium">{c.name}</div>
                    </div>
                  </div>
                  {selected === c.code && (
                    <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CurrencyConverter: React.FC = () => {
  const [amount, setAmount] = useState<string>('1000');
  const [fromCurrency, setFromCurrency] = useState('GBP');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [result, setResult] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);

  const fetchRates = useCallback(async () => {
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      setResult(0);
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`);
      const data = await response.json();
      if (data.rates && data.rates[toCurrency]) {
        setResult(data.rates[toCurrency]);
        setExchangeRate(data.rates[toCurrency] / Number(amount));
      }
    } catch (error) {
      console.error('Error fetching rates:', error);
    } finally {
      // Small artificial delay to show off the scanning animation
      setTimeout(() => setLoading(false), 800);
    }
  }, [amount, fromCurrency, toCurrency]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchRates();
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [fetchRates]);

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <section className="py-32 bg-white relative overflow-hidden font-sans">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-100/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-100/20 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          
          {/* Left Content */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="inline-flex items-center gap-2 bg-indigo-50 px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 rounded-full bg-indigo-600 animate-ping"></span>
                <span className="text-indigo-600 font-black text-[10px] uppercase tracking-widest">Real-time Trading Platform</span>
              </div>
              <h3 className="text-5xl md:text-7xl font-black text-indigo-950 leading-[1.05] tracking-tight mb-8">
                Convert faster <br /> than you can <span className="text-indigo-600">spend.</span>
              </h3>
              <p className="text-xl text-indigo-900/60 leading-relaxed mb-12 max-w-lg">
                Settla's ultra-low latency engine connects directly to interbank liquidity pools to give you the sharpest rates in the industry.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                {[
                  { title: 'Zero Fees', value: '£0.00', icon: '💎' },
                  { title: 'Processing', value: 'Instant', icon: '⚡' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-50 p-6 rounded-[2rem] border border-indigo-50">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-indigo-300 mb-1">{item.title}</div>
                    <div className="text-2xl font-black text-indigo-950">{item.value}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Converter Card */}
          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", damping: 20 }}
              className="bg-white p-10 md:p-14 rounded-[4rem] shadow-[0_64px_128px_-32px_rgba(49,46,129,0.2)] border border-indigo-100 relative group"
            >
              {/* Scanline animation when loading */}
              <AnimatePresence>
                {loading && (
                  <motion.div
                    initial={{ top: '0%' }}
                    animate={{ top: '100%' }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-indigo-400 to-transparent z-20 pointer-events-none blur-sm"
                  />
                )}
              </AnimatePresence>

              <div className="space-y-10">
                {/* Amount Input */}
                <div className="relative">
                  <div className="flex justify-between items-end mb-4 px-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-950/40">You Send</label>
                    <CustomDropdown 
                      selected={fromCurrency} 
                      onSelect={setFromCurrency} 
                      label="Source" 
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="0.00"
                      className="w-full bg-slate-50 border-2 border-transparent focus:border-indigo-600 focus:bg-white rounded-[2rem] px-8 py-7 text-4xl font-black text-indigo-950 outline-none transition-all placeholder:text-indigo-100"
                    />
                    <div className="absolute left-8 top-1/2 -translate-y-1/2 pointer-events-none opacity-0 group-focus-within:opacity-100 transition-opacity">
                      {/* Optional decoration */}
                    </div>
                  </div>
                </div>

                {/* Swap Button with pulse effect */}
                <div className="flex justify-center -my-6 relative z-10">
                  <motion.button
                    whileHover={{ rotate: 180, scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleSwap}
                    className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center shadow-2xl shadow-indigo-400 border-[6px] border-white transition-all duration-700 hover:bg-indigo-700"
                  >
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                    </svg>
                  </motion.button>
                </div>

                {/* Result Input */}
                <div className="relative">
                  <div className="flex justify-between items-end mb-4 px-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-950/40">They Receive</label>
                    <CustomDropdown 
                      selected={toCurrency} 
                      onSelect={setToCurrency} 
                      label="Target" 
                    />
                  </div>
                  <div className={`w-full rounded-[2rem] px-8 py-7 flex items-center transition-all duration-500 ${loading ? 'bg-indigo-50/50 animate-pulse' : 'bg-indigo-600'}`}>
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={result + (loading ? 'loading' : 'done')}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className={`text-4xl font-black tracking-tight ${loading ? 'text-indigo-300' : 'text-white'}`}
                      >
                        {loading ? 'CALCULATING...' : result?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </div>

                {/* Enhanced Rate Info */}
                <div className="bg-slate-50/80 rounded-[2rem] p-6 flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-500 animate-ping opacity-75"></div>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-indigo-950/60">Live Exchange Rate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-indigo-400 font-bold text-sm">1 {fromCurrency} =</span>
                    <motion.span 
                      key={exchangeRate}
                      initial={{ scale: 1.2, color: '#4f46e5' }}
                      animate={{ scale: 1, color: '#1e1b4b' }}
                      className="text-indigo-950 font-black text-lg"
                    >
                      {exchangeRate?.toFixed(5)}
                    </motion.span>
                    <span className="text-indigo-400 font-bold text-sm">{toCurrency}</span>
                  </div>
                </div>

                {/* Fix: 'shadow' is not a valid property in Framer Motion, replaced with 'boxShadow' */}
                <motion.button
                  whileHover={{ y: -4, boxShadow: "0 25px 50px -12px rgba(79, 70, 229, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-indigo-950 text-white py-7 rounded-[2rem] font-black text-xl shadow-2xl shadow-indigo-100 transition-all flex items-center justify-center gap-4 group"
                >
                  Transfer Money Now
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.button>
              </div>

              {/* Decorative dynamic badge */}
              <div className="absolute -top-6 -left-6 bg-yellow-400 text-indigo-950 text-xs font-black uppercase tracking-widest px-6 py-3 rounded-2xl shadow-2xl transform -rotate-3 border-4 border-white">
                Best Rate Guaranteed
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f8fafc;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e0e7ff;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #c7d2fe;
        }
      `}</style>
    </section>
  );
};

export default CurrencyConverter;
