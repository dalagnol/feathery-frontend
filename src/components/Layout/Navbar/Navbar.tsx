import React from "react";
import { withRouter } from "react-router-dom";
import Locale from "locale";
import Dictionary from "./locale.json";
import { useDispatch, useSelector } from "react-redux";

import { Navbar as Element, Button } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { Logo } from "components";

import { Creators as User } from "store/ducks/user";

const { signup, signin } = Locale.use(Dictionary);

export default withRouter(function Navbar({ history }: any) {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user.data);

  const Home = () => {
    history.push("/");
  };

  const SignUp = () => {
    history.push("/signup");
  };

  const SignIn = () => {
    history.push("/signin");
  };

  const logout = () => dispatch(User.logout());

  return (
    <Element>
      {!user && (
        <Button left onClick={SignUp}>
          {signup}
        </Button>
      )}
      {user && (
        <Button left>
          <FontAwesomeIcon icon={faBars} />
        </Button>
      )}
      <Logo onClick={Home} />
      {!user && (
        <Button right onClick={SignIn}>
          {signin}
        </Button>
      )}
      {user && (
        <Button right onClick={logout}>
          {user.name}
        </Button>
      )}
    </Element>
  );
});
