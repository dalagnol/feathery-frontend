import React from "react";
import { BrowserRouter } from "react-router-dom";

import "styles/standards.css";

import PublicRoutes from "routes/public";

export default function App() {
  return (
    <BrowserRouter>
      <PublicRoutes />
    </BrowserRouter>
  );
}
