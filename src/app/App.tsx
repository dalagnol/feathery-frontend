import React from "react";
import { BrowserRouter } from "react-router-dom";

import PublicRoutes from "routes/public";

import Theme from "themes";
import Locale from "locale";

declare global {
  interface Window {
    Theme: any;
    Locale: any;
  }
}

window.Theme = Theme;
window.Locale = Locale;

export default function App() {
  return (
    <BrowserRouter>
      <PublicRoutes />
    </BrowserRouter>
  );
}
