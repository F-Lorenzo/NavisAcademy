import React from 'react';
import './UserCard.css';

const UserCard = ({userInfo, role, toggle}) => {

    return (
        <div className="asideProfile-container">
            <div className="userCard-header_container">
                <div className="userCard-header">
                    <div className="user-avatar">
                        <i className="fa-solid fa-user fa-3x"></i>
                    </div>

                    <div className="userMain-info">
                        <p>{userInfo.name} {userInfo.lastName}</p>
                        <span>
                        {role === 'alumn' ? 'Estudiante' 
                        : 'Profesor'}
                        </span>
                    </div>
                </div>
            </div>

            <div className="userCard-body">
                <div className="userCard-body-input">
                    <span className="userCard-body-input_title">Mail:</span>
                    <span className="userCard-body-input_content">{userInfo.email}</span> 
                </div>
            </div>

            <div className="userCard-body">
                <div className="userCard-body-input">
                    <span className="userCard-body-input_title">Pais:</span>
                    <span className="userCard-body-input_content">{userInfo.country}</span> 
                </div>
            </div>  

            <div className="userCard-body">
                <div className="userCard-body-input">
                    <span className="userCard-body-input_title">Ciudad:</span>
                    <span className="userCard-body-input_content">{userInfo.city}</span> 
                </div>
            </div>  

            <div className="userCard-body">
                <div className="userCard-body-input">
                    <span className="userCard-body-input_title">Numero de contacto:</span>
                    <span className="userCard-body-input_content">{userInfo.phoneNumber}</span> 
                </div>
            </div>  

            <div className="userCard-footer">
                <button className="userCard-button" onClick={() => {toggle()}}>
                    Editar Informacion
                </button>
            </div>
        </div>
    )

}

export default UserCard
