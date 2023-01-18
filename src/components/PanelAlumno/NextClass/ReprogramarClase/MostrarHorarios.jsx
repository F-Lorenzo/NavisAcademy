import React from 'react'
import './MostrarHorarios.css';

const MostrarHorarios = ({teacher, durationClass, newDate}) => {

    const teacherDisponibility = ([]);
    const disponibility = teacher.disponibility;
    let slotsNeeded = 0;

    switch (durationClass) {
        case 30:
            slotsNeeded = 2;
            break;
        case 50:
            slotsNeeded = 3;
            break;
    }
    
    (teacher.teacherWeek).map((week, index) => {

        let dayDisponibility = disponibility[week.day];  

        /*
        console.log(week.day);
        let dayDisponibilityTimes = Object.keys(dayDisponibility);
        let disponibilityTimes = dayDisponibilityTimes.length;
        console.log(disponibilityTimes);
        */
        
        const timeStartStamp = week.timeStartDate;
        const timeEndStamp = week.timeEndDate;
        const timeStartDate = timeStartStamp.toDate();
        const timeEndDate = timeEndStamp.toDate()

        const timeStartHours = timeStartDate.getUTCHours();
        const timeStartMinutes = timeStartDate.getUTCMinutes();
        const timeStartHH = timeStartHours.toString().padStart(2, "0");
        const timeStartmm = timeStartMinutes.toString().padStart(2, "0");
        const timeStart = `${timeStartHH}:${timeStartmm}`;
        //console.log("Teacher TIMESTART: ",timeStart);

        /*
        console.log(timeStartStamp);
        console.log(timeStartDate);
        console.log(timeEndStamp);
        console.log(timeEndDate);
        console.log(timeStartHours);
        console.log(timeStartMinutes);
        */
       

        const timeEndHours = timeEndDate.getUTCHours();
        const timeEndMinutes = timeEndDate.getUTCMinutes();
        const timeEndHH = timeEndHours.toString().padStart(2, "0");
        const timeEndmm = timeEndMinutes.toString().padStart(2, "0");       
        const timeEnd = `${timeEndHH}:${timeEndmm}`;
        //console.log("Teacher TIMEEND: ",timeEnd);

        function searchForSlots(time, slots, disponibility) {
            let availableSlot = true;
            for (let i = 0; i < slots; i++) {
                let [hours, minutes] = time.split(":");
                minutes = Number(minutes) + 15;
                if (minutes >= 60) {
                    minutes = minutes - 60;
                    hours = Number(hours) + 1;
                    if (hours < 10) {
                        hours = "0" + hours;
                    }
                    if (minutes < 10) {
                        minutes = "0" + minutes;
                    }
                    if (hours === 24)
                        hours = "00";
                }
                time = `${hours}:${minutes}`;
                availableSlot = disponibility[time]; 
                if (!availableSlot) {
                    break;
                }
            }
            return availableSlot;
        }

        let time = timeStart;

        while (time !== timeEnd) {
            if (dayDisponibility[time] && searchForSlots(time, slotsNeeded, dayDisponibility)) {
                const [hours, minutes] = time.split(":");
                const HH = parseInt(hours);
                const mm = parseInt(minutes);
                //console.log("para UTC: ", HH, mm);
                const timeUtc = new Date(Date.UTC(2022,1,1,HH,mm))
                const disponibleTime = {
                    day: week.day,
                    time: timeUtc,
                };
                teacherDisponibility.push(disponibleTime);
            }
            let [hours, minutes] = time.split(":");
            minutes = Number(minutes) + 15;
            if (minutes >= 60) {
                minutes = minutes - 60;
                hours = Number(hours) + 1;
                if (hours < 10) {
                    hours = "0" + hours;
                }
                if (minutes < 10) {
                    minutes = "0" + minutes;
                }
                if (hours === 24)
                    hours = "00";
            }
            time = `${hours}:${minutes}`;
            
        }
        
    })

    const handleInfoLog = () => {
        console.log("duracion de la clase: ", durationClass);
        console.log("info del teacher: ", teacher);
        console.log("array tacherDisponibility: ", teacherDisponibility);
    }
    
    return (
        <div>
            {/*
            */}
            <button onClick={handleInfoLog}>
                InfoLog MostrarHorarios
            </button>
            {teacherDisponibility.map((date, index) =>{

                const timeUtc = date.time;
                const hours = timeUtc.getHours();
                const minutes = timeUtc.getMinutes();
                const HH = hours.toString().padStart(2, "0");
                const mm = minutes.toString().padStart(2, "0");

                return (
                    <div className='listaHorarios_container' key={index}>
                        <div className='listaHorarios_card'>
                            <div className='listaHorarios_data'>
                                <p className='listaHorarios_dia'>
                                    {date.day}: 
                                </p>
                                <p className='listaHorarios_hora'>
                                    {HH}:{mm} HS
                                </p>
                            </div>
                            <button className='listaHorarios_button'
                            onClick={() => {newDate(date.day, date.time)}}>
                                Seleccionar
                            </button>
                        </div>
                    </div>
                )

            })}
        </div>
    )
}

export default MostrarHorarios
