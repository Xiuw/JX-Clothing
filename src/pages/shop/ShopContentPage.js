import React from "react";
import { Route } from "react-router-dom";
import ShopOverview from "../../components/shop-overview/ShopOverview";
import CategoryCollection from "../category-collection/CategoryCollection";
import { firestore, convertCollectionsToMap } from "../../firebase/Firebase";
import { connect } from "react-redux";
import { getCollections } from "../../redux/shop/shopAction";
import LoadingSpinner from "../../components/loading-spinner/LoadingSpinner";

const ShopOverviewSpinner = LoadingSpinner(ShopOverview);
const CategoryCollectionSpinner = LoadingSpinner(CategoryCollection);
class ShopContentPage extends React.Component {
  state = {
    loading: true
  };
  unsubscribeFromSnapShot = null;
  componentDidMount() {
    const { getCollections } = this.props;
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async snapshot => {
      const collections = convertCollectionsToMap(snapshot);
      getCollections(collections);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-content-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <ShopOverviewSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:categoryId`}
          render={props => (
            <CategoryCollectionSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  getCollections: collections => dispatch(getCollections(collections))
});
export default connect(
  null,
  mapDispatchToProps
)(ShopContentPage);
