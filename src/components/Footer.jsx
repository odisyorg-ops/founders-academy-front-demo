
const Footer = () => {
  const sections = [
    { title: "Company", links: ["Home", "About Us", "Contact Us", "Book a Call"] },
    { title: "Services", links: ["SDR Training", "BDM Training", "AM Training", "Coaching", "Mentorship"] },
    { title: "Support", links: ["Customer Support", "Resource Library", "Cookie Settings"] },
    { title: "Legal", links: ["Privacy Policy", "Terms of Use"] }
  ];

  return (
    <footer className="h-[70vh] min-h-[600px] w-full bg-white pt-24 pb-12 px-6 md:px-12 lg:px-24 flex flex-col justify-between border-t border-slate-100 relative overflow-hidden">
      {/* Massive Background Text */}
      <div className="absolute bottom-0 left-0 w-full select-none pointer-events-none opacity-[0.03]">
        <h1 className="text-[30vw] font-black leading-none mb-[-5vw]">GROWTH.</h1>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-2 lg:grid-cols-5 gap-12 relative z-10">
        <div className="col-span-2">
          <h2 className="text-3xl font-black text-slate-900 tracking-tighter mb-6">Growth<span className="text-blue-600">.</span></h2>
          <p className="text-slate-400 max-w-xs leading-relaxed font-medium">
            Systematizing high-performance business development for the modern enterprise.
          </p>
        </div>
        
        {sections.map((sec, i) => (
          <div key={i}>
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-6">{sec.title}</h4>
            <ul className="space-y-4">
              {sec.links.map((link, j) => (
                <li key={j}>
                  <a href="#" className="text-slate-500 hover:text-blue-600 font-medium transition-colors text-sm">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto w-full border-t border-slate-100 pt-8 flex flex-col md:row items-center justify-between gap-6 relative z-10">
        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
          © 2026 The Founder Academy™. All rights reserved.
        </p>
        <div className="flex gap-8 text-slate-400">
           <a href="#" className="hover:text-blue-600 transition-colors text-xs font-black uppercase tracking-widest">Twitter</a>
           <a href="#" className="hover:text-blue-600 transition-colors text-xs font-black uppercase tracking-widest">LinkedIn</a>
           <a href="#" className="hover:text-blue-600 transition-colors text-xs font-black uppercase tracking-widest">YouTube</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;