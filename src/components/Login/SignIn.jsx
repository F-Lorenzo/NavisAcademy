import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../Context/AuthContext';
import cohete from '../../assets/img/cohete.svg';
import Loader from '../Loader/Loader'
import './SignIn.scss';

const SignIn = () => {
  
    const navigate = useNavigate();
    const { user, signIn } = UserAuth();
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState('');
    const [ loader, setLoader ] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        setLoader(true);
        try {
            await signIn(email, password)
            swal("Bienvenido", `sesion iniciada como ${email}`, "success");
            navigate("/Panel");
        } catch (e) {
            setError(e.message)
            console.log(e.message)
            swal("UPS!", `${e.message}`, "error");
            setLoader(false);
        }
    };

    if (loader) {
        return (
            <Loader />
        )
    }

    return (
        <>
        <div className="signIn__main-container">        
            <div className="signIn__container">

                <div>

                    <div className='signIn__tittleColumn'>
                        <p className='signIn-logo'>
                            <img className='cohete-navis' src={cohete} alt="cohete.svg" />
                            <i className="fa-solid fa-user"></i>
                        </p>
                        <p className='signIn-tittle'>
                            Login
                        </p>
                    </div>

                    <p className='subTittle'>
                        ¿Todavia no tenes una cuenta?
                        <Link to='/signUp'>
                            Registrate.
                        </Link>
                    </p>

                </div>

                <form className='signIn__form' onSubmit={handleSubmit}>

                    <label htmlFor="email">
                        Correo electrónico
                    </label>
        
                    <input 
                        type="email" 
                        id='email' 
                        name='email' 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />

                    <label htmlFor="password">
                        Clave
                    </label>
      
                    <input 
                        type="password" 
                        id='password' 
                        name='password' 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                
                    <button type="submit" id="btn__iniciar-sesion">Iniciar Sesión</button>                   
                    
                </form>

            </div>
        </div>
        </>
    );
};

export default SignIn;

