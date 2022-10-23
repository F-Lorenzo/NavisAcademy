import React, { useState } from "react";
import { UserAuth } from "../../../Context/AuthContext";
import { getFirestore, doc, increment, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Checkout from "../../checkout/Checkout";
import Card from "./Card";
import "./cardClasses.css";

const CardClasses = ({ number, price, duration, amount }) => {
  const [checkout, setCheckout] = useState(false);
  const precio = parseFloat(price);
  const cantidad = parseFloat(amount);
  const totalValue = cantidad * precio;
  const { user } = UserAuth();
  const handleBuyNow = async () => {
    try {
      const firestore = getFirestore();
      const userClases = doc(firestore, `Users/${user.uid}`);
      console.log(userClases);
      await updateDoc(userClases, {
        remainingClases: increment(amount),
      });
      setCheckout(true);
      // swal("Muy Bien", `Adquiriste ${amount} nuevas clases`, "success");
    } catch (e) {
      swal("UPS!", `${e.message}`, "error");
    }
  };

  if (Checkout) {
    return <Checkout totalValue={totalValue} />;
  }

  return (
    // <div>
    //   {
    //     <Card
    //       number={number}
    //       price={price}
    //       duration={duration}
    //       amount={amount}
    //     />
    //   }
    // </div>
    <div className="buy-card">
      <ul>
        <li className="pack-number">Pack Nº : {number} </li>
        <li className="amount">Cantidad de clases {amount} </li>
        <li className="price">$ {price} USD/Clase </li>
        <li className="duration"> Duración : {duration} min/Class </li>
        <div>
          <button className="button__Card" onClick={handleBuyNow}>
            ADQUIRIR CLASES
          </button>
        </div>
      </ul>
    </div>
  );
};

export default CardClasses;
