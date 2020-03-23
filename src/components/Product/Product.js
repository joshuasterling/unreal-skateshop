import React, { useState, useEffect, useLayoutEffect } from "react";
import { connect } from "react-redux";
import {
  addToCart,
  getCart,
  updateQty,
  deleteItem
} from "../../redux/cartReducer";
import "./Product.css";

function Product(props) {
  useEffect(() => {
    if (props.userReducer.user.user_id) {
      props.getCart();
    }
  }, [props.userReducer.user.user_id]);

  useEffect(() => {
    if (props.cartReducer.cart) {
      let tempCartTotal = props.cartReducer.cart.reduce((acc, element) => {
        return acc + +element.product_price * element.qty;
      }, 0);
      props.handleCart(tempCartTotal);
    }
  }, [props.cartReducer.cart]);

  const [newQty, handleQty] = useState();

  return props.cartReducer.cart.map(e => {
    const productTotal = e.qty * e.product_price;

    return (
      <div className="product-component">
        <div className="product-section">
          <div>
            <img className="cart-image" src={e.product_image} alt="" />
          </div>
          <div>
            <p className="product-info">Name</p>
            <div>{e.product_name}</div>
          </div>
          <div>
            <p className="product-info">Price</p>
            <div>{e.product_price}</div>
          </div>
          <div>
            <p className="product-info">Quantity</p>
            <input
              placeholder={e.qty}
              onChange={e => {
                handleQty(e.target.value);
              }}
            ></input>
          </div>
          <div>
            <p className="product-info">Product Total:</p>
            <div>{productTotal.toFixed(2)}</div>
          </div>
          <div>
            <button
              className="product-buttons"
              onClick={() => {
                props.updateQty(e.cart_id, newQty);
              }}
            >
              Edit Quantity
            </button>
            <button
              className="product-buttons"
              onClick={() => props.deleteItem(e.cart_id)}
            >
              Delete Item
            </button>
          </div>
        </div>
      </div>
    );
  });
}

const mapStateToProps = reduxState => {
  return {
    cartReducer: reduxState.cartReducer,
    userReducer: reduxState.userReducer
  };
};

export default connect(mapStateToProps, {
  addToCart,
  getCart,
  updateQty,
  deleteItem
})(Product);
