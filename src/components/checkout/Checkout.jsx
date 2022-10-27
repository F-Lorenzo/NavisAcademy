import React from "react";
import Payment from "./Payment";
import "./checkout.css";

function Checkout({ totalValue }) {
  return (
    <div className="payment-container">
      <span className="amount">${totalValue}</span>
      <Payment totalValue={totalValue} className="payment" />
    </div>
  );
}

export default Checkout;
