import { Check, Zap } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';

const Packages = () => {
  const plans = [
    { name: "Starter", price: "349", features: ["Weekly 1:1 Coaching", "Core Strategies", "Pipeline Setup", "Email Templates"], popular: false },
    { name: "Pro", price: "499", features: ["Everything in Starter", "Live Deal Reviews", "Strategy Sessions", "LinkedIn Outreach Playbook"], popular: true },
    { name: "Elite", price: "999", features: ["Full Mentorship", "Live Deal Support", "C-Suite Intro Strategies", "Custom CRM Audit"], popular: false },
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-slate-900 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter italic">Investment.</h2>
          <p className="text-slate-400 mt-4 max-w-lg mx-auto">High-performance coaching that pays for itself in a single closed deal.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className={`relative rounded-[3rem] p-8 md:p-10 transition-all duration-500 ${
                plan.popular 
                ? 'bg-blue-600 text-white scale-105 shadow-2xl shadow-blue-500/30 z-10 py-16' 
                : 'bg-slate-800 text-slate-300 border border-slate-700 hover:border-slate-500'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-6 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold uppercase tracking-[0.2em] mb-4 text-center">{plan.name}</h3>
              <div className="flex items-baseline justify-center gap-1 mb-10">
                <span className="text-2xl font-bold">£</span>
                <span className="text-6xl font-black tracking-tighter">{plan.price}</span>
                <span className="text-sm opacity-60">/mo</span>
              </div>
              <ul className="space-y-4 mb-10">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-medium">
                    <Check size={18} className={plan.popular ? "text-blue-200" : "text-blue-500"} /> {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-5 rounded-2xl font-bold text-sm transition-all ${
                plan.popular ? 'bg-white text-blue-600 hover:bg-slate-900 hover:text-white' : 'bg-slate-700 text-white hover:bg-blue-600'
              }`}>
                Choose {plan.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;