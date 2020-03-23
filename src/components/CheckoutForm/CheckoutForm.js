import React from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CardSection from "../CardSection/CardSection";
import { connect } from "react-redux";
import { clearCart } from "../../redux/cartReducer";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import "./CheckoutFormStyles.css";

function CheckoutForm(props) {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async event => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.confirmCardPayment(props.paymentIntent, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          email: props.userReducer.user.user_email
        }
      }
    });

    if (result.error) {
      alert(result.error.message);
    } else {
      if (result.paymentIntent.status === "succeeded") {
        alert(
          `Successfully charged your card ${(
            result.paymentIntent.amount / 100
          ).toFixed(
            2
          )} and completed your payment. Please look for an email confirmation and receipt.`
        );
        props.handleCheckOut(false);
        props.clearCart();
        axios.get("/api/email");
        props.history.push("/shop");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <CardSection />
      <div className="button-holder">
        <button
          className="card-checkout-buttons"
          onClick={() => props.handleCheckOut(false)}
        >
          Cancel
        </button>
        <button disabled={!stripe} className="card-checkout-buttons">
          Confirm Order
        </button>
      </div>
    </form>
  );
}

const mapStateToProps = reduxState => {
  return {
    userReducer: reduxState.userReducer
  };
};

export default connect(mapStateToProps, { clearCart })(
  withRouter(CheckoutForm)
);
