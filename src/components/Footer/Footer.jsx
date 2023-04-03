import React from "react";
import "./Footer.css";
import logoFooter from "../../assets/img/logo.webp";
import facebook from "../../assets/img/facebook.webp";
import instagram from "../../assets/img/instagram.webp";
import ws from "../../assets/img/whatsapp.webp";
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
              <a href="https://www.facebook.com/profile.php?id=100089423539931" target="_blank">
                <img src={facebook} alt="link a facebook" />
              </a>
              <a href="https://www.instagram.com/navisacademia/" target="_blank">
                <img src={instagram} alt="link a instagram" />
              </a>
              <a href="https://api.whatsapp.com/message/TFO62IOMTONMO1?autoload=1&app_absent=0" target="_blank">
                <img src={ws} alt="link a whatsapp" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
