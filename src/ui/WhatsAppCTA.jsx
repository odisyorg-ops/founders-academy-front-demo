import { motion } from "framer-motion";
import React from "react";

export const WhatsAppCTA = ({
  phoneNumber = "1234567890", // Replace with your WhatsApp number (with country code, no '+')
  message = "Hi! I'd love to discuss a project with you.",
  label = "let's talk...",
  className = "",
}) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className={`relative inline-flex items-center justify-center group font-['Comfortaa'] ${className}`}>
      {/* Multi-layered Ambient Aura Glow */}
      <div
        aria-hidden="true"
        className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#536878] via-slate-400 to-[#536878] opacity-55 blur-lg transition-all duration-500 group-hover:-inset-1.5 group-hover:opacity-90 group-hover:blur-xl"
      />
      <div
        aria-hidden="true"
        className="absolute -inset-0.5 rounded-full bg-[#536878]/40 blur-sm transition-opacity duration-300 group-hover:opacity-100"
      />

      {/* Main Pill Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="relative flex items-center gap-2.5 rounded-full border border-white/15 bg-[#111111] px-8 py-4 text-sm font-semibold tracking-wide text-white shadow-2xl transition-colors duration-300 hover:bg-[#1a1f24]"
      >
        <span>{label}</span>
      </motion.a>
    </div>
  );
};

export default WhatsAppCTA;