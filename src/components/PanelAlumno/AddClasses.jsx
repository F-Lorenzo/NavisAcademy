import { doc, getDoc, getFirestore, increment, updateDoc } from "firebase/firestore";
import { useState } from "react";


export const AddClases = async (userId, myClassesId, oldSchedule, newClasses) => {

    const newSchedule = [];
    let updatedSchedule = [];

    const firestore = getFirestore();
    const myClassesDataRef = doc(firestore, `Users/${userId}/myClasses/${myClassesId}`);
    const myClassesDataCifred = await getDoc(myClassesDataRef);
    const myClassesData = myClassesDataCifred.data();

    let last = oldSchedule.length;

    const classInWeek = myClassesData.userWeek.length;

    let first = last - classInWeek;

    const addDays = (date, period) => {
        date.setDate(date.getDate() + period);
    }

    let day = 0;
    let week = 1;
    let classNumber = last;

    for (let count = 0; count < newClasses ; count++) {

        if (day < classInWeek) {
            day++;
        } else {
            day = 1;
            week++;
        }

        const classReference = oldSchedule[first];
        let oldClassDateStart = classReference.date.toDate();
        let oldClassDateEnd = classReference.dateEnd.toDate();
        addDays(oldClassDateStart, (7*week));
        addDays(oldClassDateEnd, (7*week));
        const newClassDateStart = oldClassDateStart;
        const newClassDateEnd = oldClassDateEnd;

        const classDate = {
            date: newClassDateStart,
            dateEnd: newClassDateEnd,
            time: classReference.time,
            condition: `pending`,
            linkToClass: "",
            teacherCalification: "",
            studentCalification: "",
            studentAssist: false,
            reprogramed: false,
            durationClass: myClassesData.durationClass,
            classNumber: classNumber,
            calificationOfClass: '',

            studentName: myClassesData.studentName,
            studentLastName: myClassesData.studentLastName,
            studentUid: myClassesData.studentUid,
            studentEmail: myClassesData.studentEmail,

            teacherName: myClassesData.teacherName,
            teacherLastName: myClassesData.teacherLastName,
            teacherUid: myClassesData.teacherUid,
            teacherEmail: myClassesData.teacherEmail
        }

        newSchedule.push(classDate);

        first < (last-1) ? first++ : first = last - classInWeek;
        classNumber++;

    }

    updatedSchedule = [...oldSchedule, ...newSchedule];

   
    
    const studentScheduleUpdate = doc(firestore, `Users/${userId}/mySchedule/${myClassesId}`);
    await updateDoc(studentScheduleUpdate, {...updatedSchedule});

    const studentDataUpdate = doc(firestore, `Users/${userId}`);
    await updateDoc(studentDataUpdate, { newPurchasedClasses: 0 });

    const globalClassesUpdate = doc(firestore, `Classes/${myClassesId}`);
    await updateDoc(globalClassesUpdate, { remainingClases: increment(newClasses) });

    const teacherScheduleUpdate = doc(firestore, `Users/${myClassesData.teacherUid}/mySchedule/${userId}`);
    await updateDoc(teacherScheduleUpdate, {...updatedSchedule});
    
    const teacherStudentUpdate = doc(firestore, `Users/${myClassesData.teacherUid}/myStudents/${userId}`);
    await updateDoc(teacherStudentUpdate, { remainingClases: increment(newClasses) });

}