import { getFirestore, doc, getDoc, deleteDoc, updateDoc } from "firebase/firestore";


export const ChangeTeacher = async (userData, loader) => {
    //console.log(userData);

    const firestore = getFirestore();

    const myClassesDataRef = doc(firestore, `Users/${userData.uid}/myClasses/${userData.myClassesId}`);
    const myClassesDataCifred = await getDoc(myClassesDataRef);
    const myClassesData = myClassesDataCifred.data();

    //console.log(myClassesData);

    const teacherDataRef = doc(firestore, `Users/${userData.teacherUid}`);
    const teacherDataCifred = await getDoc(teacherDataRef);
    const teacherData = teacherDataCifred.data();

    //console.log(teacherData);

    const teacherDisponibility = teacherData.disponibility;
    let newDisponibility = teacherDisponibility;
    const durationClass = myClassesData.durationClass;
    let slotsNeeded = 0;

    const unasignTeacherInUserDoc = {
        teacher: "unasigned",
        teacherName: "",
        teacherUid: "",
        teacherPhoneNumber: "",
    }

    const unasignTeacherInMyClasses = {
        teacherEmail: "",
        teacherLastName: "",
    }

    //console.log(newDisponibility);

    switch (durationClass) {
        case 30:
            slotsNeeded = 2;
            break;
        case 50:
            slotsNeeded = 3;
            break;
    }
    
    (myClassesData.userWeek).map((user) => {

        const date = user.timeDate;
        const userDate = date.toDate();
        const hours = userDate.getUTCHours();
        const HH = hours.toString().padStart(2, "0");
        const minutes = userDate.getUTCMinutes();
        const mm = minutes.toString().padStart(2, "0");
        const userTime = `${HH}:${mm}`;

        let userDay = newDisponibility[user.day];  
        userDay[userTime] = true;
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
            userDay[time] = true;
        }
    });

    //console.log(newDisponibility);
    //console.log(teacherDisponibility);

    const userDoc = doc(firestore, `Users/${userData.uid}`);
    await updateDoc(userDoc, {...unasignTeacherInUserDoc});

    await updateDoc(myClassesDataRef, {...unasignTeacherInMyClasses, ...unasignTeacherInUserDoc});

    await updateDoc(teacherDataRef, {
        disponibility: newDisponibility,
    })

    const globalClasses = doc(firestore, `Classes/${userData.myClassesId}`);
    await updateDoc(globalClasses, {...unasignTeacherInMyClasses, ...unasignTeacherInUserDoc});


    await deleteDoc(doc(firestore, `Users/${userData.teacherUid}/myStudents/${userData.uid}`));
    await deleteDoc(doc(firestore, `Users/${userData.teacherUid}/mySchedule/${userData.uid}`));   
    
    swal("OK", `El alumno quedo sin profesor, asignale uno en ASIGNAR PROFESOR`, "success");
    return loader(false);
    /*


    */


}