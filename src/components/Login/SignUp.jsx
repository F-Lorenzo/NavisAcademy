import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../Context/AuthContext';
import Loader from '../Loader'

const Signup = () => {
    
    const [ form, setForm ] = useState({});
    const [ loader, setLoader ] = useState(false);
    const [ error, setError ] = useState('')
    const { createUser } = UserAuth();
    const navigate = useNavigate()

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoader(true);
        try {
            await createUser(form.email, form.password);
            navigate('/account')
        } catch (e) {
            setError(e.message);
            console.log(e.message);
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

                <p className='py-2'>
                    ¿Already have an account?{' '}
                    <Link to='/signIn' className='underline'>
                        Sign in.
                    </Link>
                </p>

                <form onSubmit={handleSubmit}>

                    <label htmlFor="nombre">
                        Ingrese su nombre : 
                    </label>
                    <input 
                        type="text" 
                        id='nombre' 
                        name='nombre' 
                        value={form.nombre || ''} 
                        onChange={handleChange} 
                    />

                    <br />

                    <label htmlFor="apellido">
                        Ingrese su apellido : 
                    </label>
                    <input 
                        type="text" 
                        id='apellido' 
                        name='apellido' 
                        value={form.apellido || ''} 
                        onChange={handleChange} 
                    />
                    
                    <br />

                    <label htmlFor="password">
                        Ingrese su contraseña : 
                    </label>
                    <input 
                        type="password" 
                        id='password' 
                        name='password' 
                        value={form.password || ''} 
                        onChange={handleChange} 
                    />

                    <br />

                    <label htmlFor="email">
                        Ingrese su email : 
                    </label>
                    <input 
                        type="email" 
                        id='email' 
                        name='email' 
                        value={form.email || ''} 
                        onChange={handleChange} 
                    />

                    <br />

                    <label htmlFor="telefono">
                        Ingrese su numero de telefono : 
                    </label>
                    <input 
                        type="tel" 
                        id='telefono' 
                        name='telefono' 
                        value={form.telefono || ''} 
                        onChange={handleChange} 
                    />

                    <br />

                    <label htmlFor="pais">
                        Ingrese su pais de residencia: 
                    </label>
                    <input 
                        type="text" 
                        id='pais' 
                        name='pais' 
                        value={form.pais || ''} 
                        onChange={handleChange} 
                    />

                    <br />

                    <label htmlFor="ciudad">
                        Ingrese su ciudad de residencia: 
                    </label>
                    <input 
                        type="text" 
                        id='ciudad' 
                        name='ciudad' 
                        value={form.ciudad || ''} 
                        onChange={handleChange} 
                    />

                    <br />

                    <button type="submit" id="btn__iniciar-sesion">Crear Cuenta</button>

                </form>
            </div>
        </div>
        </>
  );
};

export default Signup;