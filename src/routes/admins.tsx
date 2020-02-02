import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { feed, profile } from "routes";

import { Feed, Profile } from "views/Admins";

export default () => (
  <Switch>
    <Route exact path={feed()} component={Feed} />
    <Route exact path={profile()} component={Profile} />
    <Redirect exact to={feed()} />
  </Switch>
);
