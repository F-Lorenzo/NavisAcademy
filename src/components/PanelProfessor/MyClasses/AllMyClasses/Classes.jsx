import React from 'react';
import "./Classes.css";

const Classes = ({info}) => {

    return (
        <div className='infoContainer'>
            
            <ul className='primerColumna'>
                <div className='nombreAlumno'>
                    <li>{info.studentName} </li>
                    <li>{info.studentLastName} </li>
                </div>
                <li className='timeClass'>{info.time} </li>
            </ul>

            <ul className='segundaColumna'>
                <li>Asistencias: </li>
                <li>Numero De Clase: </li>
            </ul>

            <div className='terceraColumna'>
                <p>{info.date}</p>
            </div>

            <div className='cuartaColumna'>
                <button>Link de la clase</button>
            </div>

        </div>
    )

}

export default Classes
