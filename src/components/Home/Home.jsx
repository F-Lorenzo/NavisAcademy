import React from 'react'
import ItemCards from '../PackCards/ItemCards'
import About from '../About/About'
import Qualitys from '../Qualitys/Qualitys'
import Reviews from '../Reviews/Reviews'
import Questions from '../Questions/Questions'
import Contact from '../Contact/Contact'
import Cards from '../Cards/Cards'


const Home = () => {
  return (
    <>
          <About />
          <Qualitys />
          <Reviews/>
          <Cards/>
        <Questions/>
        <Contact/>

    </>
  )
}

export default Home



