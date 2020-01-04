import React from "react";
import { withRouter } from "react-router-dom";

import Dictionary from "./locale.json";
import Locale from "locale";

const { welcome, aboutus } = Locale.use(Dictionary);

function Main({ history }: any) {
  const about = () => {
    history.push("/about");
  };

  return (
    <div>
      <h1>{welcome}</h1>
      <button onClick={about} data-testid={"buttonTestId"}>
        {aboutus}
      </button>
    </div>
  );
}

export default withRouter(Main);
