import React from "react";
import { useState, useEffect } from "react";
import "./About.scss";
import VideoNavis from "./VideoNavis/VideoNavis";
import VideoNavisPlay from "./VideoNavis/VideoNavisPlay";

const About = () => {

  const [ play, setPlay ] = useState(false);

  setTimeout(() => {
      setPlay(true);
  }, 10000);

  console.log(play);

  return (
    <section className="about_container">

      <div className="about">
        <h2 className="about__title">
          ¡Se <span>aprende</span> desde el primer día!
        </h2>
        <span className="parrafo__content">
          ¿Necesitas aprobar un examen de inglés?, ¿Quieres estudiar en el extranjero?, 
          ¿En tu trabajo dominar el inglés es un requisito?, Te ayudaremos a conseguirlo. 
          En Navis nos adaptamos tus objetivos a la hora de aprender inglés, 
          ya sea desde cero o para un fin en específico, con nosotros lo lograras. 
          Aprende inglés de manera fácil, rápida y entretenida.
        </span>
      </div>

      { play === true ?
        <div className="about">
          <VideoNavisPlay /> 
        </div>
        :
        <div className="about">
          <VideoNavis /> 
        </div>
      }
      
    </section>
  );
};

export default About;
