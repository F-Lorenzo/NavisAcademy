import React, { useState } from 'react';
import { getFirestore, updateDoc, doc } from 'firebase/firestore';

import { UserAuth } from '../../../Context/AuthContext';
import { UserUpdates } from '../../../Context/UserUpdatesContext';

import PerfilAlumno from '../../PanelAlumno/PerfilAlumno';
import TeacherProfile from '../../PanelProfessor/TeacherProfile';
import Loader from '../../Loader/Loader';
import './EditarInformacion.css';

const EditarInformacion = () => {

    const { userLogged } = UserAuth();
    const { user } = UserUpdates();
    const [ form, setForm ] = useState({});
    const [ loader, setLoader ] = useState(false);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        });
        console.log(form);
    }

    const handleSubmit = async (e) => {

        e.preventDefault();
        setLoader(true);

        try {
            const firestore = getFirestore();
            const userToEdit = doc(firestore, `Users/${userLogged.uid}`);
            await updateDoc(userToEdit, {
                ...form
            });
            setLoader(false);
        } catch (e) {
            swal("UPS!", `${e.message}`, "error");
            setLoader(false);
        }

    }

    if (loader) {
        return (
            <Loader />
        )
    }

    return (
        <div className='editarInfo-container'>
            <h1>EDITAR INFO DE USUARIO</h1>
                {user.role === "alumn" ? <PerfilAlumno {...user.form} /> : <TeacherProfile {...user.form} /> }

            <div className="caja__trasera">             
                <div className="caja__trasera-login">

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

                        <button className='boton__Edit' type="submit" id="btn__iniciar-sesion">Editar</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditarInformacion
