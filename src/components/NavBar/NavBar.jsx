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

            <input type="checkbox" id="clickEvent" />
            <label for="clickEvent" >
              <div className="userMenu">
                <img
                  src="../../../src/Assets/round-account-button-with-user-inside.png"
                  alt=""
                />
              </div>
            </label>

            <div className="modalUserMenu">
              <ul className="userMenuOptions">
                <NavLink to="/Account">
                  <li>Mi Perfil</li>
                </NavLink>
                <NavLink to="/Panel">
                  <li>Mi Panel</li>
                </NavLink>
              </ul>
            </div>

          </li>

          <li className="navBar-item">
            <NavLink className="navBar-link" to="/home">
              <img src="../../../src/Assets/home-button.png" alt="" />
            </NavLink>
          </li>

        </ul>
      </div>


      {/*

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

      */}

    </>
  );
};

export default NavBar;
