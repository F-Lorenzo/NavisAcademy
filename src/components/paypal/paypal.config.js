const initialOptions = {
  "client-id": import.meta.env.PAYPAL_CLIENT_ID,
  currency: "USD",
  intent: "capture",
  "data-client-token": "abc123xyz==",
};

export default initialOptions;
