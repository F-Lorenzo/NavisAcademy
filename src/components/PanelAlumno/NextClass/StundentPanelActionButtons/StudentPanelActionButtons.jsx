import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StudentPanelActionButtons = (myClass) => {

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

    const handleReprogramClass = () => {
        (daysLeft < 1 && hrsLeft < 4) ? swal('Ya es tarde', `Solo puedes reprogramar tu clase hasta 4 horas antes`, "error") :
            swal("Muy Bien", `Aqui podras reprogramar tu clase`, "success");
            navigate("/Account/ReprogramClass");
    }

    return (
        <div className='studentPanelActionButtons'>
            <button className='studentPanelButton'>INICIAR CLASE</button>
            <a href="https://www.blinklearning.com/v/1666102044/themes/tmpux/launch.php">
                <button className='studentPanelButton'>BLINK LEARNING</button>
            </a>
            <button className='studentPanelButton' onClick={handleReprogramClass}>REPROGRAMAR CLASE</button>
        </div>
    )

}

export default StudentPanelActionButtons
