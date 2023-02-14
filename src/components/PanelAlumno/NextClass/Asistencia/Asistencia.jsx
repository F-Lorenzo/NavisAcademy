import React from 'react'


const Asistencia = (clases) => {

    let porcentaje = 0;
    if (clases.actualClass !== 0) {
        porcentaje = (clases.completedClases / clases.actualClass)*100
    }
    let intPorcentaje = Math.round(porcentaje);

    return (
        <div className='studentClassInfo__asistencia'>
            <p className='asistencia__title'>ASISTENCIA</p>
            <p className='asistencia__percent'>{intPorcentaje}%</p>
            <div className='asistencia'>
                <p>{clases.completedClases} Presentes</p>
                <p>{clases.absentedClases} Ausente</p>
            </div>
        </div>
    )

}

export default Asistencia
