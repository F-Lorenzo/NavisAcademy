import React from 'react'
import Clases from './Clases'
import { UserAuth } from '../../Context/AuthContext';
import RoadLog from './RoadLog';

function PanelProfessor() {
  const { user } = UserAuth();
  let role  = user.role
   
  return (
    <>
    <div>
      <h3>Panel Professor</h3>
      <Clases />
      <RoadLog /> 
    </div>
    </>
    
  )
}

export default PanelProfessor