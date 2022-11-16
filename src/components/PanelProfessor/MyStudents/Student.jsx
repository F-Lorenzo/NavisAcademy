import React from 'react'

const Student = ({info}) => {

    const dia = info.diasHora;
    
    const handleTest = () => {
        console.log(info);
    }

    return (
        <div>
            <button onClick={handleTest}>TEST</button>
            <ul>
                <li> Alumno: {info.studentName} {info.studentLastName} </li>
                <li> Mail: {info.studentEmail} </li>
                <li> Clases Restantes: {info.remainingClases}</li>
                <ul> Dias y hora: 
                    <li> {dia.lunes ? <p>Lunes: {dia.lunes}</p> : ""} </li>
                    <li> {dia.martes ? <p>Martes: {dia.martes}</p> : ""} </li>
                    <li> {dia.miercoles ? <p>miercoles: {dia.miercoles}</p> : ""} </li>
                    <li> {dia.jueves ? <p>Jueves: {dia.jueves}</p> : ""} </li>
                    <li> {dia.viernes ? <p>Viernes: {dia.viernes}</p> : ""} </li>
                    <li> {dia.sabado ? <p>Sabado: {dia.sabado}</p> : ""} </li>
                    <li> {dia.domingo ? <p>Domingo: {dia.domingo}</p> : ""} </li>
                </ul>
            </ul>
        </div>
    )

}

export default Student
