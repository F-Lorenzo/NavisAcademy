import React from 'react';
import { NavLink } from 'react-router-dom';
import './Login.css'

const RegisterInterface = () => {

    return (
        <>
        <div className="caja__trasera">             
            <div className="caja__trasera-login">
                <p>Nombre</p>
                <input type="text" onChange={(e) => setEmail(e.target.value)}/>
                <p>Apellido</p>
                <input type="text" onChange={(e) => setEmail(e.target.value)}/>
                <p>Password</p>
                <input type="password" onChange={(e) => setEmail(e.target.value)}/>
                <p>Email</p>
                <input type="email" onChange={(e) => setEmail(e.target.value)}/>
                <p>Numero de telefono</p>
                <input type="tel" onChange={(e) => setEmail(e.target.value)}/>
                <p>Pais</p>
                <input type="text" onChange={(e) => setEmail(e.target.value)}/>
                <p>Ciudad</p>
                <input type="text" onChange={(e) => setEmail(e.target.value)}/>
                <button id="btn__iniciar-sesion">Crear Cuenta</button>
            </div>
        </div>
        </>
    )

}

export default RegisterInterface;