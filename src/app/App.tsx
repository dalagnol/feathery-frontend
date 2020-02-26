import React from "react";
import { Theme } from "themes";
import { Locale } from "locale";

import { Playground, Container } from "./styles";
import { ThemeTest } from "./styles/Theme";

import { theme, locale } from "./json";

export const App = () => {
  const t = Theme("app", theme);
  const l = Locale("app", locale);

  return (
    <Playground>
      <Container>
        <ThemeTest onClick={t.SwitchTheme}>{l("test")}</ThemeTest>
      </Container>
    </Playground>
  );
};
