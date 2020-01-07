import React, { useState } from "react";

import { Background } from "./styles";

import Theme from "themes";

import { Header } from "components";
import LoginForm from "./LoginForm/LoginForm";

export default function Login() {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  return (
    <Background {...Theme.d}>
      <Header />
      <LoginForm loginForm={loginForm} setLoginForm={setLoginForm} />
    </Background>
  );
}
