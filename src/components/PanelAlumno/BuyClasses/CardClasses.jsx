import React, { useState } from "react";
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
import { DateTime } from "luxon";
import { Navigate, useNavigate } from "react-router-dom";
import Checkout from "../../checkout/Checkout";
import "./CardClasses.css";

const CardClasses = ({ number, price, duration, amount }) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const precio = parseFloat(price);
  const cantidad = parseFloat(amount);
  const total = cantidad * precio;
  const totalValue = total.toFixed(2).toString();
  const { userLogged } = UserAuth();

  const navigate = useNavigate();

  const textNotification = "Felicitaciones, adquiriste nuevas clases";
  const notificationType = "Compra";
  const timeStampLuxon = DateTime.now().toFormat("DDDD - HH:mm:ss");
  const timeStamp = serverTimestamp();

  const handleBuyNow = async () => {
    setIsCheckout(true);
  };

  if (isCheckout) {
    return <Checkout totalValue={totalValue} cantidad={amount} />
  }

  return (
    <div className="buy-card">
      <ul>
        <li className="pack-number">Pack Nº : {number} </li>
        <li className="amount">Cantidad de clases {amount} </li>
        <li className="price">$ {price} USD/Clase </li>
        <li className="duration"> Duración : {duration} min/Class </li>
        <div>
          <div>
            <select>
              <option value="dolar" id="dolar">
                $
              </option>
              <option value="euro" id="euro">
                €
              </option>
            </select>
          </div>

          <button className="button__Card" onClick={handleBuyNow}>
            ADQUIRIR CLASES
          </button>
        </div>
      </ul>
    </div>
  );
};

export default CardClasses;
