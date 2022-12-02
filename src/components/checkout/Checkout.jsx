import React from "react";
import Payment from "./Payment";
import "./checkout.css";

function Checkout({ totalValue, cantidad }) {

  console.log("checkout enter : ", totalValue, cantidad);
  return (
    <div className="payment-container">
      <span className="amount">${totalValue}</span>
      <Payment totalValue={totalValue} cantidad={cantidad} className="payment" />
    </div>
  );
}

export default Checkout;
