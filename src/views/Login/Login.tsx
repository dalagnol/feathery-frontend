import React, { useState } from "react";

import { Container, Header } from "components";
import LoginForm from "./LoginForm/LoginForm";

export default function Login() {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  return (
    <Container>
      <Header />
      <LoginForm loginForm={loginForm} setLoginForm={setLoginForm} />
    </Container>
  );
}
