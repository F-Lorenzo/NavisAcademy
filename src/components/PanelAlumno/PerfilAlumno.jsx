import React, { useState, useEffect } from 'react';

const PerfilAlumno = (info) => {

        return (
            <div>
                Perfil Alumno: 
                <br />
                Nombre: {info.nombre}
                <br />
                Apellido: {info.apellido}
                <br />
                Pais: {info.pais}
                <br />
                Ciudad: {info.ciudad}
                <br />
                Telefono: {info.telefono}
            </div>
        )

}

export default PerfilAlumno
