import React from "react";
import { Theme } from "themes";
import { Locale } from "locale";

import { Playground } from "./styles";
import { ThemeTest } from "./styles/Theme";

import { theme, locale } from "./json";

export const App = () => {
  const t = Theme("app", theme);
  const l = Locale("app", locale);

  return (
    <Playground>
      <ThemeTest onClick={t.SwitchTheme}>{l("test")}</ThemeTest>
    </Playground>
  );
};
