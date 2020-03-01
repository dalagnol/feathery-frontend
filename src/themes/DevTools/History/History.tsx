import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

import { Container, Header, Title } from "./styles";

import Event from "./Event/Event";

export default function History({ open, toggle }: any) {
  const { History } = useContext(ThemeContext);
  console.log(History);
  return (
    <Container open={open}>
      <Header>
        <Title onClick={toggle}>History</Title>
      </Header>

      {History.map((log: any, index: number) => (
        <Event key={index} {...log} />
      ))}
    </Container>
  );
}
