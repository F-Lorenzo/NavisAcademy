import React from 'react'
import { UserUpdates } from '../../Context/UserUpdatesContext';
import { useEffect } from 'react';
import { useState } from 'react';
import Notificacion from './Notificacion';

const MisNotificaciones = () => {

    const { user } = UserUpdates();
    const [ userData, setUserData ] = useState({});

    useEffect(() => {
        setUserData(user.form);
    }, [user]);

    const handleTest = () => {
        console.log(userData);

    }

    return  (
        <div>
            MIS NOTIFICACIONES {userData ? userData.remainingClases : "Nothing New Yet"}
            <Notificacion info={userData} />
            <button onClick={handleTest}>TestMdfk</button>
        </div>
    )
}

export default MisNotificaciones
