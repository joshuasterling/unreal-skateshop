import React, { useState, useLayoutEffect } from "react";
import { connect } from "react-redux";
import { getCart, cartReducer } from "../../redux/userReducer";
import Product from "../Product/Product";
import "./Cart.css";

function Cart() {
  const [cartTotal, handleCart] = useState(0.0);

  useLayoutEffect(() => {}, [cartTotal]);

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
            <div>${`${cartTotal}`}</div>
          </div>
          <div>
            <button className="checkout-button">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
