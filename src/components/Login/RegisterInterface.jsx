import React from 'react';
import { useState } from 'react';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { NavLink } from 'react-router-dom';
import Loader from '../../../../../CODER/00 React Js/01 Instalacion y configuracion del entorno/shittyViteProyect/src/components/Loader';
import './Login.css'

const RegisterInterface = () => {

    const [form, setForm] = useState({});
    const [loader, setLoader] = useState(false);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);
        const db = getFirestore();
        const usersCollection = collection(db, 'Users');
        addDoc(usersCollection, form)
            .then(({ id }) => {
                swal("Bienvenido", `Se creo la cuenta de ${form.email}`, "success");
                setLoader(false);
            });
    }

    if (loader) {
        return (
            <Loader />
        )
    }

    return (
        <>
        <div className="caja__trasera">             
            <div className="caja__trasera-login">
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
    )

}

export default RegisterInterface;