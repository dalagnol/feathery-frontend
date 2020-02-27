import React from "react";
import { useTheme, DevTools } from "themes";
import { useLocale } from "locale";

import { Playground } from "./styles";
import { Square } from "./styles/Shapes";

import { theme, locale } from "./json";

export function Landing() {
  const [, { SwitchTheme }] = useTheme("landing", theme);
  const [l, { SwitchLanguage }] = useLocale("landing", locale);

  const onClick = () => SwitchTheme() && SwitchLanguage();

  return (
    <Playground>
      <Square onClick={onClick}>
        {l(
          "Notice how this is written naturally, and it still responds to language"
        )}
      </Square>
      <DevTools />
    </Playground>
  );
}
