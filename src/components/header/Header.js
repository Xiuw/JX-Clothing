import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./crown.svg";
import { auth } from "../../firebase/Firebase";
import { connect } from "react-redux";
import Cart from "../cart/Cart";
import CartDropdown from "../cart/CartDropdown";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cartSelector";
import { selectAuthUser } from "../../redux/user/userSelector";
import "./Header.scss";

const Header = ({ authUser, hidden }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      {/*<Link className="option" to="/shop">
        CONTACT
</Link>*/}

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
    {hidden ? null : <CartDropdown />}
  </div>
);
const mapStateToProps = createStructuredSelector({
  authUser: selectAuthUser,
  hidden: selectCartHidden
});
export default connect(mapStateToProps)(Header);
