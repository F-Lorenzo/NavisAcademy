import React, { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { UserUpdates } from '../../Context/UserUpdatesContext';
import MyClasses from './MyClasses/MyClasses';
import "./PanelProfessor.scss";
import Loader from '../Loader/Loader';
import { UpdData } from './UpdData';

function PanelProfessor() {

    const { user } = UserUpdates();
    const [ allMyClasses, setAllMyClasses ] = useState([]);

    const [ loader, setLoader ] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const mySchedule = getFirestore();
        const myScheduleCollection = collection(mySchedule, `Users/${user.uid}/mySchedule`);
        getDocs(myScheduleCollection)
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
            arrayOfClasses.sort((a,b) => {
                if (a.date < b.date) {return - 1;}
                if (a.date > b.date) {return 1;}
                return 0;
            })
            setAllMyClasses(arrayOfClasses);
            setLoader(false);
            }
        );
        UpdData(user.uid, user.form.thisMonthClasses);
    }, [user]);

    const handleMisAlumnos = () => {
        navigate('/Account/Teacher/MyStudents');
        swal("BIENVENIDO", `Aquí podras ver una lista de tus alumnos`, "success");
    }

    const handleMiPerfil = () => {
        navigate('/Account');
    }

    const handleMiCalendario = () => {
        navigate('/MiCalendario');
    }

    if (loader) {
        return (
            <Loader />
        )
    }

    return (
        <>
            <div>

                <div className='encabezado'>
                    <button onClick={handleMiPerfil}>Mi Perfil</button>
                    <button onClick={handleMisAlumnos}>Mis Alumnos</button>
                    <button onClick={handleMiCalendario}>Mi Calendario</button>
                    <ul className='infoEncabezado'>
                        <li className='infoTittle'>Mis Clases Impartidas</li>
                        <li>Totales: {user.form.totalClasses}</li>
                        <li>Este mes: {user.form.thisMonthClasses} </li>
                        <li>Mes Anterior: {user.form.lastMonthClasses}</li>
                    </ul>
                </div>

                <div>
                    <MyClasses myClass={allMyClasses} />
                </div>  

            </div>
        </>
    
    )
}

export default PanelProfessor