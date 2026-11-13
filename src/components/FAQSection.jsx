import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const FAQ_ITEMS = [
  {
    question: "What services does your studio offer?",
    answer: "We specialize in high-performance websites & SaaS platforms, native mobile apps, bespoke custom software, automation engines, and advanced AI & ML solutions.",
  },
  {
    question: "How does your project process work?",
    answer: "Our process begins with an initial discovery call to understand your goals. We then move into rapid design prototypes, iterative development with regular feedback loops, rigorous testing, and seamless deployment.",
  },
  {
    question: "What’s your typical turnaround time?",
    answer: "Turnaround times vary depending on project scope. Standard websites and landing pages typically take 2-3 weeks, while full-scale SaaS applications or custom software engines range from 6-12 weeks.",
  },
  {
    question: "How do you price your work?",
    answer: "We offer tailored project-based pricing or dedicated monthly retainer models depending on your long-term product roadmap and operational requirements.",
  },
  {
    question: "How do we get started?",
    answer: "Simply click the 'let's talk' or 'Book a call' button anywhere on the site to connect with us directly via WhatsApp, and we'll get right back to you!",
  },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full overflow-hidden bg-white py-24 font-['Comfortaa']">
      
      {/* Header Container */}
      <div className="mx-auto mb-16 flex max-w-4xl flex-col items-center px-6 text-center">
        {/* Pill Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-semibold text-slate-600">
          <span className="h-1.5 w-1.5 rounded-full bg-[#536878]" />
          FAQ
        </div>

        {/* Heading matching screenshot */}
        <h2 className="text-3xl font-medium tracking-tight text-[#111111] sm:text-5xl md:text-[56px] md:leading-[1.15]">
          Let’s <span className="font-normal text-[#9e9e9e]">clear</span> things up
        </h2>
      </div>

      {/* Main Container with max-w-7xl */}
      <div className="mx-auto max-w-7xl ">
        <div className="mx-auto space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="overflow-hidden  rounded-xl border border-slate-200/80 bg-[#fafafa] shadow-xs transition-colors duration-300 hover:border-slate-300"
              >
                {/* Question Header Button */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left text-base md:text-lg font-semibold text-slate-900 focus:outline-none"
                >
                  <span>{item.question}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="shrink-0 text-slate-500"
                  >
                    <Plus size={20} />
                  </motion.div>
                </button>

                {/* Smooth Animated Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                        transition: {
                          height: { type: "spring", stiffness: 300, damping: 30 },
                          opacity: { duration: 0.2, delay: 0.05 },
                        },
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                          height: { type: "spring", stiffness: 350, damping: 35 },
                          opacity: { duration: 0.15 },
                        },
                      }}
                    >
                      <div className="px-6 pb-6 pt-0 text-sm md:text-base text-slate-600 leading-relaxed">
                        <p>{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
};

export default FAQSection;