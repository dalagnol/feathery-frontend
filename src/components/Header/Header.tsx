import React from "react";

import { Title } from "./styles";

import Theme from "themes";

import { Container, Logo } from "components";

export default function Header() {
  return (
    <Container>
      <Logo />
      <Title {...Theme.d}>Feathery</Title>
    </Container>
  );
}
