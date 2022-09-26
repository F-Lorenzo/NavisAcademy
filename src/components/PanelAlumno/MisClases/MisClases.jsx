import React from 'react'
import { useState } from 'react'

import ItemCounter from './ItemCounter'
import { UserAuth } from '../../../Context/AuthContext';
import { doc, getFirestore, updateDoc, increment } from "firebase/firestore";
import { Link, useNavigate } from 'react-router-dom';

import './MisClases.css'

const MisClases = (clases) => {

    const { user } = UserAuth();
    const navigate = useNavigate();
    
    const comprarClases = async ( nuevas ) => {

        try {
            const firestore = getFirestore();
            const userClases = doc(firestore, `Users/${user.uid}`);
            console.log(userClases);
            await updateDoc(userClases, {
                remainingClases: increment(nuevas)
            });
            swal("Muy Bien", `Adquiriste ${nuevas} nuevas clases`, "success");
        } catch (e) {
            swal("UPS!", `${e.message}`, "error");
        }
        
    }

    const handleInicioDeClase = async () => {

        try {
            let actualValue = clases.remainingClases;
            console.log(actualValue);
            const firestore = getFirestore();
            const userClases = doc(firestore, `Users/${user.uid}`);
            await updateDoc(userClases, {
                remainingClases: (actualValue - 1),
                completedClases: increment(1)
            });
            swal("Muy Bien", `Preparate para tu clase`, "success");
        } catch (e) {
            swal("UPS!", `${e.message}`, "error");
        }

    }

    const handleProgramarClases = () => {
        swal("Muy Bien", `Ahora programaras tus clases`, "success");
        navigate('/Account/ProgramarClases');
    }

    const handleCalendarioDeClases = () => {
        navigate('/Account/CalendarioDeClases');
        swal("BIENVENIDO", `Aquí podras ver tu calendario de clases`, "success");
    }

    const handleFunctionControl = () => {
        console.log(clases);
    }

    return (
        <div>

            <div className='info'>
                <h3>COMPRAR CLASES</h3>
                <ItemCounter comprarClases={comprarClases}/>
            </div>

            <div className='info'>
                <h3>CANTIDAD DE CLASES DISPONIBLES : { clases.remainingClases }</h3>
            </div>

            <div className='info'>
                <h3>CANTIDAD DE CLASES USADAS : { clases.completedClases } </h3>
            </div>

            <div className='info'>
                <h3>CANTIDAD DE CLASES PROGRAMADAS : { clases.programedClases } </h3>
            </div>


            <div className='info'>
                <button onClick={handleProgramarClases} disabled={clases.remainingClases === clases.programedClases}><h3>PROGRAMAR CLASES</h3></button>
            </div>

            <div className='info'>
                <button onClick={handleCalendarioDeClases} disabled={clases.programedClases === 0}><h3>VER CALENDARIO DE CLASES</h3></button>
            </div>

            <div className='info'>
                <button onClick={handleInicioDeClase} disabled={clases.programedClases === 0}><h3>CONFIRMAR INICIO DE CLASE</h3></button>
            </div>

            <div className='info'>
                <button onClick={handleFunctionControl}>FUNCTION CONTROL</button>
            </div>
      
        </div>
    )
}

export default MisClases
