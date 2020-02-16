import React from "react";
import Locale from "locale";
import Dictionary from "./locale.json";
import { useHistory } from "react-router-dom";

import { send as sendRoute } from "routes/paths";

import { Container, Text } from "./styles";

import { Button, Input, Subheading } from "components";

export default function Form({ form, submit }: any) {
  const { signin, cred, pass, forgotyourpass } = Locale.use(Dictionary);
  const [{ credential, password }, Form] = form;
  const { push } = useHistory();

  const FormProps = {
    method: "POST",
    onSubmit: (e: any) => e.preventDefault(),
  };

  const toMailReset = function() {
    push(sendRoute());
  };

  return (
    <Container {...FormProps}>
      <Subheading>{cred}</Subheading>
      <Input {...credential.props} />
      <Subheading>{pass}</Subheading>
      <Input {...password.props} />
      <footer>
        <Button onClick={() => submit(Form)}>{signin}</Button>
      </footer>
      <Text onClick={() => toMailReset()}>{forgotyourpass}</Text>
    </Container>
  );
}
