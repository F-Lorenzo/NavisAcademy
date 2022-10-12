import React from "react";
import "./About.css";
import about from "../../assets/img/about.jpg";

const About = () => {
  return (
    <>
      <section className="main__Content">
        <div className="about__1">
          <div className="contenido">
          <h2 className="about__title">Quienes Somos</h2>
            <span className="parrafo__content">
            En un mundo donde la globalización está cada vez más presente en nuestro día a día, Navis es tu
impulso hacia ello, siendo el inglés el principal idioma utilizado para los negocios, estudios y viajes, este
lenguaje representa una de las herramientas más útiles para la comunicación global. En Navis sabemos
que tus ambiciones y las de tu familia son grandes, por eso ofrecemos una manera practica y
personalizada para el aprendizaje del inglés.
Aprende inglés de manera fácil, rápida y entretenida.
            </span>
          </div>
        </div>

        <div className="about__2">
          <img
            src={about}
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default About;
