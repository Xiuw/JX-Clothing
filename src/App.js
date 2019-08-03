import React from 'react';
import Homepage from './components/pages/homepage/Homepage';
import ShopContentPage from './components/pages/shop/ShopContentPage';
import Header from './components/header/Header';
import SignInSignUp from './components/signin-signup/SignInSignUp';
import {auth} from './components/firebase/Firebase';
import {Route , Switch} from 'react-router-dom';
import './App.css';


// const HatsPage = () =>{
//   return(
//     <p>Hat Page</p>
//   )
// }
class App extends React.Component{
  constructor(){
    super();
    this.state={
      user:null
    }
  }
  unsubscribeFromAuth = null;
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(googleAcc =>{
      this.setState({user:googleAcc})
      console.log(googleAcc);
    })
   
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    const{user}=this.state;
    return (
      <div>
        <Header user={user}/>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopContentPage} />
          <Route path='/signin' component={SignInSignUp}/>
        </Switch>
      </div>
    );
  }
}
export default App;
