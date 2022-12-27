import React from 'react';
import { useState } from 'react';
import './StartButton.css';

const StartButton = ({classDate, studentId}) => {

    const [ linkToClass, setLinkToClass ] = useState('');
    const endDate = classDate.toDate();
    const toDayDate = new Date();

    let remainingTime = endDate - toDayDate;
        
    let oneMin = 60 * 1000;
    let oneHour = 60 * oneMin;
    let oneDay = 24 * oneHour;
    
    let daysLeft = Math.floor(remainingTime / oneDay);
    let hrsLeft = Math.floor((remainingTime % oneDay) / oneHour);
    let minsLeft = Math.floor((remainingTime % oneHour) / oneMin);

    const handleTest = () => {
        console.log(endDate);
        console.log(toDayDate);
        console.log(remainingTime);

        console.log("Dias restantes : ", daysLeft);
        console.log("Horas restantes : ", hrsLeft);
        console.log("minutos restantes : ", minsLeft);

        console.log(studentId);
    }

    const handleChange = (e) => {
        setLinkToClass(e.target.value);
        console.log(linkToClass)
    }

    const handleSubmit = () => {
        console.log(linkToClass);
    }

    return (
        <div>
            {/*
            <button onClick={handleTest}>TEST</button>

            { daysLeft > 1 ?
                <div>
                    <p>Faltan {daysLeft} dias</p>
                </div> 
                : ( hrsLeft > 1 ?
                <div>
                    <p>Faltan {hrsLeft} horas</p>
                </div>
                : ( minsLeft > 15 ?
                <div>
                    <p>Faltan {minsLeft} minutos</p>
                </div>
                :
                <div>
                    <p>Ingrese el link de la clase</p>
                </div>
                ))
            }
            */}

            <form onSubmit={handleSubmit}>
                <div className='linkToClass-container'>
                    <label htmlFor="url">Ingrese aqui el Link de la clase:</label>
                    <input 
                        type="url" 
                        id="url"
                        name="url" 
                        placeholder="https://Ingrese_el_link_de_la_clase.com"
                        pattern="https://.*" size="40"
                        value={linkToClass || ''}
                        onChange={handleChange} 
                        required>
                    </input>
                </div>
                <button type='submit'>
                    ENVIAR
                </button>
            </form>
        </div>
    )
}

export default StartButton
