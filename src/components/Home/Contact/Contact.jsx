import React from "react";
import "./Contact.css";
import contact from "../../../assets/img/contacto.webp";

const Contact = () => {
  return (
    <>
      <div className="homeSection__Title">
        <h2>Contacto</h2>
      </div>

      <section className="contact__Section">
        <div className="contact__Img">
          <img src={contact} width="65" height="60" alt="" />
        </div>

        <div className="contact__body">
          <span>
            <a href="mailto:contacto@navisacademia.com">
              contacto@navisacademia.com
            </a>
          </span>
        </div>
      </section>
    </>
  );
};

export default Contact;
