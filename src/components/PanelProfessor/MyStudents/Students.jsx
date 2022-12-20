import React from 'react'
import Student from './Student'

const Students = ({myStudents=[]}) => {

        return (
            myStudents.map( listStudents => <Student key={listStudents.id} info={listStudents} />)
        )

}

export default Students
