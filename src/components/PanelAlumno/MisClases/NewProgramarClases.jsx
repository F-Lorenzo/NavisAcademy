import React, { useState } from 'react'
import { UserUpdates } from '../../../Context/UserUpdatesContext';
import { addDoc, updateDoc, collection, getFirestore, doc, query, increment, setDoc } from 'firebase/firestore';
import "./NewProgramarClases.css";
import Loader from '../../Loader/Loader';

const NewProgramarClases = () => {

    const { user } = UserUpdates();
    const [ form, setForm ] = useState({});
    const [ loader, setLoader ] = useState(false);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        })
        console.log(form);
    }

    const programedClassData = {
        condition: "pending",
        teacher: "unasigned",
        studentUid: user.uid,
        studentEmail: user.email,
        studentName: user.name,
        studentLastName: user.lastName,   
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoader(true)

        try {
            const firestore = getFirestore();
            const queryRef = query(collection(firestore, `Users/${user.uid}/mySchedule`));
            addDoc(queryRef, { ...form, ...programedClassData })
                .then(({ id }) => {

                    const docuRef = doc(firestore, `Classes/${id}`);
                    setDoc(docuRef, { ...form, ...programedClassData });

                })
            setLoader(false);
            swal("Muy Bien", `Ahora esperaras a que los administradores acepten tu solicitud!`, "success");

        } catch (e) {
            swal("UPS!", `${e.message}`, "error");
            setLoader(false);
        }

    }

    return (
        <div>
            <h5>PROGRAMAR CLASES</h5>

            <form className='form__ProgramarClases' onSubmit={handleSubmit}>

                <ol>
                    <li>
                        <label htmlFor="rangoHorarioDeClase">
                            Lunes
                        </label>
                        <input
                            type="time" 
                            id='lunes' 
                            name='lunes' 
                            value={form.lunes || ''} 
                            onChange={handleChange} 
                        />
                    </li>
                    <li>
                        <label htmlFor="rangoHorarioDeClase">
                            Martes
                        </label>
                        <input
                            type="time" 
                            id='martes' 
                            name='martes' 
                            value={form.martes || ''} 
                            onChange={handleChange} 
                        />
                    </li>
                    <li>
                        <label htmlFor="rangoHorarioDeClase">
                            Miercoles
                        </label>
                        <input
                            type="time" 
                            id='miercoles' 
                            name='miercoles' 
                            value={form.miercoles || ''} 
                            onChange={handleChange} 
                        />
                    </li>
                    <li>
                        <label htmlFor="rangoHorarioDeClase">
                            Jueves
                        </label>
                        <input
                            type="time" 
                            id='jueves' 
                            name='jueves' 
                            value={form.jueves || ''} 
                            onChange={handleChange} 
                        />
                    </li>
                    <li>
                        <label htmlFor="rangoHorarioDeClase">
                            Viernes
                        </label>
                        <input
                            type="time" 
                            id='viernes' 
                            name='viernes' 
                            value={form.viernes || ''} 
                            onChange={handleChange} 
                        />
                    </li>
                    <li>
                        <label htmlFor="rangoHorarioDeClase">
                            Sabado
                        </label>
                        <input
                            type="time" 
                            id='sabado' 
                            name='sabado' 
                            value={form.sabado || ''} 
                            onChange={handleChange} 
                        />
                    </li>
                    <li>
                        <label htmlFor="rangoHorarioDeClase">
                            Domingo
                        </label>
                        <input
                            type="time" 
                            id='domingo' 
                            name='domingo' 
                            value={form.domingo || ''} 
                            onChange={handleChange} 
                        />
                    </li>
                </ol>
                <button className='boton__programar' type="submit" id="btn__iniciar-sesion">Programar</button>
            </form>

        </div>
    )
}

export default NewProgramarClases
