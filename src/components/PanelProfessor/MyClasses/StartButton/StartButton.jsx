import React from 'react'

const StartButton = ({classDate, studentId}) => {

    const endDate = classDate.toDate();
    const toDayDate = new Date();

    let remainingTime = endDate - toDayDate;
        
    let oneMin = 60 * 1000;
    let oneHour = 60 * oneMin;
    let oneDay = 24 * oneHour;
    
    let daysLeft = Math.floor(remainingTime / oneDay);
    let hrsLeft = Math.floor((remainingTime % oneDay) / oneHour);
    let minsLeft = Math.floor((remainingTime % oneHour) / oneMin);

    const handleTest = () => {
        console.log(endDate);
        console.log(toDayDate);
        console.log(remainingTime);

        console.log("Dias restantes : ", daysLeft);
        console.log("Horas restantes : ", hrsLeft);
        console.log("minutos restantes : ", minsLeft);

        console.log(studentId);
    }

    return (
        <div>
            {/*
            <button onClick={handleTest}>TEST</button>
            */}
            { daysLeft > 1 ?
                <div>
                    <p>Faltan {daysLeft} dias</p>
                </div> 
                : ( hrsLeft > 4 ?
                <div>
                    <p>Faltan {hrsLeft} horas</p>
                </div>
                : 
                <div>
                    <button>INICIAR CLASE</button>
                </div>
                )
            }
        </div>
    )
}

export default StartButton
