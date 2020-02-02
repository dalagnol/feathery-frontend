import React from "react";
import { observer } from "mobx-react";

import { SelectThing } from "./styles";

import { Layout, Title, Select, Option } from "components";

export default observer(function Feed() {
  return (
    <Layout>
      <Title>test</Title>
      <SelectThing>
        <Select>
          <Option value={"Adimo"}>Adimo</Option>
          <Option value={"Potestas"}>Adimo</Option>
          <Option value={"Potestas"}>Adimo</Option>
          <Option value={"Potestas"}>Adimo</Option>
          <Option value={"Potestas"}>Adimo</Option>
          <Option value={"Potestas"}>Adimo</Option>
          <Option value={"Potestas"}>Adimo</Option>
          <Option value={"Potestas"}>Adimo</Option>
          <Option value={"Potestas"}>Adimo</Option>
          <Option value={"Potestas"}>Adimo</Option>
          <Option value={"Potestas"}>Adimo</Option>
          <Option value={"Potestas"}>Adimo</Option>
        </Select>
      </SelectThing>
    </Layout>
  );
});
