import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    return (
        <>
        <div className="navBarContainer">
            <NavLink className="navBar-brand" to='/'>NAVIS</NavLink>
            <ul className="navBar-options">
                <li className="navBar-item">
                    <NavLink className="navBar-link" to='/login'>
                        <img src="../../../src/Assets/round-account-button-with-user-inside.png" alt="" />
                    </NavLink>
                </li>
                <li className="navBar-item">
                    <NavLink className="navBar-link" to='/'>
                        <img src="../../../src/Assets/home-button.png" alt="" /> 
                    </NavLink>
                </li>
            </ul>
        </div>
        <div className="navBarContainer">
            <ul className="navBar-options">
                <li className="navBar-item">
                    <NavLink className="navBar-link" to='/category/professor'>
                        PROFESSOR
                    </NavLink>
                </li>
                <li className="navBar-item">
                    <NavLink className="navBar-link" to='/category/alumn'>
                        ALUMN
                    </NavLink>
                </li>
            </ul>
        </div>
        </>
    )
}

export default NavBar;