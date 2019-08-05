import React from "react";
import "./CartCheckout.scss";
import { connect } from "react-redux";
import { deleteCartItem } from "../../redux/cart/cartAction";

const CartCheckout = ({ cartItem, deleteItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="cart-checkout">
      <div className="item-image">
        <img src={imageUrl} alt="items" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="delete" onClick={() => deleteItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteItem: item => dispatch(deleteCartItem(item))
});
export default connect(
  null,
  mapDispatchToProps
)(CartCheckout);
