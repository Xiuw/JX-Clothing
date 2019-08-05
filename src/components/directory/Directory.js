import React from "react";
import MenuItem from "../menu/MenuItem";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectSections } from "../../redux/directory.redux/directorySelector";

import "./Directory.scss";

const Directory = ({ collectionSection }) => (
  <div className="directory-menu">
    {collectionSection.map(({ id, ...otherCategory }) => (
      <MenuItem key={id} {...otherCategory} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collectionSection: selectSections
});
export default connect(mapStateToProps)(Directory);
