import React from 'react'

const Student = ({info}) => {
    
    const handleTest = () => {
        console.log(info);
    }

    return (
        <div>
            <button onClick={handleTest}>TEST</button>
            <ul>
                <li> Alumno: {info.studentName} {info.studentLastName} </li>
                <li> Mail: {info.studentEmail} </li>
                <li> Clases Restantes: {info.remainingClases}</li>
                <ul> Dias y hora: 
                    {
                        (info.classWith).map((date) => {
                            return (
                                <li>
                                    <p>{date.day}</p>
                                    <p>{date.time}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </ul>
        </div>
    )
}

export default Student
