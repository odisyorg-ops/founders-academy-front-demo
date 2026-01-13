import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const navGroups = [
    {
      label: "Sales Training",
      items: [
        { title: "SDR Program", desc: "Master the art of prospecting as a Sales Development Representative." },
        { title: "BDM Program", desc: "Advanced strategies for Business Development Managers." },
        { title: "AM Program", desc: "Retention and growth tactics for Account Managers." },
      ],
    },
    {
      label: "Personal Growth",
      items: [
        { title: "Executive Coaching", desc: "1:1 career guidance to unlock your potential." },
        { title: "Mentorship", desc: "Ongoing professional support from industry leaders." },
        { title: "Fitness & Wellbeing", desc: "Peak performance strategies for body and mind." },
      ],
    },
    {
      label: "Business Services",
      items: [
        { title: "Consulting", desc: "End-to-end sales process optimization." },
        { title: "Financial Planning", desc: "Wealth building and portfolio management." },
        { title: "Accountancy & Tax", desc: "Full HMRC compliance and tax efficiency." },
      ],
    },
    {
      label: "Digital Solutions",
      items: [
        { title: "E-commerce", desc: "Scalable online sales strategies and platforms." },
        { title: "Software Development", desc: "Custom software tailored to your workflow." },
      ],
    },
  ];

  // Internal Reusable Item Component
  const NavItem = ({ title, desc }) => (
    <li>
      <a className="flex flex-col items-start gap-1 p-3 rounded-lg transition-colors hover:bg-slate-50 focus:bg-base-300">
        <span className="font-bold text-sm text-black">{title}</span>
        <span className="text-xs opacity-70 whitespace-normal leading-relaxed">{desc}</span>
      </a>
    </li>
  );

  return (
    <div className="navbar bg-transparent backdrop-blur-md text-black  px-4 md:px-8 sticky top-0 z-50">
      
      {/* --- Mobile View (Kept DaisyUI CSS logic for simplicity on mobile) --- */}
      <div className="navbar-start">
        <div className="dropdown bg-white text-black">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content text-black bg-base-100 rounded-box z-1
           mt-3 w-80 p-2 shadow-2xl border border-base-200">
            {navGroups.map((group, idx) => (
              <li key={idx}>
                <details>
                  <summary className="font-bold text-primary uppercase text-xs tracking-widest">{group.label}</summary>
                  <ul className="p-2 border-l-2 border-base-200 ml-2">
                    {group.items.map((item, i) => (
                      <NavItem key={i} {...item} />
                    ))}
                  </ul>
                </details>
              </li>
            ))}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-black tracking-tighter">GROWTH.</a>
      </div>

      {/* --- Desktop View (Enhanced with Framer Motion) --- */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1">
          {navGroups.map((group, idx) => (
            <li 
              key={idx} 
              className="relative"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Trigger Button */}
              <div 
                className={`btn btn-sm border-none shadow-none items-center bg-transparent text-black flex gap-1 transition-colors ${hoveredIndex === idx ? 'text-primary bg-slate-100' : ''}`}
              >
                {group.label}
                <motion.svg 
                  animate={{ rotate: hoveredIndex === idx ? 180 : 0 }}
                  className="fill-current opacity-50" 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="12" 
                  height="12" 
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </motion.svg>
              </div>

              {/* Animated Dropdown */}
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="absolute top-full left-0 w-80 pt-4" // pt-4 creates the invisible bridge
                  >
                    <div className="bg-white rounded-md p-3 shadow-xl border border-slate-200 overflow-hidden">
                      <div className="px-3 py-2 border-base-200  ">
                        <span className="text-sm font-black text-primary">
                          {group.label}
                        </span>
                      </div>
                      <ul className="grid gap-1">
                        {group.items.map((item, i) => (
                          <NavItem key={i} {...item} />
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end gap-2">
        <button className="btn btn-primary btn-sm md:btn-md shadow-lg shadow-primary/20">Enroll Now</button>
      </div>
    </div>
  );
};

export default Navbar;