import React from "react";
import "./CartCheckout.scss";

const CartCheckout = ({ cartItem: { name, imageUrl, price, quantity } }) => (
  <div className="cart-checkout">
    <div className="item-image">
      <img src={imageUrl} alt="items" />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">{price}</span>
    <div className="delete">&#10005;</div>
  </div>
);
export default CartCheckout;
