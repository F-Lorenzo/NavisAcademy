import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import initialOptions from "../paypal/paypal.config";

export default function Payment({ total }) {
  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: { total },
                },
              },
            ],
          });
        }}
        onApprove={async (data, actions) => {
          const details = await actions.order.capture();
          const name = details.payer.name.given_name;
          // alert(`${quantity} clases se han agregado`);
        }}
      />
    </PayPalScriptProvider>
  );
}
