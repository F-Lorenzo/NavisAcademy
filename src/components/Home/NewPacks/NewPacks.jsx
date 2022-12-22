import React, { useState } from 'react'
import { UserUpdates } from '../../../Context/UserUpdatesContext';
import BuyClasses from '../../PanelAlumno/BuyClasses/BuyClasses';
import './NewPacks.css';

const NewPacks = () => {

    const { user } = UserUpdates();
    const userData = user.form;
    const [ duration, setDuration ] = useState(50);

    const handleDurationSelect = (selected) => {
        setDuration(parseInt(selected));
    }

    return (
        <div>
            <div className="homeSection__Title">
                <h2> Paquetes</h2>
            </div>

            { userData ? 
                (() => {
                    preventDefault();
                    setDuration(userData.durationClass)
                }) 
            :
                <div className='duracionClase-container'>
                    <label className='duracionClase_title'>Duracion de la clase: </label>
                    <select value={duration} onChange={opt => handleDurationSelect(opt.target.value)} >
                        <option value='30'>30 Min</option>
                        <option value='50'>50 Min</option>
                    </select>
                </div>
            }

            <BuyClasses duration={duration} msg=""/>
      
        </div>
    )
    
}

export default NewPacks
