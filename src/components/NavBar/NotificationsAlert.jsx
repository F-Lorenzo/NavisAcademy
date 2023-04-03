import React from 'react'

import { useState } from 'react';
import { UserUpdates } from '../../Context/UserUpdatesContext'
import notificationsIcon from "../../../src/Assets/turn-notifications-on-button.png";


const NotificationsAlert = () => {

    const { user } = UserUpdates();

    return (
        <div>
            <div className="notificaciones">
                <img src={notificationsIcon} width="30" height="30" alt="notifications.png" />
                { user ? (user.notifications > 0 ? <p>{user.notifications}</p> : "") : "" }
            </div>    
        </div>
    )

}

export default NotificationsAlert
