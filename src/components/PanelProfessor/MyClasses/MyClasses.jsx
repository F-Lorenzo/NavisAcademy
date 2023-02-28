import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { UserUpdates } from '../../../Context/UserUpdatesContext';
import React, { useEffect, useState } from 'react'
import Loader from '../../Loader/Loader';
import './MyClasses.scss'
import StartButton from './StartButton/StartButton';

const MyClasses = ({myClass}) => {

    const [ selection, setSelection ] = useState('all');
    //console.log(selection);

    const handleSelection = (filter) => {
        setSelection(filter);
    }

    const handleTest = () => {
        console.log(myClass);
    }

    return (
        <div className='myClasses-container'>
            <div className='control_buttons'>
                <button onClick={() => handleSelection('success')}>
                    CLASES ANTERIORES
                </button>
                <button onClick={() => handleSelection('all')}>
                    TODAS LAS CLASES
                </button>
                <button onClick={() => handleSelection('pending')}>
                    PROXIMAS CLASES
                </button>
            </div>
            {/*
            <button onClick={handleTest}>test</button>
            */}
            {
                myClass.map((theClass, index) => {

                    if (theClass.reprogramed === false) {

                        if (selection === 'all') {

                            const date = theClass.date.toDate();
                            const hours = date.getHours();
                            const HH = hours.toString().padStart(2, "0");
                            const minutes = date.getMinutes();
                            const mm = minutes.toString().padStart(2, "0");
                            const parsedDate = date.toLocaleDateString();
        
                            return (
                                <div key={index} className='myClasses-card'>
                                    <p className='myClasses-card_date'>{parsedDate}</p>
                                    <ul className='myClasses-card_info'>
                                        <li className='myClasses-card_student'>Alumno: {theClass.studentName} {theClass.studentLastName}</li>
                                        <li className='myClasses-card_time'>{HH}:{mm} HS</li>
                                    </ul>
                                    <ul className='myClasses-card_info'>
                                        <li>Clase Nº: {theClass.classNumber + 1}</li>
                                        <li>Duración: {theClass.durationClass}min</li>
                                    </ul>
                                    <StartButton classDate={theClass} studentId={theClass.studentUid}/>
                                </div>
                            )

                        } else {

                            if (theClass.condition === selection) {

                                const date = theClass.date.toDate();
                                const hours = date.getHours();
                                const HH = hours.toString().padStart(2, "0");
                                const minutes = date.getMinutes();
                                const mm = minutes.toString().padStart(2, "0");
                                const parsedDate = date.toLocaleDateString();
            
                                return (
                                    <div key={index} className='myClasses-card'>
                                        <p className='myClasses-card_date'>{parsedDate}</p>
                                        <ul className='myClasses-card_info'>
                                            <li className='myClasses-card_student'>Alumno: {theClass.studentName} {theClass.studentLastName}</li>
                                            <li className='myClasses-card_time'>{HH}:{mm} HS</li>
                                        </ul>
                                        <ul className='myClasses-card_info'>
                                            <li>Clase Nº: {theClass.classNumber + 1}</li>
                                            <li>Duración: {theClass.durationClass}min</li>
                                        </ul>
                                        <StartButton classDate={theClass} studentId={theClass.studentUid}/>
                                    </div>
                                )

                            }

                        }

                    } 
                    

                })
            }
        </div>
    )

}

export default MyClasses
