import React from "react";

import { Container, Sidebar, ArrowUp } from "./styles";

export default function UserToolsBar({
  setUserToolsBarOpen,
  userToolsBarOpen,
  closingSidebar,
}: any) {
  const CloseUserToolsBar = () => {
    setUserToolsBarOpen(false);
  };

  return (
    userToolsBarOpen && (
      <Container closing={closingSidebar} onClick={CloseUserToolsBar}>
        <ArrowUp closing={closingSidebar} userToolsBarOpen={userToolsBarOpen} />
        <Sidebar closing={closingSidebar} userToolsBarOpen={userToolsBarOpen} />
      </Container>
    )
  );
}
