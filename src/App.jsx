import React from 'react'
import { ReactLenis } from 'lenis/react'
import { MessageCircle } from 'lucide-react'
import './App.css'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import ClientMarquee from './components/ClientMarquee'
import ServicesSection from './components/ServicesSection'
import TestimonialsSection from './components/TestimonialsSection'
import BenefitsSection from './components/BenefitsSection'
import FAQSection from './components/FAQSection'


const AGENCY_CONFIG = {
  whatsappNumber: "8801700000000",
  defaultMessage: "Hello ODISY team! I'm reaching out from your website to discuss a project.",
  smoothScrollOptions: {
    lerp: 0.1,
    duration: 1.5,
    smoothTouch: false,
    wheelMultiplier: 1,
  }
};




function App() {


  return (
    <ReactLenis root options={AGENCY_CONFIG.smoothScrollOptions}>
      <div className='relative min-h-screen w-full bg-[#0a0a0a] selection:bg-[#536878]/30 selection:text-[#e5e4e2]'>
        
        {/* Hero Section Container */}
        <div className='flex min-h-screen w-full flex-col'>
          <Navbar />
          <Banner />
        </div>

        {/* Content Flow */}
        <main className='relative z-10 bg-white'>
          <ClientMarquee />
          <ServicesSection />
          <BenefitsSection></BenefitsSection>
          <TestimonialsSection></TestimonialsSection>
          <FAQSection></FAQSection>
          <CallToAction phoneNumber={AGENCY_CONFIG.whatsappNumber} />
        </main>

        <Footer />

        

      </div>
    </ReactLenis>
  )
}

export default App