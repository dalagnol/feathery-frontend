import React, { useContext } from "react";
import { Container } from "./styles/DevTools";
import { ThemeContext } from "styled-components";

export function DevTools() {
  const Context = useContext(ThemeContext);

  console.log(Context);

  return (
    <Container>
      <h1>test</h1>
    </Container>
  );
}
