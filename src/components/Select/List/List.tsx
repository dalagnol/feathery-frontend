import React, { useContext } from "react";

import { Container, Options } from "./styles";

import { Context } from "../Select";

import Search from "./Search/Search";

export default function List({ children }: any) {
  const { open } = useContext(Context);

  return (
    open && (
      <Container>
        <Search />
        <Options>{children}</Options>
      </Container>
    )
  );
}
