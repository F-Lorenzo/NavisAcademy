import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from "../../Context/AuthContext";
import logo from "../../assets/img/logo.webp";
import userButton from "../../../src/Assets/userButton.png";
import NotificationsAlert from "./NotificationsAlert";
import DropDown from './DropDown';
import './NavBar.css';

const UpdatedNavBar = () => {

    const { userLogged, logOut } = UserAuth();
    const navigate = useNavigate();
    const [ click, setClick ] = useState(false);
    const [ dropdown, setDropdown ] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };

    const handleLogout = async () => {
        closeMobileMenu
        try {
          await logOut();
          navigate("/signIn");
          swal("BYE!", `sesion Finalizada!`, "success");
        } catch (e) {
          console.log(e.message);
        }
    };

    return (
        <div>
            <nav className='navbar'>

                <Link to='/' className='navbar-logo'>
                    <img src={logo} width="160" height="43" alt="NAVIS LOGO" />
                </Link>

                { userLogged ? 

                <div>

                    <div className='mobile-menu'>

                        <div className="menu-icon" onClick={handleClick}>
                            <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                        </div>

                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                            <li className="nav-item">
                                <Link to='/Account' className='nav-links' onClick={closeMobileMenu}>
                                    Mi Perfil
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to='/Panel' className='nav-links' onClick={closeMobileMenu}>
                                    Mi Panel
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to='/MisNotificaciones' className='nav-links' onClick={closeMobileMenu}>
                                    Mis Notificaciones
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to='/signIn' className='nav-links' onClick={handleLogout}>
                                    Cerrar Sesión
                                </Link>
                            </li>

                        </ul>

                    </div>


                    <div className='desktop-menu'>
                        
                        <ul className={'nav-menu'}>

                            <li className="nav-item">
                                <Link to='/MisNotificaciones' className='nav-links' onClick={closeMobileMenu}>
                                    <NotificationsAlert />
                                </Link>
                            </li>

                            <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                                <div>
                                    <Link to='/Panel' className='nav-links' onClick={closeMobileMenu}>
                                        <img src={userButton} width="30" height="30" alt="userIcon.png"/>
                                        <i className='fas fa-caret-down'/>
                                    </Link>

                                </div>
                                {dropdown ? <DropDown /> : ''}
                            </li>

                        </ul>

                    </div>

                </div>

                : 

                <div>

                    <div className='mobile-menu'>

                        <div className="menu-icon" onClick={handleClick}>
                            <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                        </div>

                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                            <li className="nav-item">
                                <Link to='/signIn' className='nav-links' onClick={closeMobileMenu}>
                                    Iniciar Sesion
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to='/signUp' className='nav-links' onClick={closeMobileMenu}>
                                    Registrarse
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                    Cerrar
                                </Link>
                            </li>

                        </ul>

                    </div>

                    <div className="desktop-menu">
                        <div>
                            <ul className="nav-menu">
                                <li className='nav-item'>
                                    <Link to='/signIn' className='nav-links'>
                                        Iniciar Sesión
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='/signUp' className='nav-links'>
                                        Registrarse
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </div>

                </div>               

                }

            </nav>
        </div>
    )

}

export default UpdatedNavBar
