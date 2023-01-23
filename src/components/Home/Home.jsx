import React from 'react';
import About from './About/About';
import Reviews from './Reviews/Reviews';
import Contact from './Contact/Contact';
import NewQualitys from './NewQualitys/NewQualitys';
import NewQuestions from './NewQuestions/NewQuestions';
import NewPacks from './NewPacks/NewPacks';
import { useNavigate } from "react-router-dom";
import './Home.scss';

const Home = ({fromCheckout}) => {

  const navigate = useNavigate();

  fromCheckout && navigate('');

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



