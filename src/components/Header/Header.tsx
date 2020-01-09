import React from "react";
import { withRouter } from "react-router-dom";

import { Container, Title } from "./styles";

import { Logo } from "components";

export default withRouter(function Header({ history }: any) {
  const Home = () => history.push("/");

  return (
    <Container onClick={Home}>
      <Logo />
      <Title>Feathery</Title>
    </Container>
  );
});
