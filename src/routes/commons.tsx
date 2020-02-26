import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { landing, about } from "routes/paths";
import { Feed } from "views/Commons";

export default function() {
  return (
    <Switch>
      <Route exact path={landing()} render={() => <Feed />} />
      <Redirect exact to={landing()} />
    </Switch>
  );
}
