import React from 'react'

const MoreInfo = ({info}) => {

    console.log(info);

    return (
        <div className='moreInfo-container' >
            <ul>
                <li>Numero de contacto: {info.phoneNumber}</li>
                <li>Pais: {info.country}</li>
                <li>Ciudad: {info.city}</li>
            </ul>     
            { info.role === "teacher" ? 
                <ul>
                    <li>Total de clases impartidas: {info.totalClasses}</li>
                    <li>Clases impartidas este mes: {info.thisMonthClasses}</li>
                    <li>Clases impartidas el mes pasado: {info.lastMonthClasses}</li>
                </ul>
            :
                <ul>
                    <li>Clases disponibles: {info.remainingClases}</li>
                    <li>Duracion de la clase: {info.durationClass}min</li>
                    <li>Clases completadas: {info.completedClases}</li>
                    <li>Clases ausente: {info.absentedClases}</li>
                    <li>Total de clases compradas: {info.totalClasses}</li>
                    <li>Profesor: {info.teacherName}</li>
                </ul>  
            }    
        </div>
    )

}

export default MoreInfo
