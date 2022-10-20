import React from "react";

const NextClass = (myClass) => {

  return (
    <div className="next-class-container">
      <div className="class__Body">
        <div>
          <h3>{myClass.time}18 HS</h3>
          <p>Professor: Unasigned</p>
        </div>

        <p>TU PROXIMA CLASE ESTA POR COMENZAR</p>

        <span className="class__button-start">INICIAR CLASE</span>
        <span className="class__button-end">REPROGRAMAR CLASE</span>
      </div>
    </div>
  );
};

export default NextClass;
