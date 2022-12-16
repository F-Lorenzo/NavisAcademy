import React from "react";
import "./ItemCards.css";
import coh1 from "../../../assets/img/cohete.svg";
import { Link } from "react-router-dom";


export default function ItemCards() {
  return (
    <>
      <div className="homeSection__Title">
        <h2> Paquetes</h2>
      </div>
      
      <section className="card_Content">
        <div className="card__Container">
          <div className="card__body">
          <span className='mini_Title'>El Mas Barato</span>
            <div className="cohete">
            
              <img src={coh1} alt={""}></img>
            </div>
            <h2 className="box-1">Navis °1</h2>
            <span className="box-2">
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
              impedit, eius, repellat quae voluptates obcaecati libero sed
              blanditiis praesentium molestias incidunt, dicta facilis? Harum
              ducimus, eos atque ipsa corrupti architecto!
            </span>
            <Link to='signUp'> 
            <button className="button_itemCards">
            Adquirir
            </button>
            </Link>
          </div>
          <div className="card__body">
          <span className='mini_Title'>El Mas Popular</span>
            <div className="cohete">
              <img src={coh1} alt={""}></img>
            </div>
            <h2 className="box-1">Navis °2</h2>

            <span className="box-2">
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
              impedit, eius, repellat quae voluptates obcaecati libero sed
              blanditiis praesentium molestias incidunt, dicta facilis? Harum
              ducimus, eos atque ipsa corrupti architecto!
            </span>
            <Link to='signUp'> 
            <button className="button_itemCards">
            Adquirir
            </button>
            </Link>
          </div>
          <div className="card__body">
          <span className='mini_Title'>Recomendado</span>
            <div className="cohete">
              <img src={coh1} alt={""}></img>
            </div>
            <h2 className="box-1">Navis °3</h2>

            <span className="box-2">
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
              impedit, eius, repellat quae voluptates obcaecati libero sed
              blanditiis praesentium molestias incidunt, dicta facilis? Harum
              ducimus, eos atque ipsa corrupti architecto!
            </span>
            <Link to='signUp'> 
            <button className="button_itemCards">
            Adquirir
            </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
