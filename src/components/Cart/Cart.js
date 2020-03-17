import React from "react";
import { connect } from "react-redux";
import { getCart, cartReducer } from "../../redux/userReducer";
import Product from "../Product/Product";
import "./Cart.css";

function Cart() {
  return (
    <div className="cart-component">
      <div className="cart-section">
        <div className="cart-title">
          <h1>Cart</h1>
        </div>
        <div className="cart-holder">
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Cart;
