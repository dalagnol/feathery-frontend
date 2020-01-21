import React from "react";

import { ErrorIcon, Container, ErrMessage as Element } from "./styles";

export default function ErrMessage({ children, ...props }: any) {
  return (
    <Container>
      <ErrorIcon />
      <Element {...props}>{children}</Element>
    </Container>
  );
}
