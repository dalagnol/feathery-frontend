import React from "react";
import { withRouter } from "react-router-dom";
import { useService } from "shared/hooks";

import { Background, Title, Button } from "./styles";

import Dictionary from "./locale.json";
import Locale from "locale";
import Theme from "themes";

import Test from "services/TestService";

const { aboutus, main } = Locale.use(Dictionary);

export default withRouter(function About({ history }) {
  const Main = () => history.push("/");

  const ping = useService(Test.ping);

  return (
    <Background {...Theme.d}>
      <Title {...Theme.d}>{aboutus}</Title>
      <Title {...Theme.d}>{ping}</Title>
      <Button {...Theme.d} onClick={Main}>
        {main}
      </Button>
    </Background>
  );
});
