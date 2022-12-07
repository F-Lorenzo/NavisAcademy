import React from 'react'

import { useState } from 'react';
import { UserUpdates } from '../../Context/UserUpdatesContext'


const NotificationsAlert = () => {

    const { user } = UserUpdates();

    return (
        <div>
            <div className="notificaciones">
            <img src="../../../src/Assets/turn-notifications-on-button.png" alt="notifications.png" />
            { user ? (user.newNotifications ? user.notifications : "") : "" }
            </div>    
        </div>
    )

}

export default NotificationsAlert
