import React from "react";
import { AllButtonContainer } from "./AllButton.style.jsx";

const AllButton = ({ children, ...props }) => (
  <AllButtonContainer {...props}>{children}</AllButtonContainer>
);
export default AllButton;
