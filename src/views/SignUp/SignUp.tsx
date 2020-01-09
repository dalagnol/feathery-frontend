import React, { useState } from "react";

import { Background } from "./styles";

import { Header } from "components";
import Form from "./Form/Form";

export default function SignUp() {
  const [form, setForm] = useState({
    fullname: "",
    username: "",
    email: "",
    gender: "",
    password: "",
  });

  return (
    <Background>
      <Header />
      <Form form={form} setForm={setForm} />
    </Background>
  );
}
