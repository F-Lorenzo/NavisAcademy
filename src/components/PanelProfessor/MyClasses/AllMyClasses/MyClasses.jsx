import React from 'react'
import Classes from './Classes'

const MyClasses = ({myClasses=[]}) => {

    return (
        myClasses.map( listClasses => <Classes key={listClasses.id} info={listClasses} />)
    )

}

export default MyClasses
