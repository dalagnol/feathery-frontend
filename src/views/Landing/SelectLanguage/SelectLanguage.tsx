import React from "react";

import { LangIcon, Container } from "./styles";

import { SelectButton } from "components";
import { Option } from "components/SelectButton";

export default function SelectLanguage() {
  return (
    <Container>
      <LangIcon />
      <SelectButton placeholder={"Select Language"}>
        <Option>English</Option>
        <Option>Portuguese</Option>
      </SelectButton>
    </Container>
  );
}
