import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Themed } from "themes";
import { Localised } from "locale";

import Routing from "routes";

const userType = "nobody";

export const App = () => {
  const Routes = Routing[userType] || Routing.nobody;

  return (
    <Router>
      <Localised>
        <Themed>
          <Routes />
        </Themed>
      </Localised>
    </Router>
  );
};
