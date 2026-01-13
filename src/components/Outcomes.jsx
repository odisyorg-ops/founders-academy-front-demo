import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Target, 
  Crown, 
  Rocket, 
  ArrowUpRight,
  CheckCircle2
} from 'lucide-react';

const Outcomes = () => {
  const achievements = [
    {
      title: "Close 45% More Deals",
      desc: "Master negotiation frameworks that turn hesitant prospects into high-ticket paying clients.",
      icon: TrendingUp,
      metric: "+45%",
      subtext: "Avg. Win Rate Increase",
      size: "lg", // Large Hero Card
      color: "bg-blue-600",
      textColor: "text-white"
    },
    {
      title: "7-Figure Pipeline",
      desc: "Prospecting strategies that fill your funnel with qualified leads consistently.",
      icon: Target,
      size: "md",
      color: "bg-white",
      textColor: "text-slate-900"
    },
    {
      title: "Win Enterprise Accounts",
      desc: "The playbook for landing and expanding complex, multi-stakeholder deals.",
      icon: Crown,
      size: "md",
      color: "bg-white",
      textColor: "text-slate-900"
    },
    {
      title: "Accelerate to Leadership",
      desc: "Skills that get you noticed for Senior BD and management roles.",
      icon: Rocket,
      size: "sm",
      color: "bg-slate-900",
      textColor: "text-white"
    }
  ];

  return (
    <section className="w-full py-24 px-6 md:px-12 lg:px-24 bg-slate-50/50">
      <div className="max-w-6xl mx-auto">
        
        {/* Header - Consistent with Banner */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs"
            >
              The ROI of Excellence
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight"
            >
              What You'll <span className="text-blue-600 italic">Achieve</span>
            </motion.h2>
          </div>
          <p className="text-slate-500 max-w-xs text-sm leading-relaxed font-medium">
            Move beyond tactical sales into strategic business development with a framework designed for scale.
          </p>
        </div>

        {/* Bento-Style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: The Metric Hero (Spans 2 columns) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="md:col-span-2 p-10 rounded-[2.5rem] bg-blue-600 relative overflow-hidden group shadow-2xl shadow-blue-200"
          >
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="flex justify-between items-start">
                <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white">
                  <TrendingUp size={32} strokeWidth={2.5} />
                </div>
                <div className="text-right">
                  <span className="text-6xl font-black text-white/20 group-hover:text-white/40 transition-colors duration-500">
                    {achievements[0].metric}
                  </span>
                </div>
              </div>
              <div className="mt-12">
                <h3 className="text-3xl font-extrabold text-white tracking-tight mb-4">{achievements[0].title}</h3>
                <p className="text-blue-50 text-lg max-w-md leading-relaxed">{achievements[0].desc}</p>
                <div className="mt-8 flex items-center gap-2 text-white/80 font-bold text-sm uppercase tracking-widest">
                   <CheckCircle2 size={18} className="text-blue-200" />
                   {achievements[0].subtext}
                </div>
              </div>
            </div>
            {/* Background Decor */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          </motion.div>

          {/* Card 2: Strategic (Spans 1 column) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/40 flex flex-col justify-between group hover:border-blue-200 transition-colors"
          >
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl w-fit group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              <Target size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{achievements[1].title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{achievements[1].desc}</p>
            </div>
            <div className="mt-6 flex justify-end">
                <ArrowUpRight className="text-slate-200 group-hover:text-blue-600 transition-colors" size={24} />
            </div>
          </motion.div>

          {/* Card 3: Enterprise (Spans 1 column) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/40 flex flex-col justify-between group hover:border-blue-200 transition-colors"
          >
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl w-fit group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              <Crown size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{achievements[2].title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{achievements[2].desc}</p>
            </div>
          </motion.div>

          {/* Card 4: Leadership (Spans 2 columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="md:col-span-2 p-8 rounded-[2.5rem] bg-slate-900 text-white flex flex-col md:flex-row items-center gap-8 relative overflow-hidden group shadow-2xl"
          >
             <div className="relative z-10 flex-1">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-600 rounded-lg">
                        <Rocket size={20} className="text-white" />
                    </div>
                    <span className="text-blue-400 font-bold uppercase tracking-widest text-[10px]">Career Growth</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{achievements[3].title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-md">{achievements[3].desc}</p>
             </div>
             <div className="relative z-10 hidden md:block">
                 <button className="px-8 py-4 bg-white text-slate-900 font-bold rounded-2xl hover:bg-blue-600 hover:text-white transition-all">
                    View Leadership Modules
                 </button>
             </div>
             {/* Tech Grid Background pattern */}
             <div className="absolute inset-0 opacity-5 pointer-events-none">
                 <div className="grid grid-cols-12 h-full w-full">
                     {[...Array(12)].map((_, i) => (
                         <div key={i} className="border-r border-white h-full" />
                     ))}
                 </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Outcomes;