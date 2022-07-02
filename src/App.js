import React, { Component } from "react";
import './App.css';
import Header from './components/Header.js';
import Home from './components/Home.js';
import Checkout from "./components/Checkout.js";
import {BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Login from "./components/Login";
import Orders from "./components/Orders";

class App extends Component {
  render() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
      </Router>
  );
  }
}

export default App;
