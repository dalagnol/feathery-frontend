import React from "react";

import { Container } from "./styles";

import Locale from "locale";
import Dictionary from "./locale.json";

import Theme from "themes";

import { Button, Input, Subheading } from "components";

const { signup, credential, password } = Locale.use(Dictionary);

export default function LoginForm({ loginForm, setLoginForm }: any) {
  const logForm = () => {
    console.log(loginForm);
  };

  const onChangeHandler = (e: any) => {
    const {
      target: { name, value },
    } = e;
    setLoginForm((form: any) => ({
      ...form,
      [name]: value,
    }));
  };
  return (
    <Container {...Theme.d}>
      <Subheading>{credential}</Subheading>
      <Input
        value={loginForm.email}
        type={"text"}
        name={"email"}
        onChange={onChangeHandler}
      />
      <Subheading>{password}</Subheading>
      <Input
        value={loginForm.password}
        type={"password"}
        name={"password"}
        onChange={onChangeHandler}
      />
      <Button onClick={logForm}>{signup}</Button>
    </Container>
  );
}
