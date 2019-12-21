import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Views from "views";

/**
 * Defines the route for the splash page.
 */
export const splash = (): string => "/";

/**
 * Defines the route for the about page.
 */
export const about = (): string => "/about";

/**
 * Defines the route for the login page.
 */
export const login = (): string => "/login";

/**
 * Defines the route for the signIn page.
 */
export const signIn = (): string => "/signIn";

export const publicRoutes = () => (
  <Switch>
    <Route exact path={splash()} render={() => <h1>Splash</h1>} />
    <Route path={about()} render={() => null} />
    <Route path={login()} render={() => null} />
    <Route path={signIn()} render={() => null} />
    <Redirect exact to={splash()} />
  </Switch>
);

export default publicRoutes;
