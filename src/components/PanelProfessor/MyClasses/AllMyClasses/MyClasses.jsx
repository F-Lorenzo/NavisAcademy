import React from 'react'
import Classes from './Classes'

const MyClasses = ({myClasses=[]}) => {

    myClasses.sort((a,b) => {
        if (a.date < b.date) {return - 1;}
        if (a.date > b.date) {return 1;}
        return 0;
    })

    return (
        myClasses.map( listClasses => <Classes key={listClasses.id} info={listClasses} />)
    )

}

export default MyClasses
