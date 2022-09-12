import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Login.css'

import { getFirestore, collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';

const LoginInterface = () => {
    const [ userData, setUserData ] = useState ([]);
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");


    const passVerification = (passLog) => {
        if (userData.password === passLog) { 
            return true 
        } else {
            return false
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'Users');
        const queryFilter = query(queryCollection, where('email', "==", email));
        
        getDocs(queryFilter)
        .then(res => {
            setUserData(res.docs.map(user => ({id: user.id, ...user.data()})));
        })
        
        if (passVerification(password)) {
            swal("Bienvenido", `Inicio de sesion como ${form.email}`, "success");
        } else {
            swal("Ups", `La contraseña no es valida`, "error");
        }

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