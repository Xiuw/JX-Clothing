import React from "react";
import { Route } from "react-router-dom";
import ShopOverview from "../../components/shop-overview/ShopOverview";
import CategoryCollection from "../category-collection/CategoryCollection";
import { firestore, convertCollectionsToMap } from "../../firebase/Firebase";
import { connect } from "react-redux";
import { getCollections } from "../../redux/shop/shopAction";

class ShopContentPage extends React.Component {
  unsubscribeFromSnapShot = null;
  componentDidMount() {
    const { getCollections } = this.props;
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async snapshot => {
      const collections = convertCollectionsToMap(snapshot);
      getCollections(collections);
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-content-page">
        <Route exact path={`${match.path}`} component={ShopOverview} />
        <Route
          path={`${match.path}/:categoryId`}
          component={CategoryCollection}
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
