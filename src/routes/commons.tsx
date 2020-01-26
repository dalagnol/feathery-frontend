import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Feed } from "views/Commons";

export const feed = (): string => "/";

export default () => (
  <Switch>
    <Route exact path={feed()} render={() => <Feed />} />
    <Redirect exact to={feed()} />
  </Switch>
);
