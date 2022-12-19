import React from 'react'
import { UserAuth } from '../../Context/AuthContext';
import RoadLog from './RoadLog';
import { Link, useNavigate } from 'react-router-dom';
import { UserUpdates } from '../../Context/UserUpdatesContext';
import "./PanelProfessor.css"



function PanelProfessor() {

    const { user } = UserUpdates();
    const navigate = useNavigate();

    const handleMisAlumnos = () => {
        console.log("MyStudents");
        navigate('/Account/Teacher/MyStudents');
        swal("BIENVENIDO", `Aquí podras ver una lista de tus alumnos`, "success");
    }

    const handleMiPerfil = () => {
        navigate('/Account');
    }

    const handleMiCalendario = () => {
        navigate('/MiCalendario');
    }

    return (
        <>
            <div>

                <div className='encabezado'>
                    <button onClick={handleMiPerfil}>Mi Perfil</button>
                    <button onClick={handleMisAlumnos}>Mis Alumnos</button>
                    <button onClick={handleMiCalendario}>Mi Calendario</button>
                    <ul className='infoEncabezado'>
                        <li className='infoTittle'>Mis Clases Impartidas</li>
                        <li>Totales: {user.form.totalClasses}</li>
                        <li>Este mes: {user.form.thisMonthClasses} </li>
                        <li>Mes Anterior: {user.form.lastMonthClasses}</li>
                    </ul>
                </div>
    

                



                {/* 
                
                
                <button onClick={handleTestFilters}>TEST FILTERS</button>

                <br />

                <button>MY NEXT CLASSES</button>

                <br />

                <button>MY PAST CLASSES</button>

                <br />

                <button>MY CLASSES OF THIS MONTH</button>

                <br />

                <button>MY CLASSES OF THE PAST MONTH</button>

                <br />

                <button>CONFIRMAR INICIO DE CLASES</button>

                <br />

                <button>PLATAFORMA eLearning</button>
                
                */}



            </div>
        </>
    
    )
}

export default PanelProfessor