import React from 'react';
import "./MyCalendario.css";
import Scheduler from '../../../Scheduler';
import { DateTime } from 'luxon';
import { useState } from 'react';
import { useEffect } from 'react';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { UserUpdates } from '../../../../Context/UserUpdatesContext';

const MyCalendario = () => {

    const { user } = UserUpdates();
    const [ myClasses, setMyClasses ] = useState([]);
    const [ loader, setLoader ] = useState(true);

    async function getMyClasses(id) {
        const firestore = getFirestore();
        const myClassesDocRef = doc( firestore, `Users/${id}/mySchedule/myClasses`);
        const myClassesDocRes = await getDoc(myClassesDocRef);
        const myClassesDoc = myClassesDocRes.data();
        return myClassesDoc;
    }

    useEffect(() => {
        getMyClasses(user.uid).then( (dates) => {  
            const allMyClasses = {...dates};
            const arrayOfClasses = [];
            Object.keys(allMyClasses).forEach(key => arrayOfClasses.push({
                id: key,
                /*
                start_date: allMyClasses[key].start_date.toDate(),
                end_date: allMyClasses[key].end_date.toDate(),
                */
                start_date: allMyClasses[key].start_date,
                end_date: allMyClasses[key].end_date,
                text: allMyClasses[key].text
            }))
            setMyClasses(arrayOfClasses);
            setLoader(false);
        })
    }, [])


    const handleTestTime = () => {
        console.log(myClasses);
    }

    if (loader) {
        return (
            <h5>loading...</h5>
        )
    } else {

        return (
            <div>
                {/* 
                <button onClick={handleTestTime}>testTime</button>
                */}
                <div className='scheduler-container'>
                    <Scheduler events={myClasses}/>
                </div>
            </div>
        )
    }


}

export default MyCalendario
