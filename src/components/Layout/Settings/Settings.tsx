import React from "react";

import {
  Container,
  Sidebar,
  ArrowUp,
  Buttons,
  Button,
  Text,
  ProfileIcon,
} from "./styles";

export default function Settings({
  setSettingsOpen,
  SettingsOpen,
  closingSidebar,
}: any) {
  const CloseSettings = () => {
    setSettingsOpen(false);
  };

  return (
    SettingsOpen && (
      <Container closing={closingSidebar} onClick={CloseSettings}>
        <ArrowUp closing={closingSidebar} SettingsOpen={SettingsOpen} />
        <Sidebar closing={closingSidebar} SettingsOpen={SettingsOpen}>
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
