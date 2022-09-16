import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../Context/AuthContext';
import Loader from '../Loader/Loader'

const SignIn = () => {
  
    const navigate = useNavigate();
    const { signIn } = UserAuth();
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
            navigate('/account')
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
        <div className="caja__trasera">             
            <div className="caja__trasera-login">

                <p>¿Don't have an account yet?{' '}
                    <Link to='/signUp'>
                        Sign up.
                    </Link>
                </p>

                <form onSubmit={handleSubmit}>

                    <label htmlFor="email">
                        Email Address : 
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
                        Password : 
                    </label>
                    <input 
                        type="password" 
                        id='password' 
                        name='password' 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />

                    <br />
                
                    <button type="submit" id="btn__iniciar-sesion">Sign In</button>
                    
                </form>
            </div>
        </div>
        </>
    );
};

export default SignIn;

