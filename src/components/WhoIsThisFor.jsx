import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, BarChart, Trophy, Sparkles } from 'lucide-react';

const WhoIsThisFor = () => {
  const personas = [
    {
      title: "New BDMs",
      focus: "Foundation",
      desc: "Build strong foundations with proven frameworks that skip years of trial and error.",
      icon: UserPlus,
      color: "from-blue-50 to-white"
    },
    {
      title: "Struggling BDMs",
      focus: "Consistency",
      desc: "Replace 'hope-based' selling with a structured engine that delivers predictable feedback.",
      icon: BarChart,
      color: "from-indigo-50 to-white"
    },
    {
      title: "Ambitious BDMs",
      focus: "Leadership",
      desc: "Prepare for senior roles by mastering the high-level strategy that executives actually value.",
      icon: Trophy,
      color: "from-slate-100 to-white"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs">Target Profiles</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight">Built For Every Stage.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {personas.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className={`p-8 rounded-[2.5rem] bg-gradient-to-b ${p.color} border border-slate-100 relative group overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500`}
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <p.icon size={120} />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 text-blue-600 border border-slate-50">
                  <p.icon size={24} />
                </div>
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">{p.focus}</span>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-2 mb-4">{p.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm font-medium">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;