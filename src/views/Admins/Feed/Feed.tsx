import React from "react";
import { observer } from "mobx-react";

import { SelectThing } from "./styles";

import { Layout, Title, Select } from "components";

export default observer(function Feed() {
  return (
    <Layout>
      <Title>test</Title>
      <SelectThing>
        <Select />
      </SelectThing>
    </Layout>
  );
});
