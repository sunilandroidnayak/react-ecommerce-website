import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Homepage from './pages/homepage/homepage.component';
import Shoppage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.compenent.jsx';
import SignInAndSignUp from './components/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={Shoppage} />
        <Route path='/signin' component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;