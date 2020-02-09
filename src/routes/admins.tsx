import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { feed, profile, adimo } from "routes/paths";

import { Feed, Profile, Chat } from "views/Admins";

export default () => (
  <Switch>
    <Route exact path={feed()} component={Feed} />
    <Route exact path={profile()} component={Profile} />
    <Route exact path={adimo()} component={Chat} />
    <Redirect exact to={feed()} />
  </Switch>
);
