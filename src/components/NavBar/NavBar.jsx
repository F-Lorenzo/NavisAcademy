import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import logo from "../../assets/img/logo.svg";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../Context/AuthContext";
import NotificationsAlert from "./NotificationsAlert";


const NavBar = () => {

  const { userLogged, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/logger");
      swal("BYE!", `sesion Finalizada!`, "success");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>

      <div className="navBarContainer">

        <NavLink className="navBar-brand" to="/">
          <img src={logo} alt="" />
        </NavLink>

        { userLogged ? 
        
          <ul className="navBar-options">

            <li className="navBar-item">
              <NavLink className="navBar-link" to="/MisNotificaciones">
                <NotificationsAlert />
              </NavLink>
            </li>
            
            <li className="navBar-item">

              <input type="checkbox" id="clickEvent" />
              <label htmlFor="clickEvent">
                <div className="userMenu">
                  <img
                    src="../../../src/Assets/round-account-button-with-user-inside.png"
                    alt="userIcon.png"
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
                  <NavLink to="/Panel">
                    <li>Mis Notificaciones</li>
                  </NavLink>
                  <NavLink to="/Panel">
                    <li onClick={handleLogout}>Cerrar Sesión</li>
                  </NavLink>
                </ul>
              </div>

            </li>

          </ul>

          :

          <ul className="navBar-options">
            <NavLink className="navBar-link" to='/signIn'>
              <li className="navBar-item">Iniciar Sesion</li>
            </NavLink>
            <NavLink className="navBar-link" to='/signUp'>
              <li className="navBar-item">Registrarse</li>
            </NavLink>
          </ul>
        }

      </div>

    </>
  );
};

export default NavBar;
