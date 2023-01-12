import React, { useState } from "react";
import { CardsItems50 } from "./CardsItems50";
import { CardsItems30 } from "./CardsItems30";
import Switcher from "./Switcher/Switcher";

import { UserAuth } from "../../../Context/AuthContext";
import {
  getFirestore,
  doc,
  increment,
  updateDoc,
  query,
  collection,
  setDoc,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Checkout from "../../checkout/Checkout";
import "./cardClasses.scss";

const BuyClasses = ({ durationSelection, msg }) => {
  const [ isCheckout, setIsCheckout ] = useState(false);
  const { userLogged } = UserAuth();
  const [ totalValue, setTotalValue ] = useState();
  const [ cantidad, setCantidad ] = useState();
  const [ duration, setDuration ] = useState(50);
  const [ currency, setCurrency ] = useState("EUR");
  const navigate = useNavigate();

  let buyCards = [];

  switch (duration) {
    case 30:
      buyCards = CardsItems30;
      break;
    case 50:
      buyCards = CardsItems50;
      break;
  }

  const handleCurrency = (selected) => {
    setCurrency(selected);
  }

  const handleDurationSelect = (selected) => {
    setDuration(parseInt(selected));
  }


  if (isCheckout) {
    return <Checkout totalValue={totalValue} cantidad={cantidad} />;
  }

  return (
    <div className="buy-container">
      <h3>{msg}</h3>

        <div className="buy-container__header">
          {durationSelection && <Switcher title={'DURACION DE LA CLASE :'} opt01={'50'} opt02={'30'} onToggle={handleDurationSelect}/> }
          <Switcher title={'MONEDA :'} opt01={'EUR'} opt02={'USD'} onToggle={handleCurrency}/>
        </div>

        <div className="buy-card-container">

        {buyCards.map((item, index) => {

          let recomended = false;
          index === 1 ? recomended = !recomended : recomended;

          return (
            <div key={index} className="buy-card">
              {recomended ? <span className="recomended-label">RECOMENDADO</span> : ""}
              <li>
                <ul>
                  <li className="pack-number">Navis {item.number} </li>
                  <li className="amount">
                    {" "}
                    {item.amount} <span className="clases-thin">Clases</span>{" "}
                  </li>
                  <li className="duration"> {item.duration} min/Class </li>
                  <li className="libros">Libros interactivos </li>
                  <li className="price">{item[currency]} {currency} por clase </li>
                  <div>

                    <button
                      className="button__Card"
                      onClick={(handleBuyClasses) => {
                        if (!userLogged) {
                          navigate('./signIn')
                        } else {
                          let precio = parseFloat(item[currency]);
                          let amount = parseInt(item.amount);
                          let total = amount * precio;
                          let finalValue = total.toFixed(2).toString();
                          setCantidad(amount);
                          setTotalValue(finalValue);
                          setIsCheckout(!isCheckout);
                        }
                      }}
                    >
                      Comprar
                    </button>
                  </div>
                </ul>
              </li>
              <div className="cohete"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BuyClasses;
