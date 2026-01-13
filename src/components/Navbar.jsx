import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, ArrowRight, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navGroups = [
    {
      label: "Sales Training",
      items: [
        { title: "SDR Program", desc: "Master prospecting as a Sales Dev Representative." },
        { title: "BDM Program", desc: "Advanced strategies for Business Dev Managers." },
        { title: "AM Program", desc: "Retention and growth tactics for Account Managers." },
      ],
    },
    {
      label: "Personal Growth",
      items: [
        { title: "Executive Coaching", desc: "1:1 career guidance to unlock your potential." },
        { title: "Mentorship", desc: "Ongoing support from industry leaders." },
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
    {
        label: "Company",
        items: [
          { title: "About Us", desc: "The mission behind the Growth framework." },
          { title: "Resource Library", desc: "Free playbooks, templates, and guides." },
          { title: "Contact", desc: "Get in touch with our global support team." },
        ],
      },
  ];

  const NavItem = ({ title, desc }) => (
    <motion.li whileHover={{ x: 4 }}>
      <a href="#" className="flex flex-col gap-1 p-3 rounded-2xl transition-all hover:bg-blue-50/50 group/item">
        <span className="font-bold text-sm text-slate-900 group-hover/item:text-blue-600 flex items-center justify-between">
          {title} <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
        </span>
        <span className="text-[11px] text-slate-500 leading-snug font-medium line-clamp-2">{desc}</span>
      </a>
    </motion.li>
  );

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 px-4 md:px-8 lg:px-12 
      ${isScrolled ? 'py-3 bg-white/90 backdrop-blur-xl border-b border-slate-100 shadow-sm' : 'py-6 bg-transparent'}`}>
      
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        
        {/* LOGO */}
        <div className="flex-shrink-0">
          <a className="text-2xl font-black tracking-tighter text-slate-900 flex items-center gap-1">
            GROWTH<span className="text-blue-600">.</span>
          </a>
        </div>

        {/* DESKTOP NAV - Condensed labels for fit */}
        <div className="hidden xl:flex items-center gap-1">
          {navGroups.map((group, idx) => (
            <div 
              key={idx} 
              className="relative"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <button className={`px-4 py-2 rounded-full text-[13px] font-bold transition-all flex items-center gap-1
                ${hoveredIndex === idx ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'}`}>
                {group.label}
                <ChevronDown size={14} className={`transition-transform duration-300 ${hoveredIndex === idx ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="absolute top-full left-0 w-72 pt-4"
                  >
                    <div className="bg-white rounded-[2rem] p-4 shadow-2xl border border-slate-100 ring-1 ring-black/5">
                      <ul className="space-y-1">
                        {group.items.map((item, i) => <NavItem key={i} {...item} />)}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* ACTIONS */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="#" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">Client Login</a>
          <button className="px-6 py-3 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-blue-600 transition-all shadow-xl shadow-slate-200 flex items-center gap-2 group">
            Enroll Now <Sparkles size={16} className="group-hover:rotate-12 transition-transform" />
          </button>
        </div>

        {/* MOBILE TOGGLE */}
        <button onClick={() => setIsMobileMenuOpen(true)} className="xl:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-full transition-colors">
          <Menu size={24} />
        </button>
      </div>

      {/* MOBILE FULLSCREEN MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 bg-white z-[150] p-6 flex flex-col overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-10">
              <span className="text-2xl font-black text-slate-900 tracking-tighter">GROWTH.</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-3 bg-slate-100 rounded-full text-slate-900">
                <X size={24} />
              </button>
            </div>
            
            <div className="space-y-10 pb-12">
              {navGroups.map((group, idx) => (
                <div key={idx}>
                  <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mb-6">{group.label}</p>
                  <div className="grid gap-6">
                    {group.items.map((item, i) => (
                      <a key={i} href="#" className="group">
                        <p className="font-bold text-xl text-slate-900 group-active:text-blue-600">{item.title}</p>
                        <p className="text-sm text-slate-500 mt-1">{item.desc}</p>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-8 border-t border-slate-100 flex flex-col gap-4">
              <button className="w-full py-5 bg-blue-600 text-white font-bold rounded-2xl shadow-lg shadow-blue-200">Start Your Program</button>
              <button className="w-full py-5 bg-slate-50 text-slate-900 font-bold rounded-2xl">Member Sign In</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;