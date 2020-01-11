import React from "react";
import Locale from "locale";
import Dictionary from "./locale.json";

import { Container } from "./styles";

import { Button, Input, Subheading } from "components";

const { signin, cred, pass } = Locale.use(Dictionary);

export default function Form({ form }: any) {
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
      <Button>{signin}</Button>
    </Container>
  );
}
