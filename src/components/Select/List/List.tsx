import React, { useContext } from "react";

import { Container, Options } from "./styles";

import { Context } from "../Select";

import Search from "./Search/Search";

export default function List({ children }: any) {
  const select: any = useContext(Context);

  return (
    select.open && (
      <Container {...select}>
        <Search />
        <Options>{children}</Options>
      </Container>
    )
  );
}
