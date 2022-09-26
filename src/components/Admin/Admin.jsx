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
        <div>
            <h1>ADMIN ACCOUNT</h1>
            <button onClick={handleCreateTeacher}>CREATE A TEACHERS ACCOUNT</button>
            <button onClick={handleProgramingClassesAsAdmin}>PROGRAMING CLASSES</button>
        </div>
    )
}

export default Admin
