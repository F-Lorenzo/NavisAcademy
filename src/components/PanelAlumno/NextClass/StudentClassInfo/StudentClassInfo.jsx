import React from 'react'
import { useNavigate } from 'react-router-dom';

const StudentClassInfo = (clases) => {

    const navigate = useNavigate();

    const handleMiCalendario = () => {
        navigate('/MiCalendario');
    }

    return (
        <div className='studentClassInfo__container'>
            <div className='studentClassInfo__remainingClases'>
                <p>CLASES DISPONIBLES: {clases.remainingClases}</p>
            </div>
        
            <button className='studentPanelButton active' onClick={handleMiCalendario}>Ver Calendario</button>    
        </div>
    )

}

export default StudentClassInfo
