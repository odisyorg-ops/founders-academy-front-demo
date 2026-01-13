import React from 'react';
import { motion } from 'framer-motion';
import {
    ArrowRight,
    Clock,
    ShieldX,
    Banknote,
    Ghost,
    Zap,
    Key,
    BarChart3,
    Handshake,
    CheckCircle
} from 'lucide-react';

const ProblemSolution = () => {
    const transformations = [
        {
            problem: { title: '"Thinking about it" Limbo', desc: "Deals stall for months in passive evaluation.", icon: Clock },
            solution: { title: "The Momentum Engine", desc: "Injection techniques that force a 'Yes' or 'No' today.", icon: Zap }
        },
        {
            problem: { title: "Gatekeeper Blockades", desc: "Getting stuck with middle-managers who can't say yes.", icon: ShieldX },
            solution: { title: "Executive Bridge Strategy", desc: "Direct-to-C-Suite mapping that bypasses procurement.", icon: Key }
        },
        {
            problem: { title: "The 'Price' Trap", desc: "Losing 20% of your margin to last-minute discounts.", icon: Banknote },
            solution: { title: "Value-Based Framing", desc: "Shifting the talk from 'Cost' to 'ROI Multipliers'.", icon: BarChart3 }
        },
        {
            problem: { title: "Ghosting & Silence", desc: "Warm leads suddenly go dark after the proposal.", icon: Ghost },
            solution: { title: "Accountability Protocol", desc: "Mutual Action Plans that keep prospects engaged.", icon: Handshake }
        }
    ];

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.25, delayChildren: 0.2 }
        }
    };

    const rowVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section className="w-full py-24 px-6 md:px-12 lg:px-24 bg-white relative">
            <div className="max-w-6xl mx-auto">

                {/* Header - Consistent with Banner */}
                <div className="mb-20">
                    <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs"
                    >
                        The Transformation
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-extrabold text-slate-900 mt-4 tracking-tight"
                    >
                        Stop Grinding. <br />
                        Start <span className="text-blue-600 italic underline decoration-slate-100 underline-offset-8">Closing.</span>
                    </motion.h2>
                </div>

                {/* Staggered Rows Container */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="space-y-6"
                >
                    {transformations.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={rowVariants}
                            className="group grid grid-cols-1 md:grid-cols-11 items-center gap-4"
                        >

                            {/* PROBLEM SIDE (Left) */}
                            <div className="md:col-span-5 relative">
                                {/* Red Pulsing Indicator */}
                                <div className="absolute -left-2 -top-2 z-20 flex h-4 w-4">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white"></span>
                                </div>

                                <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-red-100 transition-colors h-full">
                                    <div className="flex items-start gap-5">
                                        <div className="p-3 bg-white rounded-2xl text-slate-400 shadow-sm">
                                            <item.problem.icon size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-slate-900 leading-tight">{item.problem.title}</h3>
                                            <p className="text-slate-500 text-sm mt-2 leading-relaxed">{item.problem.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* TRANSITION (Center) */}
                            <div className="md:col-span-1 flex justify-center py-2 md:py-0">
                                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 rotate-90 md:rotate-0">
                                    <ArrowRight size={18} strokeWidth={3} />
                                </div>
                            </div>

                            {/* SOLUTION SIDE (Right) */}
                            <div className="md:col-span-5">
                                <div className="relative group h-full">
                                    {/* Soft Glow behind the card on hover */}
                                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="relative p-8 rounded-[2rem] h-full transition-all duration-300
                    bg-[#f8fafc] border border-blue-100/50 
                    shadow-[0_8px_30px_rgb(0,0,0,0.04)]
                    group-hover:bg-white group-hover:shadow-[0_20px_50px_rgba(59,130,246,0.1)]
                    overflow-hidden">

                                        {/* Subtle "Light Leak" in the corner */}
                                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-50 rounded-full blur-3xl opacity-50 group-hover:bg-blue-100 transition-colors" />

                                        <div className="flex items-start gap-5 relative z-10">
                                            {/* Soft Icon Container */}
                                            <div className="p-3 bg-blue-600 rounded-2xl text-white shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform duration-300">
                                                <item.solution.icon size={24} strokeWidth={2.5} />
                                            </div>

                                            <div>
                                                {/* Label matching the banner's blue span style */}
                                                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1 block">
                                                    The Fix
                                                </span>
                                                <h3 className="text-lg font-extrabold text-slate-900 leading-tight tracking-tight">
                                                    {item.solution.title}
                                                </h3>
                                                <p className="text-slate-500 text-sm mt-2 leading-relaxed font-medium">
                                                    {item.solution.desc}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Modern Checkmark Badge */}
                                        <div className="absolute bottom-4 right-6 opacity-5 group-hover:opacity-20 transition-opacity">
                                            <CheckCircle size={40} className="text-blue-600" strokeWidth={1} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-20 pt-10 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8"
                >
                    <div className="max-w-md">
                        <h4 className="text-xl font-bold text-slate-900">Break the cycle today.</h4>
                        <p className="text-slate-500 text-sm mt-1 font-medium">Get the full systematic breakdown of the Acceleration Framework.</p>
                    </div>
                    <button className="whitespace-nowrap px-10 py-5 bg-blue-600 text-white font-bold rounded-2xl hover:bg-slate-900 transition-all shadow-xl shadow-blue-200">
                        Secure Your Spot
                    </button>
                </motion.div>

            </div>
        </section>
    );
};

export default ProblemSolution;