import React from "react";
import { withRouter } from "react-router-dom";

import Dictionary from "./locale.json";
import Locale from "locale";

const { aboutus, main } = Locale.use(Dictionary);

export default withRouter(function About({ history }) {
  const back = () => history.push("/");
  return (
    <div>
      <h1>{aboutus}</h1>
      <button onClick={back}>{main}</button>
    </div>
  );
});
