import React from 'react'

const Notificacion = (info) => {

    const handleTest = () => {
        console.log(info);
    }

    return (
        <div>
            Tienes {info.info.remainingClases}
            <button onClick={handleTest}>TestMDK</button>
        </div>
    )
}

export default Notificacion
