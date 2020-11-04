import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Reset from './screens/Reset/Reset';
import Error from './screens/Error/Error';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/:token" component={ Reset } />
      <Route path="*" component={ Error } />
    </Switch>
  </BrowserRouter>
);

export default Routes;