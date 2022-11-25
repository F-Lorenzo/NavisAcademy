import React from 'react'

const Notificacion = ({info}) => {
    
    const timeStamp = info.timeStamp.toDate().toString();
    
    const handleVisto = () => {
        console.log(info);

    }

    return (
        <div>
            <h4>{info.textNotification}</h4>
            <p> {info.notificationType} </p>
            <p> {timeStamp} </p>

            <button onClick={handleVisto}>Visto</button>
        </div>
    )
}

export default Notificacion
