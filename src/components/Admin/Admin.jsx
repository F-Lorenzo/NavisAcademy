import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Admin.scss';

import ListUsers from './ListUsers/ListUsers';
import AssignTeacher from './ProgramingClassesAsAdmin/AssignTeacher';
import CreateTeacherAccount from './CreateTeacherAccount/CreateTeacherAccount';

const Admin = () => {

    const [ createTeacher, setCreateTeacher ] = useState(false);
    const [ listTeachers, setListTeachers ] = useState(false);
    const [ listAlumns, setListAlumns ] = useState(false);
    const [ assignTeacher, setAssignTeacher ] = useState(false);

    const handleCreateTeacher = () => {
        listTeachers && setListTeachers(false); 
        listAlumns && setListAlumns(false);
        assignTeacher && setAssignTeacher(false);
        !createTeacher && swal("Bienvenido", `Aqui podras crear cuentas de profesores`, "success");
        setCreateTeacher(!createTeacher);
    }

    const handleListTeachers = () => {
        createTeacher && setCreateTeacher(false);
        listAlumns && setListAlumns(false);
        assignTeacher && setAssignTeacher(false);
        !listTeachers && swal("Bienvenido", `Aqui veras una lista de profesores registrados`, "success");
        setListTeachers(!listTeachers);
    }

    const handleListAlumns = () => {
        createTeacher && setCreateTeacher(false);
        listTeachers && setListTeachers(false); 
        assignTeacher && setAssignTeacher(false);
        !listAlumns && swal("Bienvenido", `Aqui veras una lista de alumnos registrados`, "success");
        setListAlumns(!listAlumns);
    }

    const handleProgramingClassesAsAdmin = () => {
        createTeacher && setCreateTeacher(false);
        listTeachers && setListTeachers(false); 
        listAlumns && setListAlumns(false);
        !assignTeacher && swal("Bienvenido", `Aqui veras los alumnos que no tienen un profesor asignado y podras asignarles uno`, "success");
        setAssignTeacher(!assignTeacher);
    }

    return (
        <div className=''>
            <div className=''>
                <h5>PANEL DE ADMINISTRADOR</h5>
                <div className='panelButtonContainer'>
                    <button className={createTeacher ? 'panelButton active' : 'panelButton'} onClick={handleCreateTeacher}>
                        CREAR CUENTA DE PROFESOR
                    </button>
                    <button className={listTeachers ? 'panelButton active' : 'panelButton'} onClick={handleListTeachers}>
                        LISTAR PROFESORES
                    </button>
                    <button className={listAlumns ? 'panelButton active' : 'panelButton'} onClick={handleListAlumns}>
                        LISTAR ALUMNOS
                    </button>
                    <button className={assignTeacher ? 'panelButton active' : 'panelButton'} onClick={handleProgramingClassesAsAdmin}>
                        ASIGNAR PROFESOR
                    </button>
                </div>

                <div>
                    {createTeacher && <CreateTeacherAccount /> }
                    {listTeachers && <ListUsers roleNeeded={"teacher"} />}
                    {listAlumns && <ListUsers roleNeeded={"alumn"} />}
                    {assignTeacher && <AssignTeacher />}
                </div>
            </div>
        </div>
    )
}

export default Admin
