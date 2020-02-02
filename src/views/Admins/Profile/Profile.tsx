import React from "react";
import { observer } from "mobx-react";
import { Container } from "./styles";
import { useParams } from "react-router-dom";

import Store from "store/Users";

import { Layout } from "components";
import Self from "./Self/Self";
import Others from "./Others/Others";

export default observer(function Profile() {
  const { id } = useParams();
  const { user } = Store;

  return (
    <Layout>
      <Container>{id === user.id ? <Self /> : <Others />}</Container>
    </Layout>
  );
});
