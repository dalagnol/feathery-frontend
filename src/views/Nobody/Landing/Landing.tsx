import React from "react";
import { useTheme } from "themes";
import { useLocale } from "locale";

import { Playground } from "./styles";
import { Square } from "./styles/Shapes";

import { theme, locale } from "./json";

export function Landing() {
  const Theme = useTheme("landing", theme);
  const [l] = useLocale("landing", locale);

  console.log(Theme);

  return (
    <Playground>
      <Square onClick={Theme.Switch}>
        {l(
          "Notice how this is written naturally, and it still responds to language"
        )}
      </Square>
    </Playground>
  );
}
