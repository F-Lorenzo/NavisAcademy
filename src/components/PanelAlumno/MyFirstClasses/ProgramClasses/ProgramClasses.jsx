import React, { useState } from 'react';
import "./ProgramClasses.css";
import { UserUpdates } from '../../../../Context/UserUpdatesContext';
import { addDoc, updateDoc, collection, getFirestore, doc, query, increment, setDoc, serverTimestamp } from 'firebase/firestore';


const ProgramClasses = () => {

    const { user } = UserUpdates();
    const timeStamp = serverTimestamp(); 

    const [ daysSelected, setDaysSelected ] = useState(false);
    const [ usersWeek, setUsersWeek ] = useState([]);

    const week = [ "lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo" ];

    const programedClassData = {
        condition: "pending",
        teacher: "unasigned",
        remainingClases: user.misClases.remainingClases,
        studentUid: user.uid,
        studentEmail: user.email,
        studentName: user.form.name,
        studentLastName: user.form.lastName,   
    }

    const userNotification = {
        textNotification: "Programaste tus clases, en breve se te asiganara un profesor",
        notificationType: "Notificacion",
        checked: false,
    }

    const sendToFire = async () => {

        const ordenatedDays = [ "domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado" ];
        let userWeek = [];
        ordenatedDays.map((item, index) => {
            let temporalItem = usersWeek.filter((d) => d.day === item);
            userWeek.push(...temporalItem);
        })        

        try {
            const firestore = getFirestore();
            const mySchedule = query(collection(firestore, `Users/${user.uid}/myClasses`));
            addDoc(mySchedule, { userWeek, ...programedClassData })
                .then(({ id }) => {

                    const docuRef = doc(firestore, `Classes/${id}`);
                    setDoc(docuRef, { userWeek, ...programedClassData });
                    const myNotifications =  doc(firestore, `Users/${user.uid}/myNotifications/${id}`);
                    setDoc(myNotifications, {...userNotification, timeStamp});

                })
            const teacherUpdate = doc(firestore, `Users/${user.uid}`);
            await updateDoc( teacherUpdate, { teacher: "pending", notifications: increment(1), newbie: false} )

            swal("Muy Bien", `Pronto se te asignara un profesor!`, "success");

        } catch (e) {
            swal("UPS!", `${e.message}`, "error");

        }
    }

    const ordenateWeek = () => {
        const ordenatedDays = [ "domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado" ];
        let ordenatedWeek = [];
        ordenatedDays.map((item, index) => {
            let temporalItem = usersWeek.filter((d) => d.day === item);
            ordenatedWeek.push(...temporalItem);
        })
        setUsersWeek(ordenatedWeek);
    }    

    const handleContinuar = () => {
        let approved = false;

        usersWeek.length === 0 ? swal("CUIDADO!", `Debes seleccionar al menos un dia y un horario`, "error") : (
            usersWeek.map((day, index) => {
                if (day.time != undefined) {
                    approved = true;
                } else {
                    swal("CUIDADO!", `Debes eleccionar un horario`, "error");
                    approved = false; 
                }
            }));

        if (approved) {
            console.log(usersWeek);
            sendToFire();
        }
    }

    const handleChange = (e) => {

        //console.log(e.target.id,e.target.name, ":", e.target.value);

        let dayToChange = usersWeek.filter((d) => d.day === e.target.id);
        let restOfDays = usersWeek.filter((d) => d.day != e.target.id);

        //console.log("resto de dias : ", restOfDays);
        //console.log("agregar hora : ", dayToChange);

        dayToChange = { day: e.target.id , time: e.target.value }
        restOfDays.push(dayToChange);

        //console.log("dias actualizados :", restOfDays);

        setUsersWeek(restOfDays);
        
    }


    return (
        <>
            <div className='programar-clase-conteiner'>
                <h5>
                    Selecciona los dias y el horario en que quieres tomar tus clases
                </h5>
    
                <ul className='day-list'>
                    {week.map((day, index) => {
                        const [ clicked, setClicked ] = useState(false);
    
                        return (
                            <div className='day-time-button' key={index}>
                                <li className={clicked ? 'day-button clicked' : 'day-button'} 
                                    onClick={() => {
                                        let selectedDays = usersWeek;
                                        !clicked ? selectedDays.push({day, time: undefined}) 
                                        : selectedDays = selectedDays.filter((d) => 
                                            d.day != day
                                        );
                                        setClicked(!clicked);
                                        setUsersWeek(selectedDays);
                                        console.log(usersWeek);
                                    }}
                                >
                                    {day}
                                </li>
                                    { clicked && <input 
                                        step={600}
                                        type="time"
                                        id={day}
                                        name="time"
                                        value={usersWeek.time}
                                        onChange={handleChange} 
                                    />}
                            </div>
                        )
                    })}
                </ul>
    
                <button className='continue-button' onClick={handleContinuar}>
                    CONTINUAR
                </button>
            </div>
        </>
    )

}

export default ProgramClasses
