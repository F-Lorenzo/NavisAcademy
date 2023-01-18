import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StudentPanelActionButtons = ({myClass, linkToClass, userInfo}) => {

    const navigate = useNavigate();

    const endDate = myClass.date.toDate();
    const toDayDate = new Date();

    let remainingTime = endDate - toDayDate;
        
    let oneMin = 60 * 1000;
    let oneHour = 60 * oneMin;
    let oneDay = 24 * oneHour;
    
    let daysLeft = Math.floor(remainingTime / oneDay);
    let hrsLeft = Math.floor((remainingTime % oneDay) / oneHour);
    let minsLeft = Math.floor((remainingTime % oneHour) / oneMin);

    
    const reprogramedClasses = userInfo.reprogramedThisMonth;
    let available = (daysLeft < 1 && hrsLeft < 4) || (reprogramedClasses === 2);

    const handleReprogramClass = () => {
        if (reprogramedClasses === 2) {
            swal('CUIDADO', `Solo puedes reprogramar 2 clases por mes y ya las reprogramaste`, "error") 
        } else {
            available ? 
            swal('Ya es tarde', `Solo puedes reprogramar tu clase hasta 4 horas antes`, "error") 
            : navigate("/Account/ReprogramClass");
        }
    }

    const handleTest = () => {
        swal('Ups!', `Todavia no hay link para esta clase`, "error");
    }

    return (
        <div className='studentPanelActionButtons'>
            {linkToClass ?
                <a href={linkToClass}>
                    <button className='studentPanelButton active'>INICIAR CLASE</button>    
                </a> 
            : 
                <button className='studentPanelButton' onClick={handleTest}>INICIAR CLASE</button>
            }
            <a href="https://www.blinklearning.com/v/1666102044/themes/tmpux/launch.php">
                <button className='studentPanelButton active'>BLINK LEARNING</button>
            </a>
            <button className={available ? 'studentPanelButton' : 'studentPanelButton active'} onClick={handleReprogramClass}>REPROGRAMAR CLASE</button>
        </div>
    )

}

export default StudentPanelActionButtons
