import React from "react";
import { useDispatch } from "react-redux";

import { ErrorIcon, Container, ErrMessage as Element } from "./styles";

import { Button, Overlay } from "components";

import { Creators as User } from "store/ducks/user";

export default function ErrMessage({ children, ...props }: any) {
  const dispatch = useDispatch();
  const cleanUpError = () => dispatch(User.cleanUpError());

  return (
    <Overlay>
      <Container>
        <ErrorIcon />
        <Element {...props}>{children}</Element>
        <Button onClick={cleanUpError}>Got it!</Button>
      </Container>
    </Overlay>
  );
}
