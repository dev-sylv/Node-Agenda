import React from "react";
import { useKorapay, KorapayButton } from "react-korapay";

const config = {
  public_key: "pk_test_**your_public_key**",
  amount: 2000,
  customer: {
    name: "John doe",
    email: "johndoe@gmail.com",
  },
  narration: "Testing korapay",
};

export default function App() {
  const korapayBtnConfig = {
    ...config,
    onClose: () => {},
    onSuccess: () => {},
    text: "Pay with korapay!",
  };

  const handleKorapay = useKorapay(config);

  return (
    <div className="App">
      <h1>React Wrapper for Korapay collections</h1>
      <h2>Check it out!</h2>

      <div>
        <button
          onClick={() =>
            handleKorapay({
              onClose: () => {},
              onSuccess: () => {},
            })
          }>
          Pay now!
        </button>

        <KorapayButton {...korapayBtnConfig} />
      </div>
    </div>
  );
}
