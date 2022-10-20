import React from 'react'
import { useState } from 'react'
import ReprogramarClase from './ReprogramarClase'

const Date = ({info}) => {

    const [ reprogramar, setReprogramar ] = useState(false);

    const handleReprogramar = () => {
        setReprogramar(true);
        console.log(info.id);
    }

    if (reprogramar) {
        return (
            <ReprogramarClase dateId={info.id}/>
        )
    } else {
        return (
            <div>
                <ul>
                    <li> Date: {info.date} </li>
                    <li> Time: {info.time} </li>
                    <li> Condition: {info.condition} </li>
                    <li> Teacher: {info.teacher} </li>
                    <button onClick={handleReprogramar}>REPROGRAMAR CLASE</button>
                </ul>      
            </div>
        )
    }


}

export default Date
