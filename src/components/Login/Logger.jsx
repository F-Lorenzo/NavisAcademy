import React from 'react';
import { NavLink } from 'react-router-dom';
import './Login.css'

const Logger = () => {

    return (
        <>
        <div className="caja__trasera">             
            <div className='form__Register'>
                <h3>¿Ya tienes una cuenta?</h3>
                <p>Inicia sesion con tu cuenta</p>
                <NavLink to='/signIn'>
                    <button className='boton__login' id="btn__iniciar-sesion">Iniciar Sesion</button>
                </NavLink>
            </div>
            <div className='form__Register'>
                <h3>¿Todavia no te registraste?</h3>
                <p>Registrate gratis</p>
                <NavLink to='/signUp'>
                    <button className='boton__login' id="btn__registrarse">Registrarse</button>
                </NavLink>
            </div>
        </div>
        </>
    )

}

export default Logger;