import React from 'react'
import Notificacion from './Notificacion';

const ListarMisNotificaciones = ({notificaciones=[]}) => {

    notificaciones.sort((a,b) => {
        if (a.timeStamp > b.timeStamp) {return - 1;}
        if (a.timeStamp < b.timeStamp) {return 1;}
        return 0;
    })

    return (
        notificaciones.map( miNotificacion => <Notificacion key={miNotificacion.id} info={miNotificacion} /> )
    )

}

export default ListarMisNotificaciones
