import React from 'react';
import { useState } from 'react';
import { updateDoc, getFirestore, doc, addDoc, serverTimestamp, collection, increment } from 'firebase/firestore';
import './StartButton.scss';
import Card from '../../clasesCard/Card';

import ClassCalification from '../../ClassCalification/ClassCalification';

const StartButton = ({classDate, studentId}) => {

    const [ linkToClass, setLinkToClass ] = useState('');
    const classCondition = classDate.condition;
    const classCalification = classDate.teacherCalification;
    const startDate = classDate.date.toDate();
    const endDate = classDate.dateEnd.toDate();
    const toDayDate = new Date();
    //console.log(endDate);

    let calification = '';

    let remainingTimeToStart = startDate - toDayDate;
    let remainingTimeToEnd = endDate - toDayDate;
        
    let oneMin = 60 * 1000;
    let oneHour = 60 * oneMin;
    let oneDay = 24 * oneHour;
    
    let daysLeftToStart = Math.floor(remainingTimeToStart / oneDay);
    let hrsLeftToStart = Math.floor((remainingTimeToStart % oneDay) / oneHour);
    let minsLeftToStart = Math.floor((remainingTimeToStart % oneHour) / oneMin);

    let minsLeftToEnd = Math.floor((remainingTimeToEnd % oneHour) / oneMin);

    let pastDays = 0;

    switch (classCalification) {
        case 'success':
            calification = 'Clase Exitosa';
            break;
        case 'absentedStudent':
            calification = 'Estudiante Ausente';
            break;
        case 'absentedTeacher':
            calification = 'Profesor Ausente';
            break;
        default:
            calification = 'No hay calificación';
            break;
    }

    if (daysLeftToStart < pastDays) {
        pastDays = Math.abs(daysLeftToStart)
    }

    const handleTest = () => {
        console.log(minsLeftToEnd);
        console.log(classDate);
        console.log(startDate);
        console.log(toDayDate);
        console.log("tiempo que paso: ", remainingTimeToStart);

        console.log("dias que pasaron: ", pastDays);

        console.log("Dias restantes : ", daysLeftToStart);
        console.log("Horas restantes : ", hrsLeftToStart);
        console.log("minutos restantes : ", minsLeftToStart);

        console.log(studentId);
        console.log(linkToClass);
    }

    const handleLinkToClass = (e) => {
        setLinkToClass(e.target.value);
    }

    const timeStamp = serverTimestamp();
    const studentNewNotification = {
        textNotification: `Tu profesor ah enviado el link de tu clase ${linkToClass}`,
        notificationType: "Notificacion",
        checked: false,
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const firestore = getFirestore();

            const sendLinkToStudent = doc(firestore, `Users/${studentId}`);
            await updateDoc(sendLinkToStudent, {linkToClass: linkToClass, notifications: increment(1)});
            const studentNotification = collection(firestore, `Users/${studentId}/myNotifications`);
            await addDoc(studentNotification, { ...studentNewNotification, timeStamp });

            swal("OK", `Se envio el link de la clase`, "success");

        } catch (e) {
            swal("UPS!", `${e.message}`, "error");
        }
    }

    return (
        <div>
            {/*
                <button onClick={handleTest}>TEST</button>
            */}
            { classCondition === "pending" ? 
                ( pastDays > 1 ? 
                    <div>
                        <span>LA CLASE YA EXPIRO</span>
                    </div>
                    :( daysLeftToStart > 0 ? 
                            <div>
                                <p>Faltan {daysLeftToStart} días</p>
                                <p>y {hrsLeftToStart} horas</p>
                            </div> 
                            :( hrsLeftToStart > 0 ?
                                <div>
                                    <p>Faltan {hrsLeftToStart} horas</p>
                                    <p>y {minsLeftToStart} minutos</p>
                                </div>
                                :( minsLeftToStart > 30 ?
                                    <div>
                                        <p>Faltan {minsLeftToStart} minutos</p>
                                    </div>
                                    :( minsLeftToEnd > 0 ? 
                                        <form onSubmit={handleSubmit}>
                                            <div className='linkToClass-container'>
                                                <label htmlFor="url">Ingrese aqui el Link de la clase:</label>
                                                    <input 
                                                        type="url" 
                                                        id="url"
                                                        name="url" 
                                                        placeholder="https://Ingrese_el_link_de_la_clase.com"
                                                        pattern="https://.*" size="40"
                                                        value={linkToClass || ''}
                                                        onChange={handleLinkToClass} 
                                                        required>
                                                    </input>
                                            </div>
                                            <button type='submit'>
                                                ENVIAR
                                            </button>
                                        </form>
                                        : 
                                        <div>
                                            <ClassCalification studentId={studentId} teacherId={classDate.teacherUid} classNumber={classDate.classNumber}/>
                                        </div>
                                    )
                                )
                            )
                        
                    )
                ) 
                : 
                <div>
                    <span className={ classCalification === 'success' ? 'calificationGreen' : 'calificationRed' }>{calification}</span>
                </div>
            }
            
        </div>
    )
}

export default StartButton
