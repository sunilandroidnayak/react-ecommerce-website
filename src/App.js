import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Homepage from './pages/homepage/homepage.component';
import Shoppage from './pages/shop/shop.component.jsx';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={Shoppage} />
      </Switch>
    </div>
  );
}

export default App;