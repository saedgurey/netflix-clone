import React from 'react'
import HomeHhero from '../components/HomeHhero'
import Features from '../components/features/Features'
import Faqs from '../components/faqs/faqs'
import Footer from '../components/footer/Footer'

const Home = () => {
  return (
    <div>
      <HomeHhero/>
      <Features/>
      <Faqs/>
      <Footer/>
      </div>
  )
}

export default Home