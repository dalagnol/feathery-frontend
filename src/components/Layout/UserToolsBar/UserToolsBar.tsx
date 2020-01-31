import React from "react";

import { Container, Sidebar, ArrowUp, Buttons, Button, Text, ProfileIcon } from "./styles";

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
        <Sidebar closing={closingSidebar} userToolsBarOpen={userToolsBarOpen}>
          <Buttons>
            <Button>
              <ProfileIcon />
              <Text>Profile</Text>
            </Button>
          </Buttons>
        </Sidebar>
      </Container>
    )
  );
}
