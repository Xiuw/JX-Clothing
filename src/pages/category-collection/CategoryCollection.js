import React from "react";
// import itemCollection from "../../components/item-collection/ItemCollection";
import { connect } from "react-redux";
import { selectCategory } from "../../redux/shop/shopSelector";
import ItemCollection from "../../components/item-collection/ItemCollection";

import "./CategoryCollection.scss";

const CategoryCollection = ({ collection, match }) => {
  console.log(match.params.categoryId);
  const { title, items } = collection;
  return (
    <div className="category">
      <h2 className="title">{title}</h2>
      <div className="each-item">
        {items.map(item => (
          <ItemCollection key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => ({
  collection: selectCategory(ownProps.match.params.categoryId)(state) // can use createStructuredSelctor to prevent passing
});
export default connect(mapStateToProps)(CategoryCollection);
