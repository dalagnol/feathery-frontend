import React from "react";
import Locale from "locale";
import Dictionary from "./locale.json";

import { LangIcon, Container } from "./styles";

import { SelectButton } from "components";
import { Option } from "components/SelectButton";

const { english, portuguese } = Locale.use(Dictionary);

export default function SelectLanguage({ onChangeHandler }: any) {
  const lang = localStorage.getItem("language");

  return (
    <Container>
      <LangIcon />
      <SelectButton onChange={onChangeHandler} value={lang}>
        <Option value={"en"}>{english}</Option>
        <Option value={"pt"}>{portuguese}</Option>
      </SelectButton>
    </Container>
  );
}
