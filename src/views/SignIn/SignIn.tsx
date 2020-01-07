import React, { useState } from "react";

import { Background } from "./styles";

import Theme from "themes";

import { Header } from "components";
import SignUpForm from "./SignInForm/SignInForm";

export default function SignIn() {
  const [signInForm, setSignInForm] = useState({
    email: "",
    password: "",
  });

  return (
    <Background {...Theme.d}>
      <Header />
      <SignUpForm signInForm={signInForm} setSignInForm={setSignInForm} />
    </Background>
  );
}
