import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { UserUpdates } from "../../Context/UserUpdatesContext";
import './NewPanelAlumno.css';
import Loader from "../Loader/Loader";
import BuyClasses from "./BuyClasses/BuyClasses";
import { useNavigate } from 'react-router-dom';
import NextClassInfo from './NextClass/NextClassInfo/NextClassInfo';
import StudentPanelActionButtons from './NextClass/StundentPanelActionButtons/StudentPanelActionButtons';
import StudentClassInfo from './NextClass/StudentClassInfo/StudentClassInfo';
import Asistencia from './NextClass/Asistencia/Asistencia';


const NewPanelAlumno = () => {

    const { user } = UserUpdates();
    const [ allMyClasses, setAllMyClasses ] = useState([]);
    const [ loader, setLoader ] = useState(true);
    const [ classNumber, setClassNumber ] = useState();

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, `Users/${user.uid}/mySchedule`);
        getDocs(queryCollection)
        .then((res) =>
            {
            const mySchedule = res.docs.map(date => ({ ...date.data()}));
            const arrayOfClasses = [];      
            mySchedule.forEach( allMyDates => 
                Object.keys(allMyDates).forEach(key => arrayOfClasses.push({ 
                    condition: allMyDates[key].condition,
                    date: allMyDates[key].date,
                    time: allMyDates[key].time,
                    day: allMyDates[key].day,
                    month: allMyDates[key].month,
                    teacher: allMyDates[key].text
                }))
            );
            setAllMyClasses(arrayOfClasses);
            setClassNumber(user.form.actualClass)
            setLoader(false);
            }
        );
    }, [user]);

    if (loader) {
        return (
            <Loader />
        )
    }

    return (
        <div>
            <div>

                <div className='nextClass__container'>
                    <NextClassInfo {...allMyClasses[classNumber]}/>
                    <StudentPanelActionButtons />
                    <Asistencia {...user.misClases}/>
                </div> 

                <StudentClassInfo {...user.misClases}/>

            </div>

            <BuyClasses />
        </div>
    )

}

export default NewPanelAlumno
