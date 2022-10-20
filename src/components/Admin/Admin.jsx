import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Admin = () => {

    const navigate = useNavigate();

    const handleCreateTeacher = () => {
        swal("Bienvenido", `Aqui podras crear cuentas de profesores`, "success");
        navigate('/Admin/CreateTeacherAccount');
    }

    const handleProgramingClassesAsAdmin = () => {
        swal("Bienvenido", `Aqui veras las clases programadas y asignaras los profesores`, "success");
        navigate('/Admin/ProgramingClassesAsAdmin');
    }

    return (
        <div className='admin__Options'>
            <div className='admin__Body'>
            <h2>PANEL DE ADMINISTRADOR</h2>
            <div className='admin__Button'>
            <button className='card__Admin__Buttons'onClick={handleCreateTeacher}>CREAR CUENTA DE PROFESOR</button>
            <button className='card__Admin__Buttons' onClick={handleProgramingClassesAsAdmin}>PROGRAMAR CLASES</button>
            </div>
         
            </div>
      
        </div>
    )
}

export default Admin
