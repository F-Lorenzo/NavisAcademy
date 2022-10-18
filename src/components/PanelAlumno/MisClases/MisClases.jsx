import React from "react";
import { useState } from "react";

import ItemCounter from "./ItemCounter";
import { UserAuth } from "../../../Context/AuthContext";
import { doc, getFirestore, updateDoc, increment } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

import "./MisClases.css";

const MisClases = (clases) => {
  const { user } = UserAuth();
  const navigate = useNavigate();

  const comprarClases = async (nuevas) => {
    try {
      const firestore = getFirestore();
      const userClases = doc(firestore, `Users/${user.uid}`);
      console.log(userClases);
      await updateDoc(userClases, {
        remainingClases: increment(nuevas),
      });
      swal("Muy Bien", `Adquiriste ${nuevas} nuevas clases`, "success");
    } catch (e) {
      swal("UPS!", `${e.message}`, "error");
    }
  };

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

  const handleFunctionControl = () => {
    console.log(clases);
  };

  return (
    <div className="container">
      <div className="next-class-container">
        {/* componente encagado de hacer visible la proxima clase del alumno */}
        {/* <NextClass/>  */}
        <div className="class__Body">
          <div>
            
          <h3>18:30HS</h3>
          <p>Profesor:Facundo Escobar</p>
            </div>

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
          <h3>CLASES PROGRAMADAS: {clases.completedClases} </h3>
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
      </div>        
      </div>
      </div>
      <div className="buy-container">
        <div>
          <h2>Adquirir más clases</h2>
        </div>
        <div className="buy-card-container">
          <div className="buy-card">
            <h3>Duración de la clase : </h3>
            <div className="button__Card">
              <ItemCounter comprarClases={comprarClases} />
            </div>
          </div>
          <div className="buy-card">
            <h3>Duración de la clase :</h3>
            <div className="button__Card">
              <ItemCounter comprarClases={comprarClases} />
            </div>
          </div>
          <div className="buy-card">
            <h3>Duración de la clase : </h3>
            <div className="button__Card">
              <ItemCounter comprarClases={comprarClases} />
            </div>
          </div>
          <div className="buy-card">
            <h3>Duración de la clase :</h3>
            <div className="button__Card">
              <ItemCounter comprarClases={comprarClases} />
            </div>
          </div>
          <div className="buy-card">
            <h3>Duración de la clase :</h3>

            <div className="button__Card">
              <ItemCounter comprarClases={comprarClases} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MisClases;
