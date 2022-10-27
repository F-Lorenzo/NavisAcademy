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

    const studentData = {
        role: "alumn",
        remainingClases: 0,
        completedClases: 0,
        absentedClases: 0,
        teacher: "unasigned",
    }

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
            setDoc(docuRef, {...form, ...studentData});

            navigate('/account');
        } catch (e) {
            setError(e.message);
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
                    ¿Ya tienes una cuenta?{' '}
                    <Link to='/signIn'>
                        Inicia sesion.
                    </Link>
                </p>

                <form className='form__Register' onSubmit={handleSubmit}>

                    <label htmlFor="name">
                        Nombre : 
                    </label>
                    <input 
                        type="text" 
                        id='name' 
                        name='name' 
                        value={form.name || ''} 
                        onChange={handleChange} 
                    />

                    <label htmlFor="lastName">
                        Apellido : 
                    </label>
                    <input 
                        type="text" 
                        id='lastName' 
                        name='lastName' 
                        value={form.lastName || ''} 
                        onChange={handleChange} 
                    />                

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

                    <label htmlFor="phoneNumber">
                        Numero de celular : 
                    </label>
                    <input 
                        type="tel" 
                        id='phoneNumber' 
                        name='phoneNumber' 
                        value={form.phoneNumber || ''} 
                        onChange={handleChange} 
                    />

                    <label htmlFor="country">
                        Pais: 
                    </label>
                    <input 
                        type="text" 
                        id='country' 
                        name='country' 
                        value={form.country || ''} 
                        onChange={handleChange} 
                    />

                    <label htmlFor="city">
                        Ciudad: 
                    </label>
                    <input 
                        type="text" 
                        id='city' 
                        name='city' 
                        value={form.city || ''} 
                        onChange={handleChange} 
                    />

                    <button className='boton__login' type="submit" id="btn__iniciar-sesion">Crear Cuenta</button>

                </form>
            </div>
        </div>
        </>
  );
};

export default Signup;