import React, { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { UserUpdates } from "../../Context/UserUpdatesContext";
import { useNavigate } from 'react-router-dom';
import NextClassInfo from './NextClass/NextClassInfo/NextClassInfo';
import StudentPanelActionButtons from './NextClass/StundentPanelActionButtons/StudentPanelActionButtons';
import StudentClassInfo from './NextClass/StudentClassInfo/StudentClassInfo';
import Asistencia from './NextClass/Asistencia/Asistencia';
import MyFirstClasses from './MyFirstClasses/MyFirstClasses';
import BuyClasses from "./BuyClasses/BuyClasses";
import Loader from "../Loader/Loader";
import './NewPanelAlumno.css';

import { AddClases } from './AddClasses';

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
                    classNumber: allMyDates[key].classNumber, 
                    condition: allMyDates[key].condition,
                    date: allMyDates[key].date,
                    dateEnd: allMyDates[key].dateEnd,
                    durationClass: allMyDates[key].durationClass,
                    linkToClass: allMyDates[key].linkToClass,
                    reprogramed: allMyDates[key].reprogramed,
                    studentAssist: allMyDates[key].studentAssist,
                    studentCalification: allMyDates[key].studentCalification,
                    studentEmail: allMyDates[key].studentEmail,
                    studentLastName: allMyDates[key].studentLastName,
                    studentName: allMyDates[key].studentName,
                    studentUid: allMyDates[key].studentUid,
                    teacherCalification: allMyDates[key].teacherCalification,
                    teacherLastName: allMyDates[key].teacherLastName,
                    teacherName: allMyDates[key].teacherName,
                    teacherUid: allMyDates[key].teacherUid,
                    time: allMyDates[key].time,
                }))
            );
            setAllMyClasses(arrayOfClasses);
            setClassNumber(user.form.actualClass);
            setLoader(false);
            }
        );
        if (userData.newPurchasedClasses > 0 && userData.teacher === "assigned") {
            AddClases(user.uid, userData.myClassesId, allMyClasses, userData.newPurchasedClasses);
        };
        /*
        */
    }, [user]);

    const handleTest = () => {
        // Si hay profesor asignado sumar clases nuevas
        //console.log(allMyClasses);
        if (userData.newPurchasedClasses > 0 && userData.teacher === "assigned") {
            AddClases(user.uid, userData.myClassesId, allMyClasses, userData.newPurchasedClasses);
        };
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
                                <NextClassInfo date={allMyClasses[classNumber]}/>
                                <StudentPanelActionButtons myClass={allMyClasses[classNumber]} linkToClass={userData.linkToClass} userInfo={userData}/>
                                <Asistencia {...user.misClases}/>
                            </div> 
        
                            <StudentClassInfo {...user.misClases}/>
                            <BuyClasses duration={userData.durationClass} msg='ADQUIERE MAS CLASES'/>
                        </div>
                        ) :
        
                        (
                        <div>
                            <div className='MyfirstClasses__welcome'>
                                <h5>FELICITACIONES!</h5>
                                <p>Pronto se te asignara un profesor</p>
                            </div> 
                            {/*
                            <BuyClasses duration={userData.durationClass} msg='ADQUIERE MAS CLASES' />
                            */}
                        </div> 
                        )

                )
 
            }
        </div>
    )

}

export default NewPanelAlumno
