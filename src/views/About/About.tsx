import React from "react";

import Dictionary from "./locale.json";
import Locale from "locale";

const { aboutus } = Locale.use(Dictionary);

export default function About() {
  return (
    <div>
      <h1>{aboutus}</h1>
    </div>
  );
}
