import React from "react";
// import itemCollection from "../../components/item-collection/ItemCollection";
import { connect } from "react-redux";
import { selectCategory } from "../../redux/shop/shopSelector";
import "./CategoryCollection.scss";
import { createStructuredSelector } from "reselect";
const CategoryCollection = ({ collection }) => {
  console.log(collection);
  return (
    <div className="category">
      <h2>Collection Page</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) =>
  createStructuredSelector({
    collection: selectCategory(ownProps.match.params.categoryId)
  });

// const mapStateToProps = (state, ownProps) => ({
//   collection: selectCategory(ownProps.match.params.categoryId)(state)
// });
export default connect(mapStateToProps)(CategoryCollection);
