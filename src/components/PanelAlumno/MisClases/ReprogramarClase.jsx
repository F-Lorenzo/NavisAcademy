import React, { useState, useEffect } from 'react'
import { UserUpdates } from "../../../Context/UserUpdatesContext";

import { addDoc, updateDoc, collection, getFirestore, doc, query, increment, getDocs, getDoc} from 'firebase/firestore';
import MostrarHorarios from './MostrarHorarios';

import { useNavigate } from "react-router-dom";
import './ReprogramarClase.css'

const ReprogramarClase = () => {

    const { user } = UserUpdates();
    const [ teacher, setTeacher ] = useState ();

    const [ studentSchedule, setStudentSchedule ] = useState ();

    const teacherUid = user.misClases.teacherUid;
    const newStudentDate = [];
    const newTeacherDate = [];
    const navigate = useNavigate();

    async function getTeacherData(id) {
        const firestore = getFirestore();
        const teacherPath = doc(firestore, `Users/${id}`);
        const teacherCifredData = await getDoc(teacherPath);
        const teacherData = teacherCifredData.data();

        const studentSchedulePath = collection(firestore, `Users/${user.uid}/mySchedule`);
        getDocs(studentSchedulePath).then(res => {
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

        let dateOfClass = new Date();

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
        
        const actualDay = dateOfClass.getDay(); 

        switch (actualDay) {
            case 0:
                addDays(dateOfClass, 0);
                break;
            case 1:
                addDays(dateOfClass, -1);
                break;
            case 2:
                addDays(dateOfClass, -2);
                break;
            case 3:
                addDays(dateOfClass, -3);
                break;
            case 4:
                addDays(dateOfClass, -4);
                break;
            case 5:
                addDays(dateOfClass, -5);
                break;
            case 6:
                addDays(dateOfClass, -6);
                break;
        }

        const generateClassDate = (classTime, classDay) => {
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
            const classDate = {
                start_date : `${classDateHour_start}`,
                end_date : `${classDateHour_end}`,
                condition: `pending`,
                date: `${año}-${mes+1}`,
                day: dia,
                month: mes,
                year: año,
                time: classTime,
            }

            const classDateTeacher = {
                ...classDate,
                text : `Alumno : ${user.form.name} ${user.form.lastName}`,
            }

            const classDateStudent = {
                ...classDate,
                text : `Profesor : ${user.form.teacherName}`,
            }

            newTeacherDate.push(classDateTeacher);
            newStudentDate.push(classDateStudent);
            addDays(dateOfClass, -classDay);
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

        addDays(dateOfClass, 7);

        /*
        console.log(actualDay);
        console.log(dateOfClass);
        console.log(`Se va a reprogramar la clase nro. ${user.misClases.actualClass}`);
        console.log(`El nuevo dia sera el prox ${day}, y el horario sera ${time} Hs`);
        */

        caseOf(day, time);


        /*
        console.log(user);
        const fullSchedule = studentSchedule[0];
        console.log(fullSchedule);
        console.log(fullSchedule.id);
        console.log(fullSchedule[user.misClases.actualClass]);
        fullSchedule[user.misClases.actualClass] = {
            ...fullSchedule[user.misClases.actualClass],
            time: time
        }
 
        console.log(fullSchedule[user.misClases.actualClass]);
        console.log(fullSchedule);
 
        console.log(newStudentDate);
        console.log(newTeacherDate);
        console.log(dateOfClass);
        */

        swal("Muy Bien", `Tu clase fue reprogramada`, "success");
        navigate("/Panel");



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
