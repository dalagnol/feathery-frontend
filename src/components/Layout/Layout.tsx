import React, { useState, useEffect, useContext } from "react";
import { LayoutContext } from "contexts/Layout";
import { useTimer } from "utils/hooks";

import { Content } from "./styles";

import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Sidebar from "./Sidebar/Sidebar";

import UserStore from "store/Users";

export default function Layout({ children, ...props }: any) {
  const { ...LayoutProps } = useContext(LayoutContext);
  const [closingSidebar, trigger] = useTimer(600);
  const [openSidebar, setOpenSidebar] = useState(false);

  const { user } = UserStore;

  const NavbarProps = {
    sidebarOpen: openSidebar,
    setSidebarOpen: openSidebar ? trigger : setOpenSidebar,
    closingSidebar,
    user: user,
  };

  const SidebarProps = {
    sidebarOpen: openSidebar,
    setSidebarOpen: openSidebar ? trigger : setOpenSidebar,
    closingSidebar,
    user: user,
  };

  const ContentProps = {
    sidebarOpen: openSidebar,
    closingSidebar,
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
    }
  }, [closingSidebar]);

  return (
    <>
      <Navbar {...NavbarProps} />
      <Sidebar {...SidebarProps} />
      <Content {...ContentProps}>{children}</Content>
      <Footer {...FooterProps} />
    </>
  );
}
