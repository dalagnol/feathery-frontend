import React from "react";
import { useExternalClick } from "utils/hooks";

import {
  Container,
  Popup,
  ArrowUp,
  Buttons,
  Button,
  Text,
  ProfileIcon,
} from "./styles";

export default function Settings({
  setSettingsOpen,
  SettingsOpen,
  closingSettings,
}: any) {
  const ref = useExternalClick(() => setSettingsOpen());

  return (
    SettingsOpen && (
      <Container closing={closingSettings}>
        <ArrowUp closing={closingSettings} SettingsOpen={SettingsOpen} />
        <Popup ref={ref} closing={closingSettings} SettingsOpen={SettingsOpen}>
          <Buttons>
            <Button>
              <ProfileIcon />
              <Text>Profile</Text>
            </Button>
          </Buttons>
        </Popup>
      </Container>
    )
  );
}
