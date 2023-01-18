import React from 'react'
import Calificacion from './Calificacion'

function Card({studentId, teacherId}) {
  return (
    <div>
        <Calificacion student={studentId} teacher={teacherId} />
    </div>
  )
}

export default Card