import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  PhoneCall, 
  MessageSquareText, 
  FileText, 
  CheckCircle2, 
} from 'lucide-react';

const ZigzagFunnel = () => {
  const stages = [
    { 
      id: "01",
      icon: Target, 
      title: "Market Research", 
      desc: "Identify & map prospects",
      color: "text-blue-500",
      bg: "bg-blue-50",
      border: "border-blue-200",
      shadow: "shadow-blue-200"
    },
    { 
      id: "02",
      icon: PhoneCall, 
      title: "Outreach", 
      desc: "Multi-channel contact",
      color: "text-indigo-500",
      bg: "bg-indigo-50",
      border: "border-indigo-200",
      shadow: "shadow-indigo-200"
    },
    { 
      id: "03",
      icon: MessageSquareText, 
      title: "Discovery", 
      desc: "Qualification & pain",
      color: "text-violet-500",
      bg: "bg-violet-50",
      border: "border-violet-200",
      shadow: "shadow-violet-200"
    },
    { 
      id: "04",
      icon: FileText, 
      title: "Negotiation", 
      desc: "Proposals & terms",
      color: "text-purple-500",
      bg: "bg-purple-50",
      border: "border-purple-200",
      shadow: "shadow-purple-200"
    },
    { 
      id: "05",
      icon: CheckCircle2, 
      title: "Closed Deal", 
      desc: "Partnership secured",
      color: "text-emerald-500",
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      shadow: "shadow-emerald-200"
    },
  ];

  return (
    <div className="w-screen bg-white p-6 md:p-12 flex justify-center items-center overflow-hidden rounded-xl">
      <div className="max-w-6xl w-full">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Business Development</h2>
          <p className="text-slate-400 text-sm mt-2 uppercase tracking-widest font-semibold">Step by step Pipeline </p>
        </div>

        {/* Desktop View (Zigzag) - Hidden on Mobile */}
        <div className="hidden md:block relative h-[400px]">
          
          {/* Connecting Line (SVG) */}
          <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0" preserveAspectRatio="none">
             {/* Coordinates explained:
                We have 5 items roughly at 10%, 30%, 50%, 70%, 90% horizontal width.
                Top Y position approx 25%, Bottom Y position approx 75%.
             */}
            <motion.path
              d="M 10% 30% L 30% 70% L 50% 30% L 70% 70% L 90% 30%"
              fill="none"
              stroke="#cbd5e1" // slate-300
              strokeWidth="2"
              strokeDasharray="8 4"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </svg>

          {/* Grid Container */}
          <div className="grid grid-cols-5 h-full w-full">
            {stages.map((stage, index) => {
              const isEven = index % 2 !== 0; // 0, 2, 4 are top (odd visually), 1, 3 are bottom
              return (
                <div key={index} className={`relative flex flex-col items-center ${isEven ? 'justify-end pb-10' : 'justify-start pt-10'}`}>
                  
                  {/* The Diamond Card */}
                  <motion.div
                    initial={{ opacity: 0, y: isEven ? 20 : -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, type: "spring" }}
                    className="relative z-10 group"
                  >
                    {/* Floating Number */}
                    <div className={`absolute ${isEven ? '-bottom-8' : '-top-8'} left-1/2 -translate-x-1/2 text-2xl font-black text-slate-200 group-hover:text-slate-300 transition-colors`}>
                      {stage.id}
                    </div>

                    {/* Diamond Shape */}
                    <div className={`
                      w-20 h-20 rounded-2xl rotate-45 transform transition-all duration-300
                      bg-white border-2 flex items-center justify-center
                      ${stage.border} group-hover:scale-110 group-hover:${stage.shadow} shadow-xl
                    `}>
                      {/* Counter-rotate icon to keep it straight */}
                      <div className="-rotate-45">
                        <stage.icon className={`w-8 h-8 ${stage.color}`} />
                      </div>
                    </div>

                    {/* Pulsing Dot on Line Connection */}
                     <div className={`absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-2 ${stage.border} rounded-full z-20
                        ${isEven ? '-top-[3.5rem]' : '-bottom-[3.5rem]'}
                     `}></div>
                  </motion.div>

                  {/* Text Content */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 + (index * 0.1) }}
                    className={`absolute w-40 text-center ${isEven ? 'top-10' : 'bottom-10'}`}
                  >
                    <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wide mb-1">{stage.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{stage.desc}</p>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile View (Vertical Stack) - Hidden on Desktop */}
        <div className="md:hidden flex flex-col gap-8 relative">
           {/* Vertical Line */}
           <div className="absolute left-8 top-4 bottom-4 w-0.5 bg-slate-200"></div>
           
           {stages.map((stage, index) => (
             <motion.div 
               key={index}
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.15 }}
               className="flex items-center gap-6 relative z-10"
             >
                {/* Diamond Icon */}
                <div className={`
                  w-16 h-16 shrink-0 bg-white rounded-xl border-2 ${stage.border} 
                  shadow-sm flex items-center justify-center rotate-45 ml-4
                `}>
                   <div className="-rotate-45">
                    <stage.icon className={`w-6 h-6 ${stage.color}`} />
                   </div>
                </div>
                
                {/* Text */}
                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-bold text-slate-800">{stage.title}</h3>
                    <span className="text-2xl font-black text-slate-100">{stage.id}</span>
                  </div>
                  <p className="text-sm text-slate-500">{stage.desc}</p>
                </div>
             </motion.div>
           ))}
        </div>

      </div>
    </div>
  );
};

export default ZigzagFunnel;