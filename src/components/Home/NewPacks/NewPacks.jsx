import React, { useState } from 'react'
import { UserUpdates } from '../../../Context/UserUpdatesContext';
import BuyClasses from '../../PanelAlumno/BuyClasses/BuyClasses';
import { UserAuth } from '../../../Context/AuthContext';
//import Switcher from '../../PanelAlumno/BuyClasses/Switcher/Switcher';
import './NewPacks.css';
import { useEffect } from 'react';
import Loader from '../../Loader/Loader';

const NewPacks = () => {  

    const [ loader, setLoader ] = useState(true);
    const { userLogged } = UserAuth();
    const { user } = UserUpdates();
    const [ options, setOptions ] = useState(true);
    const [ classDuration, setClassDuration ] = useState(undefined);
    const userData = user.form;

    useEffect(() => {
        setLoader(true);
        if (!!userLogged && !!userData) {
            setOptions(false);
            setClassDuration(userData.durationClass);
        } else {
            setOptions(true);
            setClassDuration(undefined);
        }
        setLoader(false);
    }, [userLogged, userData]);
    /*
    console.log({ userLogged, userData, classDuration });
    */

    if (loader) {
        return (
            <Loader />
        )
    } else {

        return (
            <div>
                <div className="homeSection__Title">
                    <h2>Paquetes</h2>
                </div>
    
                <BuyClasses durationSelection={options} msg="" userDuration={classDuration}/>
          
            </div>
        )
    }

    
}

export default NewPacks
