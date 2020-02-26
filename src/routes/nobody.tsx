import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { landing, about } from "routes/paths";
import { Landing, About } from "views/Nobody";

export default function() {
  return (
    <Switch>
      <Route exact path={landing()} render={() => <Landing />} />
      <Route path={about()} render={() => <About />} />
      <Redirect exact to={landing()} />
    </Switch>
  );
}
