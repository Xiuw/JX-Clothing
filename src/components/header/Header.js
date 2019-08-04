import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./crown.svg";
import { auth } from "../../firebase/Firebase";
import { connect } from "react-redux";
import Cart from "../cart/Cart";

import "./Header.scss";

const Header = ({ authUser }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>

      {authUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <Cart />
    </div>
  </div>
);
const mapStateToProps = state => ({
  authUser: state.user.authUser
});
export default connect(mapStateToProps)(Header);
