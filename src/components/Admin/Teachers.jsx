import React, { useState } from 'react'

import { DateTime } from 'luxon';

import { addDoc, updateDoc, collection, getFirestore, doc, query, increment, setDoc, getDoc, serverTimestamp, arrayUnion } from 'firebase/firestore';
import Loader from '../Loader/Loader';
import { useEffect } from 'react';

const Teachers = ({date, teacher, requiredDays}) => {

    const [ loader, setLoader ] = useState(false);

    const requiredDay = date.diasHora;
    const dia = teacher.disponibility;
    let teacherDisponibility = false;

    function setDisponibility (studentDay, teacherDayStart, teacherDayEnd, disponible) {
        if (studentDay) {
            if (teacherDayStart) {
                if ((studentDay > teacherDayStart) && (studentDay < teacherDayEnd)) {
                    disponible = true;
                    console.log(`${studentDay} disponible`);
                }
            } else {
                disponible = false;
            }
        } 
        return disponible;
    }

    teacherDisponibility = setDisponibility(requiredDay.lunes, dia.lunesStart, dia.lunesEnd, teacherDisponibility);
    teacherDisponibility = setDisponibility(requiredDay.martes, dia.martesStart, dia.martesEnd, teacherDisponibility);
    teacherDisponibility = setDisponibility(requiredDay.miercoles, dia.miercolesStart, dia.miercolesEnd, teacherDisponibility);
    teacherDisponibility = setDisponibility(requiredDay.jueves, dia.juevesStart, dia.juevesEnd, teacherDisponibility);
    teacherDisponibility = setDisponibility(requiredDay.viernes, dia.viernesStart, dia.viernesEnd, teacherDisponibility);
    teacherDisponibility = setDisponibility(requiredDay.sabado, dia.sabadoStart, dia.sabadoEnd, teacherDisponibility);
    teacherDisponibility = setDisponibility(requiredDay.domingo, dia.domingoStart, dia.domingoEnd, teacherDisponibility); 

    const teacherAssignament = {
        teacher: "assigned",
        condition: "succes",
        teacherEmail: teacher.email,
        teacherUid: teacher.id,
        teacherName: teacher.name,
        teacherLastName: teacher.lastName,
    }

    const teacherSchedule = [];

    const generateTeacherSchedule = () => {
        
        
        const addDays = (date, period) => {
            date.setDate(date.getDate() + period);
        }
        
        let dateOfClass = new Date();

        const actualDay = dateOfClass.getDay();

        for (let count = 0; count < date.remainingClases ; count) {
            console.log("contador es = ", count);
            if (actualDay === 1) { 

                if (requiredDay.lunes) {
                    addDays(dateOfClass, 7);
                    let dia = dateOfClass.getDate();
                    let mes = dateOfClass.getMonth();
                    let año = dateOfClass.getFullYear();  
                    let horaComienzo = requiredDay.lunes;
                    let horaFin = parseInt(requiredDay.lunes);
                    horaFin++;
                    horaFin = horaFin.toString();
                    horaFin = horaFin + ":00";
                    let classDateHour_start = `${año}-${mes+1}-${dia} ${horaComienzo}`;
                    let classDateHour_end = `${año}-${mes+1}-${dia} ${horaFin}`;
                    console.log("fecha y hora de comienzo de la clase :",classDateHour_start);
                    console.log("fecha y hora de fin de la clase :",classDateHour_end);
                    const classDate = {
                        start_date : `${classDateHour_start}`,
                        end_date : `${classDateHour_end}`,
                        text : `Alumno : ${date.studentName} ${date.studentLastName}`,
                    }
                    teacherSchedule.push(classDate);
                    count++;  
                }

                if (requiredDay.martes) {
                    addDays(dateOfClass, 1);
                    let dia = dateOfClass.getDate();
                    let mes = dateOfClass.getMonth();
                    let año = dateOfClass.getFullYear();  
                    let horaComienzo = requiredDay.martes;
                    let horaFin = parseInt(requiredDay.martes);
                    horaFin++;
                    horaFin = horaFin.toString();
                    horaFin = horaFin + ":00";
                    let classDateHour_start = `${año}-${mes+1}-${dia} ${horaComienzo}`;
                    let classDateHour_end = `${año}-${mes+1}-${dia} ${horaFin}`;
                    console.log("fecha y hora de comienzo de la clase :",classDateHour_start);
                    console.log("fecha y hora de fin de la clase :",classDateHour_end);
                    const classDate = {
                        start_date : `${classDateHour_start}`,
                        end_date : `${classDateHour_end}`,
                        text : `Alumno : ${date.studentName} ${date.studentLastName}`,
                    }
                    teacherSchedule.push(classDate);
                    addDays(dateOfClass, -1);
                    count++;  
                }

                if (requiredDay.miercoles) {
                    addDays(dateOfClass, 2);
                    let dia = dateOfClass.getDate();
                    let mes = dateOfClass.getMonth();
                    let año = dateOfClass.getFullYear();  
                    let horaComienzo = requiredDay.miercoles;
                    let horaFin = parseInt(requiredDay.miercoles);
                    horaFin++;
                    horaFin = horaFin.toString();
                    horaFin = horaFin + ":00";
                    let classDateHour_start = `${año}-${mes+1}-${dia} ${horaComienzo}`;
                    let classDateHour_end = `${año}-${mes+1}-${dia} ${horaFin}`;
                    console.log("fecha y hora de comienzo de la clase :",classDateHour_start);
                    console.log("fecha y hora de fin de la clase :",classDateHour_end);
                    const classDate = {
                        start_date : `${classDateHour_start}`,
                        end_date : `${classDateHour_end}`,
                        text : `Alumno : ${date.studentName} ${date.studentLastName}`,
                    }
                    teacherSchedule.push(classDate);
                    addDays(dateOfClass, -2);
                    count++;  
                }

                if (requiredDay.jueves) {
                    addDays(dateOfClass, 3);
                    let dia = dateOfClass.getDate();
                    let mes = dateOfClass.getMonth();
                    let año = dateOfClass.getFullYear();  
                    let horaComienzo = requiredDay.jueves;
                    let horaFin = parseInt(requiredDay.jueves);
                    horaFin++;
                    horaFin = horaFin.toString();
                    horaFin = horaFin + ":00";
                    let classDateHour_start = `${año}-${mes+1}-${dia} ${horaComienzo}`;
                    let classDateHour_end = `${año}-${mes+1}-${dia} ${horaFin}`;
                    console.log("fecha y hora de comienzo de la clase :",classDateHour_start);
                    console.log("fecha y hora de fin de la clase :",classDateHour_end);
                    const classDate = {
                        start_date : `${classDateHour_start}`,
                        end_date : `${classDateHour_end}`,
                        text : `Alumno : ${date.studentName} ${date.studentLastName}`,
                    }
                    teacherSchedule.push(classDate);
                    addDays(dateOfClass, -3);
                    count++;  
                }

                if (requiredDay.viernes) {
                    addDays(dateOfClass, 4);
                    let dia = dateOfClass.getDate();
                    let mes = dateOfClass.getMonth();
                    let año = dateOfClass.getFullYear();  
                    let horaComienzo = requiredDay.viernes;
                    let horaFin = parseInt(requiredDay.viernes);
                    horaFin++;
                    horaFin = horaFin.toString();
                    horaFin = horaFin + ":00";
                    let classDateHour_start = `${año}-${mes+1}-${dia} ${horaComienzo}`;
                    let classDateHour_end = `${año}-${mes+1}-${dia} ${horaFin}`;
                    console.log("fecha y hora de comienzo de la clase :",classDateHour_start);
                    console.log("fecha y hora de fin de la clase :",classDateHour_end);
                    const classDate = {
                        start_date : `${classDateHour_start}`,
                        end_date : `${classDateHour_end}`,
                        text : `Alumno : ${date.studentName} ${date.studentLastName}`,
                    }
                    teacherSchedule.push(classDate);
                    addDays(dateOfClass, -4);
                    count++;  
                }

                if (requiredDay.sabado) {
                    addDays(dateOfClass, 5);
                    let dia = dateOfClass.getDate();
                    let mes = dateOfClass.getMonth();
                    let año = dateOfClass.getFullYear();  
                    let horaComienzo = requiredDay.sabado;
                    let horaFin = parseInt(requiredDay.sabado);
                    horaFin++;
                    horaFin = horaFin.toString();
                    horaFin = horaFin + ":00";
                    let classDateHour_start = `${año}-${mes+1}-${dia} ${horaComienzo}`;
                    let classDateHour_end = `${año}-${mes+1}-${dia} ${horaFin}`;
                    console.log("fecha y hora de comienzo de la clase :",classDateHour_start);
                    console.log("fecha y hora de fin de la clase :",classDateHour_end);
                    const classDate = {
                        start_date : `${classDateHour_start}`,
                        end_date : `${classDateHour_end}`,
                        text : `Alumno : ${date.studentName} ${date.studentLastName}`,
                    }
                    teacherSchedule.push(classDate);
                    addDays(dateOfClass, -5);
                    count++;  
                }

                if (requiredDay.domingo) {
                    addDays(dateOfClass, 6);
                    let dia = dateOfClass.getDate();
                    let mes = dateOfClass.getMonth();
                    let año = dateOfClass.getFullYear();  
                    let horaComienzo = requiredDay.domingo;
                    let horaFin = parseInt(requiredDay.domingo);
                    horaFin++;
                    horaFin = horaFin.toString();
                    horaFin = horaFin + ":00";
                    let classDateHour_start = `${año}-${mes+1}-${dia} ${horaComienzo}`;
                    let classDateHour_end = `${año}-${mes+1}-${dia} ${horaFin}`;
                    console.log("fecha y hora de comienzo de la clase :",classDateHour_start);
                    console.log("fecha y hora de fin de la clase :",classDateHour_end);
                    const classDate = {
                        start_date : `${classDateHour_start}`,
                        end_date : `${classDateHour_end}`,
                        text : `Alumno : ${date.studentName} ${date.studentLastName}`,
                    }
                    teacherSchedule.push(classDate);
                    addDays(dateOfClass, -6);
                    count++;  
                }

            }      
        }

    }

    const handleSeleccionarProfesor = async (e) => {
        /*
        console.log("info del teacher:", teacher);
        console.log("id de la clase: ", date);
        */
        setLoader(true);
        generateTeacherSchedule();
        e.preventDefault();

        try {

            const firestore = getFirestore();
            
            
            const teacherUserData = doc(firestore, `Users/${teacher.id}`);
            await updateDoc(teacherUserData, {
                totalClasses : increment(date.remainingClases),
                remainingClasses : increment(date.remainingClases),

            })
            
            
            const myTeacherClasses = doc(firestore, `Users/${teacher.id}/mySchedule/myClasses`);
            await updateDoc(myTeacherClasses, {
                ...teacherSchedule
            });



            const classUpdateData = doc(firestore, `Classes/${date.id}`);
            await updateDoc(classUpdateData, {
                ...teacherAssignament
            });
            
            const teacherUpdateStudent = doc(firestore, `Users/${teacher.id}/myStudents/${date.studentUid}`)
            await setDoc(teacherUpdateStudent, {
                studentEmail: date.studentEmail,
                studentUid: date.studentUid,
                studentName: date.studentName,
                studentLastName: date.studentLastName,
                remainingClases: date.remainingClases,
            });

            setLoader(false);

        } catch (e) {

            swal("UPS!", `${e.message}`, "error");
            setLoader(false);

        }

    }

    if (loader) {
        return (
            <Loader />
        )
    }

    if (teacherDisponibility) {
        return (
            <div>
                <ul>
                    
                   
                    
                    <li> Profesor: {teacher.name} {teacher.lastName} </li>
                    <li> Email: {teacher.email} </li>
                    <li> Disponibilidad: 
                        {dia.lunesStart ? <p>Lunes desde las: {dia.lunesStart}hs hasta las {dia.lunesEnd}hs</p> : ""} 
                        {dia.martesStart ? <p>Martes desde las: {dia.martesStart}hs hasta las {dia.martesEnd}hs</p> : ""} 
                        {dia.miercolesStart ? <p>Miercoles desde las:: {dia.miercolesStart} hasta las {dia.miercolesEnd}hs</p> : ""} 
                        {dia.juevesStart ? <p>Jueves desde las: {dia.juevesStart}hs hasta las {dia.juevesEnd}hs</p>  : ""}
                        {dia.viernesStart ? <p>Viernes desde las: {dia.viernesStart}hs hasta las {dia.viernesEnd}hs</p> : ""}
                        {dia.sabadoStart ? <p>Sabado desde las: {dia.sabadoStart}hs hasta las {dia.sabadoEnd}hs</p> : ""}
                        {dia.domingoStart ? <p>Domingo desde las: {dia.domingoStart}hs hasta las {dia.domingoEnd}hs</p> : ""}
                    </li>
                    
                    <button onClick={handleSeleccionarProfesor}>SELECCIONAR PROFESOR</button>
                </ul>      
            </div>
        )
    }
}

export default Teachers
