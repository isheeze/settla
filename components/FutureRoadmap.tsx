
import React from 'react';
import { motion } from 'motion/react';

const UPCOMING_FEATURES = [
  {
    title: "AI Portfolio Synthesis",
    desc: "Predictive engine that rebalances your multi-currency assets based on real-time macro volatility.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    title: "Titanium Physical Cards",
    desc: "Precision-engineered metal cards with dynamic CVV displays and instant biometric unlock.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    )
  },
  {
    title: "Virtual Global IBANs",
    desc: "Instantly spin up local bank details in 20+ new territories including UAE, Singapore, and Brazil.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    )
  }
];

const FutureRoadmap: React.FC = () => {
  return (
    <section className="py-40 bg-white relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-32">
          
          {/* Left Side: Content Block (following wireframe) */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-8xl font-black text-indigo-950 tracking-tighter leading-[0.9] mb-8">
                The Future <br /> <span className="text-indigo-600">Protocol.</span>
              </h2>
              
              <h3 className="text-xl md:text-2xl font-bold text-indigo-900/40 uppercase tracking-[0.3em] mb-10">
                Roadmap Phase v2.5
              </h3>

              <div className="space-y-6">
                <p className="text-xl text-indigo-900/60 leading-relaxed font-medium">
                  We aren't just building a bank; we're building a global financial operating system. Our engineers are currently synthesizing new modules to eliminate the remaining friction in global liquidity.
                </p>
                <p className="text-xl text-indigo-900/60 leading-relaxed font-medium">
                  From deep-learning asset management to high-end hardware interfaces, the next 12 months will redefine what it means to hold wealth in the digital age.
                </p>
              </div>

              <div className="mt-12 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-indigo-100 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Engineer" />
                    </div>
                  ))}
                </div>
                <div className="text-sm font-bold text-indigo-950">
                  <span className="text-indigo-600">42 engineers</span> shipping daily
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Feature Cards (following wireframe stack) */}
          <div className="lg:w-1/2 flex flex-col gap-6">
            {UPCOMING_FEATURES.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20, x: 20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                whileHover={{ x: -10 }}
                className="group flex items-center gap-8 bg-slate-50 border border-indigo-50 p-8 rounded-[2.5rem] hover:bg-white hover:shadow-[0_32px_64px_-16px_rgba(49,46,129,0.08)] hover:border-indigo-100 transition-all cursor-default"
              >
                {/* Icon Box */}
                <div className="flex-shrink-0 w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm border border-indigo-50 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  {feature.icon}
                </div>

                {/* Text Content */}
                <div>
                  <h4 className="text-xl font-black text-indigo-950 mb-2 group-hover:text-indigo-600 transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-indigo-900/50 font-medium leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Visual bottom accent */}
            <div className="mt-4 p-6 border-2 border-dashed border-indigo-100 rounded-[2.5rem] flex items-center justify-center">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-200">System Expansion Underway</span>
            </div>
          </div>

        </div>
      </div>
      
      {/* Decorative side accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-64 bg-gradient-to-b from-transparent via-indigo-100 to-transparent opacity-50"></div>
    </section>
  );
};

export default FutureRoadmap;
