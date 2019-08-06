import React from "react";
import AllButton from "../all-button/AllButton";
import { connect } from "react-redux";
import ItemInCart from "./ItemInCart";
import { createStructuredSelector } from "reselect";
import { selectItems } from "../../redux/cart/cartSelector";
import { withRouter } from "react-router-dom";
import { cartToggle } from "../../redux/cart/cartAction";
import "./CartDropdown.scss";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="dropdown">
    <div className="items-container">
      {cartItems.length ? (
        cartItems.map(i => <ItemInCart key={i.id} item={i} />)
      ) : (
        <span className="cart-empty">Your cart is empty</span>
      )}
    </div>
    <AllButton
      onClick={() => {
        history.push("/checkout");
        dispatch(cartToggle());
      }}
    >
      CHECKOUT
    </AllButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectItems
});
export default withRouter(connect(mapStateToProps)(CartDropdown));
