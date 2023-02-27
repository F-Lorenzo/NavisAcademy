import { getFirestore, increment, updateDoc, doc, getDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import './ClassCalification.scss';
import Loader from '../../Loader/Loader';

const ClassCalification = ({studentId, teacherId, classNumber}) => {

    const [ calification, setCalification ] = useState('1');
    const [ loader, setLoader ] = useState(false);
    const [ sended, setSended ] = useState(false);

    const califications = [
        { id: 1, label: 'Clase Exitosa', value: 1 },
        { id: 2, label: 'Estudiante Ausente', value: 2 },
        { id: 3, label: 'Profesor Ausente', value: 3 },
    ];

    let studentCompletedClass = 0;
    let studentAbsentedClass = 0;
    let studentRemainingClases = 0;
    let calificationOfClass = '';

    let teacherTotalClasses = 0;
    let teacherThisMonthClasses = 0;
    let teacherAbsentedClasses = 0;


    const handleChange = (e) => {
        setCalification(e.target.value);
    }

    const sendToFire = async () => {
        setLoader(true);
        const firestore = getFirestore();
        const student = doc(firestore, `Users/${studentId}`);
        await updateDoc(student, {
            completedClases: increment(studentCompletedClass),
            absentedClases: increment(studentAbsentedClass),
            remainingClases: increment(studentRemainingClases),
        });
        const teacher = doc(firestore, `Users/${teacherId}`);
        await updateDoc(teacher, {
            totalClasses: increment(teacherTotalClasses),
            thisMonthClasses: increment(teacherThisMonthClasses),
            absentedClasses: increment(teacherAbsentedClasses),
        });
        const myStudent = doc(firestore, `Users/${teacherId}/myStudents/${studentId}`);
        await updateDoc(myStudent, {
            remainingClases: increment(studentRemainingClases),
        });
        /*
        */
        const teacherSchedulePath = doc(firestore, `Users/${teacherId}/mySchedule/${studentId}`);
        const teacherScheduleData = await getDoc(teacherSchedulePath);
        const teacherSchedule = teacherScheduleData.data();
        teacherSchedule[classNumber].condition = 'success';
        teacherSchedule[classNumber].teacherCalification = calificationOfClass;
        await updateDoc (teacherSchedulePath, {
            ...teacherSchedule,
        })
        setLoader(false);
        swal("OK", `Se calificó la clase con éxito`, "success");
    }

    const handleEnviar = () => {
        setSended(true);
        if (calification === '') {
            swal("CUIDADO!", `Debe seleccionar una opción`, "error");
        } else {
            console.log(calification);
            switch (calification) {
                case '1':
                    studentCompletedClass = 1;
                    studentAbsentedClass = 0;
                    studentRemainingClases = -1;
                    teacherTotalClasses = 1;
                    teacherThisMonthClasses = 1;
                    teacherAbsentedClasses = 0;
                    calificationOfClass = 'success';
                    console.log(calification);
                    break;
                case '2':
                    studentCompletedClass = 0;
                    studentAbsentedClass = 1;
                    studentRemainingClases = -1;
                    teacherTotalClasses = 1;
                    teacherThisMonthClasses = 1;
                    teacherAbsentedClasses = 0;
                    calificationOfClass = 'absentedStudent';
                    console.log(calification);
                    break;
                case '3':
                    studentCompletedClass = 0;
                    studentAbsentedClass = 0;
                    teacherTotalClasses = 0;
                    teacherThisMonthClasses = 0;
                    teacherAbsentedClasses = 1;
                    calificationOfClass = 'absentedTeacher';
                    console.log(calification);
                    break;
            }
            sendToFire();
            /*
            console.log(classNumber);
            console.log(studentActualClass);
            */
        }

    }

    if (loader) {
        return <Loader />
    }

    return (   
        <>
        { sended === true ? 
            <div>
                <span className='calificationPending'>
                    Calificación Enviada
                </span>
            </div>
        :
            <div className='calification-container'>
                <label htmlFor="calificationClass">
                    Califica La Clase:
                    <select name="calificationClass" id="calificationClass" value={calification} onChange={handleChange} >
                        {califications.map((calification) => (
                            <option key={calification.id} value={calification.value} defaultValue={calification.value[1]}>
                                {calification.label}    
                            </option>
                        ))}
                    </select>
                </label>
                <button onClick={handleEnviar}>
                    ENVIAR
                </button>
            </div>

        }
        </>
    )

}

export default ClassCalification
