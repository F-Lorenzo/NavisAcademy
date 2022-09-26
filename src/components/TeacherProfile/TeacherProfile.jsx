import React from 'react'

const TeacherProfile = (info) => {

    return (
        <div>
            Perfil Teacher: 
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

export default TeacherProfile
