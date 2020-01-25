import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";

import Locale from "./locale";

import moment from "moment";
import "moment/min/locales";

declare global {
  interface Window {
    locale: any;
  }
}

window.locale = Locale;

moment.locale(Locale.language);

ReactDOM.render(<App />, document.getElementById("root"));
