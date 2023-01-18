import React, { useState, useEffect } from 'react'
import { UserUpdates } from "../../../../Context/UserUpdatesContext";

import { updateDoc, collection, getFirestore, doc, getDocs, getDoc, increment} from 'firebase/firestore';
import MostrarHorarios from './MostrarHorarios';

import { useNavigate } from "react-router-dom";
import './ReprogramarClase.css'

import Loader from '../../../Loader/Loader';

const ReprogramarClase = () => {

    const [ loader, setLoader ] = useState(false);
    const { user } = UserUpdates();
    const [ teacher, setTeacher ] = useState ();

    const [ studentSchedule, setStudentSchedule ] = useState ();

    const classNumber = user.misClases.actualClass;
    const classDuration = user.misClases.durationClass;
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

    const newDate = async (day, time) => {

        setLoader(true);

        const fullSchedule = studentSchedule[0];
        /*
        console.log("fullSchedule: ", fullSchedule);
        */
        const classDateInfo = (fullSchedule[classNumber]); 
        /*
        console.log("enters to newDate: ", day, time)
        console.log(classDateInfo);
        */
        const oldClassDateStamp = classDateInfo.date;
        let oldClassDate = oldClassDateStamp.toDate();
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

        const generateClassDate = (classTime, classDay, classNumber, durationOfClass) => {
            /*
            console.log("classTime en generateClassDate: ", classTime);
            */
            addDays(oldClassDate, classDay);
            const classTimeDate = classTime;
            const dia = oldClassDate.getDate();
            const mes = oldClassDate.getMonth();
            const año = oldClassDate.getFullYear();
            const HH = classTimeDate.getHours();
            const mm = classTimeDate.getMinutes();
            let start = new Date(año, mes, dia, HH, mm);
            let end = new Date(año, mes, dia, HH, mm);
            end.setMinutes(end.getMinutes() + durationOfClass);

            const classDate = {
                date: start,
                dateEnd: end,
                time: classTime,
                condition: `pending`,
                linkToClass: "",
                teacherCalification: "",
                studentCalification: "",
                studentAssist: false,
                reprogramed: false,
                durationClass: classDateInfo.durationClass,
                classNumber: classNumber,

                studentName: classDateInfo.studentName,
                studentLastName: classDateInfo.studentLastName,
                studentUid: classDateInfo.studentUid,
                studentEmail: classDateInfo.studentEmail,

                teacherName: classDateInfo.teacherName,
                teacherLastName: classDateInfo.teacherLastName,
                teacherUid: classDateInfo.teacherUid,
            }

            /*
            console.log("nueva fecha clase reprogramada: ", classDate);
            */
            newStudentDate = classDate;
            /*
            newStudentSchedule.push(classDate);
            newTeacherSchedule.push(classDate);
            */
            addDays(oldClassDate, -classDay);
        }

        const caseOf = (day, time) => {
            ((day) === "domingo") && generateClassDate(time, domingo, classDateInfo.classNumber, classDateInfo.durationClass);
            ((day) === "lunes") && generateClassDate(time, lunes, classDateInfo.classNumber, classDateInfo.durationClass);
            ((day) === "martes") && generateClassDate(time, martes, classDateInfo.classNumber, classDateInfo.durationClass);
            ((day) === "miercoles") && generateClassDate(time, miercoles, classDateInfo.classNumber, classDateInfo.durationClass);
            ((day) === "jueves") && generateClassDate(time, jueves, classDateInfo.classNumber, classDateInfo.durationClass);
            ((day) === "viernes") && generateClassDate(time, viernes, classDateInfo.classNumber, classDateInfo.durationClass);
            ((day) === "sabado") && generateClassDate(time, sabado, classDateInfo.classNumber, classDateInfo.durationClass);
        }

        addDays(oldClassDate, 7);
        caseOf(day, time);

        /*
        fullSchedule[classNumber] = newStudentDate;
        console.log("NewClass?:",fullSchedule[classNumber]);
        */


        const scheduleArrayFormat = [];

        studentSchedule.forEach(element => 
            Object.keys(element).forEach(key => scheduleArrayFormat.push(element[key]))
        );

        scheduleArrayFormat.pop();
        
        scheduleArrayFormat[classDateInfo.classNumber].reprogramed = true;
        
        /*
        console.log("OLD CLASS: ", scheduleArrayFormat[classDateInfo.classNumber]);
        console.log(newStudentDate);
        console.log("tamaño del arraySchedule: ",scheduleArrayFormat.length);
        */
        
        let pushed = false;
        for (let poss = 0; poss < scheduleArrayFormat.length; poss++) {
            const element = scheduleArrayFormat[poss];
            const date = element.date.toDate();

            if (pushed) {
                element.classNumber = poss;
                newStudentSchedule.push(element);
            } else {
                if (date < newStudentDate.date) {
                    newStudentSchedule.push(element);
                } else {
                    newStudentDate.classNumber = poss;
                    newStudentSchedule.push(newStudentDate);
                    element.classNumber = poss;
                    newStudentSchedule.push(element);
                    pushed = true;
                }
            }
            /*
            console.log(date);
            console.log("nuevaFecha: ", newStudentDate.date)
            */
            
        }
        
        /*
        scheduleArrayFormat.sort((a,b) => {
            
            if (a.date < b.date) {return - 1;}
            if (a.date > b.date) {return 1;}
            return 0;
        })
        */

        const firestore = getFirestore();

        const studentActualClassUpdate = doc(firestore, `Users/${user.uid}`);
        await updateDoc(studentActualClassUpdate, {
            actualClass: increment(1),
            reprogramedThisMonth: increment(1),
        });

        const studentScheduleUpdate = doc(firestore, `Users/${user.uid}/mySchedule/${studentSchedule[0].id}`);
        await updateDoc(studentScheduleUpdate, {...newStudentSchedule});

        const teacherScheduleUpdate = doc(firestore, `Users/${classDateInfo.teacherUid}/mySchedule/${user.uid}`);
        await updateDoc(teacherScheduleUpdate, {...newStudentSchedule});

        swal("Muy Bien", `La clase fue reprogramada con exito`, "success");
        navigate("/Panel")
        /*
        console.log(user.uid);
        console.log("ID del doc en firestore a actualizar : ", studentSchedule[0].id);
        console.log("Calendario Student Ordenado : ", newStudentSchedule);
        console.log("Calendario Teacher Ordenado : ", newTeacherSchedule);
        */



    }

    const handleInfoLog = () => {
        console.log("duracion de la clase: ", classDuration);
        console.log(teacher);


    }

    if(teacher) {
        return (
            <div>
                {/*
                <button onClick={handleInfoLog}>InfoLog</button>
                */}
                { loader ? <Loader /> :
                <>
                    <div className='reprogramar_title'>
                        <h5>REPROGRAMAR CLASE</h5>
                        <p>Aqui veras una lista de los horarios disponibles para reprogramar tu clase, 
                        recuerda que solo puedes hacer esto 2 veces por mes</p>
                    </div>
                    <div>
                        <MostrarHorarios teacher={teacher} durationClass={classDuration} newDate={newDate} />
                    </div>
                </>
                }
                
            </div>
        )
    }

}

export default ReprogramarClase
