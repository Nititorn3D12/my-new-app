import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import About from "./containers/About";
import Order from "./containers/order/Order";
import Product from "./containers/product/Product";
import NotFound from "./containers/error/NotFound";

class App extends Component {
  renderRouter() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/orders" component={Order} />
        <Route exact path="/products" component={Product} />
        

        <Route component={NotFound}/>
      </Switch>
    );
  }

  render() {
    return <BrowserRouter>{this.renderRouter()}</BrowserRouter>;
  }
}

export default App;