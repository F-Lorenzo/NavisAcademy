import React from 'react'
import Teachers from './Teachers'

const TeachersList = ({dateId, teachers=[]}) => {

    return (
        teachers.map( listTeacher => <Teachers dateId={dateId} key={listTeacher.id} teacher={listTeacher}/> )
    )
    
}

export default TeachersList
