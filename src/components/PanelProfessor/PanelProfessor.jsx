import React, { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { UserUpdates } from '../../Context/UserUpdatesContext';
import MyClasses from './MyClasses/MyClasses';
import "./PanelProfessor.css";
import Loader from '../Loader/Loader';


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
                    condition: allMyDates[key].condition,
                    date: allMyDates[key].date,
                    time: allMyDates[key].time,
                    student: allMyDates[key].text,
                    studentUid: allMyDates[key].studentUid,
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
    
                {/* 
                
                
                <button onClick={handleTestFilters}>TEST FILTERS</button>

                <br />

                <button>MY NEXT CLASSES</button>

                <br />

                <button>MY PAST CLASSES</button>

                <br />

                <button>MY CLASSES OF THIS MONTH</button>

                <br />

                <button>MY CLASSES OF THE PAST MONTH</button>

                <br />

                <button>CONFIRMAR INICIO DE CLASES</button>

                <br />

                <button>PLATAFORMA eLearning</button>
                
                */}



            </div>
        </>
    
    )
}

export default PanelProfessor