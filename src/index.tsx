import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";

import Locale from "./locale";

import moment from "moment";
import "moment/min/locales";

import Socket from "./services/server/connection";

Socket.on("Socket Authentication", (data: any) => console.log(data));

moment.locale(Locale.language);

ReactDOM.render(<App />, document.getElementById("root"));
