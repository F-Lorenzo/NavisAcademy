import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Login.css'

const LoginInterface = () => {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        alert(`Sesion Iniciada ${email}`);
    }

    return (
        <>
        <div className="caja__trasera">             
            <div className="caja__trasera-login">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">
                        Ingrese su email : 
                    </label>
                    <input 
                        type="email" 
                        id='email' 
                        name='email' 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <br />
                    <label htmlFor="password">
                        Ingrese su contraseña : 
                    </label>
                    <input 
                        type="password" 
                        id='password' 
                        name='password' 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    <br />
                    <button type="submit" id="btn__iniciar-sesion">Iniciar Sesión</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default LoginInterface;