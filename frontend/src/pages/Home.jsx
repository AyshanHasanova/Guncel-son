import React from 'react'
import Mehsullar from '../components/Mehsullar'
import Hero from '../components/Hero'
import MehsullarSlider from '../components/MehsullarSlider'
import Discount from '../components/Discount'
import Features from '../components/Features'
import Companies from '../components/Companies'
import Essential from '../components/Essential'
import Beauty from '../components/Beauty'
import Discover from '../components/Discover'


const Home = () => {
  return (
    <>
      <Hero/>
     <MehsullarSlider/>
     <Discount/>
     <Features/>
     <Companies/>
     <Essential/>
     <Beauty/>
     <Discover/>
    </>

  )
}

export default Home