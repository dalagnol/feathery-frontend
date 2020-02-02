import React, { useState } from "react";
import { observer } from "mobx-react";

import { SelectThing } from "./styles";

import { Layout, Title, Select, Option } from "components";

export default observer(function Feed() {
  const [title, setTitle] = useState("");
  return (
    <Layout>
      <Title>{title}</Title>
      <SelectThing>
        <Select value={title} setValue={setTitle}>
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
