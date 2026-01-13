import React from 'react'
import { ReactLenis } from 'lenis/react' // Import Lenis
import './App.css'
import Banner from './components/Banner'
import BDFramework from './components/BDFramework'
import Navbar from './components/Navbar'
import Outcomes from './components/Outcomes'
import ProblemSolution from './components/ProblemSolution'
import WhoIsThisFor from './components/WhoIsThisFor'
import ZigzagFunnel from './components/ZigzagFunnel'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import Packages from './components/Packages'

function App() {
  // Lenis options for that "premium" weighted feel
  const lenisOptions = {
    lerp: 0.1,
    duration: 1.5,
    smoothTouch: false, // Set to true if you want smooth scroll on mobile too
    wheelMultiplier: 1,
  };

  return (
    <ReactLenis root options={lenisOptions}>
      <div className='bg-white min-h-screen w-full selection:bg-blue-100 selection:text-blue-600'>
        
        {/* Hero Section Container */}
        <div className='w-full h-screen flex flex-col'>
          <Navbar />
          <Banner />
        </div>

        {/* Content Flow */}
        <main>
          <ZigzagFunnel />
          <ProblemSolution />
          <Outcomes />
          <BDFramework />
          <WhoIsThisFor />
          <Packages />
          <CallToAction />
        </main>

        <Footer />
      </div>
    </ReactLenis>
  )
}

export default App