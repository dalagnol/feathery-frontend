import React, { useState, useEffect } from "react";
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
  const [closingSidebar, sidebarTrigger] = useTimer(600);
  const [closingSettings, settingsTrigger] = useTimer(600);
  const [closingNotifications, notificationsTrigger] = useTimer(600);
  const [sidebar, setSidebar] = useState(false);
  const [settings, setOpenSettings] = useState(false);
  const [notifications, setNotifications] = useState(false);

  const { user } = UserStore;

  const NavbarProps = {
    sidebarOpen: sidebar,
    setSidebarOpen: sidebar ? sidebarTrigger : setSidebar,
    settings: settings,
    setOpenSettings: settings ? settingsTrigger : setOpenSettings,
    closingSidebar,
    closingSettings,
    user: user,
  };

  const SidebarProps = {
    sidebarOpen: sidebar,
    setSidebarOpen: sidebar ? sidebarTrigger : setSidebar,
    closingSidebar,
    user: user,
  };

  const SettingsProps = {
    SettingsOpen: settings,
    setSettingsOpen: settingsTrigger,
    closingSettings,
    user: user,
  };

  const ContentProps = {
    sidebar,
    closingSidebar,
    settings,
    props: { ...props },
  };

  const FooterProps = {
    closingSidebar,
    sidebarOpen: sidebar,
    settings,
  };

  useEffect(() => {
    if (closingSidebar) {
      setTimeout(() => {
        setSidebar(false);
      }, 600);
    } else if (closingSettings) {
      setTimeout(() => {
        setOpenSettings(false);
      }, 600);
    }
  }, [closingSidebar, closingSettings]);

  return (
    <Themed>
      <Navbar {...NavbarProps} />
      <Sidebar {...SidebarProps} />
      <Settings {...SettingsProps} SettingsOpen={settings} />
      <Notifications open={false} close={() => {}} />
      <Content {...ContentProps}>{children}</Content>
      <Footer {...FooterProps} />
    </Themed>
  );
});
