import React from "react";
import StripeCheckout from "react-stripe-checkout";
import "./style/CartItem.css";

export default function CartItem(props) {
  const makePayment = (token) => {
    const body = {
      token,
      name: props.name,
      price: props.price,
      productBy: props.productBy,
    };

    const headers = {
      "Content-Type": "application/json",
    };

    return fetch("http://localhost:8283/payment", {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log("RESPONSE", response);
        const { status } = response;
        console.log("STATUS", status);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="cart-item-flex-container">
        <h5>{props.name}</h5>
        <img src={props.image} height="250px" width="auto"></img>
        <StripeCheckout
          stripeKey="pk_test_51LTVZEK8GvssJyAyeQA3LCAl7vn421RLY2Z54KYNNrj2KwX34pnmXWDHSg3IBTYUtZugGNVfmHHYOoCugyO8KfKN00x7lprDkQ"
          token={makePayment}
          name={"Buy " + props.name}
          amount={props.price * 100}
        >
          <button className="btn-large blue">Buy for ${props.price}</button>
        </StripeCheckout>
      </div>
    </div>
  );
}
