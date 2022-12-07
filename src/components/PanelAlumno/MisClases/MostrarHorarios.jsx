import React from 'react'
import './MostrarHorarios.css';

const MostrarHorarios = ({teacher, newDate}) => {

    const teacherDisponibility = ([]);

    const disponibility = teacher.disponibility;
    
    (teacher.teacherWeek).map((week, index) => {
        console.log(week.day);
        let dayDisponibility = disponibility[week.day];           
        let timeStart = parseInt(week.timeStart);
        let timeEnd = parseInt(week.timeEnd);
        for (let time = timeStart; time < timeEnd; time++) {
            let index = time.toString();
            index = index + ":00"
            if (dayDisponibility[index]) {
                const disponibleTime = {
                    day: week.day,
                    time: index,
                }
                teacherDisponibility.push(disponibleTime);
            }
        }
    })

    const handleInfoLog = () => {
        console.log()
        console.log(teacherDisponibility);
    }
    
    return (
        <div>
            {teacherDisponibility.map((date, index) =>{

                return (
                    <div className='listaHorarios_container' key={index}>
                        <div className='listaHorarios_card'>
                            <div className='listaHorarios_data'>
                                <p className='listaHorarios_dia'>
                                    {date.day}: 
                                </p>
                                <p className='listaHorarios_hora'>
                                    {date.time} HS
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

            {/*
            <button onClick={handleInfoLog}>
                InfoLog MostrarHorarios
            </button>
            */}
        </div>
    )
}

export default MostrarHorarios
