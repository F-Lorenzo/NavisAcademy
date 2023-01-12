import React, { useState } from 'react';
import './Develope.scss'
import TimePicker from './TimePicker.jsx';
import Card from '../PanelProfessor/clasesCard/Card.jsx';
import Switcher from '../PanelAlumno/BuyClasses/Switcher/Switcher.jsx';
import CountryDropdown from '../Login/CountryDropdown/CountryDropdown.jsx';

const Develope = () => {

    const test = (e) => {
        console.log(e);

    }

    return (
        <div>

            <TimePicker id={"lunes"} name={"time"} onChange={test}/>

            <Card />

            {/*
            <Switcher opt01={'opt01'} opt02={'opt02'} onToggle={handleSwitchChange}/>
            <CountryDropdown />
            */}


        </div>
    )

}

export default Develope
