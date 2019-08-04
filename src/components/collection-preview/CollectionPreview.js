import React from "react";
import ItemCollection from "../item-collection/ItemCollection";
import "./CollectionPreview.scss";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, i) => i < 4)
        .map(item => (
          <ItemCollection key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
