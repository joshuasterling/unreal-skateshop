import React, { useState, useLayoutEffect } from "react";
import Product from "../Product/Product";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import axios from "axios";
import "./Cart.css";

function Cart() {
  const [cartTotal, handleCart] = useState(0);
  const [checkOut, handleCheckOut] = useState(false);
  const [paymentIntent, handleIntent] = useState();

  useLayoutEffect(() => {}, [cartTotal]);

  const commenceCheckout = () => {
    console.log(cartTotal * 100);
    axios
      .post("/api/checkout", { cartTotal: Math.trunc(cartTotal * 100) })
      .then(res => {
        console.log(res.data);
        handleIntent(res.data.client_secret);
        handleCheckOut(true);
      });
  };

  return (
    <div className="cart-component">
      <div className="cart-section">
        <div className="cart-title">
          <h1>Cart</h1>
        </div>
        <div className="cart-holder">
          <Product handleCart={handleCart} cartTotal={cartTotal} />
        </div>
        <div className="bottom-section">
          <div className="cart-total">
            <h2>Cart Total:</h2>
            <div>${`${cartTotal.toFixed(2)}`}</div>
          </div>
          <div>
            <button
              className="checkout-button"
              onClick={() => commenceCheckout()}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
      {checkOut && (
        <CheckoutForm
          paymentIntent={paymentIntent}
          handleCheckOut={handleCheckOut}
        />
      )}
    </div>
  );
}

export default Cart;
