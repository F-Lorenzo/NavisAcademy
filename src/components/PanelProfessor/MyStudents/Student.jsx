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
                        <span className="userCard-body-input_content">{info.studentEmail}</span> 
                    </div>
                </div>
            </div>

            <div className="userCard-body">
                <div className="userCard-body-input">
                    <span className="userCard-body-input_title">Numero de contacto:</span>
                    <span className="userCard-body-input_content">{info.studentPhoneNumber}</span> 
                </div>
            </div>

            <div className="userCard-body">
                <div className="userCard-body-input">
                    <span className="userCard-body-input_title">Clases Restantes:</span>
                    <span className="userCard-body-input_content">{info.remainingClases}</span> 
                </div>
            </div>

            {(info.classWeek).map((date, index) => {

                const timeStamp = date.timeDate;
                const time = timeStamp.toDate();
                const hours = time.getHours();
                const minutes = time.getMinutes();
                const HH = hours.toString().padStart(2, "0");
                const mm = minutes.toString().padStart(2, "0");

                return (
                    <div className="userCard-body" key={index}>
                        <div className="userCard-body-input">
                            <span className="userCard-body-input_title">{date.day} :</span>
                            <span className="userCard-body-input_content">{HH}:{mm} Hs</span> 
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
