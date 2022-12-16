import React from 'react'

const NextClassInfo = (date) => {

    const handleTest = () => {
        console.log(date)
    }

    return (
        <div className='nextClass__info'>
            <button onClick={handleTest}>test</button>
            <p className='nextClass__date'>PROXIMA CLASE DIA {date.day}/{date.month}</p>
            <p className='nextClass__time'>{date.time} HS</p>
            <p className='nextClass__teacher'>{date.teacher}</p>
        </div>
    )

}

export default NextClassInfo
