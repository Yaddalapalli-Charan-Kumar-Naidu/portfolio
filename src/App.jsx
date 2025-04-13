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
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'

function App() {
  
  return (
    <>
    <Toaster position='top-right'/>
      <Navbar/>
      <Hero/>
      <ShowcaseSection/>
      {/* <LogoShowcase/> */}
      <StrengthCards/>
      <ExperienceSections/>
      <TechStack/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App