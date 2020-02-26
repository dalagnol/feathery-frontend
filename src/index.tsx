import React from "react";
import ReactDOM from "react-dom";

import { Themed } from "themes";
import { Localised } from "locale";

import { App } from "./app/App";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Themed>
    <Localised>
      <App />
    </Localised>
  </Themed>,
  document.getElementById("root")
);

serviceWorker.unregister();
