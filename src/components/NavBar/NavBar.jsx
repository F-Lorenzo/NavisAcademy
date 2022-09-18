import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    return (
        <>
        <div className="navBarContainer">
            <NavLink className="navBar-brand" to='/home'>NAVIS</NavLink>
            <ul className="navBar-options">
                <li className="navBar-item">
                    <NavLink className="navBar-link" to='/account'>
                        <img src="../../../src/Assets/round-account-button-with-user-inside.png" alt="" />
                    </NavLink>
                </li>
                <li className="navBar-item">
                    <NavLink className="navBar-link" to='/home'>
                        <img src="../../../src/Assets/home-button.png" alt="" /> 
                    </NavLink>
                </li>
            </ul>
        </div>
        <div className="navBarContainer">
            <ul className="navBar-options">
                <li className="navBar-item">
                    <NavLink className="navBar-link" to='/Teacher'>
                        PROFESSOR
                    </NavLink>
                </li>
                <li className="navBar-item">
                    <NavLink className="navBar-link" to='/Alumn'>
                        ALUMN
                    </NavLink>
                </li>
            </ul>
        </div>
        </>
    )
}

export default NavBar;