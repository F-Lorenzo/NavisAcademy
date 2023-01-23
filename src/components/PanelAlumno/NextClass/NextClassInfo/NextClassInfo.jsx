import React from 'react'

const NextClassInfo = ({date}) => {

    const classDate = date.date.toDate();
    const hours =  classDate.getHours();
    const minutes = classDate.getMinutes();
    const nextClassDate = classDate.toLocaleDateString();
    const HH = hours.toString().padStart(2, "0");
    const mm = minutes.toString().padStart(2, "0");

    const handleTest = () => {
        console.log(date);
    }

    return (
        <div className='nextClass__info'>
            {/*
            <button onClick={handleTest}>test</button>
            */}
            <p className='nextClass__date'>PROXIMA CLASE : {nextClassDate}</p>
            <p className='nextClass__time'>{HH}:{mm} HS</p>
            <p className='nextClass__teacher'>{date.teacherName} {date.teacherLastName} </p>
        </div>
    )

}

export default NextClassInfo
