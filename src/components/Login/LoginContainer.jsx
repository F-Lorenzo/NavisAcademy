import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './Login.css'
import LoginInterface from './LoginInterface';
import RegisterInterface from './RegisterInterface';

const LoginContainer = () => {
    const [ login, setLogin ] = useState(false);
    const [ register, setRegister ] = useState(false);

    const handleLogin = () => {
        setLogin(true);
    }

    const handleRegister = () => {
        setRegister(true);
    }

    if (login) {
        return (
            <LoginInterface />
        )
    }

    if (register) {
        return (
            <RegisterInterface />
        )
    }

    return (
        <>
        <div className="caja__trasera">             
            <div className="caja__trasera-login">
                <h3>¿Ya tienes una cuenta?</h3>
                <p>Inicia sesión para continuar</p>
                <button onClick={handleLogin} id="btn__iniciar-sesion">Iniciar Sesión</button>
            </div>
            <div className="caja__trasera-register">
                <h3>¿Aún no tienes una cuenta?</h3>
                <p>Registrate para iniciar sesión</p>
                <button onClick={handleRegister} id="btn__registrarse">Registrarse</button>
            </div>
        </div>
        </>
    )
}

export default LoginContainer;