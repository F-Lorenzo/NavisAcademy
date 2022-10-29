import React from 'react'

const Notificacion = ({info}) => {
    return (
        <div>
            <h4>{info.textNotification}</h4>
            <p> {info.notificationType} </p>
            <p>{info.timeStamp}</p>
        </div>
    )
}

export default Notificacion
