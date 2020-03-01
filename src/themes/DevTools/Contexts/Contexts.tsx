import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

import { Container } from "./styles";

import Context from "./Context/Context";

export default function Contexts() {
  const Theme = useContext(ThemeContext);
  const Contexts = Object.entries(Theme).filter(
    ([key]: any) => key.toLowerCase() === key
  );

  return (
    <Container>
      {Contexts.map(([name, variables]: [string, any], index: number) => (
        <Context key={index} name={name} data={variables} />
      ))}
    </Container>
  );
}
