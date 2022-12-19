import React from "react";
import "./About.css";
import about from "../../../assets/img/about.jpg";
import CarouselVanilla from "./Carousel/CarouselVanilla";

const About = () => {
  return (
    <section className="about_container">

      <div className="about__1">
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

      <div className="about__2">
        <CarouselVanilla />
      </div>
      
    </section>
  );
};

export default About;
