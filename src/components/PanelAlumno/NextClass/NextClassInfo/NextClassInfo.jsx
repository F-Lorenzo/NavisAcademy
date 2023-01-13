import React from 'react'

const NextClassInfo = ({date}) => {

    const classDate = date.date.toDate();
    const nextClassDate = classDate.toLocaleDateString();

    const handleTest = () => {
        console.log(date);
    }

    return (
        <div className='nextClass__info'>
            {/* 
            <button onClick={handleTest}>test</button>
            */}
            <p className='nextClass__date'>PROXIMA CLASE : {nextClassDate}</p>
            <p className='nextClass__time'>{date.time} HS</p>
            <p className='nextClass__teacher'>{date.teacher}</p>
        </div>
    )

}

export default NextClassInfo
