import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { landing, about, signup, signin, chat, adimo } from "routes";

import { Landing, About, SignIn, SignUp, Chat, Adimo } from "views/Nobody";

export default () => (
  <Switch>
    <Route exact path={landing()} render={() => <Landing />} />
    <Route path={about()} render={() => <About />} />
    <Route path={signup()} render={() => <SignUp />} />
    <Route path={signin()} render={() => <SignIn />} />
    <Route path={chat()} render={() => <Chat />} />
    <Route path={adimo()} render={() => <Adimo />} />
    <Redirect exact to={landing()} />
  </Switch>
);
