import React from "react";
import "./Contact.css";
import contact from "../../../assets/img/contacto.svg";

const Contact = () => {
  return (
    <>
      <div className="homeSection__Title">
        <h2>Contacto</h2>
      </div>

      <section className="contact__Section">
        <div className="contact__Img">
          <img src={contact} alt="" />
        </div>

        <div className="contact__body">
          <span>+000 (000) 000-0000</span>
        </div>
      </section>
    </>
  );
};

export default Contact;
