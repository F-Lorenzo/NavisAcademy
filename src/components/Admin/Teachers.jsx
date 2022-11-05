import React, { useState } from 'react'

import { addDoc, updateDoc, collection, getFirestore, doc, query, increment, setDoc, getDoc } from 'firebase/firestore';
import Loader from '../Loader/Loader';
import { useEffect } from 'react';
import { async } from '@firebase/util';

const Teachers = ({dateId, teacher}) => {

    
    const [ classData, setClassData ] = useState([]);
    const [ loader, setLoader ] = useState(false);

    const dia = teacher.disponibility;

    async function getClassData(id) {

        const firestore = getFirestore();
        const classToAssignRef = doc(firestore, `Classes/${id}`);
        const classToAssignCifred = await getDoc(classToAssignRef);
        const classToAssignData = classToAssignCifred.data();
        return classToAssignData;

    }

    useEffect( () => {

        getClassData(dateId).then((date) => {
            const dateInfo = {...date};
            setClassData(dateInfo);
        })

    }, []);

    const teacherAssignament = {
        teacher: "assigned",
        teacherEmail: teacher.email,
        teacherUid: teacher.id,
        teacherName: teacher.name,
        teacherLastName: teacher.lastName,
    }


    const handleSeleccionarProfesor = async (e) => {
        
        console.log(teacher);
        console.log(dateId);
        console.log(classData);

        e.preventDefault();
        setLoader(true);

        try {

            const firestore = getFirestore();
            const classToAssign = doc(firestore, `Classes/${dateId}`);
            const teacherAssigned = doc(firestore, `Users/${teacher.id}/myClases/${dateId}`);
            const teacherStudent = doc(firestore, `Users/${teacher.id}/myStudents/${classData.studentUid}`)
            const teacherStudentClass = doc(firestore, `Users/${teacher.id}/myStudents/${classData.studentUid}/Classes/${dateId}`)
            const studentClass = doc(firestore, `Users/${classData.studentUid}/myClases/${dateId}`);
            await updateDoc(classToAssign, {
                ...teacherAssignament
            });
            await setDoc(teacherAssigned, {
                ...classData,
                teacher: "assigned"
            });
            await setDoc(teacherStudent, {
                studentEmail: classData.studentEmail,
                studentUid: classData.studentUid,
                studentName: classData.studentName,
                studentLastName: classData.studentLastName,
            });
            await updateDoc(studentClass, {
                ...teacherAssignament
            });
            await setDoc(teacherStudentClass, {
                ...classData,
                teacher: "assigned"
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

    return (
        <div>
            <ul>
                
                <li> Profesor: {teacher.name} {teacher.lastName} </li>
                <li> Email: {teacher.email} </li>
                <li> Disponibilidad: 
                    {dia.lunesStart ? <p>Lunes desde las: {dia.lunesStart}hs hasta las {dia.lunesEnd}hs</p> : ""} 
                    {dia.martesStart ? <p>Martes desde las: {dia.martesStart}hs hasta las {dia.martesEnd}hs</p> : ""} 
                    {dia.miercolesStart ? <p>miercoles desde las:: {dia.miercolesStart} hasta las {dia.miercolesEnd}hs</p> : ""} 
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

export default Teachers
