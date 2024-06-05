import React from 'react'
import HeroSection from './components/HeroSection'
import KeyProblemsSection from './components/KeyProblemsSection'
import KeyMetricsSection from './components/KeyMetricsSection'
import ReviewsSection from './components/ReviewsSection'
import Dropdown from './components/Dropdown'
import Footer from './components/Footer'
import CTASection from './components/CTASection'
import { Container } from 'postcss'

function App() {
  return (
 <div className='w-[200%] sm:w-auto'>
    <HeroSection />
    <KeyProblemsSection/>
    <KeyMetricsSection/>
    <ReviewsSection/>
    <Dropdown/>
    <CTASection/>
    <Footer/>
 </div>
  )
}

export default App