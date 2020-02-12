import React from "react";
import Locale from "locale";
import Dictionary from "./locale.json";
import { useHistory } from "react-router-dom";

import { mailreset as mailresetRoute } from "routes/paths";

import { Container, Text } from "./styles";

import { Button, Input, Subheading } from "components";

export default function Form({ form, submit, errors }: any) {
  const { signin, cred, pass, forgotyourpass } = Locale.use(Dictionary);
  const [data, { credential, password }] = form;
  const { push } = useHistory();

  const FormProps = {
    method: "POST",
    onSubmit: (e: any) => e.preventDefault(),
  };

  const ResetPassword = function() {
    push(mailresetRoute());
  };

  credential.shake = errors.credError;
  credential.autofocus = "on";

  password.shake = errors.pswdError;

  return (
    <Container {...FormProps}>
      <Subheading>{cred}</Subheading>
      <Input {...credential} />
      <Subheading>{pass}</Subheading>
      <Input {...password} />
      <footer>
        <Button onClick={() => submit(data)}>{signin}</Button>
      </footer>
      <Text onClick={() => ResetPassword()}>{forgotyourpass}</Text>
    </Container>
  );
}
