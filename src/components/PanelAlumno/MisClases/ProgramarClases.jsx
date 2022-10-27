import React, { useState } from 'react'
import './ProgramarClases.css';
import { addDoc, updateDoc, collection, getFirestore, doc, query, increment, setDoc } from 'firebase/firestore';
import { UserAuth } from '../../../Context/AuthContext';
import { UserUpdates } from '../../../Context/UserUpdatesContext';
import Select from 'react-select';
import Loader from '../../Loader/Loader';
import { useNavigate } from 'react-router-dom';

const ProgramarClases = () => {

    const { user } = UserUpdates();
    const [ form, setForm ] = useState({});
    const [ loader, setLoader ] = useState(false);
    const myClases = {...user.misClases};
    const [ diasDeClase, setDiasDeClase ] = useState();
    const actualClases = myClases.remainingClases - myClases.programedClases;

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        })
    }

    const optionDays = [
        { value: 'Lunes', label: 'Lunes' },
        { value: 'Martes', label: 'Martes' },
        { value: 'Miercoles', label: 'Miercoles' },
        { value: 'Jueves', label: 'Jueves' },
        { value: 'Viernes', label: 'Viernes' },
        { value: 'Sabado', label: 'Sabado' },
        { value: 'Domingo', label: 'Domingo' },
    ]

    const testSelect = ( dia  ) => {
        setDiasDeClase(dia);
        console.log(diasDeClase);
    }

    const studentForm = {...user.form};

    const moreInfo = {
        condition: "pending",
        teacher: "unasigned",
        reprogramedLeft: 2,
        programed: "pending",
    }

    const studentData = {
        studentUid: user.uid,
        studentEmail: user.email,
        studentName: studentForm.name,
        studentLastName: studentForm.lastName,    
    }

    /*
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoader(true)

        try {
            const firestore = getFirestore();
            const queryRef = query(collection(firestore, `Users/${user.uid}/myClases`));
            addDoc(queryRef, { ...form, ...moreInfo })
                .then(({ id }) => {

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

    }
    */

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoader(true)

        try {
            const diasDisponibles = diasDeClase.map(day => ({dia:day.value}))
            console.log("Los dias elegidos son: ", diasDisponibles);

            const firestore = getFirestore();
            const queryRef = query(collection(firestore, `Users/${user.uid}/myClases`));
            addDoc(queryRef, { ...form, diasDisponibles })
                .then(({ id }) => {

                    const docuRef = doc(firestore, `Classes/${id}`);
                    setDoc(docuRef, { ...form, ...moreInfo, diasDisponibles, ...studentData });

                })
            const userClases = doc(firestore, `Users/${user.uid}`);
            await updateDoc(userClases, { ...form, diasDisponibles });
            setLoader(false);
            swal("Muy Bien", `Ahora esperaras a que los administradores acepten tu solicitud!`, "success");

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
        <div>
            <p>
                PROGRAMAR CLASES
            </p>

            <div>             
                <div>
                
                    <form className='form__ProgramarClases' onSubmit={handleSubmit}>

                        <label htmlFor="diaDeClase">
                            Selecciona los dias en que quieras tomar las clases
                            <Select 
                                options={optionDays}
                                onChange={testSelect}
                                isMulti
                            />
                        </label>

                        <label htmlFor="rangoHorarioDeClase">
                            Selecciona un rango horario en el que puedas tomar tomar tus clases
                        </label>
                        <input
                            type="time" 
                            id='timeStart' 
                            name='timeStart' 
                            value={form.timeStart || ''} 
                            onChange={handleChange} 
                        />
                        <input
                            type="time" 
                            id='timeEnd' 
                            name='timeEnd' 
                            value={form.timeEnd || ''} 
                            onChange={handleChange} 
                        />

                        <br />
  
                        <button className='boton__programar' type="submit" id="btn__iniciar-sesion">Programar</button>

                    </form>
                </div>

            </div>

        </div>
    )
}

export default ProgramarClases
