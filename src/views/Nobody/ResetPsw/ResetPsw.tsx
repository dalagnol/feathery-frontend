import React, { useState, useEffect } from "react";
import Locale from "locale";
import Dictionary from "./locale.json";
import { Themed } from "themes";
import { useForm, useService, useTimer } from "utils/hooks";
import { errors } from "./constants";
import { useParams } from "react-router-dom";

import { Container, Text } from "./styles";

import { Button, Header, Input, Loader, Subheading } from "components";

import Service from "services/Users";

export default function ResetPsw() {
  const [init, setInit] = useState(true);

  const [passError, passTrigger]: any = useTimer(500);
  const [emailError, emailTrigger]: any = useTimer(500);

  const { title, save, errortitle, errormsg, send } = Locale.use(Dictionary);

  const [passForm, { $password }] = useForm({ password: "" });
  const [emailForm, { $email }] = useForm({ email: "" });

  const { token } = useParams();

  const [, resetLoading, resetPsw] = useService({
    method: Service.ResetPsw,
    params: [passForm, token],
    handler: (data: any) => {
      console.log(data);
    },
    errors: errors(passTrigger, emailTrigger),
  });

  const [, validateLoading, validateToken, error] = useService({
    method: Service.ValidateToken,
    params: [token],
    handler: (data: any) => {
      console.log(data);
    },
    errors: errors(passTrigger, emailTrigger),
  });

  const [, mailLoading, mailReset] = useService({
    method: Service.MailReset,
    params: [emailForm],
    handler: (data: any) => {
      console.log(data);
    },
    errors: errors(passTrigger, emailTrigger),
  });

  $password.shake = passError;
  $email.shake = emailError;

  useEffect(() => {
    typeof validateToken === "function" && validateToken();
    setInit(false);
    // eslint-disable-next-line
  }, [init, setInit]);

  const checkError = () => {
    if (error) {
      if (error === "expired token") {
        return true;
      } else {
        return false;
      }
    }
  };

  return (
    <Themed>
      {(resetLoading || validateLoading || mailLoading) && <Loader />}
      <Header />
      <Container>
        {checkError() ? (
          <>
            <Subheading>{errortitle}</Subheading>
            <Text>{errormsg}</Text>
            <Input {...$email} />
            <footer>
              <Button
                onClick={() => typeof mailReset === "function" && mailReset()}
              >
                {send}
              </Button>
            </footer>
          </>
        ) : (
          <>
            <Subheading>{title}</Subheading>
            <Input {...$password} />
            <footer>
              <Button
                onClick={() => typeof resetPsw === "function" && resetPsw()}
              >
                {save}
              </Button>
            </footer>
          </>
        )}
      </Container>
    </Themed>
  );
}
