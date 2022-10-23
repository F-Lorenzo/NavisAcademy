import React, { useState } from "react";
import initialOptions from "../paypal/paypal.config";

import { useEffect } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";

// This values are the props in the UI
const amount = "2";
const currency = "USD";
const style = { layout: "vertical" };

// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({ currency, showSpinner }) => {
  // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  // This is the main reason to wrap the PayPalButtons in a new component
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
        style={style}
        disabled={false}
        forceReRender={[amount, currency, style]}
        fundingSource={undefined}
        createOrder={async (data, actions) => {
          const orderId = await actions.order.create({
            purchase_units: [
              {
                amount: {
                  currency_code: currency,
                  value: amount,
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

function Payment() {
  return (
    <div style={{ maxWidth: "750px", minHeight: "200px" }}>
      <PayPalScriptProvider options={initialOptions}>
        <ButtonWrapper currency={currency} showSpinner={false} />
      </PayPalScriptProvider>
    </div>
  );
}
// function Payment({ total }) {
// const [success, setSuccess] = useState(false);
// const [ErrorMessage, setErrorMessage] = useState("");
// const [orderID, setOrderID] = useState(false);

// // creates a paypal order
// const createOrder = (data, actions) => {
//   return actions.order.create({
//     purchase_units: [
//       {
//         description: `compraste clases`,
//         amount: {
//           currency_code: "USD",
//           value: { total },
//         },
//       },
//     ],
//   });
//   .then((orderID) => {
//     setOrderID(orderID);
//     return orderID;
//   });
// };

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
//   return (
//     <PayPalScriptProvider options={initialOptions}>
//       <PayPalButtons
//         createOrder={(data, actions) => {
//           return actions.order.create({
//             purchase_units: [
//               {
//                 amount: {
//                   value: { total },
//                 },
//               },
//             ],
//           });
//         }}
//         onApprove={async (data, actions) => {
//           const details = await actions.order.capture();
//           const name = details.payer.name.given_name;
//           alert(`Transaction completed by ${name}`);
//         }}
//       />
//     </PayPalScriptProvider>
//   );
// }

export default Payment;
