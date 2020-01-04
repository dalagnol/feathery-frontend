import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";

import Locale from "./locale";

import moment from "moment";
import "moment/min/moment-with-locales";

moment.locale(Locale.language);

ReactDOM.render(<App />, document.getElementById("root"));
