import { getFirestore, doc, updateDoc, getDoc } from "firebase/firestore";

const UpdateTeacherData = async (teacherData, userId, teacherDataPath) => {

    console.log({teacherData, userId, teacherDataPath});

    const firestore = getFirestore();

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
export default UpdateTeacherData