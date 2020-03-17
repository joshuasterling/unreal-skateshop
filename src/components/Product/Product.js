import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addToCart, getCart, updateQty } from "../../redux/cartReducer";
import "./Product.css";

function Product(props) {
  useEffect(() => {
    if (props.userReducer.user.user_id) {
      props.getCart();
    }
  }, [props.userReducer.user.user_id]);

  return props.cartReducer.cart.map(e => {
    return (
      <div className="product-component">
        <div className="product-section">
          <div>
            <img className="cart-image" src={e.product_image} alt="" />
          </div>
          <div>
            <p>{e.product_name}</p>
          </div>
          <div>
            <p>{e.product_type}</p>
          </div>
          <div>
            <p>Qty {e.qty}</p>
          </div>
          <div>
            <p>{e.product_price} & Delete Button</p>
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
  updateQty
})(Product);
