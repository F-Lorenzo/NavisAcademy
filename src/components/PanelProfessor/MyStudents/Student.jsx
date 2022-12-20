import React from 'react';
import './Student.css';

const Student = ({info}) => {
    
    const handleTest = () => {
        console.log(info);
    }

    return (
        <div className="asideProfile-container">
            <div className="userCard-header_container">
                <div className="userCard-header">
                    <div className="user-avatar">
                        <i className="fa-solid fa-user fa-3x"></i>
                    </div>

                    <div className="userMain-info">
                        <p>{info.studentName} {info.studentLastName}</p>
                        <span> Alumno </span>
                    </div>
                </div>
            </div>

            <div className="userCard-body">
                <div className="userCard-body-input">
                    <span className="userCard-body-input_title">Mail:</span>
                    <span className="userCard-body-input_content">{info.studentEmail}</span> 
                </div>
            </div>

            <div className="userCard-body">
                <div className="userCard-body-input">
                    <span className="userCard-body-input_title">Clases Restantes:</span>
                    <span className="userCard-body-input_content">{info.remainingClases}</span> 
                </div>
            </div>

            {(info.classWith).map((date, index) => {
                return (
                    <div className="userCard-body" key={index}>
                        <div className="userCard-body-input">
                            <span className="userCard-body-input_title">{date.day} :</span>
                            <span className="userCard-body-input_content">{date.time} Hs</span> 
                        </div>
                    </div>
                )
            })}

            {/*
            <button onClick={handleTest}>TEST</button>
            */}

        </div>
    )
}

export default Student
