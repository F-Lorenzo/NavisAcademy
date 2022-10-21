import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Checkout from "../../checkout/Checkout";
import Card from "./Card";
import "./cardClasses.css";

const CardClasses = ({ number, price, duration, amount }) => {
  const [checkout, setCheckout] = useState(false);
  const precio = parseFloat(price);
  const cantidad = parseFloat(amount);
  const totalValue = cantidad * precio;

  if (checkout) {
    return <Checkout totalValue={totalValue} />;
  }

  return (
    <div>
      {
        <Card
          number={number}
          price={price}
          duration={duration}
          amount={amount}
        />
      }
    </div>
  );
};

export default CardClasses;
