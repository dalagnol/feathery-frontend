import React from "react";
import { Themed } from "themes";
import { useForm } from "shared/hooks";

import { Header } from "components";
import Form from "./Form/Form";

export default function SignIn() {
  const form = useForm({
    credential: "Adimo",
    password: "",
  });

  return (
    <Themed>
      <Header />
      <Form form={form} />
    </Themed>
  );
}
