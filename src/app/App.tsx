import React from "react";
import { BrowserRouter } from "react-router-dom";

import PublicRoutes from "routes/public";

export default function App() {
  return (
    <BrowserRouter>
      <PublicRoutes />
    </BrowserRouter>
  );
}
