import React from 'react';
import Homepage from './components/pages/homepage/Homepage';
import ShopContentPage from './components/pages/shop/ShopContentPage';
import {Route , Switch} from 'react-router-dom';
import './App.css';

// const HatsPage = () =>{
//   return(
//     <p>Hat Page</p>
//   )
// }
function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopContentPage} />
      </Switch>
    </div>
  );
}
export default App;
