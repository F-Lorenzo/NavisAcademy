import React from 'react';
import "./Notificacion.css";

const Notificacion = ({info}) => {
    
    const timeStamp = info.timeStamp.toDate().toString();
    
    const handleVisto = () => {
        console.log(info);
    }

    return (
        <div className='notification_container'>
            <p className='notification_type'> {info.notificationType} </p>
            <p className='notification_info'> {info.textNotification} </p>
            <p className='notification_date'> {timeStamp} </p>
            <button className='notification_button' onClick={handleVisto}>Visto</button>
        </div>
    )
}

export default Notificacion
