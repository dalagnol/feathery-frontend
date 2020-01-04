import React from "react";
import { BrowserRouter } from "react-router-dom";

import PublicRoutes from "routes/public";

import moment from "moment";
import "moment/min/moment-with-locales";

moment.locale("pt");

declare global {
  interface Window {
    moment: any;
  }
}

window.moment = moment;

export default function App() {
  return (
    <BrowserRouter>
      <PublicRoutes />
    </BrowserRouter>
  );
}
