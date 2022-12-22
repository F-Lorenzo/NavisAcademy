import React from 'react';
import Scheduler from '../../Scheduler/Scheduler';
import { useState } from 'react';
import { useEffect } from 'react';
import { getDocs, getFirestore, collection } from 'firebase/firestore';
import { UserUpdates } from '../../../Context/UserUpdatesContext';
import "./MyCalendario.css";

const MyCalendario = () => {

    const { user } = UserUpdates();
    const [ myClasses, setMyClasses ] = useState([]);
    const [ loader, setLoader ] = useState(true);

    useEffect(()=> {
        const firestore = getFirestore();
        const myClassesCollection = collection(firestore, `Users/${user.uid}/mySchedule`);
        getDocs(myClassesCollection)
        .then( res => 
            {
                const mySchedule = res.docs.map(date => ({ ...date.data()}))
                const arrayOfClasses = [];        
                mySchedule.forEach( allMyClasses => 
                    Object.keys(allMyClasses).forEach(key => arrayOfClasses.push({
                        start_date: allMyClasses[key].start_date,
                        end_date: allMyClasses[key].end_date,
                        text: allMyClasses[key].text
                    }))
                );
                setMyClasses(arrayOfClasses);
                setLoader(false);
            }
        )
    }, [user]); 
 
    const handleTest = () => {
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
                <button onClick={handleTest}>TEST</button>
                */}
                <div className='scheduler-container'>
                    <Scheduler events={myClasses}/>
                </div>
            </div>
        )
    }

}

export default MyCalendario
