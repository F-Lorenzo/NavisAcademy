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
import MyFirstClasses from './MyFirstClasses/MyFirstClasses';


const NewPanelAlumno = () => {

    const { user } = UserUpdates();
    const [ allMyClasses, setAllMyClasses ] = useState([]);
    const [ loader, setLoader ] = useState(true);
    const [ classNumber, setClassNumber ] = useState();
    const userData = user.form;

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

    const handleTest = () => {
        console.log(user);
    }

    if (loader) {
        return (
            <Loader />
        )
    }

    return (
        <div>
            {/*
            <button onClick={handleTest}>test</button>
            */}
                        


            {
                userData.newbie ? <MyFirstClasses /> : (

                    userData.teacher === "assigned" ? (
                        <div>
                            <div className='nextClass__container'>
                                <NextClassInfo {...allMyClasses[classNumber]}/>
                                <StudentPanelActionButtons />
                                <Asistencia {...user.misClases}/>
                            </div> 
        
                            <StudentClassInfo {...user.misClases}/>
                            <BuyClasses duration={userData.durationClass} />
                        </div>
                        ) :
        
                        (
                        <div>
                            <div className='MyfirstClasses__welcome'>
                                <h5>FELICITACIONES!</h5>
                                <p>Pronto se te asignara un profesor</p>
                            </div> 
                            <BuyClasses duration={userData.durationClass} />
                        </div> 
                        )

                )
 
            }

        </div>
    )

}

export default NewPanelAlumno
