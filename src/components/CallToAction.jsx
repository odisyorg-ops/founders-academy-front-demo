import React from 'react';
import { MessageCircle } from "lucide-react";

const CallToAction = ({ 
  phoneNumber = "+8801622214734", 
  defaultMessage = "Hello ODISY team! I'm interested in discussing a project for my business." 
}) => {
  const handleWhatsAppClick = () => {
    const encodedMsg = encodeURIComponent(defaultMessage);
    const cleanNumber = phoneNumber.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanNumber}?text=${encodedMsg}`, '_blank');
  };

  return (
    <section className="relative w-full py-24">
      {/* Outer wrapper maintaining mx-12 layout */}
      <div className="mx-12">
        <div className="relative mx-auto flex  flex-col items-center overflow-hidden rounded-[2.5rem]  bg-gradient-to-br from-[#536878]/15 via-[#0a0a0a] to-[#0a0a0a] p-12 text-center shadow-2xl md:p-24">
          
          {/* Ambient Glow Effects */}
          <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-[#536878]/20 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[#536878]/15 blur-3xl" />

          {/* Card Content */}
          <div className="relative z-10 flex flex-col items-center">
            
            

            <h2 className="mb-6 text-4xl  text-[#e5e4e2] md:text-6xl">
              Ready to Accelerate Your <br />
              <span className="text-[#536878]">Digital Footprint?</span>
            </h2>

            <p className="mb-10 max-w-2xl text-m text-[#e5e4e2]/70">
              Skip the lengthy contact forms. Connect directly with our lead architects on WhatsApp for instant scope discussions and immediate project onboarding.
            </p>

            {/* WhatsApp CTA Button */}
            <button 
              onClick={handleWhatsAppClick}
              className="group flex items-center gap-3 rounded-xl bg-[#e5e4e2] px-10 py-5 text-base font-bold text-[#0a0a0a] shadow-xl transition-all hover:bg-white hover:shadow-[#536878]/30"
            >
              <MessageCircle className="h-5 w-5 text-emerald-600 transition-transform group-hover:scale-110" />
              Chat on WhatsApp Now
            </button>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;