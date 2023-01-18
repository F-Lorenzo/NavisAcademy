import React, { useState } from 'react'
import MoreInfo from './MoreInfo';

import { ChangeTeacher } from './ChangeTeacher';


const User = ({userData}) => {

    console.log(userData);

    const [ moreInfo, setMoreInfo ] = useState(false);

    const handleMoreInfo = () => {
        setMoreInfo(!moreInfo);
    }

    const handleChangeTeacher = () => {
        ChangeTeacher(userData);
    }

    return (
        <div className='userCardProfile-container'>

            <div className="userCardProfile-header_container">
                <div className="userCardProfile-header">

                    <div className="userCardProfile-avatar">
                        <i className="fa-solid fa-user fa-2x"></i>
                    </div>

                    <div className="userCardProfile-info">
                        <p>{userData.name} {userData.lastName}</p>
                        <span>
                            { userData.role === "teacher" ? "Profesor" : "Alumno" }
                        </span>
                    </div>

                    <button className={moreInfo ? 'userCardProfile-button active' : 'userCardProfile-button'} onClick={handleMoreInfo} >MAS INFORMACION</button> 
                    { (userData.role === "alumn" && userData.teacher === "assigned")  && 
                        <button className='userCardProfile-button' onClick={handleChangeTeacher}>CAMBIAR PROFESOR</button>
                    }
                </div>
                { moreInfo && <MoreInfo info={userData} /> }
            </div>

        </div>
    )
}

export default User
