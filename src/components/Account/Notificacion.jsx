import React from 'react'

const Notificacion = ({info}) => {

    const timeStamp = info.timeStamp.toDate().toString();

    return (
        <div>
            <h4>{info.textNotification}</h4>
            <p> {info.notificationType} </p>
            <p> {timeStamp} </p>
        </div>
    )
}

export default Notificacion
