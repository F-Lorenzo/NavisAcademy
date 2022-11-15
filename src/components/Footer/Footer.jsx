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
            <img src={logoFooter} alt="" />
          </Link>
{/* 
          <div className="paquetes__Footer">
            <h2>Paquetes</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim.
            </p>
          </div>
          <div className="paquetes__Footer2">
            <h2>Navis</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim.
            </p>
          </div> */}

          <div>
            <div className="redes__Footer">
              <Link to="">
                <img src={facebook} alt="" />
              </Link>
              <Link to="/#">
                <img src={instagram} alt="" />
              </Link>
              <Link to="/#">
                <img src={ws} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
