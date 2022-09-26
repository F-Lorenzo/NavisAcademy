import React from 'react';
import MisClases from './MisClases/MisClases';
import RoadLog from './RoadLog';
import { UserAuth } from '../../Context/AuthContext';

const PanelAlumno = () => {
  const { user } = UserAuth();

  return (
    <>
    <h1>PANEL ALUMNO</h1>
    <div>
      <MisClases {...user.misClases}/>
      <RoadLog />
    </div>
    </>
  )
}

export default PanelAlumno
