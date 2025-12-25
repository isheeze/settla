
import React from 'react';
import { motion } from 'motion/react';

const SettlaSecure: React.FC = () => {
  return (
    <section className="py-40 bg-indigo-950 relative overflow-hidden font-sans">
      {/* High-tech background noise/grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,_rgba(255,255,255,0.05)_1px,transparent_0)] [background-size:40px_40px] opacity-40"></div>
      
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
          
          {/* Left Side: Interactive Security Visual */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Central Core */}
              <motion.div 
                animate={{ 
                  boxShadow: [
                    "0 0 20px rgba(99, 102, 241, 0.2)",
                    "0 0 60px rgba(99, 102, 241, 0.4)",
                    "0 0 20px rgba(99, 102, 241, 0.2)"
                  ] 
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 m-auto w-32 h-32 bg-indigo-600 rounded-3xl flex items-center justify-center z-20"
              >
                <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </motion.div>

              {/* Orbital Rings */}
              {[1, 2, 3].map((ring) => (
                <motion.div
                  key={ring}
                  animate={{ rotate: ring % 2 === 0 ? 360 : -360 }}
                  transition={{ duration: 10 + ring * 5, repeat: Infinity, ease: "linear" }}
                  className={`absolute inset-0 m-auto border border-white/${10 * ring} rounded-full`}
                  style={{ width: `${40 + ring * 20}%`, height: `${40 + ring * 20}%` }}
                >
                  <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-indigo-400 rounded-full shadow-[0_0_10px_rgba(129,140,248,0.8)]`}></div>
                </motion.div>
              ))}

              {/* Data Scanning Lines */}
              <motion.div
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent z-10"
              />

              {/* Floating Status Badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-10 right-0 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl text-[10px] font-black text-indigo-300 uppercase tracking-widest"
              >
                Shield: Active
              </motion.div>
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute bottom-20 left-0 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl text-[10px] font-black text-green-400 uppercase tracking-widest"
              >
                Fraud Scan: 100%
              </motion.div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="lg:w-1/2 order-1 lg:order-2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-4 py-2 rounded-full mb-8">
                <span className="text-indigo-400 font-black text-[10px] uppercase tracking-[0.3em]">Settla Secure</span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-black mb-8 text-white leading-[0.95] tracking-tighter">
                Your money’s <br /> <span className="text-indigo-400">safe space.</span>
              </h2>

              <p className="text-xl md:text-2xl text-indigo-100/60 leading-relaxed mb-12 font-medium">
                With Settla Secure, you’re entering a new era of money security —
                where our proactive, purpose-built defences and team of fraud
                specialists help protect every account, 24/7.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
                {[
                  { title: "24/7 Monitoring", desc: "Our neural networks analyze 10k signals per second to stop fraud before it starts.", icon: "👁️" },
                  { title: "Biometric Vault", desc: "Fingerprint and Face Synthesis for every high-value transaction exit.", icon: "🧬" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors">
                    <div className="text-3xl mb-4">{item.icon}</div>
                    <h4 className="text-white font-black text-xl mb-2">{item.title}</h4>
                    <p className="text-indigo-200/50 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-12 bg-white text-indigo-950 px-10 py-5 rounded-full font-black text-lg shadow-2xl hover:bg-indigo-50 transition-all"
              >
                Learn about security
              </motion.button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SettlaSecure;
