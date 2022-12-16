import { doc, getFirestore, increment, updateDoc } from 'firebase/firestore';
import React from 'react';
import { useState } from 'react';
import { UserUpdates } from '../../../Context/UserUpdatesContext';
import "./Notificacion.css";

const Notificacion = ({info}) => {
    
    const { user } = UserUpdates();
    const [ visto, setVisto ] = useState(info.checked);
    const timeStamp = info.timeStamp.toDate().toString();
    
    const handleVisto = async () => {

        try {
            const firestore = getFirestore();
            const userRef = doc(firestore, `Users/${user.uid}`);
            await updateDoc(userRef, {
                notifications: increment(-1),
            });
            const notificationRef = doc(firestore, `Users/${user.uid}/myNotifications/${info.id}`);
            await updateDoc(notificationRef, {
                checked: true,
            })
        } catch (e) {
            swal("UPS!", `${e.message}`, "error");
        }
        setVisto(!visto);

    }

    return (
        <div className='notification_container'>
            <div className="notification_card">
                <p className='notification_type'> {info.notificationType} </p>
                <p className='notification_info'> {info.textNotification} </p>
                <p className='notification_date'> {timeStamp} </p>
                {!visto && <button className='notification_button' onClick={handleVisto}>Visto</button>}
            </div>
        </div>
    )
}

export default Notificacion
