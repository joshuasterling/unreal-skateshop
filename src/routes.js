import React from "react";
import { Switch, Route } from "react-router-dom";
import Build from "./components/Build/Build";
import Shop from "./components/Shop/Shop";
import Landing from "./components/Landing/Landing";
import Cart from "./components/Cart/Cart";

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/shop" component={Shop} />
    <Route path="/build" component={Build} />
    <Route path="/cart" component={Cart} />
  </Switch>
);
