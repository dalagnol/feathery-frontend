import React from "react";
// import { useTheme, DevTools } from "themes";
import { useLocale } from "locale";

import { Playground } from "./styles";
import { Square } from "./styles/Shapes";

import { theme, locale } from "./json";

export function Landing() {
  // useTheme("landing", theme);
  const [l] = useLocale("landing", locale);

  return (
    <Playground>
      <Square>
        {l(
          "Notice how this is written naturally, and it still responds to language"
        )}
      </Square>
    </Playground>
  );
}
