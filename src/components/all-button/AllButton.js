import React from "react";
import "./AllButton.scss";

const AllButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
  <button
    className={`${inverted ? "inverted" : ""}${
      isGoogleSignIn ? "google-sign-in" : ""
    } all-button`}
    {...otherProps}
  >
    {children}
  </button>
);
export default AllButton;
