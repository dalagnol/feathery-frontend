import React, { useState } from "react";

import { Background } from "./styles";

import Theme from "themes";

import { Header } from "components";
import SignUpForm from "./SignInForm/SignInForm";

export default function SignIn() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  return (
    <Background {...Theme.d}>
      <Header />
      <SignUpForm form={form} setForm={setForm} />
    </Background>
  );
}
