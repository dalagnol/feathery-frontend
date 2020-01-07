import React, { useState } from "react";

import { Background } from "./styles";

import Theme from "themes";

import { Header } from "components";
import SignInForm from "./SignUpForm/SignUpForm";

export default function SignUp() {
  const [signUpForm, setSignUpForm] = useState({
    fullname: "",
    username: "",
    email: "",
    gender: "",
    password: "",
  });

  return (
    <Background {...Theme.d}>
      <Header />
      <SignInForm signUpForm={signUpForm} setSignUpForm={setSignUpForm} />
    </Background>
  );
}
