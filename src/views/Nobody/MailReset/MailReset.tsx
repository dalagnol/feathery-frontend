import React from "react";
import { Themed } from "themes";

import { Container, Text } from "./styles";

import { Header, Subheading, Input, Button } from "components";

export default function MailReset() {
  return (
    <Themed>
      <Header />
      <Container>
        <Subheading>Enter your registered email to get started.</Subheading>
        <Text>
          An email will be sent with futher instructions to reset your password.
        </Text>
        <Input />
        <footer>
          <Button>Send email</Button>
        </footer>
      </Container>
    </Themed>
  );
}
