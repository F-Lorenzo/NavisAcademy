import React, { useState } from "react";
import initialOptions from "../paypal/paypal.config";

import { useEffect } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";

const ButtonWrapper = ({ currency, showSpinner, totalValue }) => {
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: currency,
      },
    });
  }, [currency, showSpinner]);

  return (
    <>
      {showSpinner && isPending && <div className="spinner" />}
      <PayPalButtons
        disabled={false}
        fundingSource={undefined}
        createOrder={async (data, actions) => {
          const orderId = await actions.order.create({
            purchase_units: [
              {
                amount: {
                  currency_code: currency,
                  value: { totalValue },
                },
              },
            ],
          });
          return orderId;
        }}
        onApprove={async function (data, actions) {
          return actions.order.capture().then(function () {
            // Your code here after capture the order
          });
        }}
      />
    </>
  );
};

export default function Payment({ totalValue }) {
  return (
    <div>
      <PayPalScriptProvider options={initialOptions}>
        <ButtonWrapper
          totalValue={totalValue}
          currency={currency}
          showSpinner={false}
        />
      </PayPalScriptProvider>
    </div>
  );
}
