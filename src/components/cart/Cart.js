import React from "react";
import { ReactComponent as CartImage } from "./shopping-bag.svg";
import "./Cart.scss";
const Cart = () => (
  <div className="cart-image">
    <CartImage className="shopping-bag" />
    <span className="item">0</span>
  </div>
);
export default Cart;
