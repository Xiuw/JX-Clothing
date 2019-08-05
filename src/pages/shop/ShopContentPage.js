import React from "react";
import ITEM_DATA from "./item.data";
import CollectionPreview from "../../components/collection-preview/CollectionPreview";
class ShopContentPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: ITEM_DATA
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-content-page">
        {collections.map(({ id, ...otherCollection }) => (
          <CollectionPreview key={id} {...otherCollection} />
        ))}
      </div>
    );
  }
}

export default ShopContentPage;
