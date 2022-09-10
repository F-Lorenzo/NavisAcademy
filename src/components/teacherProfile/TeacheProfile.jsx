import React from 'react'
import AlumnCard from './AlumnCard'


function TeacheProfile({teacher , alumnsQuantity, classesRemaining}) {
  const alumnsList = teacher.alumnsList;
  return (
    <div>
        <ul className="teacherPersonalData">
            <li>{teacher.name} +" "+{teacher.lastName}</li>  
            <li>{teacher.email}</li>
            <li>{teacher.phone}</li>
            <li>{teacher.country}</li>
        </ul>
        <ul className="teacherClassesData">
          <li>Clases completadas :{teacher.completedClasses}</li>
          <li>numero de alumnos{alumnsQuantity}</li>
          <li>
            <ul>
              {
                alumnsList.map(alumn => <AlumnCard key={alumn.id} alumn={alumn}/>)
              }
            </ul>
          </li>
          <li></li>
          <li></li>         
        </ul>
    </div>
  )
}

export default TeacheProfile