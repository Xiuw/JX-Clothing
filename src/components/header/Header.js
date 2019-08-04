import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./crown.svg";
import { auth } from "../../firebase/Firebase";
import { connect } from "react-redux";

import "./Header.scss";

const Header = ({ user }) => (
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

      {user ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);
const mapStateToProps = state => ({
  user: state.user.user
});
export default connect(mapStateToProps)(Header);
