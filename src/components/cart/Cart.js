import React from "react";
import { connect } from "react-redux";
import { cartToggle } from "../../redux/cart/cartAction";
import { ReactComponent as CartImage } from "./shopping-bag.svg";
import "./Cart.scss";
const Cart = ({ cartToggle }) => (
  <div className="cart-image" onClick={cartToggle}>
    <CartImage className="shopping-bag" />
    <span className="item">0</span>
  </div>
);
const mapDispatchToProps = dispatch => ({
  cartToggle: () => dispatch(cartToggle())
});
export default connect(
  null,
  mapDispatchToProps
)(Cart);
