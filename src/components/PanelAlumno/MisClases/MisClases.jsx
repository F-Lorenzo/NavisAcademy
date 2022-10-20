import React from "react";
import { useState } from "react";

import { UserAuth } from "../../../Context/AuthContext";
import { doc, getFirestore, updateDoc, increment } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";




const MisClases = (clases) => {

  const { user } = UserAuth();
  const navigate = useNavigate();

  const handleInicioDeClase = async () => {
    try {
      let actualValue = clases.remainingClases;
      console.log(actualValue);
      const firestore = getFirestore();
      const userClases = doc(firestore, `Users/${user.uid}`);
      await updateDoc(userClases, {
        remainingClases: actualValue - 1,
        completedClases: increment(1),
      });
      swal("Muy Bien", `Preparate para tu clase`, "success");
    } catch (e) {
      swal("UPS!", `${e.message}`, "error");
    }
  };

  const handleProgramarClases = () => {
    swal("Muy Bien", `Ahora programaras tus clases`, "success");
    navigate("/Account/ProgramarClases");
  };

  const handleCalendarioDeClases = () => {
    navigate("/Account/CalendarioDeClases");
    swal("BIENVENIDO", `Aquí podras ver tu calendario de clases`, "success");
  };


  return (
    <div>
          <p>Tu proxima clase esta por comenzar</p>
                 <button
                  className="class__button-start"
                  // onClick={handleProgramarClases} debe redireccionar al link de la clase una vez que el profesor inicia la clase
                >
                  <span>iniciar clase</span>
                </button>
                <button
                  className="class__button-end"
                  onClick={handleProgramarClases}
                  disabled={clases.remainingClases === clases.programedClases}
                >
                  <span>Programar clases</span>
                </button>
        </div>
      </div>
      <div className="info-container">

        <div className="info">
          <h3>CLASES DISPONIBLES : {clases.remainingClases}</h3>
        </div>

        <div className="info">
          <h3>CLASES PROGRAMADAS: {clases.programedClases} </h3>
        </div>
        <div className="info__Content">
            <div className="info-button-classes-container">
              <div className="info-button">
                <button
                  onClick={handleCalendarioDeClases}
                  disabled={clases.programedClases === 0}
                >
                  <span>Calendario de clases</span>
                </button>
                <button
                  // onClick={handleCalendarioDeClases} boton que te envia a tu perfil
                >
                  <span>Perfil</span>
                </button>    
          </div>
          <div className="info-button-perfil">
            <h3>Perfil</h3>
          </div>


        </div>
      </div>
    </div>
  );
};

export default MisClases;
