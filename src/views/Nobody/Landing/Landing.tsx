import React from "react";
import { useTheme } from "themes";
import { useLocale, DevTools } from "locale";

import { Playground } from "./styles";
import { Square } from "./styles/Shapes";

import { theme, locale } from "./json";

export function Landing() {
  const { Themes } = useTheme("Landing", theme);
  const { l, SwitchLang } = useLocale("Landing", locale);

  return (
    <Playground>
      <Square style={Themes.adimo} onClick={SwitchLang}>
        {l(
          "Notice how this is written naturally, and it still responds to language"
        )}
      </Square>
      <DevTools />
    </Playground>
  );
}
