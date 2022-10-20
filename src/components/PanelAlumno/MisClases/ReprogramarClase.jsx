import React, { useState } from 'react'

import { addDoc, updateDoc, collection, getFirestore, doc, query, increment} from 'firebase/firestore';
import { UserAuth } from '../../../Context/AuthContext';

const ReprogramarClase = (dateId) => {

    
    const [ form, setForm ] = useState({});
    const { user } = UserAuth();


    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        })
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const firestore = getFirestore();
            const userClases = doc(firestore, `Users/${user.uid}/myClases/${dateId.dateId}`);
            const globalClases = doc(firestore, `Classes/${dateId.dateId}`)
            console.log(userClases);
            await updateDoc(userClases, {
                ...form,
                reprogramedLeft: increment(-1)
            });
            await updateDoc(globalClases, form);


        } catch (e) {
            console.log(e.message);
            swal("UPS!", `${e.message}`, "error");

        }


    }

    if (dateId.reprogramedLeft === 0) {
        
        return (
            <p>You reached the limit for this class</p>
        )

    } else {

        return (
            
            <div>
                <h1>
                    SELECCIONA NUEVO DIA Y HORARIO
                </h1>
    
                <div className="caja__trasera">             
                    <div className="caja__trasera-login">
    
                    
                        <form className='reprogra boton__login' onSubmit={handleSubmit}>
    
                            <label htmlFor="date">
                                Select DateTime : 
                            </label>
                            <input 
                                type="date" 
                                id='date' 
                                name='date' 
                                value={form.date || ''} 
                                onChange={handleChange} 
                            />
    
                            <br />
    
                            <label htmlFor="time">
                                Select Time : 
                            </label>
                            <input 
                                type="time" 
                                id='time' 
                                name='time' 
                                value={form.time || ''} 
                                onChange={handleChange} 
                            />
    
                            <br />
      
                           
                            <button className='boton__Reprogramar' type="submit" id="btn__iniciar-sesion">Programar</button>
                        </form>
                       
                    </div>
    
                </div>
            </div>
            
        )

    }


}

export default ReprogramarClase
