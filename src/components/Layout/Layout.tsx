import React, { useState } from "react";
import { Themed } from "themes";
import { observer } from "mobx-react";
import { useTimer } from "utils/hooks";

import { Content } from "./styles";

import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Sidebar from "./Sidebar/Sidebar";
import Notifications from "./Notifications/Notifications";
import Settings from "./Settings/Settings";

import UserStore from "store/Users";

export default observer(function Layout({ children, ...props }: any) {
  const [sidebar, setSidebar] = useState(false);
  const [settings, setSettings] = useState(false);
  const [notifications, setNotifications] = useState(false);

  const [closingSidebar, sidebarTrigger] = useTimer(600, {
    effect: () => {
      setSidebar(false);
    },
  });

  const [closingSettings, settingsTrigger] = useTimer(600, {
    effect: () => {
      setSettings(false);
    },
  });

  const [closingNotifications, notificationsTrigger] = useTimer(600, {
    effect: () => {
      setNotifications(false);
    },
  });

  const { user } = UserStore;

  const NavbarProps = {
    sidebarOpen: sidebar,
    setSidebarOpen: sidebar ? sidebarTrigger : setSidebar,
    settings: settings,
    setOpenSettings: settings ? settingsTrigger : setSettings,
    setNotifications: notifications
      ? notificationsTrigger
      : () => setNotifications(true),
    closingSidebar,
    closingSettings,
    user: user,
  };

  const SidebarProps = {
    sidebarOpen: sidebar,
    setSidebarOpen: sidebarTrigger,
    closingSidebar,
    user: user,
  };

  const SettingsProps = {
    SettingsOpen: settings,
    setSettingsOpen: settingsTrigger,
    closingSettings,
    user: user,
  };

  const NotificationProps = {
    open: notifications,
    close: notificationsTrigger,
    closing: closingNotifications,
    user: user,
  };

  const ContentProps = {
    blur: notifications || settings,
    move: sidebar,
    closingSidebar,
    props: { ...props },
  };

  const FooterProps = {
    closingSidebar,
    sidebarOpen: sidebar,
    settings,
  };

  return (
    <Themed>
      <Navbar {...NavbarProps} />
      <Sidebar {...SidebarProps} />
      <Settings {...SettingsProps} />
      <Notifications {...NotificationProps} />
      <Content {...ContentProps}>{children}</Content>
      <Footer {...FooterProps} />
    </Themed>
  );
});
