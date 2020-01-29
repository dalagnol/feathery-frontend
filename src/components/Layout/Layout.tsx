import React, { useState } from "react";

import { Content } from "./styles";

import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Sidebar from "./Sidebar/Sidebar";

import UserStore from "store/Users";

export default function Layout({ children, ...props }: any) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { user } = UserStore;

  const NavbarProps = {
    sidebarOpen: sidebarOpen,
    setSidebarOpen: setSidebarOpen,
    user: user,
  };

  const SidebarProps = {
    sidebarOpen: sidebarOpen,
    setSidebarOpen: setSidebarOpen,
    user: user,
  };

  const ContentProps = {
    sidebarOpen: sidebarOpen,
    props: { ...props },
  };

  const FooterProps = {
    sidebarOpen: sidebarOpen,
  };

  return (
    <>
      <Navbar {...NavbarProps} />
      <Sidebar {...SidebarProps} />
      <Content {...ContentProps}>{children}</Content>
      <Footer {...FooterProps} />
    </>
  );
}
