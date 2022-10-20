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
      const firestore = getFirestore();
      const userClases = doc(firestore, `Users/${user.uid}`);
      await updateDoc(userClases, {
        remainingClases: actualValue - 1,
        completedClases: increment(1),
      });
      swal("Muy Bien", `Preparate para tu clase`, "success");
    } catch (e) {
      swal("UPS!",`${e.message}` , "error");
    }
  };

  const handleProgramarClases = () => {
    swal("Muy Bien",`Ahora programaras tus clases`, "success");
    navigate("/Account/ProgramarClases");
  };

  const handleCalendarioDeClases = () => {
    navigate("/Account/CalendarioDeClases");
    swal("BIENVENIDO", `Aquí podras ver tu calendario de clases`, "success");
  };
  return (
    <div>
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
                onClick={handleProgramarClases}
                disabled={clases.remainingClases === clases.programedClases}
              >
                <h3>Programar clases</h3>
              </button>
            </div>
            <div className="info-button">
              <button
                onClick={handleCalendarioDeClases}
                disabled={clases.programedClases === 0}
              >
                <h3>Calendario de clases</h3>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MisClases;