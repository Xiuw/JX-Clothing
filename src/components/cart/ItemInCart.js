import React from "react";
import "./ItemInCart.scss";

const ItemInCart = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className="items">
    <img src={imageUrl} alt={name} />
    <div className="details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x ${price}
      </span>
    </div>
  </div>
);
export default ItemInCart;
