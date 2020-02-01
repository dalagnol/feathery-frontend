import React, { useState, useEffect } from "react";
import { useTimer } from "utils/hooks";

import { Content } from "./styles";

import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Sidebar from "./Sidebar/Sidebar";
import Settings from "./Settings/Settings";

import UserStore from "store/Users";

export default function Layout({ children, ...props }: any) {
  const [closingSidebar, sidebarTrigger] = useTimer(600);
  const [closingSettings, settingsTrigger] = useTimer(600);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);

  const { user } = UserStore;

  const NavbarProps = {
    sidebarOpen: openSidebar,
    setSidebarOpen: openSidebar ? sidebarTrigger : setOpenSidebar,
    openSettings: openSettings,
    setOpenSettings: openSettings ? settingsTrigger : setOpenSettings,
    closingSidebar,
    closingSettings,
    user: user,
  };

  const SidebarProps = {
    sidebarOpen: openSidebar,
    setSidebarOpen: openSidebar ? sidebarTrigger : setOpenSidebar,
    closingSidebar,
    user: user,
  };

  const SettingsProps = {
    SettingsOpen: openSettings,
    setSettingsOpen: openSettings ? sidebarTrigger : setOpenSettings,
    closingSettings,
    user: user,
  };

  const ContentProps = {
    sidebarOpen: openSidebar,
    closingSidebar,
    closingSettings,
    props: { ...props },
  };

  const FooterProps = {
    closingSidebar,
    sidebarOpen: openSidebar,
  };

  useEffect(() => {
    if (closingSidebar) {
      setTimeout(() => {
        setOpenSidebar(false);
      }, 600);
    } else if (closingSettings) {
      setTimeout(() => {
        setOpenSettings(false);
      }, 600);
    }
  }, [closingSidebar, closingSettings]);

  return (
    <>
      <Navbar {...NavbarProps} />
      <Sidebar {...SidebarProps} />
      <Settings {...SettingsProps} />
      <Content {...ContentProps}>{children}</Content>
      <Footer {...FooterProps} />
    </>
  );
}
