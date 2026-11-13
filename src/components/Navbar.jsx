import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import WhatsAppCTA from '../ui/WhatsAppCTA'; // Adjust path if needed

const Navbar = ({
  whatsappNumber = "1234567890",
  whatsappMessage = "Hi! I'd love to book a call to discuss a project.",
}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Toggle background style after passing threshold
      setIsScrolled(currentScrollPos > 20);

      // Hide navbar when scrolling down, reveal when scrolling up (or at the very top)
      if (prevScrollPos < currentScrollPos && currentScrollPos > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navGroups = [
    {
      label: "Home",
      href: "#",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Services",
      items: [
        { title: "Websites & SaaS", desc: "High-performance web apps & modern digital platforms.", href: "#services-web" },
        { title: "Mobile Apps", desc: "Native iOS & Android cross-platform solutions.", href: "#services-apps" },
        { title: "Custom Software", desc: "Bespoke enterprise software tailored to your workflow.", href: "#services-software" },
        { title: "Automation Engines", desc: "Automate complex business processes & tasks.", href: "#services-automation" },
        { title: "AI & ML Solutions", desc: "Intelligent agentic models & LLM integrations.", href: "#services-ai" },
      ],
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ];

  const NavItem = ({ title, desc, href }) => (
    <motion.li whileHover={{ x: 4 }}>
      <a href={href || "#"} className="group/item flex flex-col gap-1 rounded-xl p-3 transition-all hover:bg-[#536878]/15">
        <span className="flex items-center justify-between text-sm font-semibold text-black">
          {title} <ArrowRight size={14} className="-translate-x-2 opacity-0 transition-all group-hover/item:translate-x-0 group-hover/item:opacity-100" />
        </span>
        <span className="line-clamp-2 text-[11px] font-medium text-slate-600">{desc}</span>
      </a>
    </motion.li>
  );

  return (
    <nav className={`fixed top-0 z-[100] w-full transition-all duration-500 ease-in-out ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    } ${
      isScrolled ? 'border-b border-black/10 bg-white/85 py-3 shadow-sm backdrop-blur-xl' : 'bg-transparent py-6'
    }`}>
      
      {/* Container wrapper set to full width with mx-6 on mobile and mx-12 on desktop */}
      <div className="mx-6 flex max-w-[100vw] items-center justify-between lg:mx-12">
        
        {/* LOGO (Comfortaa font applied ONLY here) */}
        <div className="flex-shrink-0">
          <a href="#" className="flex items-center gap-0.5 font-['Comfortaa'] text-3xl font-bold text-black">
            ODISY<span className="text-[#536878]">.</span>
          </a>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden items-center gap-2 lg:flex">
          {navGroups.map((group, idx) => (
            <div 
              key={idx} 
              className="relative"
              onMouseEnter={() => group.items && setHoveredIndex(idx)}
              onMouseLeave={() => group.items && setHoveredIndex(null)}
            >
              {group.items ? (
                <button className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-bold transition-all ${
                  hoveredIndex === idx ? 'text-[#536878]' : 'text-black hover:text-[#536878]'
                }`}>
                  {group.label}
                  <ChevronDown size={14} className={`transition-transform duration-300 ${hoveredIndex === idx ? 'rotate-180' : ''}`} />
                </button>
              ) : (
                <a href={group.href} className="px-4 py-2 text-sm font-bold text-black transition-all hover:text-[#536878]">
                  {group.label}
                </a>
              )}

              {/* DROPDOWN MENU FOR SERVICES */}
              <AnimatePresence>
                {hoveredIndex === idx && group.items && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="absolute left-0 top-full w-80 pt-4"
                  >
                    <div className="rounded-2xl border border-[#536878]/30 bg-white p-4 shadow-2xl backdrop-blur-2xl ring-1 ring-black/5">
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

        {/* DESKTOP CTA ACTION BUTTON (Imported WhatsAppCTA) */}
        <div className="hidden items-center lg:flex">
          <WhatsAppCTA
            phoneNumber={whatsappNumber}
            message={whatsappMessage}
            label="Book a call"
          />
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button 
          onClick={() => setIsMobileMenuOpen(true)} 
          className="rounded-xl border border-black/15 p-2 text-black transition-colors hover:bg-black/5 lg:hidden"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* MOBILE FULLSCREEN MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="fixed inset-0 z-[150] flex flex-col overflow-y-auto bg-white p-6 text-black"
          >
            <div className="mb-10 flex items-center justify-between">
              <span className="font-['Comfortaa'] text-2xl font-bold text-black">
                ODISY<span className="text-[#536878]">.</span>
              </span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="rounded-full border border-black/15 bg-black/5 p-3 text-black">
                <X size={24} />
              </button>
            </div>
            
            <div className="space-y-8 pb-12">
              {navGroups.map((group, idx) => (
                <div key={idx}>
                  {group.items ? (
                    <div>
                      <p className="mb-4 text-[10px] font-black uppercase tracking-[0.2em] text-[#536878]">{group.label}</p>
                      <div className="grid gap-4 pl-2">
                        {group.items.map((item, i) => (
                          <a key={i} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="group">
                            <p className="text-lg font-bold text-black group-active:text-[#536878]">{item.title}</p>
                            <p className="mt-0.5 text-xs text-black/60">{item.desc}</p>
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a 
                      href={group.href} 
                      onClick={() => setIsMobileMenuOpen(false)} 
                      className="block text-2xl font-bold text-black transition-colors hover:text-[#536878]"
                    >
                      {group.label}
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* MOBILE CTA ACTION BUTTON (Imported WhatsAppCTA) */}
            <div className="mt-auto border-t border-black/10 pt-6">
              <WhatsAppCTA
                phoneNumber={whatsappNumber}
                message={whatsappMessage}
                label="Book a call"
                className="w-full [&>a]:w-full [&>a]:justify-center"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;