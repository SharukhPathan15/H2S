import { memo } from 'react'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'

// Normal imports (Standard Way)
import { About } from './components/sections/About'
import { WhatIsHackathon } from './components/sections/WhatIsHackathon'
import { WhyParticipate } from './components/sections/WhyParticipate'
import { HowToParticipate } from './components/sections/HowToParticipate'
import { Challenges } from './components/sections/Challenges'
import { Schedule } from './components/sections/Schedule'
import { Rewards } from './components/sections/Rewards'
import { FAQ } from './components/sections/FAQ'

const App = memo(function App() {
  return (
    <div className="min-h-screen bg-[#0E0E10]">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-purple-600 text-white px-4 py-2 rounded-lg z-[100] text-sm font-semibold"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <WhatIsHackathon />
        <WhyParticipate />
        <HowToParticipate />
        <Challenges />
        <Schedule />
        <Rewards />
        <FAQ />
      </main>

      <Footer />
    </div>
  )
})

export default App