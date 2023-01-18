import React, { useState } from 'react'
import './SetTeacherDisponibility.css'
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../../Context/AuthContext';
import { DisponibilityItem } from './DisponibilityItem';
import { addDoc, setDoc, collection, getFirestore, doc, query, getDocs } from 'firebase/firestore';
import TimePicker from '../../Develope/TimePicker';
import Loader from '../../Loader/Loader';


const SetTeacherDisponobility = ({teacherForm}) => {

    const { createUser } = UserAuth();
    const [ loader, setLoader ] = useState(false);
    const navigate = useNavigate();
    const week = [ "lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo" ];
    const [ weekDisponibility, setWeekDisponibility ] = useState([]);
    const [ lunes, setLunes ] = useState(...DisponibilityItem);
    const [ martes, setMartes ] = useState(...DisponibilityItem);
    const [ miercoles, setMiercoles ] = useState(...DisponibilityItem);
    const [ jueves, setJueves ] = useState(...DisponibilityItem);
    const [ viernes, setViernes ] = useState(...DisponibilityItem);
    const [ sabado, setSabado ] = useState(...DisponibilityItem);
    const [ domingo, setDomingo ] = useState(...DisponibilityItem);

    const handleChangeStart = (s) => {
        let dayToChange = weekDisponibility.filter((d) => d.day === s.id);
        console.log(dayToChange);
        let timeEnd = dayToChange[0].timeEnd;
        let timeEndDate = dayToChange[0].timeEndDate;
        console.log(timeEndDate);
        let restOfDays = weekDisponibility.filter((d) => d.day != s.id);
        dayToChange = { 
            day: s.id, 
            timeStart: s.timeString, 
            timeEnd : timeEnd, 
            timeStartDate: s.timeDate,
            timeEndDate : timeEndDate,
        }
        console.log(dayToChange);
        restOfDays.push(dayToChange);
        setWeekDisponibility(restOfDays);
    }

    const handleChangeEnd = (e) => {
        let dayToChange = weekDisponibility.filter((d) => d.day === e.id);
        let timeStart = dayToChange[0].timeStart;
        let timeStartDate = dayToChange[0].timeStartDate;
        let restOfDays = weekDisponibility.filter((d) => d.day != e.id);
        dayToChange = { 
            day: e.id, 
            timeStart: timeStart, 
            timeEnd: e.timeString, 
            timeEndDate: e.timeDate,
            timeStartDate: timeStartDate,
        }
        console.log(dayToChange)
        restOfDays.push(dayToChange);
        setWeekDisponibility(restOfDays);
    }

    const sendToFire = async () => {

        const disponibility = {lunes, martes, miercoles, jueves, viernes, sabado, domingo};
        const newTeacherData = {...teacherForm, weekDisponibility, disponibility};
        
        try {
            const infoUser = await createUser(teacherForm.email, teacherForm.password)
            .then((firebaseData) => {
                return firebaseData;
            });
            const firestore = getFirestore();
            const newTeacher = doc(firestore, `Users/${infoUser.user.uid}`);
            await setDoc(newTeacher, {...newTeacherData});

            swal("OK", `Nuevo Profesor Creado`, "success");
            navigate('/account');
        } catch (e) {

            swal("UPS!", `${e.message}`, "error");
        }
    }

    const handleContinuar = () => {
        
        let nameIn = !(!teacherForm.name || (teacherForm.name.length < 4)); 
        let lastNameIn = !(!teacherForm.lastName || (teacherForm.lastName.length < 4)); 
        let passwordIn = !(!teacherForm.password || (teacherForm.password.length < 9)); 
        let emailIn = !(!teacherForm.email || (teacherForm.email < 12));

        !nameIn ? swal("CUIDADO!", `El nombre debe tener al menos 4 caracteres`, "error") : nameIn = true;
        !lastNameIn ? swal("CUIDADO!", `El apellido debe tener al menos 4 caracteres`, "error") : lastNameIn = true;
        !passwordIn ? swal("CUIDADO!", `La contraseña debe tener al menos 9 caracteres`, "error") : passwordIn = true;
        !emailIn ? swal("CUIDADO!", `Ingrese una direccion de email valida`, "error") : emailIn = true;
        
        let timeIn = false;

        weekDisponibility.length === 0 ? swal("CUIDADO!", `Debes seleccionar al menos un dia y un horario`, "error") : (
            weekDisponibility.map((day) => {
                if ((day.timeStart != undefined) && (day.timeEnd != undefined)) {
                    if (day.timeStart >= day.timeEnd) {
                        swal("CUIDADO!", `El horario de inicio debe ser menor al de finalizacion`, "error");
                    } else {
                        timeIn = true;
                    }
                } else {
                    swal("CUIDADO!", `Debes seleccionar un horario`, "error");
                }
            })
        );

        let dataApproved = nameIn && lastNameIn && passwordIn && emailIn && timeIn;
        dataApproved && sendToFire();
    }

    return (
        <>

            <div className='teacherDisponibility-conteiner'>
                <h5>
                    Selecciona los dias y el horario de disponibilidad del docente
                </h5>
    
                <ul className='teacherDisponibility-day-list'>
                    {week.map((day, index) => {
                        const [ clicked, setClicked ] = useState(false);
    
                        return (
                            <div className='teacherDisponibility-day-time-button' key={index}>
                                <li className={clicked ? 'teacherDisponibility-day-button clicked' : 'teacherDisponibility-day-button'} 
                                    onClick={() => {
                                        let selectedDays = weekDisponibility;
                                        !clicked ? selectedDays.push({day, timeStart: undefined, timeEnd: undefined, timeStartDate: undefined, timeEndDate: undefined}) 
                                        : selectedDays = selectedDays.filter((d) => 
                                            d.day != day
                                        );
                                        setClicked(!clicked);
                                        setWeekDisponibility(selectedDays);
                                        console.log(weekDisponibility);
                                    }}
                                >
                                    {day}
                                </li>
                                    { clicked && (
                                        <div className='time-selector'>
                                            <li>
                                                Horario de inicio : 
                                                <TimePicker id={day} name="timeStart" onChange={handleChangeStart}/>
                                            </li>
                                            <li>
                                                Horario de finalizacion : 
                                                <TimePicker id={day} name="timeEnd" onChange={handleChangeEnd}/>
                                            </li>
                                        </div>
                                        )
                                    }
                            </div>
                        )
                    })}
                </ul>
    
                <button className='teacherDisponibility-continue-button' onClick={handleContinuar}>
                    CREAR CUENTA DE PROFESOR
                </button>
            </div>
        
        </>
    )

}

export default SetTeacherDisponobility
