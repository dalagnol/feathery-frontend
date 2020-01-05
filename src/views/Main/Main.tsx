import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useAlertOnMountEvents } from "shared/hooks";

import { Background, Title, Button } from "./styles";

import Locale from "locale";
import Dictionary from "./locale.json";

import Theme from "themes";

const { welcome, aboutus, changetheme } = Locale.use(Dictionary);

function Main({ history }: any) {
  const About = () => {
    history.push("/about");
  };

  useAlertOnMountEvents();

  return (
    <Background {...Theme.d}>
      <Title {...Theme.d}>{welcome}</Title>
      <Button {...Theme.d} onClick={About}>
        {aboutus}
      </Button>
      <Button {...Theme.d} onClick={() => Theme.switch()}>
        {changetheme}
      </Button>
    </Background>
  );
}

export default withRouter(Main);
