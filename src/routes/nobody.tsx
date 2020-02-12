import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import {
  landing,
  about,
  signup,
  signin,
  chat,
  adimo,
  mailreset,
} from "routes/paths";

import {
  Landing,
  About,
  SignIn,
  SignUp,
  Chat,
  Adimo,
  MailReset,
} from "views/Nobody";

export default () => (
  <Switch>
    <Route exact path={landing()} render={() => <Landing />} />
    <Route path={about()} render={() => <About />} />
    <Route path={signup()} render={() => <SignUp />} />
    <Route path={signin()} render={() => <SignIn />} />
    <Route path={chat()} render={() => <Chat />} />
    <Route path={adimo()} render={() => <Adimo />} />
    <Route path={mailreset()} render={() => <MailReset />} />
    <Redirect exact to={landing()} />
  </Switch>
);
