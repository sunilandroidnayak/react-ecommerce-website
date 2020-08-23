import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Homepage from './pages/homepage/homepage.component';
import Shoppage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.compenent.jsx';
import SignInAndSignUp from './components/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component  {
  constructor(){
    super();

    this.state = {
      currentUser : null
    }
  }

  unsuscribeFromAuth = null;

  componentDidMount(){
    this.unsuscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(auth);
        userRef.onSnapshot(snapShot =>{
          this.setState({ 
            currentUser: snapShot.id,
            ...snapShot.data()
          })
        });
      }
      else{
        this.setState({currentUser: userAuth});
      }
    })
  }

  componentWillUnmount(){
    this.unsuscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/react-ecommerce-website' component={Homepage} />
          <Route path='/react-ecommerce-website/shop' component={Shoppage} />
          <Route path='/react-ecommerce-website/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;