import React from "react";
import { BrowserRouter } from "react-router-dom";

import "styles/standards.css";
import "styles/fonts.css";

import PublicRoutes from "routes/public";

import Theme from "themes";

export default function App() {
  return (
    <BrowserRouter>
      <Theme.provider theme={Theme.theme}>
        <PublicRoutes />
      </Theme.provider>
    </BrowserRouter>
  );
}
