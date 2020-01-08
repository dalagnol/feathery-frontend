import React from "react";

import { Container, Title } from "./styles";

import Theme from "themes";

import { Logo } from "components";

export default function Header() {
  return (
    <Container>
      <Logo />
      <Title {...Theme.d}>Feathery</Title>
    </Container>
  );
}
