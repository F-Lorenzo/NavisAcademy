import React from "react";
import "./ItemCards.css";

const ItemCards = () => {
  return (
    <>
      
      <section className="card_Content">
      <h2 className='paquetes__title'> Paquetes</h2>
        <div className="card__Container">
          <div className="card__body">
            <h2 className="box-1">card 1</h2>

            <span className="box-2">
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
              impedit, eius, repellat quae voluptates obcaecati libero sed
              blanditiis praesentium molestias incidunt, dicta facilis? Harum
              ducimus, eos atque ipsa corrupti architecto!
            </span>
          </div>
          <div className="card__body">
            <h2 className="box-1">card 2</h2>

            <span className="box-2">
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
              impedit, eius, repellat quae voluptates obcaecati libero sed
              blanditiis praesentium molestias incidunt, dicta facilis? Harum
              ducimus, eos atque ipsa corrupti architecto!
            </span>
          </div>
          <div className="card__body">
            <h2 className="box-1">card 3</h2>

            <span className="box-2">
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
              impedit, eius, repellat quae voluptates obcaecati libero sed
              blanditiis praesentium molestias incidunt, dicta facilis? Harum
              ducimus, eos atque ipsa corrupti architecto!
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default ItemCards;
