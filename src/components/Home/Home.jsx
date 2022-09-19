import React from 'react'
import ItemCards from '../PackCards/ItemCards'
import About from '../About/About'
import Qualitys from '../Qualitys/Qualitys'
import Reviews from '../Reviews/Reviews'
import Questions from '../Questions/Questions'

const Home = () => {
  return (
    <>
          <About />
          <Qualitys />
          <Reviews/>
        <ItemCards />
        <Questions/>

    </>
  )
}

export default Home
