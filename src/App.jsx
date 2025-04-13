import React from 'react'
import Hero from './components/Hero/Hero'
import ShowcaseSection from './components/ShowcaseSection'
import Navbar from './components/Navbar'
import LogoShowcase from './components/LogoShowcase'
import StrengthCards from './components/StrengthCards'
import ExperienceSections from './components/ExperienceSections'
import TechStack from './components/TechStack'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  
  return (
    <>
      <Navbar/>
      <Hero/>
      <ShowcaseSection/>
      <LogoShowcase/>
      <StrengthCards/>
      <ExperienceSections/>
      <TechStack/>
      <Testimonials/>
      <Contact/>
    </>
  )
}

export default App