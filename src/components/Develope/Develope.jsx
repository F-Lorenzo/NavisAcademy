import React, { useState } from 'react';
import { Hours } from './Hours.jsx';
import './Develope.scss'
import Switcher from '../PanelAlumno/BuyClasses/Switcher/Switcher.jsx';
import CountryDropdown from '../Login/CountryDropdown/CountryDropdown.jsx';

const Develope = () => {

    function handleSwitchChange(event) {
        console.log(event);
    }

    return (
        <div>

            <div className="time-picker">
                <select className="time-picker__select" onChange={time => console.log(time.target.value)}>
                    {Hours.map((item, index) => {
                        return(
                            <option key={index} value={item.time}>
                                {item.time}
                            </option>
                        )
                    })}
                </select>
                :
                <select className="time-picker__select">
                    <option value="00">00</option>
                </select>
            </div>

            <Switcher opt01={'opt01'} opt02={'opt02'} onToggle={handleSwitchChange}/>
            
            <CountryDropdown />

        </div>
    )

}

export default Develope
