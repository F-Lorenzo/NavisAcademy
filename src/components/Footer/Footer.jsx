import React from "react";
import "./Footer.css";
import logoFooter from "../../assets/img/logo.svg";
import facebook from "../../assets/img/facebook.svg";
import instagram from "../../assets/img/instagram.svg";
import ws from "../../assets/img/whatsapp.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className="footer_Content">
        <div className="footer__Container">
          <Link className="logoFooter" to="/home">
            <img src={logoFooter} alt="link a navis" />
          </Link>
          <div>
            <div className="redes__Footer">
              <Link to="/#">
                <img src={facebook} alt="link a facebook" />
              </Link>
              <Link to="/#">
                <img src={instagram} alt="link a instagram" />
              </Link>
              <Link to="/#">
                <img src={ws} alt="link a whatsapp" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
