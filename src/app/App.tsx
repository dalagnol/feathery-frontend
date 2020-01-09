import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "styles/standards.css";
import "styles/fonts.css";

import Public from "routes/public";

import { Themed } from "themes";

export default function App() {
  return (
    <Router>
      <Themed>
        <Public />
      </Themed>
    </Router>
  );
}
