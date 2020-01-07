import React from "react";

import { Container } from "./styles";

import Locale from "locale";
import Dictionary from "./locale.json";

import Theme from "themes";

import { Button, Input, Subheading } from "components";

const { signin, credential, password } = Locale.use(Dictionary);

export default function SignInForm({ form, setForm }: any) {
  const logForm = () => {
    console.log(form);
  };

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
    <Container {...Theme.d}>
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
        s
        onChange={onChangeHandler}
      />
      <Button onClick={logForm}>{signin}</Button>
    </Container>
  );
}
