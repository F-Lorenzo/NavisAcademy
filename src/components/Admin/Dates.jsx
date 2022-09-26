import React from 'react'
import { useState } from 'react'
import TeachersList from './TeachersList';


const Dates = ({info, teachersList}) => {

    const [ listTeachers, setListTeachers ] = useState(false);

    const handleAsignarProfesor = () => {
        swal("OK", `Selecciona un profesor de la lista`, "success");
        setListTeachers(true);
        console.log(teachersList);
    }

    if (listTeachers) {

        return (
            <>
            <h1>PROFESORES DISPONIBLES</h1>
            <TeachersList teachers={teachersList}/>
            </>            
        )

    } 
    
            return (
                <div>
                    <ul>
                        <li> Date: {info.date} </li>
                        <li> Time: {info.time} </li>
                        <li> Teacher: {info.teacher} </li>
                        <li> Student: {info.studentEmail} </li>
                        <button onClick={handleAsignarProfesor}>ASIGNAR PROFESOR</button>
                    </ul>      
                </div>
            )

    
    
}

export default Dates
