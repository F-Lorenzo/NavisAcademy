import React from 'react'
import Teachers from './Teachers'

const TeachersList = ({date, teachers=[], daysInfo}) => {

    return (
        teachers.map( listTeacher => <Teachers date={date} key={listTeacher.id} teacher={listTeacher} requiredDays={daysInfo}/> )
    )
    
}

export default TeachersList
