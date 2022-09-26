import React from 'react'

const Teachers = ({info}) => {

    const handleSeleccionarProfesor = () => {
        console.log(info);
    }

    return (
        <div>
            <ul>
                <li> Teacher: {info.name} {info.lastName} </li>
                <li> Email: {info.email} </li>
                <button onClick={handleSeleccionarProfesor}>SELECCIONAR PROFESOR</button>
            </ul>      
        </div>
    )

}

export default Teachers
