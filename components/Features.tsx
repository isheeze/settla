
import React from 'react';

const features = [
  {
    title: 'Instant Transfers',
    description: 'Send money to any part of the world in seconds. No more waiting for days to clear payments.',
    icon: '⚡',
  },
  {
    title: 'Multi-Currency Account',
    description: 'Hold and convert 40+ currencies at the real exchange rate. Your own local bank details abroad.',
    icon: '🌍',
  },
  {
    title: 'Top-Tier Security',
    description: 'Bank-level security with biometric 2FA and real-time fraud monitoring. Your funds are always safe.',
    icon: '🔒',
  },
  {
    title: 'Budget Tracking',
    description: 'Smart insights to help you manage your spending habits across different countries and currencies.',
    icon: '📊',
  },
  {
    title: 'Virtual Cards',
    description: 'Create disposable virtual cards for secure online shopping and subscriptions.',
    icon: '💳',
  },
  {
    title: 'Stock Trading',
    description: 'Invest in global stocks and crypto with as little as $1. Grow your wealth directly from your account.',
    icon: '📈',
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-20">
        <h2 className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-4">Why Settla?</h2>
        <h3 className="text-4xl md:text-5xl font-extrabold text-indigo-950">Packed with power, <br className="hidden sm:block" /> built for simplicity.</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {features.map((f, i) => (
          <div key={i} className="group p-8 rounded-3xl bg-indigo-50/30 hover:bg-white border border-transparent hover:border-indigo-100 hover:shadow-xl transition-all duration-300">
            <div className="text-4xl mb-6 bg-white w-16 h-16 flex items-center justify-center rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
              {f.icon}
            </div>
            <h4 className="text-xl font-bold text-indigo-950 mb-3">{f.title}</h4>
            <p className="text-indigo-900/60 leading-relaxed font-medium">
              {f.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
