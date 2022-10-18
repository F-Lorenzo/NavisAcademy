import React from 'react'
import { UserAuth } from '../../Context/AuthContext';
import RoadLog from './RoadLog';
import { Link, useNavigate } from 'react-router-dom';


function PanelProfessor() {

    const { user } = UserAuth();
    const navigate = useNavigate();

    const handleMyStudents = () => {
        console.log("MyStudents");
        navigate('/Account/Teacher/MyStudents');
        swal("BIENVENIDO", `Aquí podras ver una lista de tus alumnos`, "success");
    }

    const handleAllMyClasses = () => {
        console.log("AllMyClasses");
        navigate('/Account/Teacher/AllMyClasses');
        swal("BIENVENIDO", `Aquí podras ver una lista de todas tus classes`, "success");
    }

    return (
        <>
            <div>
                <h3>Panel Professor</h3>

                <button onClick={handleMyStudents}>MY STUDENTS</button>

                <br />

                <button onClick={handleAllMyClasses}>ALL MY CLASSES</button>

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

                <RoadLog /> 
            </div>
        </>
    
    )
}

export default PanelProfessor