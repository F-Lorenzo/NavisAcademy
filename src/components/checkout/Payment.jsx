import React, { useState } from "react";
import initialOptions from "../paypal/paypal.config";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function Payment({ totalValue }) {
  const amount = totalValue;
  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: amount,
                },
              },
            ],
          });
        }}
        onApprove={async (data, actions) => {
          const details = await actions.order.capture();
          const name = details.payer.name.given_name;
          alert(`Transaction completed by ${name}`); // luego del onApprove se dan las clases
        }}
      />
    </PayPalScriptProvider>
  );
}
