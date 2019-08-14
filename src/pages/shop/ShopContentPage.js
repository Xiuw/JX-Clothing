import React from "react";
import { Route } from "react-router-dom";
import ShopOverview from "../../components/shop-overview/ShopOverview";
import CategoryCollection from "../category-collection/CategoryCollection";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCollectionPending,
  selectIsCollectionLoaded
} from "../../redux/shop/shopSelector";
import { requestCollections } from "../../redux/shop/shopAction";
import LoadingSpinner from "../../components/loading-spinner/LoadingSpinner";

const ShopOverviewSpinner = LoadingSpinner(ShopOverview);
const CategoryCollectionSpinner = LoadingSpinner(CategoryCollection);

class ShopContentPage extends React.Component {
  componentDidMount() {
    const { requestCollections } = this.props;
    requestCollections();
  }

  render() {
    const { match, isCollectionPending, isCollectionLoaded } = this.props;

    return (
      <div className="shop-content-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <ShopOverviewSpinner isLoading={isCollectionPending} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:categoryId`}
          render={props => (
            <CategoryCollectionSpinner
              isLoading={!isCollectionLoaded}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  isCollectionPending: selectCollectionPending,
  isCollectionLoaded: selectIsCollectionLoaded
});

const mapDispatchToProps = dispatch => ({
  requestCollections: () => dispatch(requestCollections())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopContentPage);
