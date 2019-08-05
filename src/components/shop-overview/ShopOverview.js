import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../collection-preview/CollectionPreview";
import { selectCollection } from "../../redux/shop/shopSelector";
import "./ShopOverview.scss";
//overview of of different category collection
const ShopOverview = ({ itemCollection }) => (
  <div className="category">
    {itemCollection.map(({ id, ...otherCollection }) => (
      <CollectionPreview key={id} {...otherCollection} />
    ))}
  </div>
);
const mapStateToProps = createStructuredSelector({
  itemCollection: selectCollection
});
export default connect(mapStateToProps)(ShopOverview);
