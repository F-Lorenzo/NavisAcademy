import React, { useState } from 'react';
import { addDoc, updateDoc, collection, getFirestore, doc, query, increment, setDoc, getDoc, serverTimestamp, arrayUnion } from 'firebase/firestore';
import Loader from '../../Loader/Loader';

const Teachers = ({date, teacher, selected}) => {

    // Control de entradas

    //console.log("INFO EN date : ", date);
    //console.log("INFO EN userWeek : ", date.userWeek);
    //console.log("INFO EN teacher : ", teacher);

    // ----------------------------------------

    const [ loader, setLoader ] = useState(false);

    const timeStamp = serverTimestamp();

    const teacherAssignament = {
        teacher: "assigned",
        condition: "succes",
        teacherEmail: teacher.email,
        teacherUid: teacher.id,
        teacherName: teacher.name,
        teacherLastName: teacher.lastName,
        teacherPhoneNumber: teacher.phoneNumber,
    }

    const newStudentForTeacher = {
        studentEmail: date.studentEmail,
        studentUid: date.studentUid,
        studentName: date.studentName,
        studentLastName: date.studentLastName,
        studentPhoneNumber: date.studentPhoneNumber,
        remainingClases: date.remainingClases,
        classWeek: date.userWeek,
    }

    const studentNewNotification = {
        textNotification: "Felicitaciones, tu peticion de clases fue aceptada, ya te asignamos un profesor",
        notificationType: "Notificacion",
        checked: false,
    }

    const teacherNewNotification = {
        textNotification: `Se te asigno un nuevo alumno, su nombre es ${date.studentName} ${date.studentLastName}`,
        notificationType: "Notificacion",
        checked: false,
    }

    // DISPONIBILIDAD

    const teacherWeek = [];
    const teacherSchedule = [];
    const studentSchedule = [];
    const teacherDisponibility = teacher.disponibility;
    const durationClass = date.durationClass;
    let newDisponibility = teacherDisponibility;

    let availableTeacher = true;
    let slotsNeeded = 0;
    let freeSlot = 0;

    switch (durationClass) {
        case 30:
            slotsNeeded = 2;
            break;
        case 50:
            slotsNeeded = 3;
            break;
    }

    const Disponibility = () => {
        availableTeacher = !availableTeacher;
    }

    (date.userWeek).map((user) => {
        const dayMatch = (teacher.weekDisponibility).filter(teacher => teacher.day === user.day);
        teacherWeek.push(...dayMatch);
    });
    
    (date.userWeek).length != teacherWeek.length ? Disponibility() : (
        (date.userWeek).map((user, index) => {
            !((user.timeDate >= teacherWeek[index].timeStartDate) && (user.timeDate < teacherWeek[index].timeEndDate)) && Disponibility();
        })
    );

    function searchForSlots(time, slots, disponibility) {
        let availableSlot = true;
        for (let i = 0; i < slots; i++) {
            let [hours, minutes] = time.split(":");
            minutes = Number(minutes) + 15;
            if (minutes >= 60) {
                minutes = minutes - 60;
                hours = Number(hours) + 1;
                if (hours < 10) {
                    hours = "0" + hours;
                }
                if (minutes < 10) {
                    minutes = "0" + minutes;
                }
                if (hours === 24)
                    hours = "00";
            }
            time = `${hours}:${minutes}`;
            availableSlot = disponibility[time]; 
            if (!availableSlot) {
                break;
            }
        }
        return availableSlot;
    }

    availableTeacher && (date.userWeek).map((user, index) => {

        const date = user.timeDate;
        const userDate = date.toDate();
        const hours = userDate.getUTCHours();
        const HH = hours.toString().padStart(2, "0");
        const minutes = userDate.getUTCMinutes();
        const mm = minutes.toString().padStart(2, "0");
        const userTime = `${HH}:${mm}`;

        (((user.day) === "lunes") && (teacherDisponibility.lunes[userTime] && searchForSlots(userTime, slotsNeeded, teacherDisponibility.lunes))) && freeSlot++;
        (((user.day) === "martes") && (teacherDisponibility.martes[userTime] && searchForSlots(userTime, slotsNeeded, teacherDisponibility.martes))) && freeSlot++;
        (((user.day) === "miercoles") && (teacherDisponibility.miercoles[userTime] && searchForSlots(userTime, slotsNeeded, teacherDisponibility.miercoles))) && freeSlot++;
        (((user.day) === "jueves") && (teacherDisponibility.jueves[userTime] && searchForSlots(userTime, slotsNeeded, teacherDisponibility.jueves))) && freeSlot++;
        (((user.day) === "viernes") && (teacherDisponibility.viernes[userTime] && searchForSlots(userTime, slotsNeeded, teacherDisponibility.viernes))) && freeSlot++;
        (((user.day) === "sabado") && (teacherDisponibility.sabado[userTime] && searchForSlots(userTime, slotsNeeded, teacherDisponibility.sabado))) && freeSlot++;
        (((user.day) === "domingo") && (teacherDisponibility.domingo[userTime] && searchForSlots(userTime, slotsNeeded, teacherDisponibility.domingo))) && freeSlot++;
    });

    availableTeacher && ((freeSlot != (date.userWeek).length) && Disponibility());

    // ----------------------------

    // SCHEDULE DEL PROFESOR
    const generateSchedule = () => {

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

        /*
        switch (actualDay) {
            case 0:
                addDays(dateOfClass, 7);
                break;
            case 1:
                addDays(dateOfClass, 6);
                break;
            case 2:
                addDays(dateOfClass, 5);
                break;
            case 3:
                addDays(dateOfClass, 4);
                break;
            case 4:
                addDays(dateOfClass, 3);
                break;
            case 5:
                addDays(dateOfClass, 2);
                break;
            case 6:
                addDays(dateOfClass, 1);
                break;
        }
        */
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


        const generateClassDate = (classTime, classDay, classNumber, durationOfClass) => {
            addDays(dateOfClass, classDay);
            const classTimeDate = classTime.toDate();
            const dia = dateOfClass.getDate();
            const mes = dateOfClass.getMonth();
            const año = dateOfClass.getFullYear();
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
                durationClass: date.durationClass,
                classNumber: classNumber,
                calificationOfClass: '',

                studentName: date.studentName,
                studentLastName: date.studentLastName,
                studentUid: date.studentUid,
                studentEmail: date.studentEmail,

                teacherName: teacher.name,
                teacherLastName: teacher.lastName,
                teacherUid: teacher.id
            }

            teacherSchedule.push(classDate);
            studentSchedule.push(classDate);
            addDays(dateOfClass, -classDay);
        }

        const caseOf = (user, classNumber) => {
            ((user.day) === "domingo") && generateClassDate(user.timeDate, domingo, classNumber, date.durationClass);
            ((user.day) === "lunes") && generateClassDate(user.timeDate, lunes, classNumber, date.durationClass);
            ((user.day) === "martes") && generateClassDate(user.timeDate, martes, classNumber, date.durationClass);
            ((user.day) === "miercoles") && generateClassDate(user.timeDate, miercoles, classNumber, date.durationClass);
            ((user.day) === "jueves") && generateClassDate(user.timeDate, jueves, classNumber, date.durationClass);
            ((user.day) === "viernes") && generateClassDate(user.timeDate, viernes, classNumber, date.durationClass);
            ((user.day) === "sabado") && generateClassDate(user.timeDate, sabado, classNumber, date.durationClass);
        }

        let index = 0;
        //console.log(date.remainingClases);

        addDays(dateOfClass, 7);
        
        for (let count = 0; count < date.remainingClases ; count++) {

            if (index === date.userWeek.length) {(index = 0); addDays(dateOfClass, 7)};
            /*
            console.log(`se programo la clse nº : `, count);
            */
            caseOf(date.userWeek[index], count);
            index++;

        }

        (date.userWeek).map((user) => {

            const date = user.timeDate;
            const userDate = date.toDate();
            const hours = userDate.getUTCHours();
            const HH = hours.toString().padStart(2, "0");
            const minutes = userDate.getUTCMinutes();
            const mm = minutes.toString().padStart(2, "0");
            const userTime = `${HH}:${mm}`;

            let userDay = newDisponibility[user.day];  
            userDay[userTime] = false;
            let time = userTime;
            for (let i = 0; i < slotsNeeded; i++) {
                let [hours, minutes] = time.split(":");
                minutes = Number(minutes) + 15;
                if (minutes >= 60) {
                    minutes = minutes - 60;
                    hours = Number(hours) + 1;
                    if (hours < 10) {
                        hours = "0" + hours;
                    }
                    if (minutes < 10) {
                        minutes = "0" + minutes;
                    }
                }
                time = `${hours}:${minutes}`;
                userDay[time] = false;
            }
        });

        //console.log(teacherSchedule);
    }

    // -------------------------

    // ASIGNAR PROFESOR 
    const handleAssignTeacher = async (e) => {
        setLoader(true);
        selected(true);
        generateSchedule();
        e.preventDefault();

        try {

            const firestore = getFirestore();

            const updateClasses = doc(firestore, `Classes/${date.id}`);
            await updateDoc(updateClasses, { ...teacherAssignament });

            const updateTeacherDispo = doc(firestore, `Users/${teacher.id}`);
            await updateDoc(updateTeacherDispo, {
                disponibility: newDisponibility,
                notifications: increment(1),
            })
            
            const teacherMyStudents = doc(firestore, `Users/${teacher.id}/myStudents/${date.studentUid}`);
            await setDoc(teacherMyStudents, { ...newStudentForTeacher });

            const teacherMySchedule = doc(firestore, `Users/${teacher.id}/mySchedule/${date.studentUid}`);
            await setDoc(teacherMySchedule, { ...teacherSchedule });

            const studentDataUpdate = doc(firestore, `Users/${date.studentUid}`);
            await updateDoc(studentDataUpdate, {
                teacher: "assigned",
                teacherName: `${teacher.name} ${teacher.lastName}`,
                teacherPhoneNumber: teacher.phoneNumber,
                teacherUid: teacher.id,
                notifications: increment(1),
                newPurchasedClasses: 0,
            });

            const studentMyClasses = doc(firestore, `Users/${date.studentUid}/myClasses/${date.id}`);
            await updateDoc(studentMyClasses, { ...teacherAssignament });

            const studentMySchedule = doc(firestore, `Users/${date.studentUid}/mySchedule/${date.id}`);
            await setDoc(studentMySchedule, { ...studentSchedule });

            const studentNotification = collection(firestore, `Users/${date.studentUid}/myNotifications`);
            await addDoc(studentNotification, { ...studentNewNotification, timeStamp });

            const teacherNotification = collection(firestore, `Users/${teacher.id}/myNotifications`);
            await addDoc(teacherNotification, { ...teacherNewNotification, timeStamp });

            setLoader(false);
            swal("OK", `Se asigno el profesor al alumno`, "success");

        } catch (e) {
            swal("UPS!", `${e.message}`, "error");
            setLoader(false);
        }

    }

    // ------------------------

    if (loader) {
        return <Loader />
    }

    if (availableTeacher) {
        return (
            <div className='userCardProfile-container'>
                {/*
                    <button onClick={generateStudentSchedule}>TEST</button>
                */}
                <div className='userCardProfile-header_container'>
                    <div className='userCardProfile-header'>

                        <div className="userCardProfile-avatar">
                            <i className="fa-solid fa-user fa-2x"></i>
                        </div>

                        <div className="userCardProfile-info">
                            <p>Profesor: {teacher.name} {teacher.lastName}</p>
                            <span>
                                Email: {teacher.email}
                            </span>
                        </div>

                        { loader ? <Loader /> : 
                            <button className='userCardProfile-button' onClick={handleAssignTeacher}>
                                ASIGNAR PROFESOR
                            </button>   
                        }

                    </div>
                </div>

            </div>
        )
    }
}

export default Teachers
