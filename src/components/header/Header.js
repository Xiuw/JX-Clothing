import React from "react";

import JXLogo from "./JXLogo.png";
// import { ReactComponent as Logo } from "./crown.svg";
import { auth } from "../../firebase/Firebase";
import { connect } from "react-redux";
import Cart from "../cart/Cart";
import CartDropdown from "../cart/CartDropdown";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cartSelector";
import { selectAuthUser } from "../../redux/user/userSelector";
import {
  HeaderContainer,
  LogoContainer,
  LogoImg,
  OptionsContainer,
  OptionLink,
  OptionDiv
} from "./Header.style.jsx";

const Header = ({ authUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <LogoImg src={JXLogo} alt="JX Fashion" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>

      {authUser ? (
        <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      <Cart />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);
const mapStateToProps = createStructuredSelector({
  authUser: selectAuthUser,
  hidden: selectCartHidden
});
export default connect(mapStateToProps)(Header);
