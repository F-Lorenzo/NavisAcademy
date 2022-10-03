import React from "react";
import "./Questions.css";
import arrow1 from "../../assets/img/flechaderecha.svg";
import arrow2 from "../../assets/img/flechaizquierda.svg";

const Questions = () => {
  return (
    <>
      <div className="question__Title">
        <h2>PREGUNTAS FRECUENTES</h2>
      </div>
    
      <div className="question_Content">
     
        <div className="question_Body">
        <div className='arrow1'>
                <img src={arrow2} alt="" />
              </div>
          <div className="question__1">
            <h2>¿Qué es Navis?</h2>
            <div className="question__body">
              <span>
              Lorem ipsum dolor sit amet,
consectetuer adipiscing elit.
Lorem ipsum dolor sit amet,
consectetuer adipis.
              </span>
            </div>
          </div>
          <div className="question__2">
            <h2>¿Cuándo puedo estudiar?</h2>
            <div className="question__body">
              <span>
              Lorem ipsum dolor sit amet,
consectetuer adipiscing elit.
              </span>
            </div>
          </div>
          <div className="question__3">
            <h2>¿Puedo elegir o cambiar de profesor?</h2>
            <div className="question__body">
              <span>
              Lorem ipsum dolor sit amet,
consectetuer adipiscing elit.

              </span>
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

export default Questions;
