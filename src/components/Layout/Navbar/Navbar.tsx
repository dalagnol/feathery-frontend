import React from "react";
import { withRouter } from "react-router-dom";

import { Navbar as Element, Button } from "./styles";

import Locale from "locale";
import Dictionary from "./locale.json";

import { Logo } from "components";

const { signup, signin } = Locale.use(Dictionary);

export default withRouter(function Navbar({ history }: any) {
  const Home = () => {
    history.push("/");
  };

  const SignUp = () => {
    history.push("/signup");
  };

  const SignIn = () => {
    history.push("/signin");
  };

  return (
    <Element>
      <Button onClick={SignUp}>{signup}</Button>
      <Logo onClick={Home} />
      <Button onClick={SignIn}>{signin}</Button>
    </Element>
  );
});
