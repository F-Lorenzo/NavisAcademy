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
            Lorem ipsum dolor sit amet, consectetuer
adipiscing elit, sed diam nonummy nibh
euismod tincidunt ut laoreet dolore magna
aliquam erat volutpat. Ut wisi enim ad
minim veniam, quis nostrud exerci tation
ullamcorper suscipit lobortis nisl ut aliquip
ex ea commodo consequat.
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
