import React from 'react'
import { useState } from 'react'
import TeachersList from './TeachersList';

import Loader from '../../Loader/Loader';

const Dates = ({info, teachersList}) => {

    const [ listTeachers, setListTeachers ] = useState(false);
    const [ requiredDays, setRequiredDays ] = useState([]);

    const handleAsignarProfesor = () => {
        !listTeachers && swal("OK", `Selecciona un profesor de la lista`, "success");
        setListTeachers(!listTeachers);
    };

    const handleTest = () => {
        console.log(info);
    }
       
    return (
        <div className=''>
            {/*
            <button onClick={handleTest}>
                TEST
            </button>
            */}

            <div className='userCardProfile-container'>

                <div className="userCardProfile-header_container">
                    <div className="userCardProfile-header">

                        <div className="userCardProfile-avatar">
                            <i className="fa-solid fa-user fa-2x"></i>
                        </div>

                        <div className="userCardProfile-info">
                            <p>{info.studentName} {info.studentLastName}</p>
                            <span>
                                Alumno
                            </span>
                        </div>

                        <button className={listTeachers? 'userCardProfile-button active' : 'userCardProfile-button'} onClick={handleAsignarProfesor}>
                            LISTAR PROFESORES DISPONIBLES
                        </button>

                    </div>
                </div>

            { listTeachers && <TeachersList date={info} teachers={teachersList} daysInfo={requiredDays}/> }
            </div>
                 
        </div>
    )
    
}

export default Dates
