import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Landing, About, SignIn, SignUp, Chat, Adimo } from "views";

/**
 * Defines the route for the splash page.
 */
export const landing = (): string => "/";

/**
 * Defines the route for the about page.
 */
export const about = (): string => "/about";

/**
 * Defines the route for the login page.
 */
export const signup = (): string => "/signup";

/**
 * Defines the route for the signIn page.
 */
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
