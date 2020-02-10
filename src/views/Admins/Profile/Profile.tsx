import React from "react";
import { observer } from "mobx-react";
import { Container } from "./styles";

import { Layout } from "components";
import Self from "./Self/Self";

export default observer(function Profile() {
  return (
    <Layout>
      <Container>
        <Self />
      </Container>
    </Layout>
  );
});
