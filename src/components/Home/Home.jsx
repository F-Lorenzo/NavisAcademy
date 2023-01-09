import React from 'react';
import About from './About/About';
import Reviews from './Reviews/Reviews';
import Contact from './Contact/Contact';
import NewQualitys from './NewQualitys/NewQualitys';
import NewQuestions from './NewQuestions/NewQuestions';
import NewPacks from './NewPacks/NewPacks';
import './Home.css';

const Home = () => {
  return (
    <>
        <About />
        <NewQualitys />
        <Reviews />  
        <NewPacks />
        <NewQuestions />
        <Contact />
        {/*
        */}
    </>
  )
}

export default Home



