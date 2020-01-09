import React, { useState } from "react";

import { Background } from "./styles";

import Theme from "themes";

import { Header } from "components";
import Form from "./Form/Form";

export default function SignIn() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  return (
    <Background {...Theme.d}>
      <Header />
      <Form form={form} setForm={setForm} />
    </Background>
  );
}
