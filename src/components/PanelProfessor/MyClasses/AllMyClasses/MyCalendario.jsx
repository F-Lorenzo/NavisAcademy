import React from 'react';
import "./MyCalendario.css";
import Scheduler from '../../../Scheduler';

const MyCalendario = () => {

    const dates = [
        { start_date:'2022-11-1 6:00', end_date:'2022-11-1 7:00', text:'Alumno: Facundo Lorenzo', id: 1 },
        { start_date:'2022-11-4 10:00', end_date:'2022-11-4 11:00', text:'Alumno: Facundo Lorenzo', id: 2 },
        { start_date:'2022-11-8 6:00', end_date:'2022-11-8 7:00', text:'Alumno: Facundo Lorenzo', id: 3 },
        { start_date:'2022-11-11 10:00', end_date:'2022-11-11 11:00', text:'Alumno: Facundo Lorenzo', id: 4 },
        { start_date:'2022-11-15 6:00', end_date:'2022-11-15 7:00', text:'Alumno: Facundo Lorenzo', id: 5 },
        { start_date:'2022-11-18 10:00', end_date:'2022-11-18 11:00', text:'Alumno: Facundo Lorenzo', id: 6 },
    ];

    return (
        <div>
            <div className='scheduler-container'>
                <Scheduler events={dates}/>
            </div>
        </div>
    )

}

export default MyCalendario
