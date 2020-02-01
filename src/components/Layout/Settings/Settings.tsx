import React from "react";
import { observer } from "mobx-react";
import Locale from "locale";
import Theme from "themes";
import Dictionary from "./locale.json";
import { useExternalClick } from "utils/hooks";

import {
  Container,
  Popup,
  ArrowUp,
  Buttons,
  Button,
  Text,
  Icon,
} from "./styles";
import { User, PenTool, Globe, LogOut, Settings } from "styled-icons/feather";

import Store from "store/Users";

export default observer(function Pane({
  setSettingsOpen,
  SettingsOpen,
  closingSettings,
}: any) {
  const ref = useExternalClick(() => setSettingsOpen());
  const { profile, theme, language, settings, exit } = Locale.use(Dictionary);
  const logout = function() {
    Store.logout();
  };
  const changeTheme = function() {
    Theme.switch();
    setSettingsOpen(false);
  };

  return (
    SettingsOpen && (
      <Container closing={closingSettings}>
        <ArrowUp closing={closingSettings} SettingsOpen={SettingsOpen} />
        <Popup ref={ref} closing={closingSettings} SettingsOpen={SettingsOpen}>
          <Buttons>
            <Button>
              <Icon>
                <User />
              </Icon>
              <Text>{profile}</Text>
            </Button>
            <Button onClick={changeTheme}>
              <Icon>
                <PenTool />
              </Icon>
              <Text>{theme}</Text>
            </Button>
            <Button
              onClick={() =>
                (Locale.language = Locale.language === "pt" ? "en" : "pt")
              }
            >
              <Icon>
                <Globe />
              </Icon>
              <Text>{language}</Text>
            </Button>
            <Button onClick={alert}>
              <Icon>
                <Settings />
              </Icon>
              <Text>{settings}</Text>
            </Button>
            <Button onClick={logout}>
              <Icon>
                <LogOut />
              </Icon>
              <Text>{exit}</Text>
            </Button>
          </Buttons>
        </Popup>
      </Container>
    )
  );
});
