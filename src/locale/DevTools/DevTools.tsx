import React, { useContext } from "react";
import { LocaleContext } from "../useLocale";

import { Container } from "./styles";

import Header from "./Header/Header";

export function DevTools() {
  const { DevTools } = useContext(LocaleContext);

  return (
    <Container open={DevTools}>
      <Header />
      {DevTools && <></>}
    </Container>
  );
}
