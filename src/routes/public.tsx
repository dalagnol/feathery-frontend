import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Landing, About, Login } from "views";

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
export const signUp = (): string => "/signUp";

/**
 * Defines the route for the signIn page.
 */
export const signIn = (): string => "/signIn";

export const publicRoutes = () => (
  <Switch>
    <Route exact path={landing()} render={() => <Landing />} />
    <Route path={about()} render={() => <About />} />
    <Route path={signUp()} render={() => <Login />} />
    <Route path={signIn()} render={() => null} />
    <Redirect exact to={landing()} />
  </Switch>
);

export default publicRoutes;
