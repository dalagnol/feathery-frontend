import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import Locale from "locale";
import Dictionary from "./locale.json";
import { useExternalClick } from "utils/hooks";

import {
  Navbar as Element,
  Button,
  SidebarButton,
  UserButton,
  Text,
} from "./styles";

import { Logo } from "components";

import Store from "store/Users";

export default function Navbar({
  setSidebarOpen,
  setOpenSettings,
  user,
  ...props
}: any) {
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

  const OpenSettings = () => {
    setOpenSettings(true);
  };

  const ref = useExternalClick(
    useCallback((e: any) => console.log(e.currentTarget), [])
  );

  return (
    <Element ref={ref} {...props}>
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
        <Button right onClick={OpenSettings}>
          <Text>{user.name}</Text>
          <UserButton />
        </Button>
      )}
    </Element>
  );
}
