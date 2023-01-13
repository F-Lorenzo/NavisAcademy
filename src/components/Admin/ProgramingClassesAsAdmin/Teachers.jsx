import React from 'react'
import { addDoc, updateDoc, collection, getFirestore, doc, query, increment, setDoc, getDoc, serverTimestamp, arrayUnion } from 'firebase/firestore';
import Loader from '../../Loader/Loader';

const Teachers = ({date, teacher}) => {

    // Control de entradas

    console.log("INFO EN date : ", date);
    console.log("INFO EN userWeek : ", date.userWeek);
    console.log("INFO EN teacher : ", teacher);

    // ----------------------------------------

    const timeStamp = serverTimestamp();

    const teacherAssignament = {
        teacher: "assigned",
        condition: "succes",
        teacherEmail: teacher.email,
        teacherUid: teacher.id,
        teacherName: teacher.name,
        teacherLastName: teacher.lastName,
    }

    const newStudentForTeacher = {
        studentEmail: date.studentEmail,
        studentUid: date.studentUid,
        studentName: date.studentName,
        studentLastName: date.studentLastName,
        remainingClases: date.remainingClases,
        classWith: date.userWeek,
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
        let availabeSlot = true;
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
            }
            time = `${hours}:${minutes}`;
            availabeSlot = disponibility[time]; 
            if (!availabeSlot) {
                break;
            }
        }
        return availabeSlot;
    }

    availableTeacher && (date.userWeek).map((user, index) => {
        (((user.day) === "lunes") && (teacherDisponibility.lunes[user.time] && searchForSlots(user.time, slotsNeeded, teacherDisponibility.lunes))) && freeSlot++;
        (((user.day) === "martes") && (teacherDisponibility.martes[user.time] && searchForSlots(user.time, slotsNeeded, teacherDisponibility.martes))) && freeSlot++;
        (((user.day) === "miercoles") && (teacherDisponibility.miercoles[user.time] && searchForSlots(user.time, slotsNeeded, teacherDisponibility.miercoles))) && freeSlot++;
        (((user.day) === "jueves") && (teacherDisponibility.jueves[user.time] && searchForSlots(user.time, slotsNeeded, teacherDisponibility.jueves))) && freeSlot++;
        (((user.day) === "viernes") && (teacherDisponibility.viernes[user.time] && searchForSlots(user.time, slotsNeeded, teacherDisponibility.viernes))) && freeSlot++;
        (((user.day) === "sabado") && (teacherDisponibility.sabado[user.time] && searchForSlots(user.time, slotsNeeded, teacherDisponibility.sabado))) && freeSlot++;
        (((user.day) === "domingo") && (teacherDisponibility.domingo[user.time] && searchForSlots(user.time, slotsNeeded, teacherDisponibility.domingo))) && freeSlot++;
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

        const generateClassDate = (classTime, classDay, classNumber) => {
            addDays(dateOfClass, classDay);
            let dia = dateOfClass.getDate();
            let mes = dateOfClass.getMonth();
            let año = dateOfClass.getFullYear();
            let hora = parseInt(classTime);
            let fullDate = new Date(año, mes, dia, hora);  
            let horaComienzo = classTime;
            let horaFin = parseInt(classTime);
            horaFin++;
            horaFin = horaFin.toString();
            horaFin = horaFin + ":00";
            let classDateHour_start = `${año}-${mes+1}-${dia} ${horaComienzo}`;
            let classDateHour_end = `${año}-${mes+1}-${dia} ${horaFin}`;
            const classDate = {
                start_date : `${classDateHour_start}`,
                end_date : `${classDateHour_end}`,
                time: classTime,
                condition: `pending`,
                day: dia,
                month: mes,
                year: año,
                date: fullDate,
                dayNumber: classDay,
                linkToClass: "",
                classNumber: classNumber,
                teacherCalification: "",
                studentCalification: "",
                studentAssist: false,
                reprogramed: false,
                durationClass: date.durationClass,
            }

            const classDateTeacher = {
                ...classDate,
                text : `Alumno: ${date.studentName} ${date.studentLastName}`,
                studentUid : date.studentUid,
            }

            const classDateStudent = {
                ...classDate,
                text : `Profesor: ${teacher.name} ${teacher.lastName}`,
            }

            teacherSchedule.push(classDateTeacher);
            studentSchedule.push(classDateStudent);
            addDays(dateOfClass, -classDay);
        }

        const caseOf = (user, classNumber) => {
            ((user.day) === "domingo") && generateClassDate(user.time, domingo, classNumber);
            ((user.day) === "lunes") && generateClassDate(user.time, lunes, classNumber);
            ((user.day) === "martes") && generateClassDate(user.time, martes, classNumber);
            ((user.day) === "miercoles") && generateClassDate(user.time, miercoles, classNumber);
            ((user.day) === "jueves") && generateClassDate(user.time, jueves, classNumber);
            ((user.day) === "viernes") && generateClassDate(user.time, viernes, classNumber);
            ((user.day) === "sabado") && generateClassDate(user.time, sabado, classNumber);
        }

        let index = 0;
        //console.log(date.remainingClases);

        addDays(dateOfClass, 0);
        
        for (let count = 0; count < date.remainingClases ; count++) {

            if (index === date.userWeek.length) {(index = 0); addDays(dateOfClass, 7)};
            /*
            console.log(`se programo la clse nº : `, count);
            */
            caseOf(date.userWeek[index], count);
            index++;

        }

        (date.userWeek).map((user) => {
            let userDay = newDisponibility[user.day];  
            userDay[user.time] = false;
            let time = user.time;
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
        generateSchedule();
        e.preventDefault();

        try {

            const firestore = getFirestore();

            const updateClasses = doc(firestore, `Classes/${date.id}`);
            await updateDoc(updateClasses, { ...teacherAssignament });

            const updateTeacherDispo = doc(firestore, `Users/${teacher.id}`);
            await updateDoc(updateTeacherDispo, {
                disponibility: newDisponibility,
            })
            
            const teacherMyStudents = doc(firestore, `Users/${teacher.id}/myStudents/${date.studentUid}`);
            await setDoc(teacherMyStudents, { ...newStudentForTeacher });

            const teacherMySchedule = doc(firestore, `Users/${teacher.id}/mySchedule/${date.studentUid}`);
            await setDoc(teacherMySchedule, { ...teacherSchedule });

            const studentDataUpdate = doc(firestore, `Users/${date.studentUid}`);
            await updateDoc(studentDataUpdate, {
                teacher: "assigned",
                teacherName: `${teacher.name} ${teacher.lastName}`,
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

            //setLoader(false);
        } catch (e) {
            swal("UPS!", `${e.message}`, "error");
            //setLoader(false);
        }

    }

    // ------------------------

    if (availableTeacher) {
        return (
            <div>
                <ul>
                    <li> Profesor: {teacher.name} {teacher.lastName} </li>
                    <li> Email: {teacher.email} </li>
                    <li> Disponible para cubrir la clase </li>

                    <button onClick={handleAssignTeacher}>ASIGNAR PROFESOR</button>
                    
                    {/*
                    <button onClick={generateStudentSchedule}>TEST</button>
                    */}
                </ul>      
            </div>
        )
    }

}

export default Teachers
