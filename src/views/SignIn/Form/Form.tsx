import React from "react";
import Locale from "locale";
import Dictionary from "./locale.json";

import { Container } from "./styles";

import { Button, ErrMessage, Input, Subheading } from "components";

export default function Form({ form, submit, errMsg }: any) {
  const { signin, cred, pass } = Locale.use(Dictionary);
  const [data, { credential, password }] = form;

  const FormProps = {
    method: "POST",
    onSubmit: (e: any) => e.preventDefault(),
  };

  return (
    <Container {...FormProps}>
      <Subheading>{cred}</Subheading>
      <Input {...credential} />
      <Subheading>{pass}</Subheading>
      <Input {...password} />
      <Button onClick={() => submit(data)}>{signin}</Button>
      {errMsg && <ErrMessage>{errMsg}</ErrMessage>}
    </Container>
  );
}
