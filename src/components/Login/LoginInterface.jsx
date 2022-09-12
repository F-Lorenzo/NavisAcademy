import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Loader from '../Loader'
import { NavLink } from 'react-router-dom';
import './Login.css'



const LoginInterface = () => {
    const [ userData, setUserData ] = useState ([]);
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ loginSuccess, setLoginSuccess ] = useState(false);
    const [ loader, setLoader ] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setLoginSuccess(true);
                setLoader(false);
                swal("Bienvenido", `sesion iniciada como ${user.email}`, "success");
            })
            .catch((error) => {
                setLoader(false);
                swal("UPS!", `Invalid Password`, "error");
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    
    }

    if (loader) {
        return (
            <Loader />
        )
    }
   
    if (loginSuccess) {
        return (
            <h1>Usuario {email}</h1>
        )
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