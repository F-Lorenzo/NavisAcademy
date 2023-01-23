import React from 'react'
import { useState } from 'react';
import Teachers from './Teachers'

const TeachersList = ({date, teachers=[], onChange}) => {

    const teacherSelected = (e) => {
        onChange(e);
    }

    return (
        teachers.map( listTeacher => <Teachers date={date} key={listTeacher.id} teacher={listTeacher} selected={onChange}/> )
    )
    
}

export default TeachersList
