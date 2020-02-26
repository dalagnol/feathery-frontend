import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

import { Container } from "../styles/History";

import Event from "./Event/Event";

export default function History({ open }: any) {
  const { History } = useContext(ThemeContext);

  return (
    <Container open={open}>
      {History.map((log: any, index: number) => (
        <Event key={index} {...log} />
      ))}
    </Container>
  );
}
