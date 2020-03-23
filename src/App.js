import React from "react";
import Header from "./components/Header/Header";
import routes from "./routes";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import "./App.css";

const stripePromise = loadStripe("pk_test_6ihWYKwQtsH9bNwCihQsFGHh00rOcyH0dC");

function App() {
  return (
    <Elements stripe={stripePromise}>
      <div className="App">
        <Header />
        {routes}
      </div>
    </Elements>
  );
}

export default App;
