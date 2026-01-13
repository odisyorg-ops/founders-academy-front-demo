import React from 'react';
import { motion } from 'framer-motion';
import ban from "../assets/Minimalist Workspace.png";

const Banner = () => {
    return (
        <section className="relative w-full min-h-[85vh] flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-24 py-16 bg-white overflow-hidden mt-16">

            {/* 1. Text & CTA Area */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="flex flex-col w-full lg:w-1/2 space-y-8 z-10"
            >
                <div className="space-y-4">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs"
                    >
                        Elevate Your Standards
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="text-5xl md:text-7xl font-extrabold leading-[1.1] text-slate-900 tracking-tight"
                    >
                        Build A Predictable <br />
                        <span className="text-blue-600 italic">Revenue</span> Engine.
                    </motion.h1>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg text-slate-600 max-w-lg leading-relaxed"
                >
                    Stop relying on luck. Implement our proven, stage-by-stage framework tailored for modern Business Development professionals.
                </motion.p>

                <div className="flex flex-wrap gap-4 pt-2">
                    {/* Primary Button */}
                    <button className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all shadow-lg hover:shadow-slate-200">
                        Get Started
                    </button>
                    {/* Secondary Button */}
                    <button className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl border border-slate-200 hover:bg-slate-50 transition-all">
                        Learn More
                    </button>
                </div>

                {/* Stats Section */}
                <div className="pt-10 flex items-center gap-10 border-t border-slate-100 mt-4">
                    <div>
                        <p className="text-2xl font-bold text-slate-900">250+</p>
                        <p className="text-xs text-slate-400 uppercase font-semibold tracking-wider">Resources</p>
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-slate-900">99%</p>
                        <p className="text-xs text-slate-400 uppercase font-semibold tracking-wider">Success</p>
                    </div>
                    <div className="h-10 w-[1px] bg-slate-100 hidden sm:block"></div>
                    <p className="text-sm text-slate-500 max-w-[120px] leading-snug">
                        Trusted by global industry leaders.
                    </p>
                </div>
            </motion.div>

            {/* 2. Image Area */}
            <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2 mt-16 lg:mt-0 flex justify-center lg:justify-end relative"
            >
                <div className="relative">
                    {/* Soft Glow behind image */}
                    <div className="absolute -inset-4 bg-blue-50 rounded-[2.5rem] blur-2xl opacity-50" />

                    <img
                        src={ban}
                        alt="Minimalist Workspace"
                        className="relative rounded-[2rem] shadow-2xl w-full max-w-[500px] object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                    />

                    {/* Floating Interaction Badge */}
                    <motion.div
                        animate={{ y: [0, -12, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-10 -left-10 bg-white p-5 shadow-xl rounded-2xl flex items-center gap-4 border border-slate-100"
                    >
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M11.3 1.047a1 1 0 01.897.953v6.22l4.913-2.549a1 1 0 011.392.902v10.84a1 1 0 01-1.392.902L12.2 15.77v6.22a1 1 0 01-1.707.707L7.793 20H3a1 1 0 01-1-1V5a1 1 0 011-1h4.793l2.707-2.707a1 1 0 01.8-.246z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Live Sessions</p>
                            <p className="text-sm font-extrabold text-slate-900">Expert-Led Coaching</p>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

        </section>
    );
};

export default Banner;