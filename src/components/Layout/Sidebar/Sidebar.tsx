import React from "react";

import { Container, Sidebar as Element } from "./styles";

import { Logo } from "components";

export default function Sidebar({ sidebarOpen, setSidebarOpen }: any) {
  const CloseSidebar = () => {
    setSidebarOpen(false);
  }

  return (
    <Container onClick={CloseSidebar} sidebarOpen={sidebarOpen}>
      <Element>
        <Logo onClick={CloseSidebar} />
      </Element>
    </Container>
  );
}
