import React, { useState } from 'react'

import { addDoc, updateDoc, collection, getFirestore, doc, query, increment, setDoc } from 'firebase/firestore';
import { UserAuth } from '../../../Context/AuthContext';
import Loader from '../../Loader/Loader';

const ProgramarClases = () => {

    const { user } = UserAuth();
    const [ form, setForm ] = useState({});
    const [ loader, setLoader ] = useState(false);
    const myClases = {...user.misClases};
    const actualClases = myClases.remainingClases - myClases.programedClases;

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        })
    }

    const moreInfo = {
        condition: "pending",
        teacher: "unasigned",
    }

    const studentData = {
        studentUid: user.uid,
        studentEmail: user.email,
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoader(true)

        try {
            const firestore = getFirestore();
            const queryRef = query(collection(firestore, `Users/${user.uid}/myClases`));
            addDoc(queryRef, { ...form, ...moreInfo })
                .then(({ id }) => {
                    console.log(id);

                    const docuRef = doc(firestore, `Classes/${id}`);
                    setDoc(docuRef, {...form, ...moreInfo, ...studentData });

                })
            const userClases = doc(firestore, `Users/${user.uid}`);
            await updateDoc(userClases, {
                programedClases: increment(1)
            });
            setLoader(false);

        } catch (e) {
            swal("UPS!", `${e.message}`, "error");
            setLoader(false);
        }

        console.log(form);
    }

    if (loader) {
        return (
            <Loader />
        )
    }

    return (
        <div>
            <h1>PROGRAMAR CLASES</h1>

            <h2>Tienes { actualClases } clases para programar </h2>

            <div className="caja__trasera">             
                <div className="caja__trasera-login">

                
                    <form onSubmit={handleSubmit}>

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
  
                    <button type="submit" id="btn__iniciar-sesion">Programar</button>

                </form>
            </div>
        </div>


        </div>
    )
}

export default ProgramarClases
