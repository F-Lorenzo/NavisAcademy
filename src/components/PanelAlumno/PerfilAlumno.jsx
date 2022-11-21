import React, { useState, useEffect } from 'react';
import location from '../../assets/img/location-sign.svg'
import profileIcon from '../../assets/img/profile-user.svg'
import phone from '../../assets/img/phone-call-telephone-call.svg'


const PerfilAlumno = (info) => {

        return (
            <div>
                <div className='input__Profile'>
                <img src={profileIcon} alt="" />    Perfil Alumno: 
                </div>
               <div className='input__Profile' >
                  Nombre: {info.name}
               </div>
               <div className='input__Profile'>
               Apellido: {info.lastName}
               </div>
               <div className='input__Profile'>
               <img src={location} alt="" />          Pais: {info.country}
               </div>
               <div className='input__Profile'>
               Ciudad: {info.city}
               </div>
               <div className='input__Profile'>
               <img src={phone} alt="" />    Telefono: {info.phoneNumber}
               </div>
             
               
            </div>
        )

}

export default PerfilAlumno
