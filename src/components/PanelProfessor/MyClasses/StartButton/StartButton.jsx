import React from 'react';
import { useState } from 'react';
import { updateDoc, getFirestore, doc, addDoc, serverTimestamp, collection, increment } from 'firebase/firestore';
import './StartButton.css';
import Card from '../../clasesCard/Card';

const StartButton = ({classDate, studentId}) => {

    const [ linkToClass, setLinkToClass ] = useState('');
    const startDate = classDate.date.toDate();
    const toDayDate = new Date();

    let remainingTime = startDate - toDayDate;
        
    let oneMin = 60 * 1000;
    let oneHour = 60 * oneMin;
    let oneDay = 24 * oneHour;
    
    let daysLeft = Math.floor(remainingTime / oneDay);
    let hrsLeft = Math.floor((remainingTime % oneDay) / oneHour);
    let minsLeft = Math.floor((remainingTime % oneHour) / oneMin);

    let pastDays = 0;

    if (daysLeft < pastDays) {
        pastDays = Math.abs(daysLeft)
    }

    const handleTest = () => {
        console.log(classDate);
        console.log(startDate);
        console.log(toDayDate);
        console.log("tiempo que paso: ", remainingTime);

        console.log("dias que pasaron: ", pastDays);

        console.log("Dias restantes : ", daysLeft);
        console.log("Horas restantes : ", hrsLeft);
        console.log("minutos restantes : ", minsLeft);

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

        } catch (e) {
            swal("UPS!", `${e.message}`, "error");
        }
    }

    return (
        <div>
            {/*
            <button onClick={handleTest}>TEST</button>
            */}

            { pastDays > 1 ? 
                <div>
                    <span>LA CLASE YA EXPIRO</span>
                </div>
            : ( pastDays > 0 ?
                <div>
                    <Card studentId={studentId} teacherId={classDate.teacherUid} />
                </div>
            :   daysLeft > 0 ? 
                    <div>
                        <p>Faltan {daysLeft} dias</p>
                        <p>y {hrsLeft} horas</p>
                    </div> 
            : ( hrsLeft > 0 ?
                <div>
                    <p>Faltan {hrsLeft} horas</p>
                    <p>y {minsLeft} minutos</p>
                </div>
            : ( minsLeft > 30 ?
                <div>
                    <p>Faltan {minsLeft} minutos</p>
                </div>
            :  
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
            )))
            }           
        </div>
    )
}

export default StartButton
