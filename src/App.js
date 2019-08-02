import React from 'react';
import Homepage from './components/pages/homepage/Homepage';
import {Route , Switch} from 'react-router-dom';
import './App.css';

const HatsPage = () =>{
  return(
    <p>Hat Page</p>
  )
}
function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}
export default App;
