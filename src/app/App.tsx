import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import "styles/standards.css";
import "styles/fonts.css";

import store from "store";

import Public from "routes/public";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Public />
      </Router>
    </Provider>
  );
}
