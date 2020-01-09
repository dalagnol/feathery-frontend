import React, { useState } from "react";
import { Themed } from "themes";

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
    <Themed>
      <Background>
        <Header />
        <Form form={form} setForm={setForm} />
      </Background>
    </Themed>
  );
}
