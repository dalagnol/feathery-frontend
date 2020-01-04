import React from "react";
import { withRouter } from "react-router-dom";

import { Background, Title, Button } from "./styles";

import Dictionary from "./locale.json";
import Locale from "locale";

import Theme from "themes";

const { aboutus, main } = Locale.use(Dictionary);

export default withRouter(function About({ history }) {
  const back = () => history.push("/");
  return (
    <Background {...Theme.d}>
      <Title {...Theme.d}>{aboutus}</Title>
      <Button {...Theme.d} onClick={back}>
        {main}
      </Button>
    </Background>
  );
});
