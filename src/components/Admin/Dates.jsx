import React from 'react'
import { useState } from 'react'
import TeachersList from './TeachersList';
import './Admin.css';
import { connectFirestoreEmulator } from 'firebase/firestore';
import ListDays from './ListDays';


const Dates = ({info, teachersList}) => {

    const [ listTeachers, setListTeachers ] = useState(false);
    const [ requiredDays, setRequiredDays ] = useState([]);

    const dia = info.diasHora;

    const requiredDay = () => {

        const tempArray = [];

        dia.domingo ? tempArray.push(0) : "";
        dia.lunes ? tempArray.push(1) : "";
        dia.martes ? tempArray.push(2) : "";
        dia.miercoles ? tempArray.push(3) : "";
        dia.jueves ? tempArray.push(4) : "";
        dia.viernes ? tempArray.push(5) : "";
        dia.sabado ? tempArray.push(6) : "";

        setRequiredDays(tempArray);

    }

    const handleAsignarProfesor = () => {
        requiredDay();
        console.log("dias requeridos: ",requiredDays);
        console.log(teachersList);
        swal("OK", `Selecciona un profesor de la lista`, "success");
        setListTeachers(true);   
    };
       
    return (
        <div className='panel_Content'>

            <div className='profile-card'>   
                <ul className='profile-card'>
                    <li> ALUMNO: {info.studentName} {info.studentLastName}</li>
                    {/*
                        <ul> Dias y hora: 
                            <li> {dia.lunes ? <p>Lunes: {dia.lunes}</p> : ""} </li>
                            <li> {dia.martes ? <p>Martes: {dia.martes}</p> : ""} </li>
                            <li> {dia.miercoles ? <p>miercoles: {dia.miercoles}</p> : ""} </li>
                            <li> {dia.jueves ? <p>Jueves: {dia.jueves}</p> : ""} </li>
                            <li> {dia.viernes ? <p>Viernes: {dia.viernes}</p> : ""} </li>
                            <li> {dia.sabado ? <p>Sabado: {dia.sabado}</p> : ""} </li>
                            <li> {dia.domingo ? <p>Domingo: {dia.domingo}</p> : ""} </li>
                        </ul>
                    */}

                        <button className='profile-card__button' onClick={handleAsignarProfesor}>ASIGNAR PROFESOR</button>
                </ul>   
            </div>

            { !listTeachers ? "" :
            <div>
                <h1>PROFESORES DISPONIBLES</h1>
                <TeachersList date={info} teachers={teachersList} daysInfo={requiredDays}/>
            </div> }
                 
        </div>
    )
    
}

export default Dates
