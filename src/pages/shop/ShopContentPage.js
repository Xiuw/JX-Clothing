import React from "react";
import { Route } from "react-router-dom";
import ShopOverview from "../../components/shop-overview/ShopOverview";
import CategoryCollection from "../category-collection/CategoryCollection";
const ShopContentPage = ({ match }) => {
  console.log(match);
  return (
    <div className="shop-content-page">
      <Route exact path={`${match.path}`} component={ShopOverview} />
      <Route
        path={`${match.path}/:categoryId`}
        component={CategoryCollection}
      />
    </div>
  );
};
export default ShopContentPage;
