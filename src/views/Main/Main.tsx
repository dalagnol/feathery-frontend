import React from "react";
import { withRouter } from "react-router-dom";

import { Background, Title, Button } from "./styles";

import Dictionary from "./locale.json";
import Locale from "locale";

import Theme from "themes";

const { welcome, aboutus } = Locale.use(Dictionary);

function Main({ history }: any) {
  const about = () => {
    history.push("/about");
  };

  return (
    <Background {...Theme.d}>
      <Title {...Theme.d}>{welcome}</Title>
      <Button {...Theme.d} onClick={about}>
        {aboutus}
      </Button>
    </Background>
  );
}

export default withRouter(Main);
