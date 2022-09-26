import React from 'react'
import Date from './Date'


const Class = ({classDate=[]}) => {

    return (
        classDate.map( listDate => <Date key={listDate.id} info={listDate} /> )
    )

}

export default Class
