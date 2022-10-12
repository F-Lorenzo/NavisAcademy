import React from 'react'
import Clases from './Clases'
import { UserAuth } from '../../Context/AuthContext';

function PanelProfessor() {
  const { user } = UserAuth();
  let role  = user.role
   
  return (
    <>
    <div>PanelProfessor</div>
    <div>
      {
        role = 'teacher'? <Clases/> : <p>usted no es profesor</p>
      } 
    </div>
    <div>
    Lista de alumnos.
    Próximas clases
    Fecha de las clases impartidas
    Fecha y hora de las próximas clases junto con el nombre del estudiante.
    Clases impartidas (mes actual).
    Clases impartidas (mes pasado).
    Es necesario un botón para la confirmación del inicio de la clase.
    Este botón es para poder llevar un registro de las clases vista por el alumno ya que el sistema deberá descontar la clase vista de las clases por usar.
    Botón para redireccionar a la plataforma de eLearning, (este deberá activarse una vez alumno y profesor confirmen la clase).
    </div>
    </>
    
  )
}

export default PanelProfessor