import { getFirestore, doc, updateDoc, getDoc } from "firebase/firestore";
import { AddClases } from './AddClasses';
import UpdateTeacherData from "./UpdateStudentData/UpdateTeacherData";

export const UpdateActualClass = async (classNumber, studentClasses, userId) => {

    const firestore = getFirestore();
    const teacherDataPath = doc(firestore, `Classes/${userId}`);
    const teacherDataCifred = await getDoc(teacherDataPath);
    const teacherData = teacherDataCifred.data();
    //console.log(teacherData);
    //console.log(userId);

    if (teacherData.modification === true) {
        UpdateTeacherData(teacherData, userId, teacherDataPath);
    }

    /*-------------------------*/
    
    const addDays = (date, period) => {
        date.setDate(date.getDate() + period);
    }

    const toDay = new Date;
    let actualClass = classNumber;
    let dateOfClass = undefined;
    let classOfTheDay = undefined;

    const yesterDay = new Date;
    addDays(yesterDay, -1);
    const thisMonth = toDay.getMonth();
    const lastMonth = yesterDay.getMonth();

    const resetReprogram = async () => {
        //const firestore = getFirestore();
        const userData = doc(firestore, `Users/${userId}`);
        await updateDoc(userData, {
            reprogramedThisMonth: 0,
        })
    }

    if (thisMonth !== lastMonth) {
        resetReprogram();
    } 

    const updateFirebase = async () => {
        //const firestore = getFirestore();
        const userData = doc(firestore, `Users/${userId}`);
        await updateDoc(userData, {
            actualClass: actualClass,
            linkToClass: "",
        });
    }

    const teacherAbsented = () => {
        if (actualClass > 1) {
            //console.log("teacherAbsentedLPM: ",studentClasses);
            let absentTeacher = 0;
            for (let evaluate = actualClass - 2; evaluate < (actualClass + 1); evaluate++) {
                const classToEvaluate = studentClasses[evaluate];
                if (classToEvaluate.condition === "pending") {

                    //console.log("evaluation", evaluate);
                    const endDate = classToEvaluate.dateEnd.toDate();
                    //console.log(endDate);
                    const toDayDate = new Date();
                    //console.log(toDayDate);
                    let remainingTimeToEnd = endDate - toDayDate;
                    //console.log(remainingTimeToEnd);
                    let oneMin = 60 * 1000;
                    let oneHour = 60 * oneMin;
                    let oneDay = 24 * oneHour;
                    //console.log(oneDay);
                    let daysLeftToStart = Math.floor(remainingTimeToEnd / oneDay);
                    //console.log("dias pasados: ", daysLeftToStart);

                    if (daysLeftToStart !== 0) {
                        classToEvaluate.condition = "failed";
                        absentTeacher++;
                    }


                }
                //console.log({actualClass, evaluate, classToEvaluate, absentTeacher});
            }
            //console.log(studentClasses);
            if (absentTeacher > 0) {
                let buy = false;
                AddClases(userId, userId, studentClasses, absentTeacher, buy);
            }
            {/*
            */}
        } 
    }

    if (studentClasses.length !== 0) {
        teacherAbsented();
        let follow = true;
        //console.log(studentClasses);
        classOfTheDay = studentClasses[actualClass];
        if (classOfTheDay) {
            dateOfClass = classOfTheDay.dateEnd;
            dateOfClass = dateOfClass.toDate();
        }
        if (dateOfClass) {
            //console.log(dateOfClass);
            while (follow && dateOfClass < toDay) {
                actualClass++;
                classOfTheDay = studentClasses[actualClass];
                if (classOfTheDay === undefined) {
                    follow = false;
                    actualClass--;
                } else {
                    //console.log(classOfTheDay);
                    dateOfClass = classOfTheDay.dateEnd;
                    dateOfClass = dateOfClass.toDate();
                }
            }
            if (actualClass !== classNumber) {
                updateFirebase();
            }
        }
    }
    /*
    console.log({
        toDay, 
        actualClass, 
        studentClasses, 
        classOfTheDay, 
        dateOfClass,
        userId
    });
    */
}