import React, { useState, useEffect } from 'react';
import location from '../../assets/img/location-sign.svg'
import profileIcon from '../../assets/img/profile-user.svg'
import phone from '../../assets/img/phone-call-telephone-call.svg'


const PerfilAlumno = (info) => {

        return (
            <div>

                <div className=''>
                    Perfil Alumno: 
                </div>
                
                <div className='' >
                    Nombre: {info.name}
                </div>
               
                <div className=''>
                    Apellido: {info.lastName}
                </div>
                
                <div className=''>
                    Pais: {info.country}
                </div>
                
                <div className=''>
                    Ciudad: {info.city}
                </div>
                
                <div className=''>
                    Telefono: {info.phoneNumber}
                </div>
             
               
            </div>
        )

}

export default PerfilAlumno
