import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

import { Container } from "../styles/History";

import Event from "./Event/Event";

export default function History({ open }: any) {
  const { History } = useContext(ThemeContext);

  return (
    <Container open={open}>
      {History.sort((a: any, b: any) =>
        a.timestamp < b.timestamp ? 1 : -1
      ).map((log: any, index: number) => (
        <Event key={index} {...log} />
      ))}
    </Container>
  );
}
