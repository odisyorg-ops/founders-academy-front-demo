import React from 'react';

const Footer = () => {
  const sections = [
    {
      title: "Company",
      links: [
        { label: "Home", href: "#" },
        { label: "About Us", href: "#about" },
        { label: "Contact Us", href: "#contact" },
        { label: "Book a Call", href: "#book-call" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Websites & SaaS", href: "#services-web" },
        { label: "Mobile Apps", href: "#services-apps" },
        { label: "Custom Software", href: "#services-software" },
        { label: "Automation Engines", href: "#services-automation" },
        { label: "AI & ML Solutions", href: "#services-ai" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#privacy" },
        { label: "Terms of Use", href: "#terms" },
        { label: "Cookie Settings", href: "#cookies" },
      ],
    },
  ];

  return (
    <footer className="relative flex min-h-[70vh] w-full flex-col justify-between overflow-hidden border-t border-[#536878]/20 bg-[#0a0a0a] px-6 pb-12 pt-24 md:px-12 lg:px-20">
      
      {/* Massive Ambient Background Watermark */}
      <div className=" pointer-events-none absolute bottom-0 left-0 w-full select-none opacity-[0.03]">
        <h1 className="mx-auto text-[30vw] font-black leading-none text-[#e5e4e2]">
          ODISY
        </h1>
      </div>

      {/* Main Grid Content aligned to mx-12 layout */}
      <div className="relative z-10 mx-12 grid w-full max-w-none grid-cols-1 gap-12 lg:grid-cols-5">
        
        {/* Brand Column (Spans 2 Cols) */}
        <div className="lg:col-span-2">
          <h2 className="mb-6 text-3xl font-black tracking-tighter text-[#e5e4e2]">
            ODISY
          </h2>
          <p className="max-w-xs text-sm font-medium leading-relaxed text-[#e5e4e2]/60">
            Engineering high-performance web apps, custom software, intelligent automations, and AI/ML systems for scalable digital growth.
          </p>
        </div>
        
        {/* Navigation Sections */}
        {sections.map((sec, i) => (
          <div key={i}>
            <h4 className="mb-6 text-xs font-black uppercase tracking-widest text-[#536878]">
              {sec.title}
            </h4>
            <ul className="space-y-4">
              {sec.links.map((link, j) => (
                <li key={j}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-[#e5e4e2]/70 transition-colors hover:text-[#e5e4e2]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      

    </footer>
  );
};

export default Footer;