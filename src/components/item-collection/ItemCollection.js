import React from "react";
import { connect } from "react-redux";
import { addItemToCart } from "../../redux/cart/cartAction";
import "./ItemCollection.scss";
import AllButton from "../all-button/AllButton";

const ItemCollection = ({ item, addItemToCart }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <AllButton onClick={() => addItemToCart(item)} inverted>
        Add
      </AllButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addItemToCart(item))
});
export default connect(
  null,
  mapDispatchToProps
)(ItemCollection);
