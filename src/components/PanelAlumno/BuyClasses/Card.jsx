import React from "react";
import { UserAuth } from "../../../Context/AuthContext";
import { getFirestore, doc, increment, updateDoc } from "firebase/firestore";

function Card({ number, price, duration, amount }) {
  const { user } = UserAuth();
  const handleBuyNow = async () => {
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
  return (
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
}

export default Card;
