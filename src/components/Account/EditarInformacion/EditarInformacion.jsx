import React, { useState } from 'react';
import { getFirestore, updateDoc, doc } from 'firebase/firestore';

import { EditItems } from './EditItems';
import { UserAuth } from '../../../Context/AuthContext';
import { UserUpdates } from '../../../Context/UserUpdatesContext';

import Loader from '../../Loader/Loader';
import './EditarInformacion.scss';

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
            <h5>EDITAR MI INFORMACION</h5>

            <div>             
                <div>

                    <form className='editarInfo__form' onSubmit={handleSubmit}>

                        {EditItems.map((item, index) =>{
                            return (
                                <div key={index}>
                                    <label htmlFor={item.inNameId}>
                                        {item.field} : 
                                    </label>
                                    <input 
                                        type={item.inType} 
                                        id={item.inNameId} 
                                        name={item.inNameId} 
                                        value={form[item.inNameId] || ''} 
                                        onChange={handleChange} 
                                    />
                                </div>
                            )
                        })}

                        <button className='editarInfo-button' type="submit">Editar</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditarInformacion
