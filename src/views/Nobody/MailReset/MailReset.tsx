import React from "react";
import Locale from "locale";
import Dictionary from "./locale.json";
import { Themed } from "themes";
import { useForm, useService, useTimer } from "utils/hooks";
import { errors } from "./constants";

import { Container, Text } from "./styles";

import { Header, Subheading, Input, Button, Loader } from "components";

import Service from "services/Users";

export default function MailReset() {
  const [emailError, emailTrigger]: any = useTimer(500);

  const { title, explanation, sendemail } = Locale.use(Dictionary);

  const [form, { $email }] = useForm({ email: "" });

  const [, loading, mailReset] = useService({
    method: Service.MailReset,
    params: [form],
    handler: (data: any) => {
      console.log(data);
    },
    errors: errors(emailTrigger),
  });

  $email.shake = emailError;

  return (
    <Themed>
      {loading && <Loader />}
      <Header />
      <Container>
        <Subheading>{title}</Subheading>
        <Text>{explanation}</Text>
        <Input {...$email} />
        <footer>
          <Button
            onClick={() => typeof mailReset === "function" && mailReset()}
          >
            {sendemail}
          </Button>
        </footer>
      </Container>
    </Themed>
  );
}
