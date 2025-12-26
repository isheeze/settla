
import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'motion/react';

const PROTOCOLS = [
  {
    id: 'P-01',
    title: "Identity Synthesis",
    tagline: "Biometric KYC Protocol",
    description: "Our proprietary engine distills your identity into a cryptographic hash in <60s. We synchronize with 400+ global databases to ensure instant, secure compliance without the paperwork.",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 200 200" fill="none">
        <motion.rect
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          x="40" y="40" width="120" height="120" rx="24" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4"
        />
        <motion.circle
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
          cx="100" cy="100" r="50" fill="currentColor" className="text-indigo-500/10"
        />
        <motion.path
          animate={{ y: [0, 40, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          d="M60 80 H140" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-indigo-400"
        />
        <circle cx="100" cy="100" r="20" stroke="currentColor" strokeWidth="2" />
        <path d="M100 80 V120 M80 100 H120" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      </svg>
    )
  },
  {
    id: 'P-02',
    title: "Liquidity Injection",
    tagline: "Cross-Border Settlement",
    description: "Bypass the SWIFT bottlenecks. Settla hooks directly into local clearing houses (ACH, SEPA, FasterPayments) providing a direct conduit for your assets across 170+ territories.",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 200 200" fill="none">
        <motion.circle
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="1" strokeDasharray="10 10" opacity="0.2"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          d="M100 30 V170 M30 100 H170" stroke="currentColor" strokeWidth="1" opacity="0.1"
        />
        {[0, 72, 144, 216, 288].map((a, i) => (
          <motion.circle
            key={i}
            animate={{ r: [4, 8, 4], opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 2, delay: i * 0.4, repeat: Infinity }}
            cx={100 + 70 * Math.cos(a * Math.PI / 180)}
            cy={100 + 70 * Math.sin(a * Math.PI / 180)}
            fill="currentColor"
          />
        ))}
        <circle cx="100" cy="100" r="25" fill="currentColor" className="text-indigo-600" />
        <path d="M95 100 L105 100 M100 95 L100 105" stroke="white" strokeWidth="3" strokeLinecap="round" />
      </svg>
    )
  },
  {
    id: 'P-03',
    title: "Atomic Conversion",
    tagline: "Real-time FX Aggregator",
    description: "No spreads. No hidden margins. Our engine polls 12 tier-one liquidity providers every 250ms to grab the interbank rate, executing your exchange at the exact moment of request.",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 200 200" fill="none">
        <rect x="50" y="80" width="100" height="40" rx="20" stroke="currentColor" strokeWidth="2" opacity="0.2" />
        <motion.g animate={{ x: [0, 60, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
          <circle cx="70" cy="100" r="18" fill="currentColor" className="text-indigo-600" />
          <text x="65" y="106" fill="white" fontSize="16" fontWeight="900">$</text>
        </motion.g>
        <motion.g animate={{ x: [0, -60, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
          <circle cx="130" cy="100" r="18" fill="currentColor" className="text-indigo-400" />
          <text x="125" y="106" fill="white" fontSize="16" fontWeight="900">€</text>
        </motion.g>
        <motion.path
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
          d="M90 100 H110" stroke="currentColor" strokeWidth="2"
        />
      </svg>
    )
  },
  {
    id: 'P-04',
    title: "Ledger Finality",
    tagline: "Proof of Transmission",
    description: "Total visibility. Once completed, your transaction is etched into our private ledger with a cryptographic proof of delivery sent directly to your device. Immutable and verifiable.",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 200 200" fill="none">
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 2 }}
          d="M40 140 L80 140 L110 60 L160 60" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
        />
        <motion.circle
          animate={{ cx: [40, 80, 110, 160], cy: [140, 140, 60, 60] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          r="6" fill="currentColor"
        />
        <rect x="150" y="50" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="2" />
        <path d="M40 140 M160 60" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.2" />
      </svg>
    )
  }
];

const Module = ({ protocol, index, total }: { protocol: typeof PROTOCOLS[0], index: number, total: number }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-24 last:mb-0 items-center">
      {/* Content Side */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className={`${!isEven ? 'lg:order-2' : ''}`}
      >
        <div className="flex items-center gap-4 mb-5">
          <span className="px-3 py-1 bg-indigo-600 text-white text-[10px] font-black rounded-md tracking-tighter">
            {protocol.id}
          </span>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-indigo-100 to-transparent"></div>
        </div>
        <h3 className="text-3xl md:text-5xl font-black text-indigo-950 mb-3 tracking-tighter">
          {protocol.title}
        </h3>
        <p className="text-indigo-600 font-bold uppercase tracking-[0.2em] text-[10px] mb-6">
          {protocol.tagline}
        </p>
        <p className="text-indigo-900/60 text-base md:text-lg font-medium leading-relaxed max-w-lg">
          {protocol.description}
        </p>
      </motion.div>

      {/* Visual Side */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotateY: isEven ? 10 : -10 }}
        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className={`relative group ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
      >
        <div className="absolute inset-0 bg-indigo-600/5 blur-3xl rounded-full transition-opacity group-hover:opacity-100 opacity-50"></div>
        <div className="relative bg-white border border-indigo-50 shadow-[0_32px_64px_-16px_rgba(49,46,129,0.1)] rounded-[2rem] p-6 md:p-10 overflow-hidden">
          {/* Animated decorative corner */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50/50 rounded-bl-[3rem] -translate-y-6 translate-x-6"></div>

          <div className="h-48 w-48 md:h-64 md:w-64 mx-auto text-indigo-900/20 group-hover:text-indigo-600 transition-colors duration-500">
            {protocol.icon}
          </div>

          {/* Module metadata overlay */}
          <div className="absolute bottom-6 right-6 text-[8px] font-mono text-indigo-300 uppercase tracking-widest opacity-40">
            Node: 0x{index}F492 // Latency: 0.02ms
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const HowItWorks = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 20,
    restDelta: 0.001
  });

  return (
    <section id="how-it-works" className="py-24 bg-slate-50 relative overflow-hidden font-sans">
      {/* Background large text */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none opacity-[0.02] select-none">
        <h2 className="text-[30vw] font-black text-indigo-950 rotate-90">SETTLA</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">

        {/* Section Header */}
        <div className="max-w-3xl mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 bg-white border border-indigo-100 px-5 py-2 rounded-full mb-6 shadow-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-indigo-600">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-indigo-400 opacity-75"></span>
            </span>
            <span className="text-indigo-600 font-black text-[10px] uppercase tracking-[0.3em]">How It Works</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-indigo-950 tracking-tighter leading-[0.9] mb-6"
          >
            Built on <span className="text-indigo-600">pure velocity.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-indigo-900/60 font-medium leading-relaxed"
          >
            We re-engineered cross-border payments from the ground up, stripping away legacy dependencies to create a seamless financial protocol.
          </motion.p>
        </div>

        {/* The Conduit Timeline */}
        <div ref={containerRef} className="relative pt-10">

          {/* Center Path (Desktop) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-indigo-100/50 hidden lg:block overflow-hidden">
            <motion.div
              style={{ scaleY: pathLength }}
              className="w-full h-full bg-indigo-600 origin-top shadow-[0_0_15px_rgba(79,70,229,0.5)]"
            />
          </div>

          {/* Module Nodes */}
          <div className="flex flex-col">
            {PROTOCOLS.map((p, idx) => (
              <Module key={p.id} protocol={p} index={idx} total={PROTOCOLS.length} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
