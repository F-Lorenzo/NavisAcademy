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
                mySchedule.forEach( allMyClasses => {
                    Object.keys(allMyClasses).forEach(key => {

                        const startDateFormat = allMyClasses[key].date;
                        const endDateFormat = allMyClasses[key].dateEnd;

                        const startDate = startDateFormat.toDate();
                        const endDate = endDateFormat.toDate();

                        let description = "";

                        user.role === "teacher" ? 
                            description = `Alumno: ${allMyClasses[key].studentName} ${allMyClasses[key].studentLastName}`
                        : 
                            description = `Profesor: ${allMyClasses[key].teacherName} ${allMyClasses[key].teacherLastName}`
                        

                        arrayOfClasses.push({
                            start_date: startDate,
                            end_date: endDate,
                            text: description,
                        })
                    })
                });
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
                <button onClick={handleTest}>TEST</button>
                {/* 
                */}
                <div className='scheduler-container'>
                    <Scheduler events={myClasses}/>
                </div>
            </div>
        )
    }

}

export default MyCalendario
