import React from "react";
import { BrowserRouter } from "react-router-dom";

import PublicRoutes from "routes/public";

import LanguageEngine from "locale";

export default function App() {
  console.log(LanguageEngine);
  return (
    <BrowserRouter>
      <PublicRoutes />
    </BrowserRouter>
  );
}
