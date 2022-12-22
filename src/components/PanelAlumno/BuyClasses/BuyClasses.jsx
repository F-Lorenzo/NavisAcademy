import React, { useState } from "react";
import { CardsItems50 } from "./CardsItems50";
import { CardsItems30 } from "./CardsItems30";

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
import "./cardClasses.css";

const BuyClasses = ({ duration, msg }) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const { userLogged } = UserAuth();
  const navigate = useNavigate();
  const [totalValue, setTotalValue] = useState();
  const [cantidad, setCantidad] = useState();

  const [currency, setCurrency] = useState("USD");

  let buyCards = [];

  switch (duration) {
    case 30:
      buyCards = CardsItems30;
      break;
    case 50:
      buyCards = CardsItems50;
      break;
  }

  const handleCurrencySelect = (selected) => {
    setCurrency(selected);
  }

  if (isCheckout) {
    return <Checkout totalValue={totalValue} cantidad={cantidad} />;
  }

  return (
    <div className="buy-container">
      <h3>{msg}</h3>

        <div className="buy-card-container">

        {buyCards.map((item, index) => {

          return (
            <div key={index} className="buy-card">
              <li>
                <ul>
                  <li className="pack-number">Navis {item.number} </li>
                  <li className="amount">
                    {" "}
                    {item.amount} <span className="clases-thin">Clases</span>{" "}
                  </li>
                  <li className="duration"> {item.duration} min/Class </li>
                  <li className="libros">Libros interactivos </li>
                  <li className="price">$ {item[currency]} {currency} por clase </li>
                  <div>

                    <div>
                      <label>Moneda: </label>
                      <select value={currency} onChange={opt => handleCurrencySelect(opt.target.value)} >
                        <option value="USD">$</option>
                        <option value="EUR">€</option>
                      </select>
                    </div>

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
