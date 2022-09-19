import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <section className="main__Content">
        <div className="about__1">
          <div className="contenido">
            <h2>Quienes Somos</h2>
            <span className="parrafo__content">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
              nisi vel quasi iure in temporibus porro, iste laudantium quos
              consequuntur! Laudantium culpa nobis iusto animi inventore
              corrupti sit eligendi vitae.
            </span>
          </div>
        </div>

        <div className="about__2">
          <img
            src="https://cdn.pixabay.com/photo/2016/03/31/20/04/alphabet-word-images-1295488_960_720.png"
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default About;
