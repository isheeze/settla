
import React from 'react';
import { motion } from 'motion/react';

const VideoSection: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center font-sans">
      {/* Background Video Container */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-indigo-950/70 z-10 backdrop-blur-[1px]"></div>
        
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="inline-flex items-center gap-3 border border-white/20 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Live Protocol Stream</span>
          </div>

          <h2 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter leading-[0.9]">
            The rhythm of <br />
            <span className="text-indigo-400">global liquidity.</span>
          </h2>

          <p className="text-xl md:text-2xl text-indigo-100/60 max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
            Experience the speed of light in financial settlements. Our architecture processes thousands of transactions per second, powering the next generation of digital commerce.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-white text-indigo-950 px-12 py-6 rounded-full font-black text-xl hover:bg-indigo-50 hover:scale-105 active:scale-95 transition-all shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
              Enter the Protocol
            </button>
            <button className="bg-white/5 border border-white/20 backdrop-blur-xl text-white px-12 py-6 rounded-full font-black text-xl hover:bg-white/10 transition-all">
              Developer Docs
            </button>
          </div>
        </motion.div>

        {/* Floating Stats */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { label: 'Network Uptime', value: '99.999%', sub: 'SLA Guaranteed' },
            { label: 'Peak Capacity', value: '450k+', sub: 'TX / Second' },
            { label: 'Active Nodes', value: '12,482', sub: 'Global Cluster' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (i * 0.1) }}
              className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 rounded-[2.5rem]"
            >
              <div className="text-indigo-300 font-black text-[10px] uppercase tracking-widest mb-2 opacity-60">
                {stat.label}
              </div>
              <div className="text-3xl font-black mb-1">{stat.value}</div>
              <div className="text-[10px] font-bold text-white/40 uppercase tracking-tighter">
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll indicator for aesthetic */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 opacity-40"
      >
        <div className="w-[2px] h-12 bg-gradient-to-b from-white to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default VideoSection;
