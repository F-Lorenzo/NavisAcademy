import { getFirestore, increment, updateDoc, doc } from 'firebase/firestore';
import React, { useState } from 'react';
import './ClassCalification.scss';
import Loader from '../../Loader/Loader';

const ClassCalification = ({studentId, teacherId}) => {

    const [ calification, setCalification ] = useState('');
    const [ loader, setLoader ] = useState(false);

    const califications = [
        { id: 1, label: 'Clase exitosa', value: 1 },
        { id: 2, label: 'Estudiante Ausente', value: 2 },
        { id: 3, label: 'Profesor Ausente', value: 3 },
    ];

    let studentActualClass = 0;
    let studentCompletedClass = 0;
    let studentAbsentedClass = 0;
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
            actualClass: increment(studentActualClass),
            completedClases: increment(studentCompletedClass),
            absentedClases: increment(studentAbsentedClass),
        });
        const teacher = doc(firestore, `Users/${teacherId}`);
        await updateDoc(teacher, {
            totalClasses: increment(teacherTotalClasses),
            thisMonthClasses: increment(teacherThisMonthClasses),
            absentedClasses: increment(teacherAbsentedClasses),
        });
        setLoader(false);
    }

    const handleEnviar = () => {
        if (calification === '') {
            swal("CUIDADO!", `Debe seleccionar una opción`, "error");
        } else {
            console.log(calification);
            switch (calification) {
                case '1':
                    studentActualClass = 1;
                    studentCompletedClass = 1;
                    studentAbsentedClass = 0;
                    teacherTotalClasses = 1;
                    teacherThisMonthClasses = 1;
                    teacherAbsentedClasses = 0;
                    calificationOfClass = 'succes';
                    break;
                case '2':
                    studentActualClass = 1;
                    studentCompletedClass = 0;
                    studentAbsentedClass = 1;
                    teacherTotalClasses = 1;
                    teacherThisMonthClasses = 1;
                    teacherAbsentedClasses = 0;
                    calificationOfClass = 'absentedStudent';
                    break;
                case '3':
                    studentActualClass = 1;
                    studentCompletedClass = 0;
                    studentAbsentedClass = 0;
                    teacherTotalClasses = 0;
                    teacherThisMonthClasses = 0;
                    teacherAbsentedClasses = 1;
                    calificationOfClass = 'absentedTeacher';
                    break;
            }
            sendToFire();
            console.log(studentActualClass);
        }

    }

    if (loader) {
        return <Loader />
    }

    return (
        
            <div className='calification-container'>
                <label htmlFor="calificationClass">
                    Califica la clase:
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

        
    )

}

export default ClassCalification
