import React, { useState } from 'react'
import { UserUpdates } from '../../../Context/UserUpdatesContext';
import { addDoc, updateDoc, collection, getFirestore, doc, query, increment, setDoc, serverTimestamp } from 'firebase/firestore';
import { DateTime } from 'luxon';
import "./ProgramarClases.css";
import Loader from '../../Loader/Loader';

const ProgramarClases = () => {

    const { user } = UserUpdates();
    const [ diasHora, setDiasHora ] = useState({});
    const timeStamp = serverTimestamp(); 
    const [ loader, setLoader ] = useState(false);

    const handleChange = (e) => {
        setDiasHora({
            ...diasHora,
            [e.target.name]:e.target.value,
        })
        console.log(diasHora);
    }

    const programedClassData = {
        condition: "pending",
        teacher: "unasigned",
        remainingClases: user.misClases.remainingClases,
        studentUid: user.uid,
        studentEmail: user.email,
        studentName: user.form.name,
        studentLastName: user.form.lastName,   
    }

    const userNotification = {
        textNotification: "Programaste tus clases, en breve se te asiganara un profesor",
        notificationType: "Notificacion",

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoader(true)

        try {
            const firestore = getFirestore();
            const mySchedule = query(collection(firestore, `Users/${user.uid}/myClasses`));
            addDoc(mySchedule, { diasHora, ...programedClassData })
                .then(({ id }) => {

                    const docuRef = doc(firestore, `Classes/${id}`);
                    setDoc(docuRef, { diasHora, ...programedClassData });
                    const myNotifications =  doc(firestore, `Users/${user.uid}/myNotifications/${id}`);
                    setDoc(myNotifications, {...userNotification, timeStamp});

                })
            const teacherUpdate = doc(firestore, `Users/${user.uid}`);
            await updateDoc( teacherUpdate, { teacher: "pending", notifications: increment(1)} )
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
                            value={diasHora.lunes || ''} 
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
                            value={diasHora.martes || ''} 
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
                            value={diasHora.miercoles || ''} 
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
                            value={diasHora.jueves || ''} 
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
                            value={diasHora.viernes || ''} 
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
                            value={diasHora.sabado || ''} 
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
                            value={diasHora.domingo || ''} 
                            onChange={handleChange} 
                        />
                    </li>
                </ol>
                <button className='boton__programar' type="submit" id="btn__iniciar-sesion">Programar</button>
            </form>

        </div>
    )
}

export default ProgramarClases
