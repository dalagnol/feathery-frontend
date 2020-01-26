import React from "react";
import { observer } from "mobx-react";
import { BrowserRouter as Router } from "react-router-dom";

import "styles/standards.scss";
import "styles/fonts.scss";
import "styles/animations";

import Store from "store/Users";

import Routing from "routes";

export default observer(function App() {
  const { user } = Store;
  const Routes = Routing[user?.group || "nobody"];

  return (
    <Router>
      <Routes />
    </Router>
  );
});
