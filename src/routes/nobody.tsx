import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import {
  landing,
  about,
  signup,
  signin,
  chat,
  adimo,
  send,
  reset,
} from "routes/paths";

import {
  Landing,
  About,
  SignIn,
  SignUp,
  Chat,
  Adimo,
  MailReset,
  ResetPsw,
} from "views/Nobody";

export default () => (
  <Switch>
    <Route exact path={landing()} render={() => <Landing />} />
    <Route path={about()} render={() => <About />} />
    <Route path={signup()} render={() => <SignUp />} />
    <Route path={signin()} render={() => <SignIn />} />
    <Route path={chat()} render={() => <Chat />} />
    <Route path={adimo()} render={() => <Adimo />} />
    <Route path={send()} render={() => <MailReset />} />
    <Route path={reset()} render={() => <ResetPsw />} />
    <Redirect exact to={landing()} />
  </Switch>
);
