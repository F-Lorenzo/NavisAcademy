import React from "react";

const NextClass = (myClass) => {
  console.log(myClass);

<<<<<<<<< Temporary merge branch 1
    /*console.log(myClass);*/

    return (
        <div className='next-class-container'>

            <div className='class__Body'>
                <div>
                    <h3>{myClass.time} HS</h3>
                    <p>Professor: Unasigned</p>
                </div>

                <p>Your next class is about to begin</p>

                <span className='class__button-start'>Start Class</span>
                <span className='class__button-end'>Reprogram Class</span>
            </div>

=========
  return (
    <div className="next-class-container">
      <div className="class__Body">
        <div>
          <h3>{myClass.time}18 HS</h3>
          <p>Professor: Unasigned</p>
>>>>>>>>> Temporary merge branch 2
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
