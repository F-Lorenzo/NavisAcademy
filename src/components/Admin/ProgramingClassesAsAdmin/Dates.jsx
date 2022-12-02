import React from 'react'
import { useState } from 'react'
import TeachersList from './TeachersList';
import '../Admin.css';
import { connectFirestoreEmulator } from 'firebase/firestore';
import ListDays from '../ListDays';


const Dates = ({info, teachersList}) => {

    const [ listTeachers, setListTeachers ] = useState(false);
    const [ requiredDays, setRequiredDays ] = useState([]);


    const handleAsignarProfesor = () => {
        console.log(teachersList);
        swal("OK", `Selecciona un profesor de la lista`, "success");
        setListTeachers(true);   
    };
       
    return (
        <div className='panel_Content'>

            <div className='profile-card'>   
                <ul className='profile-card'>
                    <li> ALUMNO: {info.studentName} {info.studentLastName}</li>
                    <button className='profile-card__button' onClick={handleAsignarProfesor}>ASIGNAR PROFESOR</button>
                </ul>   
            </div>

            { !listTeachers ? "" :
            <div>
                <h1>PROFESORES DISPONIBLES</h1>
                <TeachersList date={info} teachers={teachersList} daysInfo={requiredDays}/>
            </div> }
                 
        </div>
    )
    
}

export default Dates
