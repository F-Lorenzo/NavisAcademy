import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import initialOptions from "../paypal/paypal.config";

function Payment({ total }) {
  const [success, setSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);

  // creates a paypal order
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          description: `compraste clases`,
          amount: {
            currency_code: "USD",
            value: { total },
          },
        },
      ],
    });
    // .then((orderID) => {
    //   setOrderID(orderID);
    //   return orderID;
    // });
  };

  // // check Approval
  // const onApprove = async (data, actions) => {
  //   const order = await actions.order.capture();
  //   console.log("order", order);

  //   handleApprove(orderID);
  // };
  // //capture likely error
  // const onError = (data, actions) => {
  //   setErrorMessage("Ocurrio un error con tu pago");
  // };
  // createOrder={createOrder} onApprove={onApprove}
  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons />
    </PayPalScriptProvider>
  );
}

export default Payment;
