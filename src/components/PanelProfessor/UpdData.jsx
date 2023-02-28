import { doc, getFirestore, updateDoc } from "firebase/firestore";


export const UpdData = async (userId, thisMonthClasses) => {

    const addDays = (date, period) => {
        date.setDate(date.getDate() + period);
    }

    const updFirebase = async () => {
        const firestore = getFirestore();
        const userData = doc(firestore, `Users/${userId}`);
        await updateDoc(userData, {
            lastMonthClasses: thisMonthClasses,
            thisMonthClasses: 0,
        })
    }

    const toDay = new Date;
    const yesterDay = new Date;
    addDays(yesterDay, -1);
    const thisMonth = toDay.getMonth();
    const lastMonth = yesterDay.getMonth();

    if (thisMonth !== lastMonth) {
        updFirebase();
    } 

    //console.log({toDay, yesterDay, thisMonth, lastMonth, thisMonthClasses});

}