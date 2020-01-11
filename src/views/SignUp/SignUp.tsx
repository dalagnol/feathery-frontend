import React from "react";
import { Themed } from "themes";
import { useForm } from "shared/hooks";

import { Header } from "components";
import Form from "./Form/Form";

export default function SignUp() {
  const form = useForm({
    fullname: "",
    username: "",
    email: "",
    gender: "male",
    password: "",
  });

  return (
    <Themed>
      <Header />
      <Form form={form} />
    </Themed>
  );
}
