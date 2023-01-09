import React, { useState, useEffect } from 'react';


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
