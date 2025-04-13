import React from 'react'
import Hero from './components/Hero/Hero'
import ShowcaseSection from './components/ShowcaseSection'
import Navbar from './components/Navbar'
import LogoShowcase from './components/LogoShowcase'
import StrengthCards from './components/StrengthCards'

function App() {
  
  return (
    <>
      <Navbar/>
      <Hero/>
      <ShowcaseSection/>
      <LogoShowcase/>
      <StrengthCards/>
    </>
  )
}

export default App