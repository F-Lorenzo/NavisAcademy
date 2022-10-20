import React from 'react'

const Classes = ({info}) => {

    return (
        <div>
            <li>Condition: {info.condition} </li>
            <li>Date: {info.date} </li>
            <li>Time: {info.time} </li>
            <li>Student Email: {info.studentEmail} </li>
            <br />
        </div>
    )

}

export default Classes
