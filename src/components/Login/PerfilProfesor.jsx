import React, { useState, useEffect } from 'react';

const PerfilProfesor = (info) => {

        return (
            <div>
                Perfil Profesor: 
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

export default PerfilProfesor