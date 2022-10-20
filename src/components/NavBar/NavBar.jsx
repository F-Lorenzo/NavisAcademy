import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import logo from "../../assets/img/logo.svg";

const NavBar = () => {
  return (
    <>
      <div className="navBarContainer">
        <NavLink className="navBar-brand" to="/home">
          <img src={logo} alt="" />
        </NavLink>
        <ul className="navBar-options">
          <li className="navBar-item">
            <NavLink className="navBar-link" to="/account">
              <img
                src="../../../src/Assets/round-account-button-with-user-inside.png"
                alt=""
              />
            </NavLink>
          </li>
          <li className="navBar-item">
            <NavLink className="navBar-link" to="/home">
              <img src="../../../src/Assets/home-button.png" alt="" />
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navBarContainer">
        <ul className="navBar-options">
          <li className="navBar-item">
            <NavLink className="navBar-link" to="/Teacher">
              PROFESSOR
            </NavLink>
          </li>
          <li className="navBar-item">
            <NavLink className="navBar-link" to="/Alumn">
              ALUMN
            </NavLink>
          </li>
          <li className="navBar-item">
            <NavLink className="navBar-link" to="/Admin">
              ADMIN
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
