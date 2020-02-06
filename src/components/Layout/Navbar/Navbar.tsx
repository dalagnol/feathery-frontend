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
} from "./styles";

import { Logo, UserPicture } from "components";

export default function Navbar({
  setSidebarOpen,
  setOpenSettings,
  user,
  setNotifications,
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
          <Button left onClick={SignUp}>
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
          <Button right onClick={SignIn}>
            {signin}
          </Button>
        )}
        {token && (
          <div>
            <Buttons onClick={OpenSettings}>
              <Text>{user.name}</Text>
              <Button right>
                <UserPicture />
              </Button>
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
