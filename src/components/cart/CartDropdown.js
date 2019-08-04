import React from "react";
import AllButton from "../all-button/AllButton";
import { connect } from "react-redux";
import "./CartDropdown.scss";
import ItemInCart from "./ItemInCart";
const CartDropdown = ({ cartItems }) => (
  <div className="dropdown">
    <div className="items-container">
      {cartItems.map(i => (
        <ItemInCart key={i.id} item={i} />
      ))}
    </div>
    <AllButton>CHECKOUT</AllButton>
  </div>
);

const mapStateToProps = state => ({
  cartItems: state.cartReducer.cartItems
});
export default connect(mapStateToProps)(CartDropdown);
