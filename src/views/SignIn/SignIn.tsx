import React, { useState } from "react";

import { Background } from "./styles";

import { Header } from "components";
import Form from "./Form/Form";

export default function SignIn() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  return (
    <Background>
      <Header />
      <Form form={form} setForm={setForm} />
    </Background>
  );
}
