import React from 'react'
import { useState } from 'react'
import TeachersList from './TeachersList';
import './Admin.css';


const Dates = ({info, teachersList}) => {

    const [ listTeachers, setListTeachers ] = useState(false);

    const handleAsignarProfesor = () => {
        console.log(teachersList);
        swal("OK", `Selecciona un profesor de la lista`, "success");
        setListTeachers(true);
    }

    if (listTeachers) {

        return (
            <>
            <h1>PROFESORES DISPONIBLES</h1>
            <TeachersList dateId={info.id} teachers={teachersList}/>
            </>            
        )

    } 
    
            return (
                <div className='panel_Content'>

                    <div className='profile-card'>
                    <ul className='profile-card'>
                        <li> Date: {info.date} </li>
                        <li> Time: {info.time} </li>
                        <li> Teacher: {info.teacher} </li>
                        <li> Student: {info.studentEmail} </li>
                        <button className='profile-card__button' onClick={handleAsignarProfesor}>ASIGNAR PROFESOR</button>
                    </ul>   
                    </div>
                    
                </div>
            )

    
    
}

export default Dates
