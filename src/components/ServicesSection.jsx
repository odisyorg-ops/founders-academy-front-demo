import React, { useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import bannerPic1 from "../assets/banner (1).jpg";
import bannerPic2 from "../assets/banner (2).jpg";
import bannerPic3 from "../assets/banner (3).jpg";
import bannerPic4 from "../assets/banner (4).jpg";
import bannerPic5 from "../assets/banner (5).jpg";
import bannerPic6 from "../assets/banner (6).jpg";
import bannerPic7 from "../assets/banner (7).jpg";

const SERVICES_DATA = [
  { step: "01", title: "Websites & SaaS", images: [bannerPic1, bannerPic2, bannerPic3] },
  { step: "02", title: "Mobile Apps", images: [bannerPic4, bannerPic5, bannerPic6] },
  { step: "03", title: "Custom Software", images: [bannerPic7, bannerPic1, bannerPic2] },
  { step: "04", title: "Automation Engines", images: [bannerPic3, bannerPic4, bannerPic5] },
  { step: "05", title: "AI & ML Solutions", images: [bannerPic6, bannerPic7, bannerPic1] },
];

export const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // --- ANIMATION FUNCTIONS ---
  // Each returns a variants object. Children inherit "open" / "closed"
  // from the panel, so only the panel needs an `animate` prop.
  const spring = (stiffness = 300, damping = 28) => ({ type: "spring", stiffness, damping });

  const panelAnimation = () => ({
    closed: {
      height: 0,
      opacity: 0,
      transition: { height: spring(350, 36), opacity: { duration: 0.15 } },
    },
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        height: spring(),
        opacity: { duration: 0.25 },
        when: "beforeChildren",
        staggerChildren: 0.09,
      },
    },
  });

  const imageAnimation = () => ({
    closed: { opacity: 0, y: 32, scale: 0.9 },
    open: { opacity: 1, y: 0, scale: 1, transition: spring(300, 24) },
  });

  const imageHover = { y: -6, scale: 1.05, transition: spring(400, 22) };

  const panel = panelAnimation();
  const image = imageAnimation();

  return (
    <MotionConfig reducedMotion="user">
      <section className="w-full bg-white px-6 py-24 font-['Comfortaa'] md:px-12">
        {/* Heading */}
        <header className="mx-auto mb-20 flex max-w-7xl flex-col items-center text-center">
        <span className="mb-4 flex items-center gap-2 rounded-md bg-slate-100 px-2.5 py-1  text-xs font-medium text-slate-700">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-500" />
            Services
          </span>
          <h2 className="font-['Comfortaa'] text-3xl font-bold text-slate-900 md:text-5xl">
            What we <span className="text-slate-400">bring</span>
            <br />
            to the table
          </h2>
        </header>

        {/* Services list */}
        <div className="mx-auto max-w-7xl border-t border-slate-200">
          {SERVICES_DATA.map(({ step, title, images }, idx) => {
            const isOpen = activeIndex === idx;

            return (
              <div
                key={step}
                tabIndex={0}
                onMouseEnter={() => setActiveIndex(idx)}
                onFocus={() => setActiveIndex(idx)}
                onClick={() => setActiveIndex(idx)}
                className="cursor-pointer border-b border-slate-200 px-8 py-8 outline-none"
              >
                <div className="flex items-center justify-between">
                  <h3
                    className={`text-2xl transition-colors duration-300 ${
                      isOpen ? "text-[#111111]" : "text-slate-400"
                    }`}
                  >
                    {title}
                  </h3>
                  <span
                    className={`font-mono text-xl transition-colors duration-300 ${
                      isOpen ? "text-slate-500" : "text-slate-300"
                    }`}
                  >
                    {step}
                  </span>
                </div>

                <motion.div
                  initial={false}
                  animate={isOpen ? "open" : "closed"}
                  variants={panel}
                  className="overflow-hidden"
                >
                  <div className="flex gap-5 pt-6">
                    {images.map((src, imgIdx) => (
                      <motion.img
                        key={imgIdx}
                        src={src}
                        alt={`${title} preview ${imgIdx + 1}`}
                        variants={image}
                        whileHover={imageHover}
                        className="h-24 w-24 shrink-0 rounded-xl object-cover md:h-[120px] md:w-[120px]"
                      />
                    ))}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>
    </MotionConfig>
  );
};

export default ServicesSection;