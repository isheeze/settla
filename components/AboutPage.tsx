
import React from 'react';
import { motion } from 'motion/react';

const BOARD_MEMBERS = [
  { name: 'Sarah Chen', role: 'Chief Executive', image: 'https://i.pravatar.cc/300?img=32' },
  { name: 'Marcus Thorne', role: 'Head of Growth', image: 'https://i.pravatar.cc/300?img=11' },
  { name: 'Elena Rodriguez', role: 'Lead Architect', image: 'https://i.pravatar.cc/300?img=44' },
  { name: 'Julian Vane', role: 'Protocol Security', image: 'https://i.pravatar.cc/300?img=12' },
  { name: 'Amara Okafor', role: 'Global Ops', image: 'https://i.pravatar.cc/300?img=5' },
  { name: 'David Kim', role: 'Product Design', image: 'https://i.pravatar.cc/300?img=13' },
];

const TIMELINE_DATA = [
  {
    year: 'HEADING 2024',
    title: 'Expanding the Protocol',
    description: 'Our global network reached 170 territories, introducing instant liquidity swaps for major emerging markets. We launched the Settla X engine, reducing cross-border latency by 40%.',
    images: [
      'https://picsum.photos/seed/tech1/400/300',
      'https://picsum.photos/seed/tech2/400/300',
      'https://picsum.photos/seed/tech3/400/300',
      'https://picsum.photos/seed/tech4/400/300'
    ]
  },
  {
    year: 'HEADING EARLY 2023',
    title: 'The Foundation',
    description: 'Settla secured its initial EMI licensing and built the first atomic conversion ledger. Our team grew from 5 to 50 engineers, focused on rebuilding the global financial stack.',
    images: [
      'https://picsum.photos/seed/foundation1/400/300',
      'https://picsum.photos/seed/foundation2/400/300'
    ]
  }
];

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white font-sans overflow-hidden">

      {/* 1. About Hero Section */}
      <section className="relative pt-32 pb-24 px-6 bg-indigo-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(99,102,241,0.05)_0%,_transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="inline-block px-4 py-1.5 bg-indigo-600/10 rounded-full mb-6">
              <span className="text-indigo-600 font-black text-[10px] uppercase tracking-[0.3em]">Our Story</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-indigo-950 tracking-tighter leading-[0.85] mb-8">
              Money without <br /> <span className="text-indigo-600">friction.</span>
            </h1>
            <p className="text-lg md:text-2xl text-indigo-900/40 max-w-2xl mx-auto font-medium leading-relaxed">
              We're building the infrastructure that lets capital move at the speed of human thought. Across every border, every currency, every second.
            </p>
          </motion.div>
        </div>
        {/* Animated background element */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-24 -right-24 w-80 h-80 border-2 border-indigo-100/50 rounded-[4rem] -z-0"
        ></motion.div>
      </section>

      {/* 2. Core Board Members Section (Animated) */}
      <section className="py-24 px-6 relative bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center -space-x-4 md:-space-x-12 mb-16"
          >
            {BOARD_MEMBERS.map((member, i) => (
              <motion.div
                key={i}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -20, zIndex: 50, scale: 1.1 }}
                className="relative w-20 h-20 md:w-32 md:h-32 rounded-full border-4 border-white shadow-2xl overflow-hidden cursor-pointer bg-indigo-100 group"
              >
                <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                <div className="absolute inset-0 bg-indigo-900/80 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white p-2 transition-opacity text-center">
                  <p className="text-[10px] font-black uppercase tracking-tighter mb-1">{member.name}</p>
                  <p className="text-[8px] opacity-70 uppercase font-bold">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-indigo-950 tracking-tighter leading-[0.9] mb-6"
          >
            The Core <span className="text-indigo-600">Board.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-indigo-900/60 max-w-xl mx-auto font-medium"
          >
            A collective of veteran engineers and financial architects from some of the world's most innovative institutions.
          </motion.p>
        </div>
      </section>

      {/* 3. What's Done and What's Left Section (Timeline Scroll Animation) */}
      <section className="py-24 px-6 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-24 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-indigo-950 tracking-tight mb-4">What's done and <span className="text-indigo-600">what's left.</span></h2>
            <div className="w-16 h-1.5 bg-indigo-600 rounded-full"></div>
          </div>

          <div className="relative pl-8 md:pl-0">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-indigo-200/50"></div>

            <div className="space-y-24">
              {TIMELINE_DATA.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16"
                >
                  {/* Timeline Marker */}
                  <div className="absolute left-[-2.4rem] md:left-1/2 md:-translate-x-1/2 top-0 w-8 h-8 rounded-full bg-white border-4 border-indigo-600 shadow-xl z-10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></div>
                  </div>

                  {/* Text Side */}
                  <div className={`${idx % 2 === 0 ? 'md:text-right' : 'md:order-2 md:text-left'}`}>
                    <h4 className="text-indigo-600 font-black text-xs uppercase tracking-[0.4em] mb-3">{item.year}</h4>
                    <h3 className="text-2xl md:text-4xl font-black text-indigo-950 mb-4">{item.title}</h3>
                    <p className="text-indigo-900/60 text-lg leading-relaxed mb-6 max-w-lg md:ml-auto md:mr-0">
                      {item.description}
                    </p>
                  </div>

                  {/* Image Grid Side */}
                  <div className={`${idx % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                    <div className="grid grid-cols-2 gap-4">
                      {item.images.map((img, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 1 : -1 }}
                          className="aspect-[4/3] rounded-3xl bg-indigo-100 overflow-hidden shadow-sm border border-indigo-100 transition-all"
                        >
                          <img src={img} alt="Timeline Milestone" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Contact Us (Animated) */}
      <section id="support" className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

            {/* Column 1 (Left) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-indigo-950 tracking-tighter leading-[0.9] mb-6">
                Get in <span className="text-indigo-600">touch.</span>
              </h2>
              <p className="text-lg text-indigo-900/60 mb-10 max-w-sm font-medium leading-relaxed">
                Have questions about your membership? Our concierge team is here to assist you 24/7.
              </p>

              <div className="space-y-4">
                {[
                  { icon: "✉️", label: "Email Us", val: "concierge@settla.com" },
                  { icon: "📞", label: "Call Us", val: "+1 (800) 555-0123" },
                  { icon: "📍", label: "Visit Us", val: "100 Madison Ave, New York, NY 10016" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 rounded-3xl bg-slate-50 border border-indigo-50 hover:border-indigo-200 transition-colors group">
                    <div className="w-10 h-10 flex-shrink-0 bg-white rounded-2xl flex items-center justify-center text-lg shadow-sm group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-indigo-400 mb-1">{item.label}</p>
                      <p className="text-indigo-950 font-bold text-sm">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Column 2 (Right) - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-indigo-950 p-8 rounded-[2.5rem] shadow-2xl relative"
            >
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-indigo-300/50 ml-4">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-white placeholder:text-white/20 outline-none focus:border-indigo-400 focus:bg-white/10 transition-all text-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-indigo-300/50 ml-4">Email Address</label>
                    <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-white placeholder:text-white/20 outline-none focus:border-indigo-400 focus:bg-white/10 transition-all text-sm" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-indigo-300/50 ml-4">Subject</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-white/60 outline-none focus:border-indigo-400 focus:bg-white/10 transition-all appearance-none text-sm">
                    <option className="bg-indigo-950">Select a topic</option>
                    <option className="bg-indigo-950">Account Support</option>
                    <option className="bg-indigo-950">Business Partnership</option>
                    <option className="bg-indigo-950">Press Inquiries</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-indigo-300/50 ml-4">Message</label>
                  <textarea rows={4} placeholder="How can we help you?" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-white placeholder:text-white/20 outline-none focus:border-indigo-400 focus:bg-white/10 transition-all resize-none text-sm"></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, backgroundColor: "#4f46e5" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-indigo-600 text-white py-4 rounded-full font-bold text-base flex items-center justify-center gap-3 shadow-xl shadow-indigo-600/20 transition-all"
                >
                  Send Message
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.button>
              </form>

              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
