import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  PhoneCall, 
  MessageSquareText, 
  FileText, 
  CheckCircle2,
  ChevronDown
} from 'lucide-react';

const ZigzagFunnel = () => {
  const stages = [
    { 
      id: "01",
      icon: Target, 
      title: "Market Research", 
      desc: "Identify high-value prospects and map industry decision-makers.",
      accent: "bg-blue-600",
      textAccent: "text-blue-600",
      numberColor: "text-slate-100" 
    },
    { 
      id: "02",
      icon: PhoneCall, 
      title: "Multi-Channel Outreach", 
      desc: "Strategic touchpoints across LinkedIn, Email, and Phone.",
      accent: "bg-indigo-600",
      textAccent: "text-indigo-600",
      numberColor: "text-indigo-50" 
    },
    { 
      id: "03",
      icon: MessageSquareText, 
      title: "Discovery & Qualification", 
      desc: "Deep-dive sessions to uncover pain points and fiscal impact.",
      accent: "bg-violet-600",
      textAccent: "text-violet-600",
      numberColor: "text-violet-100"
    },
    { 
      id: "04",
      icon: FileText, 
      title: "Strategic Negotiation", 
      desc: "Framing proposals as ROI multipliers rather than costs.",
      accent: "bg-purple-600",
      textAccent: "text-purple-600",
      numberColor: "text-purple-100"
    },
    { 
      id: "05",
      icon: CheckCircle2, 
      title: "Closed-Won Partnership", 
      desc: "Securing the signature and initiating the growth roadmap.",
      accent: "bg-emerald-500",
      textAccent: "text-emerald-600",
      numberColor: "text-emerald-100" 
    },
  ];

  return (
    <section className="w-full py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-32">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs mb-4"
          >
            The Systematic Approach
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight"
          >
            The Revenue <span className="text-blue-600 italic">Pipeline.</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* THE LINE: Fixed center via transform */}
          <div className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-100 md:-translate-x-1/2 z-0">
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              transition={{ duration: 1.5 }}
              className="w-full bg-gradient-to-b from-blue-600 to-emerald-500"
            />
          </div>

          <div className="space-y-32 relative z-10">
            {stages.map((stage, index) => {
              const isEven = index % 2 !== 0;

              return (
                <div key={index} className="grid grid-cols-[64px_1fr] md:grid-cols-[1fr_auto_1fr] items-center w-full">
                  
                  {/* LEFT SIDE SLOT */}
                  <div className="hidden md:flex justify-end">
                    {!isEven ? (
                      <div className="pr-12 lg:pr-20 w-full max-w-md">
                        <PipelineCard stage={stage} align="right" />
                      </div>
                    ) : (
                      /* Spacer to keep icon centered */
                      <div className="pr-12 lg:pr-20 w-full max-w-md opacity-0 pointer-events-none" aria-hidden="true">
                         <PipelineCard stage={stage} align="right" />
                      </div>
                    )}
                  </div>

                  {/* CENTER ICON: This is the anchor point */}
                  <div className="flex justify-center items-center px-4 md:px-0">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl ${stage.accent} shadow-xl flex items-center justify-center text-white shrink-0`}
                    >
                      <stage.icon size={28} strokeWidth={2.5} />
                    </motion.div>
                  </div>

                  {/* RIGHT SIDE SLOT */}
                  <div className="flex justify-start">
                    {/* Mobile: Always Card | Desktop: Only if Even */}
                    <div className={`pl-8 md:pl-12 lg:pl-20 w-full max-w-md ${isEven ? 'block' : 'md:hidden'}`}>
                      <PipelineCard stage={stage} align="left" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* End Goal */}
          <div className="mt-32 flex flex-col items-center">
             
             <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-900 bg-emerald-100 z-20 py-2 px-4 rounded-lg ">Mission Accomplished</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const PipelineCard = ({ stage, align }) => (
  <motion.div 
    initial={{ opacity: 0, x: align === 'right' ? -30 : 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className={`relative bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-200/40 overflow-hidden group`}
  >
    {/* FLAT CLEAN NUMBER */}
    <span className={`absolute -bottom-4 ${align === 'right' ? '-left-2' : '-right-2'} text-8xl md:text-9xl font-black ${stage.numberColor} leading-none select-none`}>
      {stage.id}
    </span>

    <div className="relative z-10">
      <div className={`text-[10px] font-bold uppercase tracking-widest ${stage.textAccent} mb-4`}>
        Phase {stage.id}
      </div>
      <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
        {stage.title}
      </h3>
      <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">
        {stage.desc}
      </p>
    </div>
  </motion.div>
);

export default ZigzagFunnel;