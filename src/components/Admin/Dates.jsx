import React from 'react'
import { useState } from 'react'
import TeachersList from './TeachersList';
import './Admin.css';
import { connectFirestoreEmulator } from 'firebase/firestore';
import ListDays from './ListDays';


const Dates = ({info, teachersList}) => {

    const [ listTeachers, setListTeachers ] = useState(false);

    const dias = info.diasDisponibles;

    const handleAsignarProfesor = () => {
        console.log(teachersList);
        console.log(dias);
        console.log(dias[0]);
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
                        <li> Los dias que prefiere son:
                        {
                            dias.map ( dia => <p> {dia.dia} </p> )

                        }

                        </li>

                        <li> Desde el horario: {info.timeStart} </li>
                        <li> Hasta el horario: {info.timeEnd} </li>
                        <button className='profile-card__button' onClick={handleAsignarProfesor}>ASIGNAR PROFESOR</button>
                    </ul>   
                </div>
                 
            </div>
        )
    }

    
    
}

export default Dates
