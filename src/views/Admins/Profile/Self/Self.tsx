import React from "react";
import { observer } from "mobx-react";
import { Container } from "./styles";

import { Suspense } from "components";

import Store from "store/Users";

export default observer(function Self() {
  const { user } = Store;

  return (
    <Container>
      <Suspense data={user}></Suspense>
    </Container>
  );
});
