import React, { useState } from 'react'

import { DateTime } from 'luxon';

import { addDoc, updateDoc, collection, getFirestore, doc, query, increment, setDoc, getDoc, serverTimestamp, arrayUnion } from 'firebase/firestore';
import Loader from '../../Loader/Loader';
import { useEffect } from 'react';

const Teachers = ({date, teacher}) => {

    const [ loader, setLoader ] = useState(false);

    const timeStamp = serverTimestamp();
    const requiredDay = date.diasHora;
    const dia = teacher.disponibility;
    let teacherDisponibility = false;

    function setDisponibility (studentDay, teacherDayStart, teacherDayEnd, disponibility) {
        if (studentDay) {
            if (teacherDayStart) {
                if ((studentDay > teacherDayStart) && (studentDay < teacherDayEnd)) {
                    disponibility = true;
                    console.log(`${studentDay} disponible`);
                }
            } else {
                disponibility = false;
            }
        } 
        return disponibility;
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

    const studentNewNotification = {
        textNotification: "Felicitaciones, tu peticion de clases fue aceptada, ya te asignamos un profesor",
        notificationType: "Notificacion",
    }

    const teacherSchedule = [];

    const generateTeacherSchedule = () => {
       
        let dateOfClass = new Date();

        const addDays = (date, period) => {
            date.setDate(date.getDate() + period);
        }
               
        let lunes = 0;
        let martes = 0;
        let miercoles = 0;
        let jueves = 0;
        let viernes = 0;
        let sabado = 0;
        let domingo = 0;

        const actualDay = dateOfClass.getDay();

        switch (actualDay) {
            case 0:
                domingo = 0;
                lunes = 1;
                martes = 2;
                miercoles = 3;
                jueves = 4;
                viernes = 5;
                sabado = 6;
                break;
            case 1:
                domingo = 6;
                lunes = 0;
                martes = 1;
                miercoles = 2;
                jueves = 3;
                viernes = 4;
                sabado = 5;
                break;
            case 2:
                domingo = 5;
                lunes = 6;
                martes = 0;
                miercoles = 1;
                jueves = 2;
                viernes = 3;
                sabado = 4;
                break;
            case 3:
                domingo = 4;
                lunes = 5;
                martes = 6;
                miercoles = 0;
                jueves = 1;
                viernes = 2;
                sabado = 3;
                break;
            case 4:
                domingo = 3;
                lunes = 4;
                martes = 5;
                miercoles = 6;
                jueves = 0;
                viernes = 1;
                sabado = 2;
                break;
            case 5:
                domingo = 2;
                lunes = 3;
                martes = 4;
                miercoles = 5;
                jueves = 6;
                viernes = 0;
                sabado = 1;
                break;
            case 6:
                domingo = 1;
                lunes = 2;
                martes = 3;
                miercoles = 4;
                jueves = 5;
                viernes = 6;
                sabado = 0;
                break;
        }

        const generateClassDate = (classTime ,classDay) => {
            addDays(dateOfClass, classDay);
            let dia = dateOfClass.getDate();
            let mes = dateOfClass.getMonth();
            let año = dateOfClass.getFullYear();  
            let horaComienzo = classTime;
            let horaFin = parseInt(classTime);
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
                condition: `pending`,
                date: `${año}-${mes+1}`,
                day: dia,
                time: classTime,
            }
            teacherSchedule.push(classDate);
            addDays(dateOfClass, -classDay);
        }

        for (let count = 0; count < date.remainingClases ; count) {

            console.log("contador es = ", count);
            addDays(dateOfClass, 7);

            if (requiredDay.lunes) {
                generateClassDate(requiredDay.lunes, lunes);
                count++;  
            }

            if (requiredDay.martes) {
                generateClassDate(requiredDay.martes, martes);
                count++;  
            }

            if (requiredDay.miercoles) {
                generateClassDate(requiredDay.miercoles, miercoles);
                count++;  
            }

            if (requiredDay.jueves) {
                generateClassDate(requiredDay.jueves, jueves);
                count++;  
            }

            if (requiredDay.viernes) {
                generateClassDate(requiredDay.viernes, viernes);
                count++;  
            }

            if (requiredDay.sabado) {
                generateClassDate(requiredDay.sabado, sabado);
                count++;  
            }

            if (requiredDay.domingo) {
                generateClassDate(requiredDay.domingo, domingo);
                count++;  
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

            const updateClasses = doc(firestore, `Classes/${date.id}`);
            await updateDoc(updateClasses, {
                ...teacherAssignament
            });
            
            const teacherMyStudents = doc(firestore, `Users/${teacher.id}/myStudents/${date.studentUid}`);
            await setDoc(teacherMyStudents, {
                studentEmail: date.studentEmail,
                studentUid: date.studentUid,
                studentName: date.studentName,
                studentLastName: date.studentLastName,
                remainingClases: date.remainingClases,
                diasHora: date.diasHora,
            });

            const teacherMySchedule = doc(firestore, `Users/${teacher.id}/mySchedule/${date.studentUid}`);
            await setDoc(teacherMySchedule, {
                ...teacherSchedule
            });

            const studentDataUpdate = doc(firestore, `Users/${date.studentUid}`);
            await updateDoc(studentDataUpdate, {
                teacher: "assigned",
                teacherName: `${teacher.name} ${teacher.lastName}`,
                notifications: increment(1),
            });

            const studentMyClasses = doc(firestore, `Users/${date.studentUid}/myClasses/${date.id}`);
            await updateDoc(studentMyClasses, {
                ...teacherAssignament
            });

            const studentMySchedule = doc(firestore, `Users/${date.studentUid}/mySchedule/${date.id}`);
            await setDoc(studentMySchedule, {
                ...teacherSchedule
            });

            const studentNotification = collection(firestore, `Users/${date.studentUid}/myNotifications`);
            await addDoc(studentNotification, {...studentNewNotification,timeStamp});



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
                    
                    <button onClick={generateTeacherSchedule}>TEST</button>
                    
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
