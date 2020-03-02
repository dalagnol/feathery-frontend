import React from "react";
import { useTheme, DevTools } from "themes";
import { useLocale } from "locale";

import { Playground } from "./styles";
import { Square } from "./styles/Shapes";

import { theme, locale } from "./json";

export function Landing() {
  const { Themes, Switch } = useTheme("Landing", theme);
  const [l] = useLocale("Landing", locale);

  return (
    <Playground>
      <Square style={Themes.adimo} onClick={Switch}>
        {l(
          "Notice how this is written naturally, and it still responds to language"
        )}
      </Square>
      <DevTools />
    </Playground>
  );
}
