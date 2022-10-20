import React, { useState } from "react";
import { UserAuth } from "../../../Context/AuthContext";
import { getFirestore, doc, increment, updateDoc } from "firebase/firestore";
import Checkout from "../../checkout/Checkout";
import { useNavigate } from "react-router-dom";
import "./cardClasses.css";

const CardClasses = ({ number, price, duration, amount }) => {
  const [checkout, setCheckout] = useState(false);
  const { user } = UserAuth();
  const navigate = useNavigate();
  const precio = parseFloat(price);
  const cantidad = parseFloat(amount);
  const totalValue = cantidad * precio;
  const handleBuyNow = async () => {
    setCheckout(true);
    try {
      const firestore = getFirestore();
      const userClases = doc(firestore, `Users/${user.uid}`);
      console.log(userClases);
      await updateDoc(userClases, {
        remainingClases: increment(amount),
      });
      // swal("Muy Bien", `Adquiriste ${amount} nuevas clases`, "success");
    } catch (e) {
      swal("UPS!", `${e.message}`, "error");
    }
  };
  if (checkout) {
    return <Checkout totalValue={totalValue} />;
  }

  return (
    <div>
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
    </div>
  );
};

export default CardClasses;
