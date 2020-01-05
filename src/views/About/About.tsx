import React from "react";
import { withRouter } from "react-router-dom";
import { useService } from "shared/hooks";

import { Background, Paragraph } from "./styles";

import Dictionary from "./locale.json";
import Locale from "locale";
import Theme from "themes";

import Test from "services/TestService";

import { Button, Title } from "components";

const { aboutus, main } = Locale.use(Dictionary);

export default withRouter(function About({ history }) {
  const Main = () => history.push("/");

  const ping = useService(Test.ping);

  return (
    <Background {...Theme.d}>
      <Title>{aboutus}</Title>
      <Paragraph {...Theme.d}>Service Status</Paragraph>
      <Title>{ping}</Title>
      <Button onClick={Main}>{main}</Button>
    </Background>
  );
});
