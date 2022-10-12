import React from 'react';
import { NavLink } from 'react-router-dom';
import './Login.css'

const Logger = () => {

    return (
        <>
        <div className="caja__trasera">             
            <div className='form__Register'>
                <h3>¿Already have an account?</h3>
                <p>Sign in to your account</p>
                <NavLink to='/signIn'>
                    <button className='boton__login' id="btn__iniciar-sesion">Sign In</button>
                </NavLink>
            </div>
            <div className='form__Register'>
                <h3>¿Don't have an account yet?</h3>
                <p>Sign up for a free account</p>
                <NavLink to='/signUp'>
                    <button className='boton__login' id="btn__registrarse">Sign up</button>
                </NavLink>
            </div>
        </div>
        </>
    )

}

export default Logger;