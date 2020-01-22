import React from "react";
import { useRerender } from "shared/hooks";

import { LangIcon, Container } from "./styles";

import { SelectButton } from "components";
import { Option } from "components/SelectButton";

export default function SelectLanguage() {
  /*
  const refresh = useRerender();
  const changeLang = () => {
    localStorage.setItem("language", "pt");
    refresh();
  };
  */
 
  return (
    <Container>
      <LangIcon />
      <SelectButton>
        <Option value={"en"}>English</Option>
        <Option value={"pt"}>Portuguese</Option>
      </SelectButton>
    </Container>
  );
}
