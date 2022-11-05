import React, { useState, useEffect } from "react";
import initialOptions from "../paypal/paypal.config";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import CardClasses from "../PanelAlumno/BuyClasses/CardClasses";

export default function Payment({ totalValue }) {
  // useEffect(() => {
  //   const [{ options }, dispatch] = usePayPalScriptReducer();
  //   const [currency, setCurrency] = useState(options.currency);
  //   function onCurrencyChange({ target: { value } }) {
  //     setCurrency(value);
  //     dispatch({
  //       type: "resetOptions",
  //       value: {
  //         ...options,
  //         currency: value,
  //       },
  //     });
  //   }
  // }, [currency]);

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
          console.log(details); // luego del onApprove se dan las clases
        }}
      />
      {/* <select value={currency} onChange={onCurrencyChange}>
        <option value="USD">United States dollar</option>
        <option value="EUR">Euro</option>
      </select> */}
    </PayPalScriptProvider>
  );
}
