import { getFirestore, doc, updateDoc } from "firebase/firestore";

export const UpdateActualClass = async (classNumber, studentClasses, userId) => {

    const toDay = new Date;
    let actualClass = classNumber;
    let dateOfClass = undefined;
    let classOfTheDay = undefined;

    const updateFirebase = async () => {
        const firestore = getFirestore();
        const userData = doc(firestore, `Users/${userId}`);
        await updateDoc(userData, {
            actualClass: actualClass,
            linkToClass: "",
        });

    }

    if (studentClasses) {
        classOfTheDay = studentClasses[actualClass];
        if (classOfTheDay) {
            dateOfClass = classOfTheDay.dateEnd;
            dateOfClass = dateOfClass.toDate();
        }
        if (dateOfClass) {
            while (dateOfClass < toDay) {
                actualClass++;
                classOfTheDay = studentClasses[actualClass];
                console.log(classOfTheDay);
                dateOfClass = classOfTheDay.dateEnd;
                dateOfClass = dateOfClass.toDate();
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