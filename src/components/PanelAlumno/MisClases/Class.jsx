import React from 'react'
import Date from './Date'


const Class = ({classDate=[]}) => {

    classDate.sort((a,b) => {
        if (a.date < b.date) {return - 1;}
        if (a.date > b.date) {return 1;}
        return 0;
    })

    return (
        classDate.map( listDate => <Date key={listDate.id} info={listDate} /> )
    )

}

export default Class
