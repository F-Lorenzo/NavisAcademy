import React from 'react'
import { useState } from 'react'
import TeachersList from './TeachersList';
import './Admin.css';
import { connectFirestoreEmulator } from 'firebase/firestore';
import ListDays from './ListDays';


const Dates = ({info, teachersList}) => {

    const [ listTeachers, setListTeachers ] = useState(false);

    const dia = info.diasHora;

    const handleAsignarProfesor = () => {
        console.log(teachersList);
        swal("OK", `Selecciona un profesor de la lista`, "success");
        setListTeachers(true);   
    };

    

    if (listTeachers) {

        return (
            <>
            <h1>PROFESORES DISPONIBLES</h1>
            <TeachersList dateId={info.id} teachers={teachersList}/>
            </>            
        )

    } else {
        
        return (
            <div className='panel_Content'>

                <div className='profile-card'>
                    Programacion de clases:
                    <ul className='profile-card'>
                        <li> Alumno: {info.studentName} {info.studentLastName}</li>
                        <li> Dias y hora: 
                            {dia.lunes ? <p>Lunes: {dia.lunes}</p> : ""} 
                            {dia.martes ? <p>Martes: {dia.martes}</p> : ""} 
                            {dia.miercoles ? <p>miercoles: {dia.miercoles}</p> : ""} 
                            {dia.jueves ? <p>Jueves: {dia.jueves}</p> : ""}
                            {dia.viernes ? <p>Viernes: {dia.viernes}</p> : ""}
                            {dia.sabado ? <p>Sabado: {dia.sabado}</p> : ""}
                            {dia.domingo ? <p>Domingo: {dia.domingo}</p> : ""}
                        </li>


                        <button className='profile-card__button' onClick={handleAsignarProfesor}>ASIGNAR PROFESOR</button>

                    </ul>   
                </div>
                 
            </div>
        )
    }

    
    
}

export default Dates
