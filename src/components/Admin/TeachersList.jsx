import React from 'react'
import Teachers from './Teachers'

const TeachersList = ({teachers=[]}) => {

    return (
        teachers.map( listTeacher => <Teachers key={listTeacher.id} info={listTeacher}/> )
    )
    
}

export default TeachersList
