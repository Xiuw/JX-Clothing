import React from "react";
import Homepage from "./pages/homepage/Homepage";
import ShopContentPage from "./pages/shop/ShopContentPage";
import Header from "./components/header/Header";

import SignUp from "./pages/signUp/SignUp";
import SignIn from "./pages/signIn/SignIn";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import { auth, createUserProfileDocument } from "./firebase/Firebase";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setUser } from "./redux/user/userAction";
import { createStructuredSelector } from "reselect";
import { selectAuthUser } from "./redux/user/userSelector";
// import { selectForPreview } from "./redux/shop/shopSelector";

import "./App.css";

class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async accAuth => {
      if (accAuth) {
        const userRef = await createUserProfileDocument(accAuth);
        // console.log(userRef);
        userRef.onSnapshot(snapShot => {
          setUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setUser(accAuth);
      // addCollectionAndDocuments(
      //   "collections",
      //   collectionItemsArray.map(({ title, items }) => ({ title, items }))
      // );
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopContentPage} />
          <Route
            path="/signin"
            render={() =>
              this.props.authUser !== null ? <Redirect to="/" /> : <SignIn />
            }
          />
          <Route
            path="/signup"
            render={() =>
              this.props.authUser !== null ? <Redirect to="/" /> : <SignUp />
            }
          />

          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  authUser: selectAuthUser
  // collectionItemsArray: selectForPreview
});
const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setUser(user))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
