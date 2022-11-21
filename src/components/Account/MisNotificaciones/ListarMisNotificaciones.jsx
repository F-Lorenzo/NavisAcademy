import React from 'react'
import Notificacion from './Notificacion';

const ListarMisNotificaciones = ({notificaciones=[]}) => {

    return (
        notificaciones.map( miNotificacion => <Notificacion key={miNotificacion.id} info={miNotificacion} /> )
    )

}

export default ListarMisNotificaciones
