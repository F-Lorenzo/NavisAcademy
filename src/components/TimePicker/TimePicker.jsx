import React, { useState } from 'react';
import { Hours, Minutes } from './Times.jsx';
import './TimePicker.scss'

const TimePicker = ({ id, name, onChange }) => {

    const [ hour, setHour ] = useState();
    const [ min, setMin ] = useState();

    function handleHourPick(hourPicked) {
        let hourParsed = parseInt(hourPicked);
        let minParsed = parseInt(min);
        let classDate = new Date (2022,1,1,hourParsed,minParsed);
        setHour(hourPicked);
        const out = { id: id, name:name, hour:hourPicked, min:min, timeString:`${hourPicked}:${min}`, timeDate: classDate};
        onChange(out);
    }

    const handleMinPick = (minPicked) => {
        let hourParsed = parseInt(hour);
        let minParsed = parseInt(minPicked);
        let classDate = new Date (2022,1,1,hourParsed,minParsed);
        setMin(minPicked);
        const out = { id: id, name:name, hour:hour, min:minPicked, timeString:`${hour}:${minPicked}`, timeDate: classDate};
        onChange(out);
    }

    return (
        <div className="time-picker">           
            <select id='time-picker__hours' className="time-picker__select" onChange={selectedHour => handleHourPick(selectedHour.target.value)}>
                {Hours.map((item, index) => {
                    return(
                        <option key={index} value={item.hs}>
                            {item.hs}
                        </option>
                    )
                })}
            </select>
            :
            <select id='time-picker__minutes' className="time-picker__select" onChange={selectedMin => handleMinPick(selectedMin.target.value)}>
                {Minutes.map((item, index) => {
                    return(
                        <option key={index} value={item.min}>
                            {item.min}
                        </option>
                    )
                })}
            </select>
        </div>
    )

}

export default TimePicker
