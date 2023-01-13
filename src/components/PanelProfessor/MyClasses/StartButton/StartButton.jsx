import React from 'react';
import { useState } from 'react';
import { updateDoc, getFirestore, doc, addDoc, serverTimestamp, collection, increment } from 'firebase/firestore';
import './StartButton.css';
import Card from '../../clasesCard/Card';

const StartButton = ({classDate, studentId}) => {

    const [ linkToClass, setLinkToClass ] = useState('');
    const endDate = classDate.toDate();
    const toDayDate = new Date();

    let remainingTime = endDate - toDayDate;
        
    let oneMin = 60 * 1000;
    let oneHour = 60 * oneMin;
    let oneDay = 24 * oneHour;
    
    let daysLeft = Math.floor(remainingTime / oneDay);
    let hrsLeft = Math.floor((remainingTime % oneDay) / oneHour);
    let minsLeft = Math.floor((remainingTime % oneHour) / oneMin);

    const handleTest = () => {
        console.log(endDate);
        console.log(toDayDate);
        console.log(remainingTime);

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
            {daysLeft > 0 ?
                <div>
                    <p>Faltan {daysLeft} dias</p>
                    <p>y {hrsLeft} horas</p>
                </div> 
                : ( hrsLeft > 0 ?
                <div>
                    <p>Faltan {hrsLeft} horas</p>
                    <p>y {minsLeft} minutos</p>
                </div>
                : ( minsLeft > 15 ?
                <div>
                    <p>Faltan {minsLeft} minutos</p>
                </div>
                : ( minsLeft <= 15 && minsLeft > -50 && daysLeft === 0  ? 
                <div>
                    <button onClick={handleTest} >test</button>
                    {/*
                    */}
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
                </div>
                : ( daysLeft < -1 ? 
                <div>
                    <p>
                        La clase ya expiro
                    </p> 
                </div>
                :  
                <div>
                    <Card />
                </div> 
                ))))
            }
        </div>
    )
}

export default StartButton
