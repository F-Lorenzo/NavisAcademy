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
        <a
          target="_Blank"
          className="class__button-end"
          href=" https://www.blinklearning.com/v/1666102044/themes/tmpux/launch.php"
        >
          <span>BLINK LEARNING</span>
        </a>
        <span className="class__button-end">REPROGRAMAR CLASE</span>
      </div>
    </div>
  );
};

export default NextClass;
