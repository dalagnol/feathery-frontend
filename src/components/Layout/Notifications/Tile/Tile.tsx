import React from "react";

import { Container } from "./styles";

export default function Tile({ data }: any) {
  return (
    <Container>
      <h4>{data.title}</h4>
      <p>{data.description}</p>
    </Container>
  );
}
