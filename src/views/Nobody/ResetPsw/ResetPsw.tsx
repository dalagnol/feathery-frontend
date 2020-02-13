import React from "react";
import Locale from "locale";
import Dictionary from "./locale.json";
import { Themed } from "themes";
import { useForm, useService, useTimer } from "utils/hooks";
import { errors } from "./constants";

import { Container } from "./styles";

import { Button, Header, Input, Loader, Subheading } from "components";

import Service from "services/Users";

export default function ResetPsw() {
  const [passError, passTrigger]: any = useTimer(500);

  const { title, save } = Locale.use(Dictionary);

  const [form, { $password }] = useForm({ password: "" });

  const [, loading, mailReset] = useService({
    method: Service.MailReset,
    params: [form],
    handler: (data: any) => {
      console.log(data);
    },
    errors: errors(passTrigger),
  });

  $password.shake = passError;

  return (
    <Themed>
      {loading && <Loader />}
      <Header />
      <Container>
        <Subheading>{title}</Subheading>
        <Input {...$password} />
        <footer>
          <Button>{save}</Button>
        </footer>
      </Container>
    </Themed>
  );
}
