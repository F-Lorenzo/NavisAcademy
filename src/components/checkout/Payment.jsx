import React, {useState} from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import initialOptions from '../paypal/paypal.config'

export default function App(prop) {
    const [success, setSuccess] = useState(false);
    const [ErrorMessage, setErrorMessage] = useState("");
    const [orderID, setOrderID] = useState(false);

    const value =prop.price;
    const amount = prop.amount;
    const totalValue = value*amount;
    console.log("🚀 ~ file: Payment.jsx ~ line 14 ~ App ~ totalValue", totalValue)
    
    
    // creates a paypal order
    const createOrder = (data, actions) => {
      return actions.order
        .create({
          purchase_units: [
            {
              description: `compraste ${prop.amount} clases`,
              amount: {
                currency_code: "USD",
                value: "10",
              },
            },
          ],
        })
        .then((orderID) => {
          setOrderID(orderID);
          return orderID;
        });
    };
    
    // check Approval
    const onApprove = (data, actions) => {
      return actions.order.capture().then(function (details) {
        const { payer } = details;
        setSuccess(true);
      });
    };
    //capture likely error
    const onError = (data, actions) => {
      setErrorMessage("Ocurrio un error con tu pago");
    };
    return (
      <PayPalScriptProvider options={initialOptions}>
            <PayPalButtons
              createOrder={createOrder}
              onApprove={onApprove}
            />
      </PayPalScriptProvider>
    );
   }

