import React, { useState, useEffect } from 'react';

const PerfilAlumno = (info) => {

        return (
            <div>
                Perfil Alumno: 
                <br />
                Nombre: {info.name}
                <br />
                Apellido: {info.lastName}
                <br />
                Pais: {info.country}
                <br />
                Ciudad: {info.city}
                <br />
                Telefono: {info.phoneNumber}
            </div>
        )

}

export default PerfilAlumno
