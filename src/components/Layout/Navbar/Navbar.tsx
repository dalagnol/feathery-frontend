import React from "react";
import { useHistory } from "react-router-dom";
import Locale from "locale";
import Dictionary from "./locale.json";

import { Navbar as Element, Button, SidebarButton, UserButton } from "./styles";

import { Logo } from "components";

import Store from "store/Users";

export default function Navbar({ sidebarOpen, setSidebarOpen, user }: any) {
  const { signup, signin } = Locale.use(Dictionary);
  const token = localStorage.getItem("token");

  const history = useHistory();

  const Home = () => {
    history.push("/");
  };

  const SignUp = () => {
    history.push("/signup");
  };

  const SignIn = () => {
    history.push("/signin");
  };

  const Logout = function() {
    Store.logout();
  };

  const OpenSidebar = () => {
    setSidebarOpen(true);
  };

  return (
    <Element sidebarOpen={sidebarOpen}>
      {!token && (
        <Button left onClick={SignUp}>
          {signup}
        </Button>
      )}
      {token && (
        <Button left>
          <SidebarButton onClick={OpenSidebar} />
        </Button>
      )}
      <Logo onClick={Home} />
      {!token && (
        <Button right onClick={SignIn}>
          {signin}
        </Button>
      )}
      {token && (
        <Button right onClick={Logout}>
          <UserButton />
        </Button>
      )}
    </Element>
  );
}
