import React from "react";
import Payment from "./Payment";
import "./checkout.css";

function Checkout({ totalValue }) {
  const total = totalValue.toString();
  return (
    <div className="payment-container">
      <span className="amount">${total}</span>
      <Payment totalValue={total} className="payment" />
    </div>
  );
}

export default Checkout;
