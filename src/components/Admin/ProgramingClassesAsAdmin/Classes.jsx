import React from 'react'
import Dates from './Dates'

const Classes = ({classDate=[], teachers=[]}) => {

    return (
        classDate.map( listDate => <Dates key={listDate.id} info={listDate} teachersList={teachers}/> )
    )

}

export default Classes
