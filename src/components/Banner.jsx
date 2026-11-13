import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import WhatsAppCTA from "../ui/WhatsAppCTA"; // <--- Imported here
import bannerPic1 from "../assets/banner (1).jpg";
import bannerPic2 from "../assets/banner (2).jpg";
import bannerPic3 from "../assets/banner (3).jpg";
import bannerPic4 from "../assets/banner (4).jpg";
import bannerPic5 from "../assets/banner (5).jpg";
import bannerPic6 from "../assets/banner (6).jpg";
import bannerPic7 from "../assets/banner (7).jpg";

// --- CONSTANTS / DEFAULTS ---
const DEFAULT_TAGS = [
  "Websites",
  "Mobile App",
  "Custom Software",
  "Automation",
  "AI & ML Solution",
];

const ROTATING_WORDS = [
  "design",
  "develop",
  "deploy",
  "scale",
  "automate",
];

// Map imported banner pictures to the card elements
const BANNER_IMAGES = [
  bannerPic1,
  bannerPic2,
  bannerPic3,
  bannerPic4,
  bannerPic5,
  bannerPic6,
  bannerPic7,
];

const CARDS_DATA = BANNER_IMAGES.map((img, i) => ({
  id: `card-${i}`,
  image: img,
}));

// --- SUB-COMPONENTS ---

// Smooth, self-contained inline text rotator using Comfortaa
export const RotatingText = ({
  words = ROTATING_WORDS,
  interval = 2200,
  className = "text-[#536878]",
}) => {
  const [index, setIndex] = useState(0);
  const [widths, setWidths] = useState([]);
  const measureRefs = useRef([]);

  // Rotate words
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words.length, interval]);

  // Measure every word's real width (hidden copies)
  useLayoutEffect(() => {
    const measure = () => {
      setWidths(measureRefs.current.map((el) => (el ? el.offsetWidth : 0)));
    };

    measure();

    // Re-measure once Comfortaa has actually loaded (fallback font differs in width)
    if (document.fonts?.ready) document.fonts.ready.then(measure);

    // Re-measure when the font size changes (responsive breakpoints)
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [words]);

  const currentWidth = widths[index];

  return (
    <motion.span
      className="relative inline-flex overflow-hidden align-bottom py-[0.1em] -my-[0.1em]"
      initial={false}
      animate={{ width: currentWidth ?? "auto" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Hidden measuring copies (not visible, not read by screen readers) */}
      <span
        aria-hidden="true"
        className="pointer-events-none invisible absolute left-0 top-0 whitespace-nowrap"
      >
        {words.map((word, i) => (
          <span
            key={word}
            ref={(el) => (measureRefs.current[i] = el)}
            className={`absolute left-0 top-0 inline-block whitespace-nowrap font-['Comfortaa'] ${className}`}
          >
            {word}
          </span>
        ))}
      </span>

      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className={`inline-block whitespace-nowrap font-['Comfortaa'] ${className}`}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
};

export const ServiceTickerPill = ({ tags = DEFAULT_TAGS }) => (
  <div className="">
    <div className="flex items-center gap-2 justify-center">
      {/* Subtle live indicator dot */}
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-700 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-800" />
      </span>
      <span>Available For Work</span>
    </div>
  </div>
);

// --- MAIN BANNER COMPONENT ---
const Banner = ({
  tags = DEFAULT_TAGS,
  rotatingWords = ROTATING_WORDS,
  whatsappNumber = "1234567890",
  whatsappMessage = "Hi! I'd love to discuss a project with you.",
  ctaLabel = "let's talk...",
}) => {
  return (
    <section className="relative flex min-h-[100dvh] w-full flex-col justify-between overflow-hidden bg-white pt-32 text-[#111111] sm:pt-40 font-['Comfortaa']">
      {/* Top / Center Hero Copy & CTA */}
      <div className="z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        {/* Mini Service Pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-7"
        >
          <ServiceTickerPill tags={tags} />
        </motion.div>

        {/* Cohesive Heading with Comfortaa font applied */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
          className="text-4xl font-bold tracking-tight text-[#111111] sm:text-6xl md:text-[64px] md:leading-[1.1] font-['Comfortaa']"
        >
          We <RotatingText words={rotatingWords} className="text-[#536878]" />{" "}
          products
          <br />
          that mean something
        </motion.h1>

        {/* WhatsApp CTA Button with Aura (Imported Component) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          className="mt-10"
        >
          <WhatsAppCTA
            phoneNumber={whatsappNumber}
            message={whatsappMessage}
            label={ctaLabel}
          />
        </motion.div>
      </div>

      {/* Bottom Single Horizontal Marquee with Imported Images */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.8, ease: "easeOut" }}
        className="relative mt-16 w-full overflow-hidden pb-6 pt-8"
      >
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 32, ease: "linear" }}
          className="flex w-max gap-6 px-3"
        >
          {[...CARDS_DATA, ...CARDS_DATA].map((card, idx) => (
            <div
              key={`${card.id}-${idx}`}
              className="group relative h-80 w-80 shrink-0 overflow-hidden rounded-2xl border border-black/10 bg-neutral-100 shadow-xl sm:h-96 sm:w-96"
            >
              <img
                src={card.image}
                alt={`Banner Showcase ${idx + 1}`}
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Banner;