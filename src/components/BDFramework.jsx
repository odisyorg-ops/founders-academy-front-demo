import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Send, 
  Users, 
  Handshake, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

const BDFramework = () => {
  const modules = [
    {
      id: "01",
      title: "Prospecting & Industry Knowledge",
      desc: "Master high-value prospecting using deep industry insights and market research.",
      icon: Search,
    },
    {
      id: "02",
      title: "Lead Qualification",
      desc: "Identify ideal clients and prioritize high-impact opportunities effectively.",
      icon: Filter,
    },
    {
      id: "03",
      title: "Outreach Strategy",
      desc: "Craft multi-channel outreach sequences for maximum engagement and response.",
      icon: Send,
    },
    {
      id: "04",
      title: "Meeting Mastery",
      desc: "Run effective meetings that drive decisions and establish next steps.",
      icon: Users,
    },
    {
      id: "05",
      title: "Negotiation & Closing",
      desc: "Negotiate with confidence and close high-value deals consistently.",
      icon: Handshake,
    },
    {
      id: "06",
      title: "Growth & Leadership",
      desc: "Build your personal brand and create opportunities for career advancement.",
      icon: ShieldCheck,
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="w-full py-24 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col items-start mb-16">
          <motion.span 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs"
          >
            The Blueprint
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight"
          >
            A Proven Framework for <br />
            <span className="text-blue-600 italic">BD Success.</span>
          </motion.h2>
        </div>

        {/* Framework Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
        >
          {modules.map((module, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group relative flex flex-col"
            >
              {/* Step Number Background */}
              <div className="absolute -top-6 left-0 text-7xl font-black text-slate-50 group-hover:text-blue-50 transition-colors duration-500 -z-10">
                {module.id}
              </div>

              {/* Icon & Connector */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white border border-slate-100 rounded-2xl shadow-sm text-blue-600 group-hover:border-blue-600 group-hover:shadow-blue-100 transition-all duration-300">
                  <module.icon size={24} strokeWidth={2} />
                </div>
                <div className="h-[1px] flex-1 bg-slate-100 group-hover:bg-blue-100 transition-colors" />
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors duration-300 tracking-tight">
                  {module.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                  {module.desc}
                </p>
              </div>

              {/* Bottom Interactive Element */}
              <div className="mt-6 flex items-center gap-2 text-xs font-bold text-slate-300 group-hover:text-blue-600 transition-colors cursor-pointer">
                <span>EXPLORE MODULE</span>
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Summary Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 p-8 rounded-[2rem] border border-slate-100 bg-slate-50/50 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white">
                <ShieldCheck size={24} />
             </div>
             <div>
               <p className="font-bold text-slate-900">Certified Curriculum</p>
               <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Standardized for Fortune 500 BD Teams</p>
             </div>
          </div>
          <button className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-blue-600 transition-all">
            Download Full Syllabus
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default BDFramework;