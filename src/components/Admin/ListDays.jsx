import React from 'react'
import ListDay from './ListDay'

const ListDays = ({days=[]}) => {

    return (
        days.map( day => <ListDay dayId={day.id} day={day} />)
    )

}

export default ListDays 


