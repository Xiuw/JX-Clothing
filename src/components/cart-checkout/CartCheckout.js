import React from "react";
import "./CartCheckout.scss";
import { connect } from "react-redux";
import {
  deleteCartItem,
  removeAItem,
  addItemToCart
} from "../../redux/cart/cartAction";

const CartCheckout = ({ cartItem, deleteItem, removeItem, addItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="cart-checkout">
      <div className="item-image">
        <img src={imageUrl} alt="items" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="count">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <div className="delete" onClick={() => deleteItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteItem: item => dispatch(deleteCartItem(item)),
  addItem: item => dispatch(addItemToCart(item)),
  removeItem: item => dispatch(removeAItem(item))
});
export default connect(
  null,
  mapDispatchToProps
)(CartCheckout);
