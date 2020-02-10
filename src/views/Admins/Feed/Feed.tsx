import React from "react";
import { useService, useTimer } from "utils/hooks";
import { errors } from "./constants";

import { Container } from "./styles";

import { Button, Layout, Loader } from "components";

import Service from "services/Users";

const email = "";

export default function Feed() {
  const [, nameTrigger]: any = useTimer(500);

  const [, loading, resetPswEmail] = useService({
    method: Service.ResetPswEmail,
    params: { email },
    handler: (data: any) => {
      console.log(data);
    },
    errors: errors(nameTrigger),
  });

  return (
    <Layout>
      {loading && Loader}
      <Container>
        <Button onClick={() => console.log(Service.ResetPswEmail)}>
          Say hello
        </Button>
        <Button onClick={() => Service.ResetPswEmail({ email })}>
          Send an email
        </Button>
      </Container>
    </Layout>
  );
}
