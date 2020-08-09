import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Checkout from './layouts/checkout';

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/checkout">
            <Checkout/>
          </Route>
          <Route exact path="/">
            <Redirect to="/checkout"></Redirect>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
