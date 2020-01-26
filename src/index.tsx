import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";

import Locale from "./locale";
import Theme from "./themes";

import moment from "moment";
import "moment/min/locales";

declare global {
  interface Window {
    locale: any;
    theme: any;
  }
}

window.locale = Locale;
window.theme = Theme;

moment.locale(Locale.language);

ReactDOM.render(<App />, document.getElementById("root"));
