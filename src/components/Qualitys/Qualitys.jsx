import React from "react";
import "./Quality.css";
import reloj from "../../assets/img/reloj.svg";
import notas from "../../assets/img/notas.svg";
import objetivo from "../../assets/img/objetivo.svg";
import arrow1 from "../../assets/img/flechaderecha.svg";
import arrow2 from "../../assets/img/flechaizquierda.svg";

const Qualitys = () => {
  return (
    <>
      <div className="quality__Title">
        {" "}
        <h2>Cualidades</h2>
      </div>
      <div className="quality_Content">
        <div className="quality_Body">
        <div className='arrow1'>
                <img src={arrow2} alt="" />
              </div>
          <div className="box__1">
            <div className="box__body">
            
              <div className="quality__Svg">
                {" "}
                <img src={reloj} alt=" " />
              </div>
                <div>
                <h4>Flexible con tu tiempo</h4>
                <span>
                 Solo tú decides cuando estudiar.
              </span>
                </div>
             
             
            </div>
          </div>
          <div className="box__2">
            <div className="box__body">
              <div className="quality__Svg">
                {" "}
                <img src={notas} alt=" " />
              </div>
              <div>
                <h4> 100% interactivo</h4>
                <span>
                Clases guiadas y ejercicios que puedes hacer
                con tu profesor y por tu cuenta.
              </span>
              </div>
             
            </div>
          </div>
          <div className="box__3">
            <div className="box__body">
              <div className="quality__Svg">
                {" "}
                <img src={objetivo} alt=" " />
              </div>
              <div>
                <h4>
                Adaptados a tus objetivos.
                </h4>
                <span>
                te preparamos para entrevistas,
                viajes, examen académicos, TOEFL y más.
              </span>
              </div>
            
            </div>
            
          </div>
          <div className='arrow1'>
                <img src={arrow1} alt="" />
              </div>
        </div>
      </div>
    </>
  );
};

export default Qualitys;
