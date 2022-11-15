import React from 'react'
import { UserUpdates } from '../../Context/UserUpdatesContext';
import { useEffect } from 'react';
import { useState } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import ListarMisNotificaciones from './ListarMisNotificaciones';

const MisNotificaciones = () => {

    const { user } = UserUpdates();
    const [ notifications, setNotifications ] = useState([]);

    useEffect(() => {

            const firestore = getFirestore();
            const notificationsRef = collection(firestore, `Users/${user.uid}/myNotifications`);
            getDocs(notificationsRef)
            .then( res => setNotifications(
                res.docs.map(
                    notif => ({
                        id: notif.id,
                        ...notif.data()
                    })
                )
            ))
        
    }, [user]);

    const handleTest = () => {
        console.log(notifications);
    }

    return  (
        <div>
            <ListarMisNotificaciones notificaciones={notifications} />
            {/*
            <button onClick={handleTest}>TestMdfk</button>
            */}
        </div>
    )
}

export default MisNotificaciones
