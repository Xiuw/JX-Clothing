import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./LoadingSpinner.style.jsx";

const LoadingSpinner = WrapComponent => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrapComponent {...otherProps} />
    );
  };
  return Spinner;
};
export default LoadingSpinner;
