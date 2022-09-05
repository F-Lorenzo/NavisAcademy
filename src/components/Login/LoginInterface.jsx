import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Login.css'

const LoginInterface = () => {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    return (
        <>
        <div className="caja__trasera">             
            <div className="caja__trasera-login">
                <h3>Ingrese su email</h3>
                <input type="email" onChange={(e) => setEmail(e.target.value)}/>
                <p>Ingrese su contraseña</p>
                <input type="password" onChange={(e) => setPassword(e.target.value)}/>
                <button id="btn__iniciar-sesion">Iniciar Sesión</button>
            </div>
        </div>
        </>
    )
}

export default LoginInterface;