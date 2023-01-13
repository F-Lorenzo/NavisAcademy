import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { UserUpdates } from '../../../Context/UserUpdatesContext';
import React, { useEffect, useState } from 'react'
import Loader from '../../Loader/Loader';
import './MyClasses.css'
import StartButton from './StartButton/StartButton';

const MyClasses = ({myClass}) => {

    const handleTest = () => {
        console.log(myClass);
    }

    return (
        <div className='myClasses-container'>
            <h5>PROXIMA CLASE</h5>
            <button onClick={handleTest}>test</button>
            {/*
            */}
            {
                myClass.map((theClass, index) =>{
                    
                    const date = theClass.date.toDate();
                    /*
                    console.log(date);
                    */
                    const HH = date.getHours();
                    const minutes = date.getMinutes();
                    const mm = minutes.toString().padStart(2, "0");
                    const parsedDate = date.toLocaleDateString();

                    return (
                        <div key={index} className='myClasses-card'>
                            <p className='myClasses-card_date'>{parsedDate}</p>
                            <ul className='myClasses-card_info'>
                                <li className='myClasses-card_student'>{theClass.student}</li>
                                <li className='myClasses-card_time'>{HH}:{mm} HS</li>
                            </ul>
                            <StartButton classDate={theClass.date} studentId={theClass.studentUid}/>
                        </div>
                    )

                })
            }
        </div>
    )

}

export default MyClasses
