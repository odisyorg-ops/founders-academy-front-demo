import React from "react";
import { motion } from "framer-motion";
import { Check, Zap, Clock, TrendingUp, Star } from "lucide-react";
import bannerPic1 from "../assets/banner (1).jpg"; // Import one of your banner pictures for the top-left card

const BENEFITS_DATA = [
  {
    icon: <Zap size={22} className="text-slate-800" />,
    title: "We get it fast",
    description: "Less explaining, more doing. We pick things up quickly and run with it.",
  },
  {
    icon: <Clock size={22} className="text-slate-800" />,
    title: "On time, every time",
    description: "We've shipped on deadline for 97% of our projects. No surprises.",
  },
  {
    icon: <TrendingUp size={22} className="text-slate-800" />,
    title: "Results you can measure",
    description: "Average 2.4× increase in conversions within 60 days of launch.",
  },
];

const BULLET_POINTS = [
  "Avg. 3× lead growth in 90 days.",
  "Speed without the mess.",
  "No design drama.",
  "48hr turnaround on revisions.",
  "Dedicated Slack channel.",
];

export const BenefitsSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#f8f8f8] py-24 font-['Comfortaa']">
      {/* Header Container */}
      <div className="mx-auto mb-16 flex max-w-7xl flex-col items-center px-6 text-center">
        {/* Pill Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold text-slate-600 shadow-2xs">
          <span className="h-1.5 w-1.5 rounded-full bg-[#536878]" />
          BENEFITS
        </div>

        {/* Heading matching screenshot */}
        <h2 className="text-3xl font-medium tracking-tight text-[#111111] sm:text-5xl md:text-[56px] md:leading-[1.15]">
          Why teams <span className="font-normal text-[#9e9e9e]">stick</span> with us
        </h2>
      </div>

      {/* Grid Container */}
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Top Row (2 Large Asymmetric Cards) */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 mb-6">
          
          {/* Card 1: Image + Bullet Points (span 5) */}
          <div className="flex flex-col justify-between rounded-[32px] border border-slate-200/80 bg-white p-3 lg:col-span-5">
            <div className="overflow-hidden rounded-[20px] h-64">
              <img
                src={bannerPic1}
                alt="Benefit Showcase"
                className="h-full w-full object-cover opacity-90"
              />
            </div>

            <div className="mt-6 space-y-3.5 pb-2">
              {BULLET_POINTS.map((point, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm font-medium text-slate-800">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center text-slate-900 text-xs font-bold">
                    +
                  </span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Testimonial & Metrics Dark Card (span 7) */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-[32px] bg-[#5c5c5c] p-8 md:p-10 text-white lg:col-span-7">
            {/* Background Founder Image with Gradient Overlay */}
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80"
                alt="Testimonial background"
                className="h-full w-full object-cover object-top opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </div>

            {/* Top Rating Stars & Quote */}
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="text-xl md:text-2xl font-medium leading-snug text-white/95">
                "Our conversion rates finally make sense. Revenue jumped 40% in two months — highly recommended."
              </p>

              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
                  alt="Alex Turner"
                  className="h-10 w-10 rounded-full object-cover border border-white/20"
                />
                <div>
                  <h4 className="text-sm font-bold text-white">Alex Turner</h4>
                  <p className="text-xs text-white/70">Founder</p>
                </div>
              </div>
            </div>

            {/* Bottom Metrics Bar */}
            <div className="relative z-10 mt-12 grid grid-cols-2 gap-4 border-t border-white/15 pt-6">
              <div>
                <p className="text-3xl md:text-4xl font-bold tracking-tight text-white">120+</p>
                <p className="text-xs md:text-sm text-white/70 mt-0.5">Projects completed</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold tracking-tight text-white">99%</p>
                <p className="text-xs md:text-sm text-white/70 mt-0.5">Client satisfaction</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Row (3 Equal Feature Cards) */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {BENEFITS_DATA.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-[32px] border border-slate-200/80 bg-white p-8 transition-all duration-300 hover:shadow-md"
            >
              <div className="mb-8 h-12 w-12 ">
                {item.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BenefitsSection;