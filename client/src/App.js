import React,{useState} from 'react';
import './App.css';
// npm i --save axios js-cookie jsonwebtoken react-facebook-login react-google-login react-router-dom react-toastify
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Home from './features/Home';
import Activate from './components/ActiveAccount';
import Product from './features/Product';

function App() {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path='/users/activate/:token' exact component={Activate}/>

        <Route path='/products' component={Product} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
