import { getFirestore, doc, updateDoc, getDoc } from "firebase/firestore";
import { AddClases } from './AddClasses';

export const UpdateActualClass = async (classNumber, studentClasses, userId) => {

    const firestore = getFirestore();
    const teacherDataPath = doc(firestore, `Classes/${userId}`);
    const teacherDataCifred = await getDoc(teacherDataPath);
    const teacherData = teacherDataCifred.data();

    if (teacherData.modification === true) {

        const myClassesPath = doc(firestore, `Users/${userId}/myClasses/${userId}`);
        await updateDoc(myClassesPath, {
            ...teacherData,
            modification: false,
        })
        await updateDoc(teacherDataPath, {
            modification: false,
        })
        const userDataPath = doc(firestore, `Users/${userId}`);
        await updateDoc(userDataPath, {
            teacherName: `${teacherData.teacherName} ${teacherData.teacherLastName}`,
            teacherPhoneNumber: `${teacherData.teacherPhoneNumber}`,
        })

        const userSchedulePath = doc(firestore, `Users/${userId}/mySchedule/${userId}`);
        const userScheduleData = await getDoc(userSchedulePath);
        const userSchedule = userScheduleData.data();

        for(let index in userSchedule) {
            for (let prop in userSchedule[index]){
                switch(prop) {
                    case "teacherName":
                        userSchedule[index].teacherName = teacherData[prop];
                    break;
                    case "teacherLastName":
                        userSchedule[index].teacherLastName = teacherData[prop];
                    break;
                    default:
                    break;
                }
            }
        }

        await updateDoc (userSchedulePath, {
            ...userSchedule,
        })

    }
    
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

    const updateFirebase = async () => {
        //const firestore = getFirestore();
        const userData = doc(firestore, `Users/${userId}`);
        await updateDoc(userData, {
            actualClass: actualClass,
            linkToClass: "",
        });
    }

    if (thisMonth !== lastMonth) {
        resetReprogram();
    } 

    if (studentClasses) {
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

    if (actualClass > 1) {
        if (studentClasses) {
            //let evaluate = actualClass - 2;
            let absentTeacher = 0;
            for (let evaluate = actualClass - 2; evaluate < actualClass; evaluate++) {
                const classToEvaluate = studentClasses[evaluate];
                if (classToEvaluate.condition === "pending") {
                    absentTeacher++
                }
                console.log({actualClass, evaluate, classToEvaluate, absentTeacher});
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