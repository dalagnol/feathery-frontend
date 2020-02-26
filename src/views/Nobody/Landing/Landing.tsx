import React from "react";
import { Theme } from "themes";
import { Locale } from "locale";

import { Playground } from "./styles";
import { Square } from "./styles/Shapes";

import { theme, locale } from "./json";

export function Landing() {
  const [t, { SwitchTheme }] = Theme("nobody", theme);
  const [l, { SwitchLanguage }] = Locale("nobody", locale);

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
}
