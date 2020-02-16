import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { landing, about, chat, adimo } from "routes/paths";

import { Landing, About, Chat, Adimo } from "views/Nobody";

export default () => (
  <Switch>
    <Route exact path={landing()} render={() => <Landing />} />
    <Route path={about()} render={() => <About />} />
    <Route path={chat()} render={() => <Chat />} />
    <Route path={adimo()} render={() => <Adimo />} />
    <Redirect exact to={landing()} />
  </Switch>
);
