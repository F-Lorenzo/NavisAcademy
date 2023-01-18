import React, { useState } from 'react';
import { DisponibilityItem } from '../Admin/CreateTeacherAccount/DisponibilityItem';
import './Develope.scss'
import TimePicker from './TimePicker.jsx';
import Card from '../PanelProfessor/clasesCard/Card.jsx';
import Switcher from '../PanelAlumno/BuyClasses/Switcher/Switcher.jsx';
import CountryDropdown from '../Login/CountryDropdown/CountryDropdown.jsx';

const Develope = () => {

    const [ day, setDay ] = useState(...DisponibilityItem);

    const test = () => {

        function searchForSlots(time, slots, disponibility) {
            console.log(disponibility);
            let availabeSlot = true;
            for (let i = 0; i < slots; i++) {
                let [hours, minutes] = time.split(":");
                minutes = Number(minutes) + 15;
                if (minutes >= 60) {
                    minutes = minutes - 60;
                    hours = Number(hours) + 1;
                    if (hours < 10) {
                        hours = "0" + hours;
                    }
                    if (minutes < 10) {
                        minutes = "0" + minutes;
                    }
                }
                time = `${hours}:${minutes}`;
                availabeSlot = disponibility[time]; 
                if (!availabeSlot) {
                    break;
                }
                console.log(time);
                console.log(day[time]);
            }
            return availabeSlot;
        }

        const durationClass = 30;
        let slotsNeeded = 0;
        let freeSlot = 0;

        let classTime = '00:00';

        switch (durationClass) {
            case 30:
                slotsNeeded = 2;
                break;
            case 50:
                slotsNeeded = 3;
                break;
        }

        console.log("Horario de la clase: ",classTime);
        console.log("Duracion de la clase: ",durationClass);
        console.log("Slots necesarios: ",slotsNeeded);

        console.log(classTime);
        console.log(day[classTime]);
        console.log("Slots disponibles: ",searchForSlots(classTime, slotsNeeded, day));

        freeSlot === 1 ? console.log("El horario esta disponible") : console.log("El horario no esta disponible");

        console.log(day);



        let fechaOriginal = new Date(2023, 14, 1, 23, 45); // fecha actual
        console.log("fecha original: ", fechaOriginal);
        let horaLocal = fechaOriginal.getHours();
        let minLocal = fechaOriginal.getMinutes();
        console.log("Hora local:",horaLocal,":",minLocal)
        let horaUt = fechaOriginal.getUTCHours();
        let minUt = fechaOriginal.getUTCMinutes();
        console.log("Hora UTC:",horaUt,":",minUt);

        let sumarMinutos = 30; // número de minutos a sumar
        console.log("minutos a sumar: ", sumarMinutos)
        fechaOriginal.setMinutes(fechaOriginal.getMinutes() + sumarMinutos);

        console.log("resultado: ", fechaOriginal); // la fecha con 30 minutos adicionales




    }

    return (
        <div>

            <button onClick={test}>TEST</button>



            {/*
            <Card />
            <TimePicker id={"lunes"} name={"time"} onChange={test}/>
            <Switcher opt01={'opt01'} opt02={'opt02'} onToggle={handleSwitchChange}/>
            <CountryDropdown />
            */}


        </div>
    )

}

export default Develope
