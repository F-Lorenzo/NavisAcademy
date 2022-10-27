import React from 'react';
import "./Classes.css";

const Classes = ({info}) => {

    return (
        <div className='infoContainer'>
            <div className='primerColumna'>
                <div className='nombreAlumno'>
                    <li>{info.studentName} </li>
                    <li>{info.studentLastName} </li>
                </div>
                <li className='timeClass'>{info.time} </li>
            </div>

            <li>Condition: {info.condition} </li>
            <li>{info.date} </li>

            <br />
        </div>
    )

}

export default Classes
