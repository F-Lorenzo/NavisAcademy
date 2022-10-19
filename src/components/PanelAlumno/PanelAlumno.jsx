import React from 'react';
import MisClases from './MisClases/MisClases';
import RoadLog from './RoadLog';
import { UserAuth } from '../../Context/AuthContext';
import LuxonTIme from './LuxonTIme';
import BuyClasses from './BuyClasses/BuyClasses';
import MyNextClass from './MyNextClass/MyNextClass';
import "./MisClases/MisClases.css"

const PanelAlumno = () => {
  const { user } = UserAuth();

  return (
    <>
    <h1>PANEL ALUMNO</h1>
    <div>
      <LuxonTIme /> 
      <div className="container">

      <MyNextClass />
      <MisClases {...user.misClases}/>
      </div>
      <BuyClasses />
      <RoadLog />

    </div>
    </>
  )
}

export default PanelAlumno
