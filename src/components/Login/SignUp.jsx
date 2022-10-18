import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../Context/AuthContext';
import { addDoc, setDoc, collection, getFirestore, doc, query, getDocs } from 'firebase/firestore';
import Loader from '../Loader/Loader'

const Signup = () => {
    
    const [ form, setForm ] = useState({});
    const [ loader, setLoader ] = useState(false);
    const [ error, setError ] = useState('')
    const { createUser } = UserAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        })
    }

    const student = {
        role: "alumn",
        remainingClases: 0,
        completedClases: 0,
        programedClases: 0,
    }

    const myClases = { }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoader(true);
        try {
            const infoUser = await createUser(form.email, form.password).then((firebaseData) => {
                return firebaseData;
            });
            console.log(infoUser); // BORRAR ESTA SHIT!!
            const firestore = getFirestore();
            const docuRef = doc(firestore, `Users/${infoUser.user.uid}`);
            setDoc(docuRef, {...form, ...student});

            navigate('/account');
        } catch (e) {
            setError(e.message);
            console.log(e.message); // BORRAR ESTA SHIT!!
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

                <p>
                    ¿Already have an account?{' '}
                    <Link to='/signIn'>
                        Sign in.
                    </Link>
                </p>

                <form className='form__Register' onSubmit={handleSubmit}>

                    <label htmlFor="name">
                        Name : 
                    </label>
                    <input 
                        type="text" 
                        id='name' 
                        name='name' 
                        value={form.name || ''} 
                        onChange={handleChange} 
                    />

                    <br />

                    <label htmlFor="lastName">
                        Last name : 
                    </label>
                    <input 
                        type="text" 
                        id='lastName' 
                        name='lastName' 
                        value={form.lastName || ''} 
                        onChange={handleChange} 
                    />
                    
                    <br />

                    <label htmlFor="password">
                        Password : 
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
                        Email : 
                    </label>
                    <input 
                        type="email" 
                        id='email' 
                        name='email' 
                        value={form.email || ''} 
                        onChange={handleChange} 
                    />

                    <br />

                    <label htmlFor="phoneNumber">
                        Phone Number : 
                    </label>
                    <input 
                        type="tel" 
                        id='phoneNumber' 
                        name='phoneNumber' 
                        value={form.phoneNumber || ''} 
                        onChange={handleChange} 
                    />

                    <br />

                    <label htmlFor="country">
                        Country: 
                    </label>
                    <input 
                        type="text" 
                        id='country' 
                        name='country' 
                        value={form.country || ''} 
                        onChange={handleChange} 
                    />

                    <br />

                    <label htmlFor="city">
                        City: 
                    </label>
                    <input 
                        type="text" 
                        id='city' 
                        name='city' 
                        value={form.city || ''} 
                        onChange={handleChange} 
                    />

                    <br />

                    <button className='boton__login' type="submit" id="btn__iniciar-sesion">Crear Cuenta</button>

                </form>
            </div>
        </div>
        </>
  );
};

export default Signup;