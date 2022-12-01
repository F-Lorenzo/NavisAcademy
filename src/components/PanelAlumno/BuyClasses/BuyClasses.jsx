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
  addDoc, serverTimestamp,
} from "firebase/firestore";
import { Navigate, useNavigate } from "react-router-dom";
import Checkout from "../../checkout/Checkout";
import "./cardClasses.css";


const BuyClasses = () => {

    const [ isCheckout, setIsCheckout ] = useState(false);

    const [ totalValue, setTotalValue ] = useState();
    const [ cantidad, setCantidad ] = useState();

    if (isCheckout) {
        return <Checkout totalValue={totalValue} cantidad={cantidad} />
    }

    return (
        <div className="buy-container">
            <h3>ADQUIRIR MAS CLASES</h3>

            <div className="buy-card-container">
                { CardsItems50.map((item, index) => {
                    return (
                        <div key={index} className="buy-card">
                            <li>
                            <ul>
                                <li className="pack-number">Pack Nº : {item.number} </li>
                                <li className="amount">Cantidad de clases {item.amount} </li>
                                <li className="price">$ {item.price} USD/Clase </li>
                                <li className="duration"> Duración : {item.duration} min/Class </li>
                                <div>
                                    <div>
                                        <select >
                                            <option  value="dolar" id='dolar'>$</option>
                                            <option  value="euro" id='euro'>€</option>
                                        </select>
                                    </div>
                
                                    <button className="button__Card" onClick={handleBuyClasses => {
                                        console.log(item);
                                        let precio = parseFloat(item.price);
                                        let amount = parseInt(item.amount); 
                                        let total = amount * precio;
                                        let finalValue = total.toFixed(2).toString();
                                        setCantidad(amount);
                                        setTotalValue(finalValue);

                                        setIsCheckout(!isCheckout);
                                        }}>
                                        ADQUIRIR CLASES
                                    </button>
                                </div>
                            </ul>
                            </li>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default BuyClasses;
