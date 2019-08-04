import React from "react";
import Homepage from "./components/pages/homepage/Homepage";
import ShopContentPage from "./components/pages/shop/ShopContentPage";
import Header from "./components/header/Header";
import SignInSignUp from "./components/signin-signup/SignInSignUp";
import { auth, createUserProfileDocument } from "./firebase/Firebase";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { setUser } from "./redux/user/userAction";
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
          <Route path="/signin" component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setUser(user))
});
export default connect(
  null,
  mapDispatchToProps
)(App);
