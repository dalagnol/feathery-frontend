import React from "react";
import { withRouter } from "react-router-dom";

import { Navbar as Element, Button } from "./styles";

import Theme from "themes";

import Logo from "components/Logo/Logo";

function Navbar({ history }: any) {
  const SignUp = () => {
    history.push("/signUp");
  };

  const SignIn = () => {
    history.push("/signIn");
  };

  return (
    <Element {...Theme.d}>
      <Button {...Theme.d} onClick={SignUp}>
        Sign up
      </Button>
      <Logo></Logo>
      <Button {...Theme.d} onClick={SignIn}>
        Sign in
      </Button>
    </Element>
  );
}

export default withRouter(Navbar);
