import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Landing, About, SignIn, SignUp, Chat, Adimo } from "views";

export const landing = (): string => "/";
export const about = (): string => "/about";
export const signup = (): string => "/signup";
export const signin = (): string => "/signin";
export const chat = (): string => "/chat";
export const adimo = (): string => "/adimo";

export const publicRoutes = () => (
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

export default publicRoutes;
