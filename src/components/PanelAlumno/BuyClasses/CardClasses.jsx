import React from "react";
import { UserAuth } from "../../../Context/AuthContext";
import { getFirestore, doc, increment, updateDoc } from "firebase/firestore";

const CardClasses = (pack) => {
  const { user } = UserAuth();

  const handleBuyNow = async () => {
    console.log("buyNow");

    try {
      const firestore = getFirestore();
      const userClases = doc(firestore, `Users/${user.uid}`);
      console.log(userClases);
      await updateDoc(userClases, {
        remainingClases: increment(pack.amount),
      });
      swal("Muy Bien", `Adquiriste ${pack.amount} nuevas clases`, "success");
    } catch (e) {
      swal("UPS!", `${e.message}`, "error");
    }
  };

  return (
    <div className="buy-card">
      <ul>
        <li>Pack Nº : {pack.number} </li>
        <li>Price : {pack.price} USD/Class </li>
        <li>Amount of Classes : {pack.amount} </li>
        <li>Duration of Class : {pack.duration} min/Class </li>
        <li>Includes in Class : {pack.includes} </li>
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
