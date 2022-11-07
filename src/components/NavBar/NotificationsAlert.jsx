import React from 'react'
import { useState } from 'react';
import { UserUpdates } from '../../Context/UserUpdatesContext'


const NotificationsAlert = () => {

    const { user } = UserUpdates();
    const [ newNotifications, setNewNotifications ] = useState(false);
    const [ notifications, setNotifications ] = useState(0);

    return (
        <div>
            
            <img src="../../../src/Assets/turn-notifications-on-button.png" alt="notifications.png" />
            { user ? (newNotifications ? notifications : "") : "" }
        
           
        </div>
    )

}

export default NotificationsAlert
