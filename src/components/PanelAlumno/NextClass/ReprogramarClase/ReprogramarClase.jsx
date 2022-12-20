import React, { useState, useEffect } from 'react'
import { UserUpdates } from "../../../../Context/UserUpdatesContext";

import { addDoc, updateDoc, collection, getFirestore, doc, query, increment, getDocs, getDoc} from 'firebase/firestore';
import MostrarHorarios from './MostrarHorarios';

import { useNavigate } from "react-router-dom";
import './ReprogramarClase.css'

const ReprogramarClase = () => {

    const { user } = UserUpdates();
    const [ teacher, setTeacher ] = useState ();

    const [ studentSchedule, setStudentSchedule ] = useState ();

    const classNumber = user.misClases.actualClass;
    const teacherUid = user.misClases.teacherUid;

    let newStudentDate = [];
    let newTeacherDate = [];
    const newStudentSchedule = [];
    const newTeacherSchedule = [];

    const navigate = useNavigate();

    async function getTeacherData(id) {
        const firestore = getFirestore();
        const teacherPath = doc(firestore, `Users/${id}`);
        const teacherCifredData = await getDoc(teacherPath);
        const teacherData = teacherCifredData.data();

        const studentSchedulePath = collection(firestore, `Users/${user.uid}/mySchedule`);
        getDocs(studentSchedulePath)
        .then(res => {
            setStudentSchedule(
                res.docs.map(date => ({
                    id: date.id,
                    ...date.data()
                }))
            )
        });

        return teacherData;
    }

    useEffect(() => {
        getTeacherData(teacherUid).then((teacher) => {
            const teacherDispo = {
                disponibility: teacher.disponibility,
                teacherWeek: teacher.weekDisponibility
            };
            setTeacher(teacherDispo);
        })
    }, [])

    const newDate = (day, time) => {

        const fullSchedule = studentSchedule[0];
        const classDateInfo = (fullSchedule[classNumber]); 
        /*
        console.log(classDateInfo);
        */
        let oldClassDate = new Date(classDateInfo.year, classDateInfo.month, classDateInfo.day);
        /*
        console.log(`Fecha de la clase a reprogramar : ${oldClassDate}`);
        */

        const addDays = (date, period) => {
            date.setDate(date.getDate() + period);
        }

        let domingo = 0;
        let lunes = 1;
        let martes = 2;
        let miercoles = 3;
        let jueves = 4;
        let viernes = 5;
        let sabado = 6;

        const oldClassDay = oldClassDate.getDay();
        
        switch (oldClassDay) {
            case 0:
                addDays(oldClassDate, 0);
                break;
            case 1:
                addDays(oldClassDate, -1);
                break;
            case 2:
                addDays(oldClassDate, -2);
                break;
            case 3:
                addDays(oldClassDate, -3);
                break;
            case 4:
                addDays(oldClassDate, -4);
                break;
            case 5:
                addDays(oldClassDate, -5);
                break;
            case 6:
                addDays(oldClassDate, -6);
                break;
        }

        const generateClassDate = (classTime, classDay) => {
            addDays(oldClassDate, classDay);
            let dia = oldClassDate.getDate();
            let mes = oldClassDate.getMonth();
            let año = oldClassDate.getFullYear();  
            let hora = parseInt(classTime);
            let fullDate = new Date(año, mes, dia, hora); 
            let horaComienzo = classTime;
            let horaFin = parseInt(classTime);
            horaFin++;
            horaFin = horaFin.toString();
            horaFin = horaFin + ":00";
            let classDateHour_start = `${año}-${mes+1}-${dia} ${horaComienzo}`;
            let classDateHour_end = `${año}-${mes+1}-${dia} ${horaFin}`;
            const classDate = {
                condition: `pending`,
                start_date : `${classDateHour_start}`,
                end_date : `${classDateHour_end}`,
                date: fullDate,
                time: classTime,
                day: dia,
                month: mes,
                year: año,
                dayNumber: classDay,
            }

            const classDateTeacher = {
                ...classDate,
                text : `Alumno : ${user.form.name} ${user.form.lastName}`,
            }

            const classDateStudent = {
                ...classDate,
                text : `Profesor : ${user.form.teacherName}`,
            }

            newTeacherDate = classDateTeacher;
            newStudentDate = classDateStudent;
            addDays(oldClassDate, -classDay);
        }

        const caseOf = (day, time) => {
            ((day) === "domingo") && generateClassDate(time, domingo);
            ((day) === "lunes") && generateClassDate(time, lunes);
            ((day) === "martes") && generateClassDate(time, martes);
            ((day) === "miercoles") && generateClassDate(time, miercoles);
            ((day) === "jueves") && generateClassDate(time, jueves);
            ((day) === "viernes") && generateClassDate(time, viernes);
            ((day) === "sabado") && generateClassDate(time, sabado);
        }

        addDays(oldClassDate, 7);
        caseOf(day, time);

        fullSchedule[classNumber] = newStudentDate;

        const scheduleArrayFormat = [];

        studentSchedule.forEach(element => 
            Object.keys(element).forEach(key => scheduleArrayFormat.push(element[key]))
        );

        scheduleArrayFormat.pop();
        
        scheduleArrayFormat.sort((a,b) => {
            if (a.start_date < b.start_date) {return - 1;}
            if (a.start_date > b.start_date) {return 1;}
            return 0;
        })

        scheduleArrayFormat.map(date => {
            newStudentSchedule.push(date);
            let newForTeacher = {
                ...date,
                text : `Alumno : ${user.form.name} ${user.form.lastName}`
            }
            newTeacherSchedule.push(newForTeacher);
        });

        /*
        console.log("ID del doc en firestore a actualizar : ", studentSchedule[0].id);
        console.log("Calendario Student Ordenado : ", newStudentSchedule);
        console.log("Calendario Teacher Ordenado : ", newTeacherSchedule);
        */



    }

    const handleInfoLog = () => {

    }

    if(teacher) {
        return (
            <div>
                <div className='reprogramar_title'>
                    <h5>REPROGRAMAR CLASE</h5>
                    <p>Aqui veras una lista de los horarios disponibles para reprogramar tu clase, 
                    recuerda que solo puedes hacer esto 2 veces por mes</p>
                </div>
                <div>
                    <MostrarHorarios teacher={teacher} newDate={newDate} />
                </div>
                {/*
                <button onClick={handleInfoLog}>InfoLog</button>
                */}
            </div>
        )
    }

}

export default ReprogramarClase
