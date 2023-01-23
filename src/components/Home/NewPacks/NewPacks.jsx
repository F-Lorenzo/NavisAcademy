import React, { useState } from 'react'
import { UserUpdates } from '../../../Context/UserUpdatesContext';
import BuyClasses from '../../PanelAlumno/BuyClasses/BuyClasses';
import { UserAuth } from '../../../Context/AuthContext';
import Switcher from '../../PanelAlumno/BuyClasses/Switcher/Switcher';
import './NewPacks.css';
import { useEffect } from 'react';

const NewPacks = () => {   

    const { userLogged } = UserAuth();

    const { user } = UserUpdates();

    const [ options, setOptions ] = useState(true);


    useEffect(() => {
        userLogged ? setOptions(false) : setOptions(true);
    }, [userLogged]);

    return (
        <div>
            <div className="homeSection__Title">
                <h2>Paquetes</h2>
            </div>

            <BuyClasses durationSelection={options} msg=""/>
      
        </div>
    )
    
}

export default NewPacks
