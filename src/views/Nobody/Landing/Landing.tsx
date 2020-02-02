import React from "react";
import { observer } from "mobx-react";
import Locale from "locale";
import Dictionary from "./locale.json";

import { Text } from "./styles";

import { Layout, Title } from "components";

export default observer(function Landing() {
  const { welcome, noposts } = Locale.use(Dictionary);

  return (
    <Layout>
      <Title>{welcome}</Title>
      <Text>{noposts}</Text>
    </Layout>
  );
});
