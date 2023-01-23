import React, { useState, useEffect } from "react";
import initialOptions from "../paypal/paypal.config";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";

//

import { UserAuth } from "../../Context/AuthContext";
import {
  getFirestore,
  doc,
  increment,
  updateDoc,
  query,
  collection,
  setDoc,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

//

const Payment = ({ totalValue, cantidad }) => {
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

  const { userLogged } = UserAuth();

  const timeStamp = serverTimestamp();

  const buyNotification = {
    textNotification: "Felicitaciones, adquiriste nuevas clases",
    notificationType: "Compra",
    checked: false,
  };

  const adminNotification = {
    textNotification: "Un usuario adquirio nuevas clases",
    notificationType: "Compra",
    checked: false,
  };

  const sumarClases = async () => {
    //SUMA DE CLASES PARA ALUMNO
    try {
      const firestore = getFirestore();
      const userClases = doc(firestore, `Users/${userLogged.uid}`);
      await updateDoc(userClases, {
        remainingClases: increment(cantidad),
        newPurchasedClasses: increment(cantidad),
        totalClasses: increment(cantidad),
        newNotifications: true,
        notifications: increment(1),
      });
      const newNotification = query(
        collection(firestore, `Users/${userLogged.uid}/myNotifications`)
      );
      addDoc(newNotification, {
        ...buyNotification,
        cantidad,
        timeStamp,
      }).then(({ id }) => {
        const docuRef = doc(firestore, `AdminNotifications/${id}`);
        setDoc(docuRef, { ...adminNotification, cantidad, timeStamp });
      });

      //swal("Muy Bien", `Adquiriste ${amount} nuevas clases`, "success");
    } catch (e) {
      swal("UPS!", `${e.message}`, "error");
    }
  };

  const totalAmount = totalValue;
  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: totalAmount,
                },
              },
            ],
          });
        }}
        onApprove={async (data, actions) => {
          const details = await actions.order.capture();

          let tempDetails = details;

          if (tempDetails) {
            sumarClases();
            tempDetails = false;
          } else {
            console.log("pago not apprub");
          }
        }}
        forceReRender={[totalAmount]}
      />
    </PayPalScriptProvider>
  );
};

export default Payment;
