import React from "react";
import { Theme } from "themes";
import { Locale } from "locale";

import { Playground } from "./styles";
import { Square } from "./styles/Theme";

import { theme, locale } from "./json";

export const App = () => {
  const [{ SwitchTheme }] = Theme("app", theme);
  const [l, { SwitchLanguage }] = Locale("app", locale);

  const onClick = () => SwitchTheme() && SwitchLanguage();

  return (
    <Playground>
      <Square onClick={onClick}>
        {l(
          "Notice how this is written naturally, and it still responds to language"
        )}
      </Square>
    </Playground>
  );
};
