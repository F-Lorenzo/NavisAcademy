import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Login.css'

import { getFirestore, doc, getDoc } from 'firebase/firestore';

const LoginInterface = () => {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        const querydb = getFirestore();
        const queryCollection = collection (querydb, 'Users');
        const queryFilter = query(queryCollection, where('email', '==', email));
        getDocs(queryFilter);
        if (queryFilter) {
            swal("Hola!", `Bienvenido ${email}`, "success");
        } else {
            swal("UPS", `El usuario no existe`, "fail");
        }

        swal("Hola!", `Bienvenido ${email}`, "success");
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