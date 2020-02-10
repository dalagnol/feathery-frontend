import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { feed } from "routes/paths";

import { Feed } from "views/Commons";

export default () => (
  <Switch>
    <Route exact path={feed()} render={() => <Feed />} />
    <Redirect exact to={feed()} />
  </Switch>
);
