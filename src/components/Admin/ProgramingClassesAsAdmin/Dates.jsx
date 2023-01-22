import React from 'react'
import { useState } from 'react'
import TeachersList from './TeachersList';

import Loader from '../../Loader/Loader';

const Dates = ({info, teachersList}) => {

    const [ listTeachers, setListTeachers ] = useState(false);
    const [ clicked, setClicked ] = useState(false);

    const handleAsignarProfesor = () => {
        !listTeachers && swal("OK", `Selecciona un profesor de la lista`, "success");
        setListTeachers(!listTeachers);
    };

    const teacherClicked = (e) => {
        setClicked(e);
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
                
                <div className='teacherListed-container'>
                    { !clicked && (listTeachers && <TeachersList date={info} teachers={teachersList} onChange={teacherClicked}/>) }
                </div>
            </div>
                 
        </div>
    )
    
}

export default Dates
