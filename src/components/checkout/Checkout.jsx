import React, { useState, useEffect } from "react";
import Payment from "./Payment";
import "./checkout.css";

function Checkout({ totalValue, cantidad }) {
  return (
    <div className="payment-container">
      <span className="amount">${totalValue}</span>
      <Payment
        totalValue={totalValue}
        cantidad={cantidad}
        className="payment"
      />
    </div>
  );
}

export default Checkout;
