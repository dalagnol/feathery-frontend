import React from "react";

import { ErrorIcon, Container, ErrMessage as Element } from "./styles";

import { Button, Overlay } from "components";

export default function ErrMessage({ children, ...props }: any) {
  return (
    <Overlay>
      <Container>
        <ErrorIcon />
        <Element {...props}>{children}</Element>
        <Button>Got it!</Button>
      </Container>
    </Overlay>
  );
}
