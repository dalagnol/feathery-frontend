import React from "react";
import { withRouter } from "react-router-dom";

import Dictionary from "./locale.json";
import Locale from "locale";

const { welcome, aboutus } = Locale.use(Dictionary);

function Main({ history }: any) {
  return (
    <div>
      <h1>{welcome}</h1>
      <button
        onClick={() => {
          history.push("/about");
        }}
      >
        {aboutus}
      </button>
    </div>
  );
}

export default withRouter(Main);
