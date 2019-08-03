import React from 'react';
import './AllButton.scss';

const AllButton = ({children,isGoogleSignIn, ...otherProps}) => (
   <button className={`${isGoogleSignIn?'google-sign-in':''} all-button`}{...otherProps}>
      {children}
   </button>
);
export default AllButton;