import React from "react";
import { UserUpdates } from "../../../Context/UserUpdatesContext";
import MyClasses from "../../PanelProfessor/MyClasses/AllMyClasses/MyClasses";

const NextClass = (myClass) => {

  const { user } = UserUpdates();

  const classNumber = user.form.actualClass;

  const actualDate = new Date();

  const handleTest = () => {

    console.log(actualDate);

    console.log(myClass.myClass[classNumber].time);

  }

  return (
    <div className="next-class-container">
      <div className="class__Body">

        <button onClick={handleTest}>TEST</button>

        <div>
          <h3>{ myClass.myClass[classNumber].time ? myClass.myClass[classNumber].time : ""} HS</h3>
          <div>
            { user.form.teacherName ? <p>Profesor: {user.form.teacherName}</p> : <p>Profesor no asignado</p> }
          </div>
        </div>

        <p> TU PROXIMA CLASE ES EL DIA: {myClass.myClass[classNumber].date}-{myClass.myClass[classNumber].day} </p>

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
