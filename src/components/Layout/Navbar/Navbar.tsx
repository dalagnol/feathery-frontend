import React from "react";
import { useHistory } from "react-router-dom";
import Locale from "locale";
import Dictionary from "./locale.json";

import {
  Navbar as Element,
  Buttons,
  Button,
  SidebarButton,
  Text,
  Side,
  Middle,
  Notifications,
  User,
} from "./styles";

import { Logo, UserPicture as Picture } from "components";

export default function Navbar({
  setSidebarOpen,
  setOpenSettings,
  user,
  setNotifications,
  ...props
}: any) {
  const { signup, signin } = Locale.use(Dictionary);
  const token = localStorage.getItem("token");

  const { push } = useHistory();

  const Home = () => {
    push("/");
  };

  const SignUp = () => {
    push("/signup");
  };

  const SignIn = () => {
    push("/signin");
  };

  const OpenSidebar = () => {
    setSidebarOpen(true);
  };

  const OpenSettings = () => {
    setOpenSettings(true);
  };

  return (
    <Element {...props}>
      <Side>
        {!token && (
          <Button sign left onClick={SignUp}>
            {signup}
          </Button>
        )}
        {token && (
          <Button left>
            <SidebarButton onClick={OpenSidebar} />
          </Button>
        )}
      </Side>
      <Middle>
        <Logo onClick={Home} />
      </Middle>
      <Side right>
        {!token && (
          <Button sign right onClick={SignIn}>
            {signin}
          </Button>
        )}
        {token && (
          <div>
            <Buttons onClick={OpenSettings}>
              <Text desktop>{user.name}</Text>
              <User>
                <Picture />
              </User>
            </Buttons>
            <Button>
              <Notifications onClick={setNotifications} />
            </Button>
          </div>
        )}
      </Side>
    </Element>
  );
}
