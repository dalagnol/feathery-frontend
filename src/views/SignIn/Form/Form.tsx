import React from "react";
import Locale from "locale";
import Dictionary from "./locale.json";

import { Container } from "./styles";

import { Button, Input, Subheading } from "components";

const { signin, credential, password } = Locale.use(Dictionary);

export default function Form({ form, setForm }: any) {
  const onChangeHandler = (e: any) => {
    const {
      target: { name, value },
    } = e;
    setForm((form: any) => ({
      ...form,
      [name]: value,
    }));
  };
  return (
    <Container>
      <Subheading>{credential}</Subheading>
      <Input
        value={form.email}
        type={"text"}
        name={"email"}
        onChange={onChangeHandler}
      />
      <Subheading>{password}</Subheading>
      <Input
        value={form.password}
        type={"password"}
        name={"password"}
        onChange={onChangeHandler}
      />
      <Button>{signin}</Button>
    </Container>
  );
}
