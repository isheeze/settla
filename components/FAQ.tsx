
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const FAQ_DATA = [
  {
    question: "Is Settla a licensed financial institution?",
    answer: "Yes. Settla is regulated as an Electronic Money Institution (EMI) across 170+ territories. Your funds are held in ring-fenced safeguarding accounts with Tier-1 global banks, ensuring your capital is never reinvested or exposed to market risk."
  },
  {
    question: "How does Atomic Conversion differ from traditional FX?",
    answer: "Traditional FX involves multiple 'hops' between correspondent banks, each taking a margin. Settla's Atomic Engine polls interbank liquidity providers every 250ms, executing your trade at the literal market floor with 0% markup."
  },
  {
    question: "What are the limits for instant settlements?",
    answer: "Our standard retail accounts support instant transfers up to $50,000 per transaction. Business and Enterprise nodes can scale to $2M+ per settlement via our high-velocity liquidity corridors."
  },
  {
    question: "Can I use Settla for multi-currency payroll?",
    answer: "Absolutely. Our Business Protocol allows for batch-processing payroll in 40+ currencies. You can fund your account in GBP and pay contractors in JPY, EUR, or USD instantly without manual conversion steps."
  },
  {
    question: "How long does the Identity Synthesis (KYC) take?",
    answer: "94% of our users are verified in under 60 seconds. Our biometric synthesis engine uses neural mapping to verify your identity against global databases in real-time."
  }
];

const FAQItem = ({ item, isOpen, onClick, index }: { item: typeof FAQ_DATA[0], isOpen: boolean, onClick: () => void, index: number }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`group border-b border-indigo-100/50 last:border-0 transition-all ${isOpen ? 'bg-indigo-50/30' : 'hover:bg-indigo-50/10'}`}
    >
      <button 
        onClick={onClick}
        className="w-full py-8 px-6 flex items-center justify-between text-left transition-all"
      >
        <div className="flex items-center gap-6">
          <span className="text-[10px] font-black text-indigo-300 font-mono">0{index + 1}</span>
          <h4 className="text-xl md:text-2xl font-black text-indigo-950 tracking-tight group-hover:text-indigo-600 transition-colors">
            {item.question}
          </h4>
        </div>
        <div className={`relative w-6 h-6 flex items-center justify-center rounded-full border-2 transition-all duration-500 ${isOpen ? 'bg-indigo-600 border-indigo-600 rotate-180' : 'border-indigo-200'}`}>
          <div className={`absolute w-3 h-0.5 bg-current transition-colors ${isOpen ? 'text-white' : 'text-indigo-300'}`}></div>
          <div className={`absolute w-0.5 h-3 bg-current transition-all ${isOpen ? 'opacity-0 text-white' : 'opacity-100 text-indigo-300'}`}></div>
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-8 px-20">
              <p className="text-indigo-900/60 text-lg leading-relaxed max-w-2xl">
                {item.answer}
              </p>
              <div className="mt-6 flex gap-4">
                <span className="text-[10px] font-bold text-indigo-300 uppercase tracking-widest px-3 py-1 bg-white rounded-md border border-indigo-50 shadow-sm">Verified Protocol</span>
                <span className="text-[10px] font-bold text-indigo-300 uppercase tracking-widest px-3 py-1 bg-white rounded-md border border-indigo-50 shadow-sm">SLA: 100%</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-40 bg-white relative overflow-hidden font-sans">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e0e7ff_1px,transparent_1px)] [background-size:40px_40px] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Left: Sticky Branding */}
          <div className="lg:w-1/3 lg:sticky lg:top-40 h-fit">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-indigo-50 px-4 py-2 rounded-full mb-6">
                <div className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></div>
                <span className="text-indigo-600 font-black text-[10px] uppercase tracking-widest">Support Core</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-indigo-950 tracking-tighter leading-[0.9] mb-8">
                Common <br /> <span className="text-indigo-600">Queries.</span>
              </h2>
              <p className="text-lg text-indigo-900/50 font-medium mb-10 leading-relaxed">
                Everything you need to know about the Settla protocol and global liquidity movements.
              </p>
              <button className="flex items-center gap-4 text-indigo-600 font-black text-sm uppercase tracking-widest group">
                Visit Help Center
                <div className="w-8 h-8 rounded-full border border-indigo-100 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </button>
            </motion.div>
          </div>

          {/* Right: The Accordion */}
          <div className="lg:w-2/3">
            <div className="bg-white/50 backdrop-blur-sm rounded-[3rem] border border-indigo-50 overflow-hidden shadow-[0_32px_64px_-16px_rgba(49,46,129,0.05)]">
              {FAQ_DATA.map((item, idx) => (
                <FAQItem 
                  key={idx} 
                  item={item} 
                  index={idx}
                  isOpen={activeIndex === idx}
                  onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                />
              ))}
            </div>
            
            {/* Bottom contact card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12 p-8 bg-indigo-950 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8"
            >
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-3xl">💬</div>
                <div>
                  <h5 className="text-white font-bold text-xl">Still have questions?</h5>
                  <p className="text-indigo-300/60 font-medium">Our engineers are online 24/7 to assist you.</p>
                </div>
              </div>
              <button className="bg-indigo-600 text-white px-8 py-4 rounded-full font-black hover:bg-indigo-500 transition-all whitespace-nowrap">
                Open Support Ticket
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
