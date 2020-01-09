import React from "react";
import { withRouter } from "react-router-dom";

import { Container, Title } from "./styles";

import Theme from "themes";

import { Logo } from "components";

export default withRouter(function Header({ history }: any) {
  const Home = () => history.push("/");

  return (
    <Container onClick={Home}>
      <Logo />
      <Title {...Theme.d}>Feathery</Title>
    </Container>
  );
});
